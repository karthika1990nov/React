import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import classes from "./Header.module.css";
const CartHeaderButton=()=>{
    // const[isValid ,setIsValid]= useState(false);
   
    const navigate = useNavigate()
    const cart = useSelector((state) => state.cart)
  
    const getTotalQuantity = () => {
      let total = 0
      cart.forEach(item => {
            console.log(item.quantity ,"gg")
        total += item.quantity
        // setIsValid(true)
      })
      return total
    }
    return(<>
     <div className='shopping-cart' onClick={() => navigate('/cart-item')}>
    {/* {isValid &&  <p className={classes.badge}>{getTotalQuantity() || 0}</p>} */}
    <p className={classes.badge}>{getTotalQuantity() || 0}</p>
      </div>
    </>)
}

export default CartHeaderButton;