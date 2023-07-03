const List = ({ moviesListArr }) => {
  // console.log(moviesListArr);

  const MovieList = moviesListArr.map((arr, index) => (
    <div key={arr.id} className="item">
      <div className="img-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w500/` + arr.poster_path}
          alt=""
        />
      </div>
      <div className="content">
        <h3>{arr.title}</h3>
        <div className="tag-wrapper">
          <span className="tag">{arr.original_language}</span>
          <span className="tag">Rating: {arr.vote_average}</span>
        </div>
        <p className="overview">{arr.overview}</p>
      </div>

      <img
        className="img-bg"
        src={`https://image.tmdb.org/t/p/w500/` + arr.backdrop_path}
        alt=""
      />
    </div>
  ));

  return (
    <div className="container-inner">
      <h3>Count: {moviesListArr.length}</h3>
      <div className="wrapper">{MovieList}</div>
    </div>
  );
};

export default List;
