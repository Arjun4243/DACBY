import React from 'react'
import './login.css'

function Login() {
    return (
        <div className='registration'>
            <img src='/image/registration.png' />
            <h1>Registration</h1>
            <div className='form'>
                <div>Name: <input type='text' placeholder='Enter your name' /></div>
                <div>Email: <input type='email' placeholder='Enter your email' /></div>
                <div>Password: <input type='password' placeholder='Enter your password' /></div>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Login