'use client';
import { useEffect, useState } from 'react';
import './provider_dashboard.css';

export default function ProviderDashboard() {
  const [provider, setProvider] = useState(null);
  const [onDuty, setOnDuty] = useState(true);

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const res = await fetch('/api/providers/me');
        const data = await res.json();
        setProvider(data.provider);
        setOnDuty(data.provider?.onDuty ?? true); // Assume default as true
      } catch (err) {
        console.error('Failed to fetch provider:', err);
      }
    };

    fetchProvider();
  }, []);

  const toggleDuty = async () => {
    const newDuty = !onDuty;
    setOnDuty(newDuty);
    try {
      await fetch('/api/providers/update-duty', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ onDuty: newDuty }),
      });
    } catch (error) {
      console.error('Duty update failed:', error);
    }
  };

  return (
    <div className="provider-dashboard">
      <div className="dashboard-header">
        <h2>Welcome {provider?.name || 'Provider'}</h2>
        <button onClick={toggleDuty} className={`duty-toggle ${onDuty ? 'on' : 'off'}`}>
          {onDuty ? '🟢 On Duty' : '🔴 Off Duty'}
        </button>
      </div>

      <div className="dashboard-sections">
        <section className="summary">
          <h3>Your Services</h3>
          <p>{provider?.services || 'No services listed'}</p>
        </section>

        <section className="notifications">
          <h3>Recent Notifications</h3>
          <ul>
            <li>🛠 You were requested for a Cleaning job at 10:30 AM</li>
            <li>📍 You have a booking scheduled for tomorrow at 2:00 PM</li>
            <li>💬 New message from a customer</li>
          </ul>
        </section>

        <section className="upcoming">
          <h3>Upcoming Bookings</h3>
          <div className="booking-card">
            <strong>Service:</strong> AC Repair<br />
            <strong>Location:</strong> Connaught Place, Delhi<br />
            <strong>Time:</strong> Today, 3:30 PM
          </div>
        </section>
      </div>
    </div>
  );
}
