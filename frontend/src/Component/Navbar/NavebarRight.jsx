import React from 'react'
import "./Navbar.css"

function NavebarRight() {
  return (
    <div className='LoginRegisterButton'>
        <img src="/image/login.png" alt="Login" className='loginImage'/>
        <button>Register</button>
    </div>
  )
}

export default NavebarRight