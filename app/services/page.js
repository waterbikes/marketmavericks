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
        <Navbar/>
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Skilled helpers at your doorstep in just 10 minutes!</p>
      </section>

      <section className="services-grid">
        {servicesList.map((service, index) => (
          <div className="service-box" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      <section className="services-benefits">
        <h2>Why Choose HelpuiT?</h2>
        <ul>
          <li>✔ Your Own local Service Providers</li>
          <li>✔ Arrive in 10 Minutes</li>
          <li>✔ Transparent Pricing</li>
          <li>✔ 24x7 Availability</li>
          <li>✔ Trusted by 10,000+ Homes</li>
        </ul>
      </section>

      <section className="services-cta">
        <h2>Need urgent help?</h2>
        <p>Book a service provider now and get your issue fixed in no time.</p>
        <button className="book-btn">Book Now</button>
      </section>
    </div>
  );
};

export default Services;
