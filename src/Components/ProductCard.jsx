import React from "react";

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="card">
      <div className="card-img-wrap">
        <img src={product.image} alt={product.title} className="card-img" />
      </div>
      <h3 className="card-title" title={product.title}>{product.title}</h3>
      <p className="card-price">${product.price}</p>
      <button className="add-btn" onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </article>
  );
}

export default ProductCard;
