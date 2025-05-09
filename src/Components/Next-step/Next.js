import React from 'react';
import './Next.css';
import judge1 from '../../images/judge1.jpg';
import judge2 from '../../images/judge2.webp';
import judge3 from '../../images/judge3.webp';
import judge4 from '../../images/judge4.jpg'
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function About() {
  const items = [
  {
    img: judge1,
    title: "Court Proceedings",
    text: "Highlight critical court cases that challenge political interference and promote transparency in Iraq’s legal system."
  },
  {
    img: judge2,
    title: "Foundation Launch",
    text: "Introduce our new foundation aimed at promoting judicial independence and fighting systemic corruption."
  },
  {
    img: judge3,
    title: "Public Awareness Campaign",
    text: "Educate citizens about their legal rights and the importance of a fair, impartial judiciary."
  },
  {
    img: judge4,
    title: "Opportunities for Public Engagement",
    text: "Encourage community involvement through events, forums, and volunteer programs to strengthen legal accountability."
  }
];


  return (
    <div className='abt-container'>
      <div className='abt-arrow'>
        <Link to='/' className='homen-button'>
          <FaHome className='homen-icon' />
        </Link>
      </div>

      <div className='abt-content'>
        <h1 className='abt-title'>Next Steps</h1>

        <div className='abt-parts'>
          {items.map(({ img, title, text }, i) => (
            <div className='abt-part' key={i}>
              <div className='abt-jimage'>
                <img src={img} alt={title} />
              </div>
              <strong className='abt-topic'>{title}</strong>
              <p className='abt-text'>{text}</p>
              <button className='abt-button'>Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
