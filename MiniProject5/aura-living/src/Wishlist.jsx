import { useContext } from "react";
import { StoreContext } from "./StoreContext";

function Wishlist() {
  const { wishlist } =
    useContext(StoreContext);

  return (
    <div className="wishlist">
      <h1>Wishlist</h1>

      {wishlist.map((item) => (
        <h3 key={item.id}>
          {item.name}
        </h3>
      ))}
    </div>
  );
}

export default Wishlist;