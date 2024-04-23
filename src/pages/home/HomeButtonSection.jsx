import React from 'react';
import '../../App.css';
import './HomeButtonSection.scss';
import { Link } from 'react-router-dom';


function HomeButtonSection() {


    return (

    <div className='h-button-container'>

            <Link to='/shop' className='button-container'>
                <div className='homebuttonsheader'>OUR WIDE SELECTION OF BOOKS</div>
            </Link>

            <Link to='https://www.instagram.com/kira.and.minou/' target='empty' className='button-container'>
                <div className='homebuttonsheader'>FOLLOW US ON SOCIAL MEDIA</div>
            </Link>

            <Link to='/contact' className='button-container'>
                <div className='homebuttonsheader'>POETRY COMPETITION 2024!</div>
            </Link>
    
    </div>

    )
}

export default HomeButtonSection