import React from 'react';
import './About.css';
import judge1 from '../../images/judge1.jpg';
import judge2 from '../../images/judge2.webp';
import judge3 from '../../images/judge3.webp';
import arrow from '../../images/left-arrows.png';
import { Link } from 'react-router-dom';

export default function About() {
  const items = [
    {
      img: judge1,
      title: "Cleansing Iraq's Judiciary",
      text: "Advocate for legal and institutional reforms to combat foreign interference in Iraq’s judiciary."
    },
    {
      img: judge2,
      title: "Iran’s Militia Corruption",
      text: "Expose corruption tied to Iran-backed militias and their enablers."
    },
    {
      img: judge3,
      title: "Survivors Need Justice NOW",
      text: "Support survivors of kidnapping, torture, and financial crimes."
    }
  ];

  return (
    <div className='about-container'>
      <div className='about-arrow'>
        <Link to='/'>
          <img src={arrow} alt='Back to home' />
        </Link>
      </div>

      <div className='about-content'>
        <h1 className='title'>About Us</h1>

        <div className='about-parts'>
          {items.map(({ img, title, text }, i) => (
            <div className='part' key={i}>
              <div className='jimage'>
                <img src={img} alt={title} />
              </div>
              <strong className='topic'>{title}</strong>
              <p className='content'>{text}</p>
              <button className='learn-more'>Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
