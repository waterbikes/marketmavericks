'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import './dashboard.css';

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

  const services = ['Cleaning', 'Pest Control', 'AC Repair', 'Painting', 'Gardening', 'CCTV Installation'];

  return (
    <div className="dashboard">
      <div className="top-bar">
        <div className="welcome-text">
          <h1>Welcome to Your Dashboard</h1>
          {user ? <p>Hello, {user.name}</p> : <p>Loading...</p>}
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Services in your area..." />
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
          {services.map((service) => (
            <Link key={service} href={`dashboard/book?service=${service.toLowerCase()}`} className="service-option">
              {service}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
