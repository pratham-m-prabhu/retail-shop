import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import NewCollection from "./components/NewCollection";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";
import "./styles.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = ({ onLogout }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (name, price, img) => {
    setCartItems([...cartItems, { name, price, img }]);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <Navbar onLogout={onLogout} />
      <Hero />
      <ProductList addToCart={addToCart} />
      <NewCollection addToCart={addToCart} />
      <About />
      <Contact />
      <Footer />
      <CartModal items={cartItems} removeFromCart={removeFromCart} />
    </>
  );
};

export default App;
