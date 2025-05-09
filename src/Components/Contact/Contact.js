import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import './Contact.css'

export default function Contact() {
  return (
    <div className='title'>
    <div className='press-left'>
        <Link to='/' className='homeb-button'>
          <FaHome className='homeb-icon' />
        </Link>
    </div>
      <p className='parac'>Contact page work in progress</p>
    </div>
  )
}
