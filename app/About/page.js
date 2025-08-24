import React from 'react';
import './About.css';
import Navbar from "../components/Navbar/page";

const About = () => {
  return (
    <div className="about-page">
        <Navbar />
      {/* Hero Section with Left-Aligned Title */}
      <section className="about-hero">
  <div className="hero-overlay">
    <div className="hero-content-card">
      <h1 className="about-title">About MarketMavericks</h1>
      <p className="about-subtitle">
        India’s fastest on-demand home service platform. Trusted professionals, delivered at your doorstep — within 10 minutes.
      </p>
      <button className="hero-cta-button">Explore Services</button>
    </div>
  </div>
</section>

      {/* Mission Section */}
      <section className="about-section with-image">
        <div className="about-content">
          <h2 className="section-heading">Our Mission</h2>
          <p className="section-text">
            Our mission at <strong>MarketMavericks</strong> is to empower every household with immediate access to professional services. We believe urgent home needs like plumbing, electrical work, or carpentry shouldn't involve delays or stress.
          </p>
        </div>
        <img src="/images/mission.jpg" alt="Our mission" className="section-image" />
      </section>

      {/* Vision Section */}
      <section className="about-section dark-section">
        <h2 className="section-heading">Our Vision</h2>
        <p className="section-text centered">
          We envision a connected India where every locality — metro or rural — can get professional help within 10 minutes. By blending smart logistics with human talent, MarketMavericks aims to transform how home services are accessed.
        </p>
      </section>

      {/* Core Values */}
      <section className="about-section">
        <h2 className="section-heading">Our Core Values</h2>
        <ul className="values-list">
          <li><strong>🚀 Speed:</strong> Service professionals arrive within 10 minutes of booking.</li>
          <li><strong>✅ Trust:</strong> All helpers are verified and rated regularly.</li>
          <li><strong>💬 Transparency:</strong> Real-time tracking and upfront pricing.</li>
          <li><strong>❤️ Empathy:</strong> We care for your home as if it were our own.</li>
        </ul>
      </section>

      {/* Team Section */}
      <section className="about-section with-image reverse">
        <img src="/images/team.jpg" alt="Our team" className="section-image" />
        <div className="about-content">
          <h2 className="section-heading">Meet the Team</h2>
          <p className="section-text">
            Behind MarketMavericks is a passionate team of engineers, designers, and field partners dedicated to making service delivery seamless. We’re building India’s first truly instant service ecosystem — one home at a time.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-card">
        <h2>Be Part of the Help Revolution</h2>
        <p>Whether you’re a homeowner looking for quick solutions or a skilled professional wanting to serve — MarketMavericks is your platform.</p>
        <button className="cta-button">Explore Opportunities</button>
      </section>
    </div>
  );
};

export default About;
