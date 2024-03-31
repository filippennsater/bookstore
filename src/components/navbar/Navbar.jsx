import './Navbar.scss';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createContext } from 'react';

import Dropdown from 'react-bootstrap/Dropdown'


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




    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }







    return (

        <>
            <nav className="navbar">
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu} />

                    <div className='menu-icon' onClick={handleClick}>
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

                        <button class="dropdown-btn">Träningspass
                            <i class="fa fa-caret-down"></i>
                        </button>

                        <div class="dropdown-container">


                            <li className='nav-item-2'>
                                <Link to='/chest' className='nav-links' onClick={closeMobileMenu}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bröst
                                </Link>
                            </li>

                            <li className='nav-item-2'>
                                <Link to='/back' className='nav-links' onClick={closeMobileMenu}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rygg
                                </Link>
                            </li>

                            <li className='nav-item-2'>
                                <Link to='/shoulders' className='nav-links' onClick={closeMobileMenu}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Axlar
                                </Link>
                            </li>

                            <li className='nav-item-2'>
                                <Link to='/arms' className='nav-links' onClick={closeMobileMenu}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Armar
                                </Link>
                            </li>

                            <li className='nav-item-2'>
                                <Link to='/legs' className='nav-links' onClick={closeMobileMenu}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ben
                                </Link>
                            </li>

                        { /* yes I know "&nbsp;" is an incredibly ugly fix*/}

                        </div>
                    </div>



                </div>

            </nav>

        </>
    );

}

export default Navbar;
