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
            header='Our top seller!' 
            text="This month's top-selling book is Whispers of Serenity. Lose yourself in its gripping tale of adventure and redemption. With twists that will leave you breathless, it's a must-read for any book lover!" 
            path='/Market' 
        />

        <BigCard 
            src='images/ex2.jpg' 
            header="Poetry contest winner 2023" 
            text='Elsa Vinterdal, with her beautiful sonnet "Shadows of Euphoria" enchanted the judges and clinched the first place. In second place followed Viktor Månsdotter with his gripping poetry cycle "Hovering Melancholy", while the profound Nils Björnsson took third place with his lyrical ode "The Day That Sings". A heartfelt congratulations to all three for their impressive contributions to the art of poetry!' 
            path='/' 
        />
        
        </div>
            
    </div>

    )
}

export default HomeTransitionSection