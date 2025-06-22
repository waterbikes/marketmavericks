'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import './register.css';
import Navbar from "../components/Navbar/page";

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const router = useRouter();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.text(); // assuming backend sends plain text

      if (res.status === 200 || res.status === 201) {
        alert("Registration successful!");
        router.push('/dashboard');
      } else if (res.status === 409) {
        setError("User already exists. Please login.");
      } else {
        setError(data || "Registration failed. Try again.");
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="register-page">
      <Navbar />

      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>
        {error && <p className="error-msg">{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required />

        <button type="submit">Sign Up</button>

        <p className="login-link">
          Already registered? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}
