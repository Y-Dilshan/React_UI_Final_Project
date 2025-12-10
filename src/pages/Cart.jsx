import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Cart.css';

function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleQuantityChange = (id, change) => {
    const item = cart.find(item => item.id === id);
    const newQuantity = item.quantity + change;
    
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    } else {
      removeFromCart(id);
    }
  };

  if (cart.length === 0) {
    return (
      <main className="cart-empty">
        <h1>Your Cart</h1>
        <div className="empty-cart-container">
          <div className="cart-summary">
            <h2>Total Cart Amount: $0</h2>
            <div className="cart-actions">
              <Link to="/air-purifying" className="btn">Continue Shopping</Link>
              <button className="btn checkout-btn" disabled>Checkout</button>
            </div>
          </div>
          <p className="empty-message">Your cart is empty. Add some plants to get started!</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <h1>Shopping Cart</h1>
      
      <div className="cart-container">
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <h3>{item.name} {item.onSale && <span className="sale-badge">SALE</span>}</h3>
                <p className="item-price">${item.price}</p>
                <p className="item-description">{item.description}</p>
              </div>
              
              <div className="item-controls">
                <div className="quantity-controls">
                  <button 
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <div className="item-total">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Total Cart Amount: ${calculateTotal().toFixed(2)}</h2>
          <div className="cart-actions">
            <Link to="/air-purifying" className="btn">Continue Shopping</Link>
            <Link to="/checkout" className="btn checkout-btn">Checkout</Link>
            <button onClick={clearCart} className="btn clear-btn">Clear Cart</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;