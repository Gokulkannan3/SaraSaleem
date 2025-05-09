import React from 'react';
import './Back.css';
import back from '../../images/Back-injustice.png';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export default function Back() {
  return (
    <div className='press-container'>
      <div className='heading'>
        <h4>Background to Injustice</h4>
      </div>
      <div className='press-left'>
        <Link to='/' className='homeb-button'>
          <FaHome className='homeb-icon' />
        </Link>
        <div className='backb'>
          <img src={back} className='circle' alt='circle'/>
          <h4>Sara In Erbil</h4>
        </div>
      </div>
      <div className='press-right'>
        <div className='press-item'>
          <p>
            An extraordinary legal storm is brewing in Washington D.C., with far-reaching implications for international law, U.S. foreign policy, and the credibility of Iraq's judicial system. It will also be a new test of strength for President Trump's Administration.
          </p>
          <p>
            In what could become one of the most consequential civil actions filed under the U.S. Anti-Terrorism and Torture Victims Protection Acts, American-Kurdish businesswoman and engineer Sara Saleem is suing senior Iraqi officials - including the country's most powerful judge - for kidnapping, torture, attempted murder, and a massive theft of business assets.
          </p>
          <p>
            Backed by one of America's most prestigious law firms, Gibson, Dunn & Crutcher LLP, Saleem's $2 billion lawsuit was filed in the U.S. District Court for the Eastern District of Virginia, naming Judge Faiq Zidane, head of Iraq's Supreme Judicial Council, along with a network of Iraqi officials and known members of the U.S.-designated terrorist group Asa'ib Ahl al-Haq (AAH).
          </p>
          <p>
            The suit accuses them of orchestrating a violent plot to abduct and extort Sara Saleem, in an attempt to strip her of her lucrative stake in a major Iraqi real estate development.
          </p>
        </div>
      </div>
    </div>
  );
}