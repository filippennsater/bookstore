import React from 'react';
import '../../App.css';
import './HomeTransitionSection.scss';
import BigCard from '../../components/BigCards/BigCard';
import '../../components/BigCards/BigCard.scss';


function HomeTransitionSection() {


    return (

    <div className='transition-container'>

        <div className='cards-container'>

        <BigCard 
            src='images/ex1.jpg' 
            header='Last months winner!' 
            text='Bigger Project' 
            path='/' 
        />

        <BigCard 
            src='images/ex2.jpg' 
            header='Last months poetry winner!' 
            text='In the warmly embracing competition arena stood Elsa Vinterdal, whose beautiful sonnet "Shadows of Euphoria" enchanted the judges and clinched the first place. In second place followed Viktor Månsdotter with his gripping poetry cycle "Hovering Melancholy", while the profound Nils Björnsson took third place with his lyrical ode "The Day That Sings". A heartfelt congratulations to all three for their impressive contributions to the art of poetry!' 
            path='/' 
        />
        
        </div>
            
    </div>

    )
}

export default HomeTransitionSection