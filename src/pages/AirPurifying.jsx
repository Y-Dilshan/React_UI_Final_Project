import React from 'react';
import PlantCard from '../components/PlantCard';
import './AirPurifying.css';
import Spider_PlantImg from '../assets/AirPurifyingPlnts/Spider Plant.jpg';
import Peace_LilyImg from '../assets/AirPurifyingPlnts/Peace Lily.jpg';

function AirPurifying() {
  const airPurifyingPlants = [
    {
      id: 1,
      name: 'Spider Plant',
      price: 25,
      originalPrice: 30,
      onSale: true,
      description: 'Filters formaldehyde and xylene from the air.',
      category: 'air-purifying',
      image:Spider_PlantImg 
    },
    {
      id: 2,
      name: 'Peace Lily',
      price: 18,
      originalPrice: 22,
      onSale: true,
      description: 'Removes mold spores and purifies the air.',
      category: 'air-purifying',
      image : Peace_LilyImg
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