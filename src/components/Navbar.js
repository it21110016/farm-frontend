import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for styling
import logo from '../images/logo.jpg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt='Red Rooster Farm' style={{width: '50px', height: '70px'}}></img>
      </Link>
      <div className="navbar-links">
        <Link to="/About">About Us</Link>
        <Link to="/products">Products</Link>
        <Link to="/team">Our Team</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
