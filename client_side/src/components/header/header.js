import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


const Header = (props) => {
    const auth = localStorage.getItem('users')

    return (
        <nav className="header">
            <img src="../imgs/img1.jpg" alt="logo" className='logo' />
            <ul className="hed_links">

                <Link to="/" className="home">
                    <li>Home</li>
                </Link>

                <Link to="/about" className="about_us">
                    <li>About Us</li>
                </Link>
                <Link to="/contact" className="contact_us">
                    <li>Contact Us</li>
                </Link>
                {/* <Link to='/posts' className='contact_us'><li>Your Posts</li></Link>
                <Link to='/update'><li>update</li></Link> */}


                {auth ?
                    <Link to='/profile'><img src="../img/pk.jpg" alt="logo" className='profile' />
                    </Link> :
                    <Link to="/login" className="sign_up"><li>Login</li></Link>
                }




            </ul>


        </nav>
    )
}

export default Header