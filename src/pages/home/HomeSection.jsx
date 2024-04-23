import React from 'react';
import '../../App.css';
import './HomeSection.scss';
import { Link } from 'react-router-dom';


function HomeSection() {


    return (
    <div className='super-container'>
        <div className='hero-container'>
            <div className='logo-container'/>

            <div className='intro-container'>
                <div className='homeheader'>A MODERN BOOKSTORE WITH THE BEST PRICES!</div>
                <Link to='/about' className='first-button'>
                    <div className='buttontext'>More about us &gt;&gt;</div>
                </Link>

            </div>
        </div>
    </div>
    )
}

export default HomeSection