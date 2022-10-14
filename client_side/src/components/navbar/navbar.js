import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <ul className="nav_links">
                <Link to="/poet" className="poet">
                    <li>POET</li>
                </Link>
                <Link to="/poems" className="poems">
                    <li>POEMS</li>
                </Link>
                <Link to="/gazal" className="gazals">
                    <li>GAZAL</li>
                </Link>
                <Link to="/shyari" className="shyari">
                    <li>SHYARI</li>
                </Link>

            </ul>

        </nav>
    )
}

export default Navbar
