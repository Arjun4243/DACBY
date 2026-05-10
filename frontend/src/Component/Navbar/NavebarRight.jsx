import React from 'react'
import "./Navbar.css"
import { useContext } from 'react';
import { StoreContextCreated } from '../../StoreContext';

function NavebarRight() {


  const { setRegisterShow , logouthandler} = useContext(StoreContextCreated);

  const token = localStorage.getItem("token");
  return (
    <div className='LoginRegisterButton'>
      <img src="/image/login.png" alt="Login" className='loginImage' />
      {token ? (
        <div className='hover-container'>
          <img
            src="/image/Login image.webp"
            alt="login image"
            className="loginImage"
          />
          <button className='logoutButton' onClick={logouthandler}>
            Logout
          </button>
        </div>

      ) : (<button onClick={() => setRegisterShow(true)}>Register</button>)}
    </div>
  )
}

export default NavebarRight