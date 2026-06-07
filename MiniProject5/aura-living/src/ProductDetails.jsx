import { useParams } from "react-router-dom";
import products from "./products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find( (p) => p.id === Number(id) );

  return (
    <div className="details">
      <img
        src={product.image}
        alt=""
      />

      <div>
        <h1>{product.name}</h1>

        <p>
          {product.description}
        </p>

        <h2>
          ₹{product.price}
        </h2>
      </div>
    </div>
  );
}

export default ProductDetails;