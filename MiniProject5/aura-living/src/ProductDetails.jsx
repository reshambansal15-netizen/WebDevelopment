import { useParams } from "react-router-dom";
import products from "./products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="details">
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <div className="details">
      <img src={product.image} alt={product.name} />

      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h2>₹{product.price}</h2>
      </div>
    </div>
  );
}

export default ProductDetails;