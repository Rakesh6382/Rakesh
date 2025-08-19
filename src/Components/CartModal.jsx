import React from "react";

function CartModal({ cart, onClose, onRemove }) {
  const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Close">✖</button>
        <h2 className="modal-title">Your Cart ({cart.length})</h2>

        {cart.length === 0 ? (
          <p className="muted">Your cart is empty.</p>
        ) : (
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-left">
                  <img src={item.image} alt={item.title} className="cart-thumb" />
                  <div>
                    <p className="cart-name" title={item.title}>{item.title}</p>
                    <p className="cart-price">${item.price}</p>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => onRemove(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="modal-footer">
          <div className="total">
            <span>Total:</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
          <button className="checkout-btn" disabled={cart.length === 0}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
