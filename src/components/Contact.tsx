import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>You can reach me via:</p>
      <ul>
        <li>
          <a href="https://wa.me/6287881019258" target="_blank" rel="noreferrer">
            <FaWhatsapp /> WhatsApp
          </a>
        </li>
        <li>Email: alexpalisungan@example.com</li>
      </ul>
      {/* Optional contact form */}
    </section>
  );
}
