import React from 'react';
import './HomePage.css'; // Import your CSS file for styling
import backgroundImg from '../images/background.jpg'; // Import the background image

const HomePage = () => {

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover', // or 'contain' depending on your preference
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Adjust the height of the container
  };

  return (
    <div className="home-container" >
      <section className="hero-section">
        <h1>Welcome to Red Rooster Farm</h1>
        <p>Discover Fresh and Local Produce</p>
      </section>

      <div style={backgroundStyle}></div>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Red Rooster Farm is a family-owned agricultural and livestock production farm
          located in Brussels, Belgium. We take pride in providing fresh and high-quality
          products to the people of Brussels city.
        </p>
      </section>

      <section className="products-section">
        <h2>Our Products</h2>
        <p>
          Explore a wide range of products including fresh vegetables, fruits, dairy, and
          meat products. All our products are locally sourced and grown with care.
        </p>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Visit our Product Outlet or contact us to place orders. Our friendly staff is
          ready to assist you.
        </p>
      </section>
    </div>
  );
};

export default HomePage;