import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className='navbar'>
                <ul className='navbar_ul'>
                    <li><Link to='/' className='poet_link'>Home</Link></li>
                    <li><Link to='/poet' className='poet_link'>Poet</Link></li>
                    <li><Link to='/gazal' className='gazal_link'>Gazal</Link></li>
                    <li><Link to='/shyari' className='shyari_link'>Shyari</Link></li>
                    <li><Link to='/poems' className='poems_link'>Poems</Link></li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar
