
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import CartHeaderButton from "./HeaderCartButton"
const Header = () => {

  return (
    
    <header className={classes.header}>

      <Link to="/">Shopify</Link>
      <nav>
        <ul>
          <li>
            <Link to="/product-list">Products</Link>
          </li>
          <li>
            <Link to="/cart-item">Cart<CartHeaderButton> </CartHeaderButton></Link>
           
          </li>
          <li>
            <Link to="/payment-mode">Payment</Link>
          </li>
          <li>
            <Link to="/order-confirmation">Order Confirmation</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
