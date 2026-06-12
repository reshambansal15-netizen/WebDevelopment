import { Link } from "react-router-dom";
import { useContext } from "react";

import { StoreContext } from "./StoreContext";

function ProductCard({ product }) {
  const { addToCart, addWishlist } = useContext(StoreContext);

  return (
    <div className="card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>

      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>Add Cart</button>
      <button onClick={() => addWishlist(product)}>❤️</button>
    </div>
  );
}

export default ProductCard;