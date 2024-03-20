import React from 'react';
import '../../App.css';
import './HomeButtonSection.scss';
import { Link } from 'react-router-dom';


function HomeButtonSection() {


    return (

    <div className='h-button-container'>

            <Link to='/shop' className='button-container'>
                <h20>OUR WIDE SELECTION OF BOOKS</h20>
            </Link>

            <Link to='https://www.instagram.com/kira.and.minou/' target='empty' className='button-container'>
                <h20>FOLLOW US ON SOCIAL MEDIA</h20>
            </Link>

            <Link to='/contact' className='button-container'>
                <h20>POETRY COMPETITION 2024!</h20>
            </Link>
    
    </div>

    )
}

export default HomeButtonSection