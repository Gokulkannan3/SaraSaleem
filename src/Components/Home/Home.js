import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-section">
        <div className="content-wrapper">

          {/* SVG logo from public/ */}
          <img
            src="/Sara_Saleem_Foundation_Logo.svg"
            alt="Sara Saleem Foundation Logo"
            className="logo-image"
          />

   

   
        </div>
      </div>

      <div className="right-section">
        <a href="#case">Case</a>
        <a href="#about">About us</a>
        <a href="#press">Press</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Home;
