import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {
  return (
    <section className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
      ))}
    </section>
  );
}

export default ProductList;
