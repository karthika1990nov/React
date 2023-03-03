import { useDispatch, useSelector } from "react-redux";
import classes from "./OrderConfirmation.module.css"
import { useLocation } from "react-router-dom";
import { removeItem } from "./../../redux/cartSlice";
const OrderConfirmation = (props) => {
  const cart = useSelector((state) => state.cart);
  const { state } = useLocation();

  const formbutton = (event) => {
    event.preventDefault();

    alert(" Order Placed  ");
  };
  console.log("state in order confirmation", state);
  return (
    <div className={classes.order}>
      <h1>Review Your Order </h1>
 
    
      {cart.map((product, id) => (
        <div className={classes.productorder}key={id}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          {/* <button onClick={() => dispatch(removeItem(id))}> Remove </button> */}
       
        <p>Qty: {cart.length} </p>
      <div className={classes.paymentmode}>
        <h2> Payment Mode : {state.paymentMethod}</h2>
        
      </div>
      <div className={classes.couponmode}>
        <h2>Coupon details</h2>
        <p>{state.couponCode}</p>
      </div>
      <div  className={classes.deliverymode}>
        <h1>Delivery Address </h1>
      
      <h2>{state.firstname}<span> {state.mobile}</span></h2>
      <p>  {state.address}  {state.city}</p>
    
      {/* <p>Email: {state.email}</p> */}
      {/* <p>City: {state.city}</p> */}
      </div>
  <h2>Price Detail ({cart.length} Item)</h2>

  <p>Total Product Price    ${product.price}</p>

  <h2>Oder Total ${product.price}</h2>
  </div>
      ))}
        <button className={classes.placeorder} type="submit" onClick={formbutton}>
          Place order
        </button>
     
    </div>
  );
};

export default OrderConfirmation;
