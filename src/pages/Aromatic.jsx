import React from 'react';
import PlantCard from '../components/PlantCard';
import './Aromatic.css';
import LavenderImg from '../assets/AromaticPlants/lavender.jpg';
import JasmineImg from '../assets/AromaticPlants/Jasmine.jpg';
import RosemaryrImg from '../assets/AromaticPlants/Rosemary.jpg';
import MintImg from '../assets/AromaticPlants/Mint.jpg';
import Lemon_BalmImg from '../assets/AromaticPlants/Lemon Balm.jpg';
import HyacinthImg from '../assets/AromaticPlants/Hyacinth.jpg';

function Aromatic() {
  const aromaticPlants = [
    {
      id: 3,
      name: 'Lavender',
      price: 20,
      description: 'Calming scent, used in aromatherapy.',
      category: 'aromatic',
      onSale: true,
      image:LavenderImg 
    },
    {
      id: 4,
      name: 'Jasmine',
      price: 18,
      originalPrice: 22,
      onSale: true,
      description: 'Sweet fragrance, promotes relaxation.',
      category: 'aromatic',
      image: JasmineImg
    },
    {
      id: 5,
      name: 'Rosemary',
      price: 15,
      description: 'Invigorating scent, often used in cooking.',
      category: 'aromatic',
      onSale: true,
      image: RosemaryrImg 
    },
    {
      id: 6,
      name: 'Mint',
      price: 14,
      description: 'Refreshing aroma, perfect for teas and cooking.',
      category: 'aromatic',
      onSale: true,
      image:MintImg
    },
    {
      id: 7,
      name: 'Lemon Balm',
      price: 16,
      description: 'Citrus scent that uplifts mood and reduces stress.',
      category: 'aromatic',
      onSale: true,
      image: Lemon_BalmImg
    },
    {
      id: 8,
      name: 'Hyacinth',
      price: 22,
      description: 'Sweet floral fragrance for indoor spaces.',
      category: 'aromatic',
      onSale: true,
      image: HyacinthImg
    }
  ];

  return (
    <main>
      <h1 className="page-title">Aromatic Fragrant Plants</h1>
      <div className="plants-grid">
        {aromaticPlants.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </main>
  );
}

export default Aromatic;