import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Payment.module.css";
import Coupon from "./Coupon";

const Payment = () => {
  const location = useLocation();

  const [paymentMethod, setPaymentMethod] = useState("UPI");

  const [couponCode, setCouponCode] = useState("");

  const coupon = (e) => {
    setCouponCode(e.target.value);
  };

  const radioBtnChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className={classes.inputfield}>
      <form>
        <h1>Select Payment Mode -</h1>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="same"
              onChange={radioBtnChange}
              id="1"
              checked={paymentMethod === "UPI"}
              value="UPI"
            />
            UPI
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="same"
              onChange={radioBtnChange}
              id="2"
              checked={paymentMethod === "NetBanking"}
              value="NetBanking"
            />
            NetBanking
          </label>
        </div>

        <div className="radio">
          <label>
            <input
              type="radio"
              name="same"
              onChange={radioBtnChange}
              id="3"
              checked={paymentMethod === "COD"}
              value="COD"
            />
            COD
          </label>
        </div>

        <div className="radio">
          <label>
            <input
              type="radio"
              name="same"
              onChange={radioBtnChange}
              id="4"
              checked={paymentMethod === "GPay"}
              value="GPay"
            />
            GPay
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="same"
              onChange={radioBtnChange}
              id="5"
              checked={paymentMethod === "Phonepay"}
              value="Phonepay"
            />
            Phonepay
          </label>
        </div>

        <div className={classes.selectmode}>
          Selected Mode : {paymentMethod}
        </div>

        <Coupon couponCode={couponCode} coupon={coupon} />
      </form>
      <Link
        className={classes.addtocart}
        to="/order-confirmation"
        state={{
          ...location.state,
          paymentMethod,
          couponCode,
        }}
      >
        Next
      </Link>
    </div>
  );
};

export default Payment;
