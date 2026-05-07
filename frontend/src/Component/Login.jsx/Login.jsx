import React from 'react'
import './login.css'

function Login() {
    return (
        <div className='registration'>
            <h1>Register</h1>
            <h1 className="close-btn" type="button" aria-label="Close">×</h1>
            <div className='registration-container'>
                 <img src='/image/registration.png' alt='registration-image' />
            <div className='form'>
                <div>Name: <input type='text' placeholder='Enter your name' /></div>
                <div>Email: <input type='email' placeholder='Enter your email' /></div>
                <div>Password: <input type='password' placeholder='Enter your password' /></div>
                <button>register</button>
            </div>
            </div>
        
        </div>
    )
}

export default Login