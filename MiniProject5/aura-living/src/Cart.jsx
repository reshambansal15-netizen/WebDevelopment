import { useContext } from "react";
import { Link } from "react-router-dom";

import { StoreContext } from "./StoreContext";

function Cart() {
  const { cart, increase, decrease, removeFromCart } = useContext(StoreContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cart-container">
      <h1>Cart</h1>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          {item.name} x {item.qty}
          <button onClick={() => decrease(item.id)}>-</button>
          <button onClick={() => increase(item.id)}>+</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h2>Total ₹{total}</h2>

      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
}

export default Cart;