import React , {useState,useEffect} from 'react'

import React from 'react'
import { commerce } from './lib/commerce';
import {Products , Navbar, Cart } from './components';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
const Pyjamas = () => {
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
     const cart = await commerce.cart.add(productId,quantity);
      
     SetCart(cart);
   }
   
   const handleUpdateCartQty = async(productId,quantity)=> {
      const {cart} = await commerce.cart.update(productId,{quantity});
      SetCart(cart)

   }
   
   const handleremoveFromcart = async (productId) =>{
    const {cart} = await commerce.cart.remove(productId);
    SetCart(cart); 
  }

  const handleEmptyCart =async () => {
     const {cart}= await commerce.cart.empty();
      SetCart(cart);

  }



    useEffect(()=> {
      fetchProducts();
      fetchCart();

    },[]);

    console.log(cart);
    return (
      <Router>
        <div>
          <Navbar totalItems={cart?.total_items}/> 
          <Switch>
            <Route exact path='/pyjamas'>
              <Products products={products} onAddToCart={handleAddToCart}/> 
            </Route>
  
            <Route exact path='/cart'>
              <Cart cart={cart} 
              handleUpdateCartQty={handleUpdateCartQty}
              handleremoveFromcart={handleremoveFromcart}
              handleEmptyCart={handleEmptyCart}
              />
            </Route>
  
              
             
          </Switch>
          
     </div>
      </Router>
    )
}


export default Pyjamas;