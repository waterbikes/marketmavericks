'use client';
import { useEffect, useState } from 'react';
import './dashboard.css'

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('/api/users/me');
      const data = await res.json();
      setUser(data.user);
    };

    fetchUser();
  }, []);

  

  return (
    <div className="dashboard">
      <div className="top-bar">
        <div className="welcome-text">
          <h1>Welcome to Your Dashboard</h1>
          {user ? <p>Hello, {user.name}</p> : <p>Loading...</p>}
        </div>

        <div className="search-bar">
          <input type="text" placeholder="services in your area..." />
          <button>Search</button>
        </div>
      </div>

      <section className="popular-services">
        <h2>Popular Services</h2>
        <div className="services-list">
          <div className="service-card">Plumber</div>
          <div className="service-card">Carpenter</div>
          <div className="service-card">Electrician</div>
        </div>
      </section>

      <section className="select-service">
        <h2>Select a Service</h2>
        <div className="service-grid">
          <div className="service-option">Cleaning</div>
          <div className="service-option">Pest Control</div>
          <div className="service-option">AC Repair</div>
          <div className="service-option">Painting</div>
          <div className="service-option">Gardening</div>
          <div className="service-option">CCTV Installation</div>
        </div>
      </section>

    </div>


  );
}
