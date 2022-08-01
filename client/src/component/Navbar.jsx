import React from 'react'
import { MdApartment } from 'react-icons/md';
import { AiOutlineDown } from 'react-icons/ai';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
        <span className='logo'><MdApartment/></span>
        <h3>Estatery</h3>
        <ul>
            <Link to = '/'><li>Rent</li></Link>
            <Link to = '/buy'><li>Buy</li></Link>
            <Link to = '/sell'><li>Sell</li></Link>
            <li>Manage Property <AiOutlineDown/></li>
            <li>Resources <AiOutlineDown/></li>
        </ul>
        <Link to = '/login'><button className='login'>Login</button></Link>
        <Link to = '/register'><button>Sign Up</button></Link>

    </nav>
  )
}
