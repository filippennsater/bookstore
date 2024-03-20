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
                <h20>A MODERN BOOKSTORE WITH THE BEST PRICES!</h20>
                <Link to='/about' className='first-button'>
                    <buttontext>More about us &gt;&gt;</buttontext>
                </Link>

            </div>
        </div>
    </div>
    )
}

export default HomeSection