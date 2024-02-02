import './Navbar.scss';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createContext } from 'react';

export const ThemeContext = createContext(null);


function Navbar() {







    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            // setButton(false)
        } else {
            // setButton(true)
        }
    };


    //so the button doesn' appear when you refresh page
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);




    return (

        <>
            <nav className="navbar">
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <h7>MarketTracker</h7>&nbsp;<i class="fa-solid fa-coins"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/market' className='nav-links' onClick={closeMobileMenu}>
                                Market
                            </Link>
                        </li>


                        <li className='nav-item'>
                            <Link to='/favorites' className='nav-links' onClick={closeMobileMenu}>
                                Favorites
                            </Link>
                        </li>


                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>



                    </ul>

                </div>

            </nav>
        </>
    );
}

export default Navbar;
