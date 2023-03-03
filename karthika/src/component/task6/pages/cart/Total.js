import './total.css'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import UserForm from './UserForm'
function Total() {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart)
  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }
 
  return (
    <div className="total">
      <h2>ORDER SUMMARY</h2>
      <div>
        <p className="total__p">
          total ({getTotal().totalQuantity} items) 
          : <strong>${getTotal().totalPrice}</strong>
        </p>
        <button onClick={() => navigate('/payment-mode')} className="placed">Proceed to Buy</button>
        <UserForm/>
      </div>
     
    </div>
  )
}

export default Total;