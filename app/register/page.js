'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import './register.css'
import Navbar from "../components/Navbar/page"

export default function Register() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' })
    const router = useRouter();

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })

        if (res.ok) {
            router.push('/dashboard');
        } else {
            alert('Registeration Failed')
        }
    }

    return (
        <div className="register-page">
            <Navbar />

            <form onSubmit={handleSubmit} className="register-form">
                <h2>Register</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    onChange={handleChange}
                    required />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required />
                <button type="submit">Sign UP</button>
                <p className="login-link">
                    Already registered? <a href="/login">Login</a>
                </p>
            </form>
        </div>
    )
}