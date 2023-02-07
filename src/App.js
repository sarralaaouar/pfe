import React , {useState,useEffect} from 'react'

import { commerce } from './lib/commerce';
import {Products , Navbar, Cart} from './components';


function App  () {
  const [products, setProducts]=useState([]);
  const [cart,SetCart]= useState([]);
  
  const fetchProducts= async() => {
     const {data} = await commerce.products.list();
      setProducts(data);
  }
     
  const fetchCart = async() => {
    
       SetCart (await commerce.cart.retrieve());
  }
   const handleAddToCart = async (productId,quantity) => {
     const item = await commerce.cart.add(productId,quantity);
      
     SetCart(item.cart);
   } 
    useEffect(()=> {
      fetchProducts();
      fetchCart();

    },[]);

    console.log(cart);

  return (
   <div>
        <Navbar totalItems={cart.total_items}/> 
       {/* <Products products={products} onAddToCart={handleAddToCart}/>*/}

       <Cart cart={cart} />
   </div>
  )
}
export default App
