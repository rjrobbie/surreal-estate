import React from 'react';
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../images/robmove surreal estate.svg";

const NavBar = () => {
  return (
    <div className='navbar'>
       <Link className="item" to="/"><img src={logo} className="navbar__logo" alt='Blue and Green robmove logo'/></Link>
       <ul className='navbar__links'>
        <li className='navbar__links-item'><Link className="item" to="/view">View Properties</Link></li>
        <li className='navbar__links-item'><Link className="item" to="/add">Add Property</Link></li>
       </ul>
    </div>
  )
}

export default NavBar;