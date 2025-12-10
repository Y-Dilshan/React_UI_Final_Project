import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import './Header.css';  // This is correct for Header.jsx in components folder

function Header() {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Paradise Nursery</h1>
          <p className="tagline">Where Green Meets Serenity</p>
        </Link>
        
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/air-purifying">Air Purifying Plants</Link>
          <Link to="/aromatic">Aromatic Plants</Link>
          <Link to="/cart" className="cart-link">
            Cart {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;