import React, { useEffect, useState } from "react";

import List from "./List";
import Select from "./Select";

const Movies = () => {
  const [moviesListArr, setMoviesListArr] = useState([]);
  const [filterMoviesListArr, setfilterMoviesListArr] = useState([]);
  const [filterData, setfilterData] = useState(false);
  const [region, setRegion] = useState([]);

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/movie/now_playing";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGY3ZDA5MDE1MDZhYjEyYTIzNThjNDc4MTk2MDhiNiIsInN1YiI6IjY0OTMxYjUyYzI4MjNhMDExY2RiZTJhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aCf-acsIR07wJtuCXpH1nZ1Yw0Tl2rS_0_aRThKXq18",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMoviesListArr(json.results);
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  useEffect(() => {
    const regionArr = moviesListArr.map((item) => item.original_language);
    const regionArrSorted = [...new Set(regionArr)];
    setRegion(regionArrSorted);
  }, [moviesListArr]);

  const movieByRegionHandler = (e) => {
    const currentTarget = e.target.value;

    if (currentTarget === "all") {
      setfilterData(false);
    } else {
      const newData = moviesListArr.filter(
        (item) => currentTarget === item.original_language
      );
      setfilterMoviesListArr(newData);
      setfilterData(true);
    }
  };

  return (
    <div className="container">
      <Select region={region} onChangeHandler={movieByRegionHandler} />
      <List moviesListArr={filterData ? filterMoviesListArr : moviesListArr} />
    </div>
  );
};

export default Movies;
