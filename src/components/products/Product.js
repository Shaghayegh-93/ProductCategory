import React, { useState } from "react";
const Product = (props) => {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const addProductHandler = (e) => {
    e.preventDefault();
    const addedProduct = { title: inputValue, category: props.selectedCategory, id: Date.now() };
    setProducts([...products, addedProduct]);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={changeHandler}></input>
      <button type="submit" onClick={addProductHandler}>
        submit
      </button>
      <select onChange={props.selectChangeHandler}>
        <option>select a category</option>
       
         {props.category.map((category) => (
          <option value={category.title}>{category.title} </option>))} 
      </select>
    </div>
  );
};

export default Product;
