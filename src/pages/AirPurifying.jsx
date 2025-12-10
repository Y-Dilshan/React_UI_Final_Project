import React from 'react';
import PlantCard from '../components/PlantCard';
import './AirPurifying.css';

function AirPurifying() {
  const airPurifyingPlants = [
    {
      id: 1,
      name: 'Spider Plant',
      price: 25,
      originalPrice: 30,
      onSale: true,
      description: 'Filters formaldehyde and xylene from the air.',
      category: 'air-purifying'
    },
    {
      id: 2,
      name: 'Peace Lily',
      price: 18,
      originalPrice: 22,
      onSale: true,
      description: 'Removes mold spores and purifies the air.',
      category: 'air-purifying'
    }
  ];

  return (
    <main>
      <h1 className="page-title">Air Purifying Plants</h1>
      <div className="plants-grid">
        {airPurifyingPlants.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </main>
  );
}

export default AirPurifying;