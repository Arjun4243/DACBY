import React from 'react'
import './login.css'
import { StoreContextCreated } from '../../StoreContext';
import { useContext } from 'react';
function Login() {

    const {setRegisterShow, switchLoginShow, setSwitchLoginShow} = useContext(StoreContextCreated);


    return (
        <div className='registration'>

            <h1>{switchLoginShow}</h1>

            <h1 className="close-btn" type="button" aria-label="Close" onClick={()=>setRegisterShow(false)}>×</h1>
            <div className='registration-container'>
                {switchLoginShow === "Register"?<img src='/image/login.png' alt='login' className='registerOggyImage'/>: <img src='/image/registration.png' alt='registration-image' />}
            <div className='form'>
                {switchLoginShow==="Register"?<div>Name: <input type='text' placeholder='Enter your name' /></div>:null}
                <div>Email: <input type='email' placeholder='Enter your email' /></div>
                <div>Password: <input type='password' placeholder='Enter your password' /></div>
                <div><button onClick={()=>setSwitchLoginShow("Register")}>register</button> <button onClick={()=>setSwitchLoginShow("Login")}>login</button></div>
            </div>
            </div>
        
        </div>
    )
}

export default Login