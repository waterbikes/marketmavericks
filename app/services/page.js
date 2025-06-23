import React from 'react';
import './Services.css';
import Navbar from '../components/Navbar/page';

const servicesList = [
  {
    title: 'Electrician',
    description: 'Fan, light, switchboard, wiring — everything fixed quickly.',
    image: '/electrician.png',
  },
  {
    title: 'Plumber',
    description: 'Leakage, tap replacement, pipe fitting – sorted at home.',
    image: '/plumber.webp',
  },
  {
    title: 'Carpenter',
    description: 'Furniture repair, hinge fitting, custom shelves and more.',
    image: '/carpenter.webp',
  },
  {
    title: 'AC Repair',
    description: 'Split or window AC not cooling? Book expert technicians.',
    image: '/acrepair.webp',
  },
  {
    title: 'Painter',
    description: 'Interior/exterior wall painting with expert finish.',
    image: '/painter.jpeg',
  },
  {
    title: 'Cleaning',
    description: 'Kitchen, bathroom, sofa or full home deep cleaned.',
    image: '/cleaner.webp',
  },
];

const Services = () => {
  return (
    <div className="services-page">
       <Navbar /> 
      {/* Hero Section */}
      <section className="services-hero">
  <div className="hero-overlay">
    <div className="hero-card">
      <h1 className="hero-title">Our Services</h1>
      <p className="hero-subtitle">
        Need a fix fast? From electricians to deep cleaners, HelpuiT delivers skilled professionals to your door in just 10 minutes.
      </p>
      <button className="hero-btn">See All Services</button>
    </div>
  </div>
</section>

      {/* Services Grid */}
      <section className="services-grid">
        {servicesList.map((service, index) => (
          <div className="service-box" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      {/* Why HelpuiT */}
      <section className="services-benefits">
        <h2>Why Choose HelpuiT?</h2>
        <ul>
          <li>✔ Local Experts in Every Area</li>
          <li>✔ Arrival Within 10 Minutes</li>
          <li>✔ Transparent Pricing & No Hidden Fees</li>
          <li>✔ 24/7 Service Support</li>
          <li>✔ Trusted by 10,000+ Happy Customers</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="cta-content">
          <h2>Need Help Fast?</h2>
          <p>Book your trusted helper now and get instant assistance.</p>
          <button className="book-btn">Book Now</button>
        </div>
      </section>
    </div>
  );
};

export default Services;
