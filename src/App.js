import React, { useState } from "react";
import Category from "./components/category/Category";
import Product from "./components/products/Product";
const App = () => {
  const [categories, setCategory] = useState([
    { title: "fruits", id: Date.now() },
    { title: "diary", id: Date.now() },
  ]);
  const [selectedCategory, setSelectedCategory] = useState(
    "selected a category"
  );
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  const [value, setValue] = useState("");
  const submitCategoryHandler = (e) => {
    e.preventDefault();
    const addedCategory = { title: value, id: Date.now() };
    setCategory([...categories, addedCategory]);
  };

  const selectChangeHandler = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <form>
        <Product
          category={categories}
          selectChangeHandler={selectChangeHandler}
          selectedCategory={selectedCategory}
        />
        <Category
          Category={categories}
          onSubmit={submitCategoryHandler}
          onChange={changeHandler}
        />
      </form>
    </div>
  );
};

export default App;
