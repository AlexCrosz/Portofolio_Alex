import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">Profile</div>
        <div className="nav-links">
          <a href="#profile">Home</a>
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contacts</a>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=100009608506374" target="_blank" rel="noreferrer" title="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/alex_palisungan" target="_blank" rel="noreferrer" title="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/alex-palisungan-3098a8314/" target="_blank" rel="noreferrer" title="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://wa.me/6287881019258" target="_blank" rel="noreferrer" title="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </nav>
  );
}
