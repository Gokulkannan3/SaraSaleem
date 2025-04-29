import React from 'react'
import './About.css'
import judge1 from '../../images/judge1.jpg'
import judge2 from '../../images/judge2.webp'
import judge3 from '../../images/judge3.webp'
import judge4 from '../../images/judge4.jpg'
import arrow from '../../images/left-arrows.png'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='about-container'>
      <div className='about-arrow'>
        <Link to='/'>
          <img src={arrow} alt='back'/>
        </Link>
      </div>
      <div className='about-content'>
        <p className='title'>About Us</p>
        <p className='subtitle'>The Sara Saleem Foundation</p>
        <div className='subtext'>
          <p className='text'>We are a voice for victims of corruption, judicial abuse, and state-sponsored violence in Iraq and beyond. Founded in the wake of Sara Saleem’s decade-long fight for justice, we:</p>
        </div>
        <div className='about-parts'>
          <div className='part'>
            <div className='jimage'>
              <img src={judge1} alt='judge1' className='judge1' />
            </div>
            <strong className='topic'>Cleansing Iraq's Judiciar</strong>
            <p className='content'>Advocate for legal and institutional reforms to combat foreign interference in Iraq’s judiciary.</p>
            <div className='part-btn'>
              <button className='learn-more'>Learn More</button>
            </div>
          </div>
          <div className='part'>
            <div className='jimage'>
              <img src={judge2} alt='judge1' className='judge1' />
            </div>
            <strong className='topic'>Iran’s Militia Corruption</strong>
            <p className='content'>Expose corruption tied to Iran-backed militias and their enablers.</p>
            <div className='part-btn'>
              <button className='learn-more'>Learn More</button>
            </div>
          </div>
          <div className='part'>
            <div className='jimage'>
              <img src={judge3} alt='judge1' className='judge1' />
            </div>
            <strong className='topic'>Survivors Need Justice NOW</strong>
            <p className='content'>Support survivors of kidnapping, torture, and financial crimes.</p>
            <div className='part-btn'>
              <button className='learn-more'>Learn More</button>
            </div>
          </div>
          <div className='part'>
            <div className='jimage'>
              <img src={judge4} alt='judge1' className='judge1' />
            </div>
            <strong className='topic'>Sara's Case, Iraq's Future</strong>
            <p className='content'>Sara’s case is not just personal—it’s a litmus test for Iraq’s independence from malign influence.</p>
            <div className='part-btn'>
              <button className='learn-more'>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}