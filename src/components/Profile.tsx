import React from 'react';
import profileImg from '../assets/profil.jpg';

export default function Profile() {
  return (
    <section id="profile">
      <div className="profile-container">
        <div className="profile-text">
          <h2>Alex Palisungan</h2>
          <p>Game Dev, System Designer, Software Development</p>
          <div className="profile-buttons">
            <a href="#contact" className="btn-primary">Contacts</a>
            <a href="#about" className="btn-secondary">Learn more</a>
          </div>
        </div>
        <div className="profile-image">
          <img src={profileImg} alt="Profil" />
        </div>
      </div>
    </section>
  );
}
