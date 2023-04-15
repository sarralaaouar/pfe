import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart, Soin, Pyjamas, Peluche } from "./components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { message } from "antd";
import Pslider from "./components/Pslider/Pslider";
import Slider from "./components/Slider/Slider";
import Register from "./components/Register/Register";
import Nav from "./components/CategoriesNav/Nav";
import Liv from "../src/assests/livraison.png";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";
import Footer from "./Footer/Footer";
import Profile from "./views/profile/Profile";
import Login from "./components/Login/Login";
import Home from "./views/home/home";
import useAlan from "./hooks/useAlan";

function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const [products, setProducts] = useState([]);
  const [cart, SetCart] = useState([]);
  const [order, setOrder] = useState({});
  const [errorMessage, SetErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    SetCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const cart = await commerce.cart.add(productId, quantity);
    SetCart(cart);
    if (cart) {
      messageApi.open({
        key,
        type: "success",
        content: "Produit Ajoutè",
        duration: 2,
        style: {
          marginTop: "10vh",
        },
      });
    }
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    SetCart(cart);
  };

  const handleremoveFromcart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    SetCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    SetCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    SetCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      SetErrorMessage(error.data.error.message);
    }
  };

 
 
 
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const search = () => {
    return [];
  };

  // console.log(cart);
   useAlan ()
  return (
    <>
      {contextHolder}
      <Router>
        <div className="app">
          <Navbar totalItems={cart?.total_items} />
          {/* categories nav  */}
          <Nav />
          <Switch>
            <Route exact path="/products">
              <Products products={products} onAddToCart={handleAddToCart} />
            </Route>
            <Route exact path="/cart">
              <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleremoveFromcart={handleremoveFromcart}
                handleEmptyCart={handleEmptyCart}
              />
            </Route>
            <Route exact path="/checkout">
              <Checkout
                cart={cart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
              />
            </Route>
            <Route exact path="/mugs">
              <Pyjamas products={products} onAddToCart={handleAddToCart} />
            </Route>
            <Route exact path="/soin">
              <Soin products={products} onAddToCart={handleAddToCart} />
            </Route>
            <Route exact path="/peluche">
              <Peluche products={products} onAddToCart={handleAddToCart} />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/">
              {/* <Slider /> */}
              <Home />
              <Pslider
                products={products}
                onAddToCart={handleAddToCart}
              ></Pslider>
              <img src={Liv} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}
export default App;
