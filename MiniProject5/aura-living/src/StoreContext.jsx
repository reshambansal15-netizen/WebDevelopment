import { createContext, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addToCart = (product) => {
    const exists = cart.find( (item) => item.id === product.id );

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } 
    else {
      setCart([
        ...cart,
        { ...product, qty: 1 }
      ]);
    }
  };

  const removeFromCart = (id) => {
    setCart( cart.filter((item) => item.id !== id) );
  };

  const increase = (id) => { 
    setCart(
      cart.map((item) => item.id === id  ? { ...item, qty: item.qty + 1 }  : item
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id  ? { ...item, qty: item.qty - 1 }  : item ).filter((item) => item.qty > 0)
    );
  };

  const addWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        darkMode,
        setDarkMode,
        addToCart,
        removeFromCart,
        increase,
        decrease,
        addWishlist
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};