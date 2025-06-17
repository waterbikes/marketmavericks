"use client";
import { useState } from "react";
import Navbar from "./components/Navbar/page";
import Image from "next/image";
import "./home.css";
import Link from "next/link";

const images = [
  { src: "/electrician.png", alt: "Electrician" },
  { src: "/plumber.webp", alt: "Plumber" },
  { src: "/carpenter.webp", alt: "Carpenter" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <Navbar />
      <div className="introduction">
        <div className="intro-text">
          <h1>Services in 10 mins!! At Your Doorstep</h1>
          <p>Connect to your local service providers quickly and easily.</p>
          <Link href="/register"><button className="book-now">Book Now</button></Link>
        </div>
        <div className="intro-slider">
          <button className="arrow left" onClick={prevImage}>
            &#8592;
          </button>
          <div className="slider-image">
            <Image
              src={images[current].src}
              alt={images[current].alt}
              width={400}
              height={250}
              key={images[current].src}
            />
          </div>
          <button className="arrow right" onClick={nextImage}>
            &#8594;
          </button>
        </div>
      </div>

      <div className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src="/carpenter.webp" alt="Carpenter" />
            <p>Carpenter</p>
          </div>
          <div className="service-card">
            <img src="/electrician.png" alt="Electrician" />
            <p>Electrician</p>
          </div>
          <div className="service-card">
            <img src="/plumber.webp" alt="Plumber" />
            <p>Plumber</p>
          </div>
          <div className="service-card">
            <img src="/cleaner.webp" alt="Cleaner" />
            <p>Cleaner</p>
          </div>
        </div>
      </div>

      <div className="how-it-works">
        <h2>How It Works</h2>
        <div className="flow-chart">
          <div className="step">
            <div className="icon">🛠️</div>
            <p>Choose a Service</p>
          </div>
          <div className="arrow">→</div>
          <div className="step">
            <div className="icon">📍</div>
            <p>Nearby Helper Assigned</p>
          </div>
          <div className="arrow">→</div>
          <div className="step">
            <div className="icon">🚪</div>
            <p>Help at Doorstep</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Need Help Right Now?</h2>
        <p>Book a verified expert and get service at your doorstep within 10 minutes.</p>
        <div className="cta-buttons">
          <Link href="/register"><button className="cta-primary">Book a Service</button></Link>
          <button className="cta-secondary">Become a Service Partner</button>
        </div>
      </div>

      <div className="why-choose-us">
        <h2>Why Choose HelpuiT?</h2>
        <div className="reasons">
          <div className="reason-card">
            <span className="icon">✅</span>
            <h4>Verified Professionals</h4>
            <p>Every helper is background-checked and trained for safe and quality service.</p>
          </div>
          <div className="reason-card">
            <span className="icon">⏱️</span>
            <h4>10-Minute Arrival</h4>
            <p>We connect you instantly to a local expert who reaches you in 10 minutes.</p>
          </div>
          <div className="reason-card">
            <span className="icon">📍</span>
            <h4>Location-Based Matching</h4>
            <p>Smart location detection to assign the nearest available helper.</p>
          </div>
          <div className="reason-card">
            <span className="icon">💰</span>
            <h4>No Hidden Charges</h4>
            <p>Upfront pricing with no surprises. Pay only for what you book.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
