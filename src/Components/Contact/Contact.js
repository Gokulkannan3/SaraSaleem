import React from 'react';
import './Contact.css';
import arrow from '../../images/left-arrows.png';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-arrow">
        <Link to="/">
          <img src={arrow} alt="back" />
        </Link>
      </div>
      <p className="contact-title">Contact</p>
      <div className="contact-options">
        <div>Get Involved</div>
        <div>Seek Help</div>
        <div>Media Inquiries</div>
      </div>
      <p className="contact-note">
        For legal or press inquiries related to Sara Saleem’s case, contact:<br />
        Sam Amsterdam, Amsterdam Group Public Relations Inc —&nbsp;
        <a href="mailto:samuelamsterdam@googlemail.com">
          samuelamsterdam@googlemail.com
        </a>
      </p>
    </div>
  );
}
