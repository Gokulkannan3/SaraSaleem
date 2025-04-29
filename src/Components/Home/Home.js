import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
        <img src="/bg1.png" alt="Overlay Graphic"
       className="bg1-overlay" />
      <div className="left-section">
        <div className="content-wrapper">

          {/* SVG logo from public/ */}
          <img
          src="/Justice_For_Sara_Saleem_Logo.svg"
          alt="Sara Saleem Foundation Logo"
          className="logo-image"
        />
        </div>
      </div>

      <div className="right-section">
        <Link to="/case">Case</Link>
        <Link to='/about'>About us</Link>
        <Link to="/press">Press</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Home;
