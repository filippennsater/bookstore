import React from 'react';
import '../../App.css';
import './HomeTransitionSection.scss';
import BigCard from '../../components/BigCards/BigCard';
import '../../components/BigCards/BigCard.scss';


function HomeTransitionSection() {


    return (

    <div className='transition-container'>

        <div className='cards-container'>

        <BigCard src='images/exampleImage.png' header='Last months winner!' text='Bigger Project' path='/' />
        <BigCard src='images/exampleImage.png' header='Last months winner!' text='Bigger Project' path='/' />
        
        </div>
            
    </div>

    )
}

export default HomeTransitionSection