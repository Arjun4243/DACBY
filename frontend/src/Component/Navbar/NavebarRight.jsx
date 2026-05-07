import React from 'react'
import "./Navbar.css"
import { useContext } from 'react';
import { StoreContextCreated } from '../../StoreContext';

function NavebarRight() {
  const {setRegisterShow} = useContext(StoreContextCreated);
  return (
    <div className='LoginRegisterButton'>
        <img src="/image/login.png" alt="Login" className='loginImage'/>
        <button onClick={() => setRegisterShow(true)}>Register</button>
    </div>
  )
}

export default NavebarRight