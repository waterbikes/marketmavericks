'use client';
import { useEffect, useState } from 'react';
import './dashboard.css'

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // You can fetch user data here using token or session
    const fetchUser = async () => {
      const res = await fetch('/api/users/me');
      const data = await res.json();
      setUser(data.user);
    };

    fetchUser();
  }, []);

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard</h1>
      {user ? <p>Hello, {user.name}</p> : <p>Loading...</p>}

      <div className="dashboard-sections">
        <div className="card">🔧 Book a Service</div>
        <div className="card">📅 View Your Bookings</div>
        <div className="card">📍 Track Service Provider</div>
        <div className="card">📞 Contact Support</div>
      </div>
    </div>
  );
}
