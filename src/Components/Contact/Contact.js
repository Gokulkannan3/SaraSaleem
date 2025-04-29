import React from 'react'
import './Contact.css'
import arrow from '../../images/left-arrows.png'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-arrow'>
            <Link to='/'>
            <img src={arrow} alt='back'/>
            </Link>
        </div>
      <div className='content'>
        <p className='title'>Contact</p>
      </div>
      <div className='sub-content'>
        <p className='contact-details'>Get Involved</p>
        <p className='contact-details'>Seek Help</p>
        <p className='contact-details'>Media Queries</p>
      </div>
      <div className='contact-end'>
        <p className='end-text'>For legal or press inquiries related to Sara Saleem’s case, contact:</p>
      </div>
    </div>
  )
}
