import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const [emailHref, setEmailHref] = useState("mailto:info@dreva.ai");

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) {
      // On desktop, use Gmail web link
      setEmailHref("https://mail.google.com/mail/?view=cm&to=samuelamsterdam@googlemail.com");
    }
  }, []);
  return (
    <div className="contact-container">
      <div className="press-left">
        <Link to="/" className="homeb-button">
          <FaHome className="homeb-icon" />
        </Link>
      </div>
      <h1 className="contact-title">Contact</h1>
      <div className="contact-options">
        <div>Get Involved</div>
        <div>Seek Help</div>
        <div>Media Inquiries</div>
      </div>
      <h4 className='justice'>#Justice for Sara Saleem</h4>
      <p className="contact-note">
        For legal or press inquiries related to Sara Saleem’s case, contact:<br />
        Sam Amsterdam, Amsterdam Group Public Relations Inc —{' '}
        <a
          href={emailHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          samuelamsterdam@googlemail.com
        </a>
      </p>
    </div>
  );
}