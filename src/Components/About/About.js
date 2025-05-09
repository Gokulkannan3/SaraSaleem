import React from 'react';
import './About.css';
import about from '../../images/about-sara.png';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export default function About() {
  return (
    <div className='press-container'>
      <div className='heading'>
        <h4>About Sara</h4>
      </div>
      <div className='press-left'>
        <Link to='/' className='homea-button'>
          <FaHome className='homea-icon' />
        </Link>
        <div className='abouts-back'>
          <img src={about} className='abouts-circle' alt='Sara with children' />
          <h4>Sara with her children in Washington D.C.</h4>
        </div>
      </div>
      <div className='press-right'>
        <div className='abouts-item'>
          <p>
            Sara Saleem's story is not just about injustice — it's about resistance in the face of systemic oppression. Her lawsuit lifts the veil on a brutal campaign of harassment, extortion, and violence.
          </p>
          <p>
            Her abduction and torture were not isolated acts, but part of a broader effort to silence voices of reform and confiscate wealth from successful individuals.
          </p>
          <p>
            The case exposes a dangerous overlap between state power and violent militias, making it a landmark in holding international human rights violators accountable.
          </p>
          <p>
            With the support of a world-class legal team, Sara's voice now echoes far beyond Erbil — calling for transparency, justice, and global accountability.
          </p>
        </div>
      </div>
    </div>
  );
}