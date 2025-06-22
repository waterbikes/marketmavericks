'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './sp_register.css';


export default function SPRegister() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    services: '',
  });

  const [status, setStatus] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/register-provider', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        alert('Registration successful!');
        router.push('/provider_dashboard');
      } else {
        setStatus('error');
        alert(data.error || 'Registration failed');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      alert('Something went wrong');
    }
  };

  return (
    <div className="sp-register-container">
      
      <h2>Service Provider Registration</h2>
      <form onSubmit={handleSubmit} className="sp-register-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="services"
          placeholder="Services (e.g., Cleaning, AC Repair)"
          value={form.services}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Registering...' : 'Register'}
        </button>\
        <p className="login-link">
          Already registered? <a href="/sp-login">Login</a>
        </p>
      </form>
    </div>
  );
}
