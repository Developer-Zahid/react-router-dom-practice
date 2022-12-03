import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux";
import './navbar.css'

const Navbar = () => {
  const allCartActions = useSelector((state)=> state.allCartActions)
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
                        <NavLink to="/product" className="navbar__nav__link">Product</NavLink>
                    </li>
                    <li className="navbar__nav__item">
                        <NavLink to="/user" className="navbar__nav__link">User</NavLink>
                    </li>
                    <li className="navbar__nav__item">
                        <NavLink to="/contact" className="navbar__nav__link">Contact</NavLink>
                    </li>
                    <li className="navbar__nav__item">
                        <NavLink to="/other/inner" className="navbar__nav__link">Other</NavLink>
                    </li>
                    <li className="navbar__nav__item">
                        <NavLink to="/cart" className="navbar__nav__link">
                            <i className="bi bi-cart3"></i>
                            <span className="navbar__nav__link__count">{allCartActions.cartProductAmount}</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar