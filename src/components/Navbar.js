import React,{useState} from 'react'
import { Link } from 'react-router-dom'


function Navbar() {

  return (
    <nav className='navbar'>
        <div className='navbar-container'>
        <Link to="/" className='navbar-logo'>
            <a>TRVL</a>
        </Link>
        <div className='menu-icon' >
           x
        </div>
        </div>
    </nav>
  )
}

export default Navbar