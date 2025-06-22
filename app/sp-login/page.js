'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './sp_login.css'; // Create this CSS file if not already
import Navbar from '../components/Navbar/page';

export default function SPLogin() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/login-provider', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (res.ok) {
                alert('Login successful!');
                router.push('/provider_dashboard');
            } else {
                alert(data.error || 'Login failed');
            }
        } catch (err) {
            console.error(err);
            alert('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="sp-login-container">
            <Navbar />
            <h2>Service Provider Login</h2>
            <form onSubmit={handleSubmit} className="sp-login-form">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
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
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                <p className="login-link">
                      Fresh registeration <a href="/sp-register">Register</a>
                </p>
            </form>
        </div>
    );
}
