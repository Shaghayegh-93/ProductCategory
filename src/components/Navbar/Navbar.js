
const Navbar = (props) => {
    return (
        <header>
            <h2>hyper market </h2>
            <span>{props.totalItems}</span>
        </header>
      );
}
 
export default Navbar;