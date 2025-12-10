import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './PlantCard.css';

function PlantCard({ plant }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(plant);
  };

  return (
    <div className="plant-card">
      <div className="plant-header">
        <h3>{plant.name}</h3>
        {plant.onSale && <span className="sale-badge">SALE</span>}
      </div>
      <div className="plant-card">
      <img src={plant.image} alt={plant.name} className="plant-image" />
    </div>
      <div className="plant-price">
        {plant.originalPrice && (
          <span className="original-price">${plant.originalPrice}</span>
        )}
        <span className="current-price">${plant.price}</span>
      </div>
      <p className="plant-description">{plant.description}</p>
      <button onClick={handleAddToCart} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
}

export default PlantCard;