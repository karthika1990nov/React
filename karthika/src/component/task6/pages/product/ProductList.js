import classes from './ProductList.module.css'
import ProductItem from './ProductItem';

import { useState, useEffect} from 'react';

const ProductList=()=> {

  
  const [carts,setCarts]=useState([]);
  const[isLoading,setLoading]=useState(true);

useEffect(()=>{

const fetchMeal = async()=>{
const response = await fetch('https://studious-optics-150305-default-rtdb.firebaseio.com/cart.json');
const res = await response.json();
const loadMeals =[];
for(const key in res){
loadMeals.push({
  id:key,
  name:res[key].name,
  description:res[key].description,
  price:res[key].price
})
}
setCarts(loadMeals);
setLoading(false);
}
fetchMeal();
},[])
if(isLoading){
  return<section><p>....Loading</p>
    </section>
}
const cartlist = carts.map((cart)=>(
<ProductItem 
key={cart.id}
    id={cart.id}
    name={cart.name}
    description={cart.description}
    price={cart.price}>

</ProductItem>
));
  return (
 <div className ={classes.productitem}>
  {cartlist}
      {/* <div className='shopping-cart' onClick={() => navigate('/cart-item')}>
      <p>{getTotalQuantity() || 0}</p>
      
      </div> */}
      </div>
   
  )
}

export default ProductList