import React from "react";
const Category = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="add a category"
        onChange={props.onChange}
      ></input>
      <button type="submit" onClick={props.onSubmit}>
        submit
      </button>
    </div>
  );
};

export default Category;
