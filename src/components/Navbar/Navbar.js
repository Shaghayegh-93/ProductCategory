import styles from "./navbar.module.css";
const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.navbarLogo}>HyperMarket </h1>
        <p className={styles.totalItems}>{props.totalItems}</p>
      </div>
    </nav>
  );
};

export default Navbar;
