import React from 'react';
import "../styles/navbar.css";
import logo from "../images/robmove surreal estate.svg";

function NavBar() {
  return (
    <div className='navbar'>
       <img src={logo} className="navbar__logo" />
       <ul className='navbar__links'>
        <li className='navbar__links-item'><a href='#'>View Properties</a></li>
        <li className='navbar__links-item'><a href='#'>Add a Property</a></li>
       </ul>
    </div>
  )
}

export default NavBar;