const Select = ({ region, onChangeHandler }) => {
  return (
    <select className="select" onChange={onChangeHandler} name="" id="">
      <option value="all">All</option>
      {region.map((item, index) => {
        return (
          <option key={index} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
