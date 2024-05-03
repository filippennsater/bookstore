import React from 'react';
import '../../App.css';
import './EndSection.scss';
import StaticCard from '../../components/StaticCard/StaticCard';
import '../../components/StaticCard/StaticCard.scss';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import '../../components/RoundedButton/RoundedButton.scss';


function EndSection() {


    return (

    <div className='wrap-end-container'>

            <div className='end-container'>

                <div className='ec-container'>
                    <div className='ec-line'/>
                    <div className='ec-hb-container'>

                        <div className='ec-hb-header-wrap'>
                            <div className="echeader">PODCAST: The Literary Voyage</div>
                        </div>

                        <div className='ec-hb-button-wrap'>
                            <RoundedButton
                            text='See more'
                            color='black'
                            colorAfter='white'
                            backAfter='black'
                            path='/'
                            />
                        </div>

                    </div>

                    <div className='static-cards-container'>

                        <StaticCard 
                            src='images/pod(1).jpg' 
                            header='The Literary Voyage: #35'
                            text="William Torstensson" 
                            path='/' 
                        />

                        <StaticCard 
                            src='images/pod(2).jpg' 
                            header="The Literary Voyage: #34" 
                            text='Sofia Ullman' 
                            path='/' 
                        />

                        <StaticCard 
                            src='images/pod(3).jpg' 
                            header='The Literary Voyage: #33'
                            text="Karl Hoffmann" 
                            path='/' 
                        />
                    
                    </div>
                    
                </div>
            
            </div>
            
    </div>

    )
}

export default EndSection