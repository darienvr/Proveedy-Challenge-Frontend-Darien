import React from 'react'
import '../styles/navbar.css'
import NavbarButtonsList from './NavbarButtonsList';
import logo from '../assets/logotipo.png'

const Navbar = () => {
  return (
    <nav className='navbar-container'>
          <div className='navbar'> 
            <img src={logo} alt="#" />
            <ul className='navbar-links'>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Business</a>
              </li>
              <li>
                <a href="#">Education</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
            <NavbarButtonsList />
          </div>
        </nav>
  )
}

export default Navbar