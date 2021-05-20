import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import Login from "./components/Auth/Login";
// import SignUp from "./components/Auth/SignUp";
import Cart from "./components/Cart";
import NavBar from "./components/Header/NavBar";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Wishlist from "./components/Wishlist";
import axios from 'axios'
import "./styles.css";
import { useData } from "./context/product-context";


export default function App() {

  const { dispatch } = useData()


  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://secret-brook-26591.herokuapp.com/cart/")
        dispatch({ type: "SET_CART", payload: response.data.cartData })
      } catch (error) {
        console.log("error", error)
      }
    })()
  }, [dispatch])

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://secret-brook-26591.herokuapp.com/wishlist/")
        dispatch({ type: "SET_WISHLIST", payload: response.data.wishlistData })
      } catch (error) {
        console.log("error", error)
      }
    })()
  }, [dispatch])


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        {/* <Route path="/register" element={<SignUp />} /> */}
        <Route path="/product/:productId" element={<ProductDetail />} />
        {/* <Route path="login" element={<Login />} /> */}
      </Routes>
    </div>
  );
}
