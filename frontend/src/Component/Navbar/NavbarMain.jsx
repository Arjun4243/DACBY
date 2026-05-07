import React from 'react'
import NavbarLeft from './NavbarLeft'
import NavebarRight from './NavebarRight'
import "./Navbar.css"

function NavbarMain() {
  return (
    <div className='navMain'>
      <NavbarLeft />
      <NavebarRight />
    </div>
  )
}

export default NavbarMain