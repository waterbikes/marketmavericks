'use client'
import { useState } from 'react'
import './login.css'
import { useRouter } from 'next/navigation'


export default function login(){
    const [formData, setFormData] = useState({email:'',password:''})
    const router = useRouter()

    const handleChange = (e) => {
        setFormData(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/users/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            router.push('/dashboard');
        } else {
            alert('Login Failed')
        }
    };

    return (
        <div className='login-page'>
          
            <form onSubmit={handleSubmit} className='login-form'>
                <h2>Login</h2>
                <input
                type='text'
                name='email'
                placeholder='Email'
                onChange={handleChange}
                required/>
                <input
                type='password'
                name='password'
                placeholder='Password'
                onChange={handleChange}
                required
                />
                <button type='Submit'>Login</button>
                <p className='dna'>Dont have an account? <a href='/register'>register</a></p>
            </form>
        </div>
    )
}
