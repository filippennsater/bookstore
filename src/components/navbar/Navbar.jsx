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



    const [clock, setClock] = useState(false);
    // const [button, setButton] = useState(true);

    const handleClock = () => setClock(!clock);
    const closeProfMenu = () => setClock(false);





    return (

        <>
            <nav className="navbar">
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={() => { closeMobileMenu(); closeProfMenu(); }} />

                    <div className='menu-icon' onClick={() => { handleClick(); closeProfMenu(); }}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <div className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/shop' className='nav-links' onClick={closeMobileMenu}>
                                Books & more
                            </Link>
                        </li>


                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>


                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>



                    </div>

                    <div className='prof-icon' onClick={() => { handleClock(); closeMobileMenu(); }}>
                        <i class={clock ? "fa-regular fa-user" : "fa-solid fa-user"}></i>
                    </div>

                    <div className={clock ? 'prof-menu active' : 'prof-menu'}>

                        <li className='nav-item'>
                            <Link to='/profile' className='nav-links' onClick={closeProfMenu}>
                                Profile
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/login' className='nav-links' onClick={closeProfMenu}>
                                Log in
                            </Link>
                        </li>


                        <li className='nav-item'>
                            <Link to='/logout' className='nav-links' onClick={closeProfMenu}>
                                Log out
                            </Link>
                        </li>


                        <li className='nav-item'>
                            <Link to='/signup' className='nav-links' onClick={closeProfMenu}>
                                Sign up
                            </Link>
                        </li>



                    </div>






                </div>

            </nav>

        </>
    );

}

export default Navbar;
