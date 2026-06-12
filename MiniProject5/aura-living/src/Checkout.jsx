function Checkout() {
  return (
    <div className="checkout">
      <h1>Checkout</h1>

      <input placeholder="Name" />
      <input placeholder="Address" />
      <input placeholder="Card Number" />

      <button>Place Order</button>
    </div>
  );
}

export default Checkout;