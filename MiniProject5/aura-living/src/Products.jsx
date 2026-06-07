import { useState } from "react";
import products from "./products";

import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";

function Products() {
  const [search, setSearch] = useState("");

  const filtered = products.filter( (item) => item.name.toLowerCase().includes(search.toLowerCase()) );

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="grid">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}

export default Products;