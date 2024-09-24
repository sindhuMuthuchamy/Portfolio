import React from 'react'; // Fixing import typo
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} 
      onClick={toggleMenu}>
      <div className="mobile-menu-container">
        <img className="logo" src="./assets/images/logo-no-background.png" alt="logoimg" />
        <ul>
          <li><a className="menu-item" href="#">Home</a></li>
          <li><a className="menu-item" href="#">Skills</a></li>
          <li><a className="menu-item" href="#">Work Experience</a></li>
          <li><a className="menu-item" href="#">Contact Me</a></li>
          <button className="contact-btn">Hire Me</button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
