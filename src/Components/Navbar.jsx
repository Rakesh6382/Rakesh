import React from "react";

function Navbar({ cartCount, onCartClick }) {
  return (
    <header className="navbar">
      <div className="nav-left">
        <span className="logo">🛍️ My Store</span>
      </div>

      <div className="nav-center">
        <input
          className="search-input"
          type="text"
          placeholder="Search for products, brands and more"
        />
        <button className="search-btn">Search</button>
      </div>

      <div className="nav-right">
        <button className="login-btn">Login</button>
        <button className="cart-btn" onClick={onCartClick}>
          Cart <span className="cart-badge">{cartCount}</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
