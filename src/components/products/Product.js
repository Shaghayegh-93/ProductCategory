import React from "react";
import styles from "./product.module.css";
import { BiPlus } from "react-icons/bi";
const Product = (props) => {
  return (
    <div className={styles.productBox}>
      <select
        className={styles.productSelected}
        onChange={props.selectChangeHandler}
      >
        <option disabled selected>
          select a category
        </option>

        {props.category.map((category) => (
          <option value={category.title}>{category.title}</option>
        ))}
      </select>
      <div></div>

      <input
        className={styles.productInput}
        type="text"
        value={props.inputValue}
        onChange={props.onChange}
        placeholder="add a prodyct"
      ></input>
      <button
        className={styles.buttons}
        type="submit"
        onClick={props.addProductHandler}
      >
        <BiPlus className={styles.btn} />
      </button>
    </div>
  );
};

export default Product;
