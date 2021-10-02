import React from "react";
import styles from "./category.module.css";
import { BiPlus } from "react-icons/bi";
const Category = (props) => {
  return (
    <div >
      
      <div className={styles.categoryBox} >
       
        <input
          className={styles.categoryInput}
          type="text"
          placeholder="add a category"
          onChange={props.onChange}
        ></input>
        <button
          className={styles.buttons}
          type="submit"
          onClick={props.onSubmit}
        >
          <BiPlus className={styles.btn} />
        </button>
        
      </div>
    </div>
  );
};

export default Category;
