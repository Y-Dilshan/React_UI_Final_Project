import React from 'react';
import PlantCard from '../components/PlantCard';
import './Aromatic.css';
import lavenderImg from '../assets/images/lavender.jpg';

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
      image: 'https://cdn.pixabay.com/photo/2016/01/26/23/32/jasmine-1163497_1280.jpg'
    },
    {
      id: 5,
      name: 'Rosemary',
      price: 15,
      description: 'Invigorating scent, often used in cooking.',
      category: 'aromatic',
      onSale: true,
      image: 'https://cdn.pixabay.com/photo/2017/10/06/15/15/rosemary-2823730_1280.jpg'
    },
    {
      id: 6,
      name: 'Mint',
      price: 14,
      description: 'Refreshing aroma, perfect for teas and cooking.',
      category: 'aromatic',
      onSale: true,
      image: 'https://cdn.pixabay.com/photo/2015/09/09/19/23/mint-933066_1280.jpg'
    },
    {
      id: 7,
      name: 'Lemon Balm',
      price: 16,
      description: 'Citrus scent that uplifts mood and reduces stress.',
      category: 'aromatic',
      onSale: true,
      image: 'https://cdn.pixabay.com/photo/2017/03/06/10/31/lemon-balm-2120889_1280.jpg'
    },
    {
      id: 8,
      name: 'Hyacinth',
      price: 22,
      description: 'Sweet floral fragrance for indoor spaces.',
      category: 'aromatic',
      onSale: true,
      image: 'https://cdn.pixabay.com/photo/2019/04/16/10/56/hyacinth-4131892_1280.jpg'
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