import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <header className="header">
        <div className="container">
            <nav className="navbar">
                <NavLink to="/" className="navbar__logo">Logo</NavLink>
                <ul className="navbar__nav">
                    <li className="navbar__nav__item">
                        <NavLink to="/" className="navbar__nav__link">Home</NavLink>
                    </li>
                    <li className="navbar__nav__item">
                        <NavLink to="/about" className="navbar__nav__link">About</NavLink>
                    </li>
                    <li className="navbar__nav__item">
                        <NavLink to="/contact" className="navbar__nav__link">Contact</NavLink>
                    </li>
                    <li className="navbar__nav__item">
                        <NavLink to="/other/inner" className="navbar__nav__link">Other</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar