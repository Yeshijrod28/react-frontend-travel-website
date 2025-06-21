import React from 'react'
import './Navbar.css'

const Navbar = ({onLoginClick}) => {
  return (
    <header className='header'>
      <a href="/" className='logo'>TA SHEL</a>

      <nav className='navbar'>
        <a href="/">Home</a>
        <a href="#explore">explore</a>
        <a href="#packages">Packages</a>
        <a href="#contact">Contact</a>
        <a><button onClick={onLoginClick}>Login</button></a>
       
      </nav>
      

    </header>
                                    
  )   
}

export default Navbar
