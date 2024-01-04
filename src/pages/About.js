import React from 'react';
import './AboutPage.css'; // Import your CSS file for styling
import logo from '../images/logo.jpg'
import farm1 from '../images/farm1.jpg'; // Import farm images
import farm2 from '../images/farm2.jpg'; // Import farm images
import farm3 from '../images/farm3.jpg'; // Import farm images
import farm4 from '../images/farm4.webp'; // Import farm images
import farm5 from '../images/farm5.webp'; // Import farm images
import family from '../images/family.jpeg'; // Import farm images

const AboutPage = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Red Rooster Farm</h1>
        <p>Your source for fresh and local produce.</p>
      </section>

      <section className="vision-mission">
        <h2>Vision & Mission</h2>
        <p>
          <strong>Vision:</strong> To provide the community with the freshest and
          highest-quality agricultural and livestock products while promoting sustainable
          farming practices.
        </p>
        <p>
          <strong>Mission:</strong> Red Rooster Farm is committed to delivering fresh and
          nutritious produce, dairy, and meat products. We prioritize the well-being of our
          community and the environment.
        </p>
      </section>

      <section className="logo-tagline">
        <h2>Logo & Tagline</h2>
        <img src={logo} style={{width: '100px', height: '180px'}} alt="Red Rooster Farm Logo" className="logo" />
        <p>
          Our logo represents our commitment to quality and the vibrant energy of our farm.
        </p>
        <p>
          <strong>Tagline:</strong> "From Our Farm to Your Table – Freshness Guaranteed!"
        </p>
      </section>

      <section className="historical">
        <h2>Historical Background</h2>
        <img src={family} alt="Family" style={{width: '800px', height: '500px'}} />
        <p>
          Red Rooster Farm was established in 1980 by the Smith family. Over the years, we
          have grown into a trusted source for fresh, local, and sustainable produce. Our
          dedication to quality and community has made us a staple in Brussels.
        </p>
      </section>

      <section className="farm-photos">
        <h2>Farm Photos</h2>
        <div className="photo-container">
          <img src={farm1} alt="Farm" style={{width: '750px', height: '500px'}}/>
          <img src={farm2} alt="Farm" />
          <img src={farm3} alt="Farm" style={{width: '750px', height: '500px'}}/>
          <img src={farm4} alt="Farm" />
          <img src={farm5} alt="Farm" />
          {/* Add more farm photos as needed */}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
