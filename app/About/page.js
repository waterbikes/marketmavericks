import React from 'react';
import './About.css';
import Navbar from '../components/Navbar/page';

const About = () => {
  return (
    <div className="about-page">
        <Navbar/>
      <section className="about-hero">
        <h1>About HelpuiT</h1>
        <p>Your trusted platform for quick, reliable home services. First time in India Services in 10 mins.</p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At HelpuiT, we are on a mission to connect people with local service
          providers like electricians, plumbers, carpenters, and more — all within 10 minutes. We believe everyone deserves instant, quality help at fair prices.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>🚀 Speed: We reach you in 10 minutes.</li>
          <li>✅ Trust: All helpers are verified and background-checked.</li>
          <li>💬 Transparency: Clear pricing and communication.</li>
          <li>❤️ Care: We treat every home like our own.</li>
        </ul>
      </section>

      
    </div>
  );
};

export default About;
