import React from 'react';
import '../../App.css';
import './HomeTransitionSection.scss';
import BigCard from '../../components/BigCards/BigCard';


function HomeTransitionSection() {


    return (

    <div className='transition-container'>

        <BigCard src='images/exampleImage.png' header='Last months winner!' text='Bigger Project' path='/' />
        <BigCard src='images/exampleImage.png' header='Last months winner!' text='Bigger Project' path='/' />
            
    </div>

    )
}

export default HomeTransitionSection