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
      <h1>Welcome to Your Dashboard</h1>
      {user ? <p>Hello, {user.name}</p> : <p>Loading...</p>}
      </div>

  );
}
