import React, { useState } from 'react'
import './login.css'
import { StoreContextCreated } from '../../StoreContext';
import { useContext } from 'react';

function Login() {

    const {setRegisterShow, switchLoginShow, setSwitchLoginShow} = useContext(StoreContextCreated);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleRegister = async() => {
        if(!formData.name || !formData.email || !formData.password) {
            setMessage('Please fill all fields');
            return;
        }
        
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/api/user/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await response.json();
            if(data.status) {
                localStorage.setItem('authToken', data.token);
                setMessage('Registered successfully!');
                setFormData({name: '', email: '', password: ''});
                setTimeout(() => {
                    setRegisterShow(false);
                }, 1500);
            } else {
                setMessage(data.message || 'Registration failed');
            }
        } catch(error) {
            setMessage('Error: ' + error.message);
        }
        setLoading(false);
    };

    const handleLogin = async() => {
        if(!formData.email || !formData.password) {
            setMessage('Please fill all fields');
            return;
        }
        
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/api/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await response.json();
            if(data.status) {
                localStorage.setItem('authToken', data.token);
                setMessage('Login successful!');
                setFormData({name: '', email: '', password: ''});
                setTimeout(() => {
                    setRegisterShow(false);
                }, 1500);
            } else {
                setMessage(data.message || 'Login failed');
            }
        } catch(error) {
            setMessage('Error: ' + error.message);
        }
        setLoading(false);
    };

    return (
        <div className='registration'>

            <h1>{switchLoginShow}</h1>

            <h1 className="close-btn" type="button" aria-label="Close" onClick={()=>setRegisterShow(false)}>×</h1>
            <div className='registration-container'>
                {switchLoginShow === "Register"?<img src='/image/login.png' alt='login' className='registerOggyImage'/>: <img src='/image/registration.png' alt='registration-image' />}
            <div className='form'>
                {switchLoginShow==="Register"?<div>Name: <input type='text' name='name' value={formData.name} onChange={handleInputChange} placeholder='Enter your name' /></div>:null}
                <div>Email: <input type='email' name='email' value={formData.email} onChange={handleInputChange} placeholder='Enter your email' /></div>
                <div>Password: <input type='password' name='password' value={formData.password} onChange={handleInputChange} placeholder='Enter your password' /></div>
                {message && <p style={{color: message.includes('success') || message.includes('successfully') ? 'green' : 'red'}}>{message}</p>}
                <div>
                    <button onClick={handleRegister} disabled={loading || switchLoginShow !== "Register"}>
                        {loading ? 'Registering...' : 'Register'}
                    </button> 
                    <button onClick={handleLogin} disabled={loading || switchLoginShow !== "Login"}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </div>
                <div>
                    <button onClick={()=>setSwitchLoginShow("Register")} style={{marginTop: '10px'}}>Switch to Register</button> 
                    <button onClick={()=>setSwitchLoginShow("Login")} style={{marginTop: '10px'}}>Switch to Login</button>
                </div>
            </div>
            </div>
        
        </div>
    )
}

export default Login