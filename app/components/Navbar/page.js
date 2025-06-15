'use client';
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">HelpuiT</div>

      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="services">Services</a></li>
        <li><a href="About">About</a></li>
        <li><a href="contact">Contact</a></li>
        <li><a href="Book">Book Now</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
