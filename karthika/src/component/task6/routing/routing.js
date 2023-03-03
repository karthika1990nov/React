
import ProductList from "../pages/product/ProductList";
import Cart from "../pages/cart/Cart";
import Payment from "../pages/payment/Payment";
import OrderConfirmation from "../pages/payment/Payment";
import { Route, Routes } from "react-router-dom";

const Routing =()=>{
    return(
<Routes>
        <Route path='/product-list' element={<ProductList/>}></Route>
        <Route path='/cart-item' element={<Cart/>}></Route>
        <Route path='/payment-mode' element={<Payment/>}></Route>
        <Route path='/order-confirmation' element={<OrderConfirmation/>}></Route>
        </Routes>
    )
}
export default Routing;