import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Import Home.css, NOT Header.css!

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome To Paradise Nursery</h1>
          <h2>Where Green Meets Serenity</h2>
          <Link to="/air-purifying" className="btn get-started-btn">
            Get Started
          </Link>
        </div>
      </section>

      <section className="intro-section">
        <h2>Welcome to Paradise Nursery, where green meets serenity!</h2>
        <p>
          At Paradise Nursery, we are passionate about bringing nature closer to you. 
          Our mission is to provide a wide range of high-quality plants that not only 
          enhance the beauty of your surroundings but also contribute to a healthier 
          and more sustainable lifestyle. From air-purifying plants to aromatic fragrant 
          ones, we have something for every plant enthusiast.
        </p>
        <p>
          Our team of experts is dedicated to ensuring that each plant meets our strict 
          standards of quality and care. Whether you're a seasoned gardener or just 
          starting your green journey, we're here to support you every step of the way. 
          Feel free to explore our collection, ask questions, and let us help you find 
          the perfect plant for your home or office.
        </p>
        <p>
          Join us in our mission to create a greener, healthier world. Visit Paradise 
          Nursery today and experience the beauty of nature right at your doorstep.
        </p>
      </section>

      <section className="categories">
        <div className="category-card">
          <h3>Air Purifying Plants</h3>
          <p>Plants that clean and purify your indoor air</p>
          <Link to="/air-purifying" className="btn category-btn">
            Browse Collection
          </Link>
        </div>
        <div className="category-card">
          <h3>Aromatic Fragrant Plants</h3>
          <p>Plants with calming and refreshing scents</p>
          <Link to="/aromatic" className="btn category-btn">
            Browse Collection
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;