import React from 'react';
import './Contact.css';


const Contact = () => {
  return (
    <div className="contact-page">
     
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have a question or need support? We’re here to help.</p>
      </section>

      <section className="contact-container">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone Number" />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>📍 Delhi, India</p>
          <p>📞 +91 9876543210</p>
          <p>📧 support@helpuit.in</p>
          <p>⏰ Mon - Sun: 8:00 AM - 10:00 PM</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
