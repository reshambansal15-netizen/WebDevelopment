import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { StoreContext } from "./StoreContext";

import Navbar from "./Navbar";
import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Checkout from "./Checkout";

function App() {
  const { darkMode } = useContext(StoreContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/checkout" element={<Checkout />} />
      
      </Routes>
    </div>
  );
}

export default App;