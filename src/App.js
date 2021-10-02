import React, { useState, useEffect } from "react";
import Category from "./components/category/Category";
import Product from "./components/products/Product";
import Navbar from "./components/Navbar/Navbar";
import { BiTrash } from "react-icons/bi";
import styles from "./App.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [categories, setCategory] = useState([
    { title: "fruits", id: Date.now() },
    { title: "diary", id: Date.now() },
  ]);

  const [value, setValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("select");
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const productChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const selectChangeHandler = (e) => {
    setSelectedCategory(e.target.value);
  };

  const addProductHandler = (e) => {
    e.preventDefault();
    const addedProduct = {
      title: inputValue,
      category: selectedCategory,
      id: Date.now(),
      quantity: 0,
    };
    if (inputValue === "") {
      toast.warning("Please Write Your Product");
      return;
    }
    if (selectedCategory === "select") {
      alert("please select acategory");
      return;
    } else {
      addedProduct.quantity++;
      setProducts([...products, addedProduct]);
      toast.success("The Product Successfully Added");
      setInputValue("");
    }
  };

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitCategoryHandler = (e) => {
    e.preventDefault();
    if (
      categories.find(
        (category) => category.title.toLocaleLowerCase() === value
      )
    ) {
      toast.warning("This Category Allready Exsist");

      return;
    }
    if (value === "") {
      toast.warning("Please Write You,re Category");
      return;
    } else {
      const addedCategory = { title: value, id: Date.now() };
      setCategory([...categories, addedCategory]);
      toast.success("The Category Successfully Added");
    }
  };

  const removeHandler = (id) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };
  useEffect(() => {
    const saveProduct = JSON.parse(localStorage.getItem("product"));
    if (saveProduct) setProducts(saveProduct);
  }, []);

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(products));
  }, [products]);

  return (
    <div>
      <Navbar totalItems={products.length} />

      <div className={styles.container}>
        <div className={styles.formContainer}>
          <form className={styles.mainForm}>
            <Product
              category={categories}
              selectChangeHandler={selectChangeHandler}
              selectedCategory={selectedCategory}
              products={products}
              inputValue={inputValue}
              onChange={productChangeHandler}
              addProductHandler={addProductHandler}
            />
            <Category
              Category={categories}
              onSubmit={submitCategoryHandler}
              onChange={changeHandler}
            />
          </form>
        </div>

        <div className={styles.productConclution}>
          <p className={styles.productConclutionHeader}> Added Products</p>
          {products.map((product) => (
            <div className={styles.productRow}>
              <p
                className={`${styles.productConclutionTitle} ${styles.conclutionInput}`}
              >
                {product.title}
              </p>
              <p
                className={`${styles.productConclutionCategory} ${styles.conclutionInput}`}
              >
                {product.category}
              </p>
              <button
                className={`${styles.dec} ${
                  products.length === 1 && styles.remove
                }`}
                type="button"
                onClick={() => removeHandler(product.id)}
              >
                <BiTrash />
              </button>
            </div>
          ))}
          <div className={styles.scroll}></div>
        </div>
      </div>
      <ToastContainer closeButton={false} position="top-center" />
    </div>
  );
};

export default App;
