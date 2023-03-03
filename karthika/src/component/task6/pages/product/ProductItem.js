import classes from './ProductItem.module.css'
import { useDispatch } from 'react-redux';
import {addToCart} from '../../redux/cartSlice'

const ProductItem=({id, name, description, price}) =>{

  const dispatch = useDispatch()

  return (
    <li className={classes.cart}>
        <div className={classes.divone}>
            <h3>{name}</h3>
            <div className={classes.description}>{description}</div>
            <div className={classes.price}>${price}</div>
        </div>
        <div  className={classes.addtocart}>
        <button 
        onClick={() => 
          dispatch(addToCart({
            id, name, description, price
          }))
        }>Add to Cart
      </button>
        </div>
    </li>
  )
}

export default ProductItem