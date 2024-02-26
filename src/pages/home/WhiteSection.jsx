import React from 'react';
import '../../App.css';
import './WhiteSection.scss';

import MediumCard from '../../components/MediumCard/MediumCard';
import '../../components/MediumCard/MediumCard.scss';

import Carousel from 'react-bootstrap/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function WhiteSection() {


    return (

    <div className='white-container'>

        <Carousel>


        <Carousel.Item>
        
        <div className='medium-cards-container'>

<MediumCard 
    src='images/book(5).jpg' 
    header='Elderly Globetrotters' 
    text="Jasper Wilde" 
    path='/Market' 
/>

<MediumCard 
    src='images/book(6).jpg' 
    header="Wings" 
    text="Linnea Berggren"
    path='/' 
/>

<MediumCard 
    src='images/book(7).jpg' 
    header='Damsel' 
    text="Clara Müller" 
    path='/Market' 
/>



</div>


      </Carousel.Item>

      



        </Carousel>
            
    </div>

    )
}

export default WhiteSection