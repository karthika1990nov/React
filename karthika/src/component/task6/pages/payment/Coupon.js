
import classes from './Payment.module.css'
const Coupon =(props)=>{

    return(
       <div >
            <label htmlFor="couponCode" className={classes.couponlabel}>
              Add Coupon Code:
            </label>
            <input
            className={classes.coupon}
              name="couponCode"
              onChange={props.coupon}
            
            />
          </div>
  )
}

export default Coupon;