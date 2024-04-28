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
                            path='/Market'
                            />
                        </div>

                    </div>

                    <div className='static-cards-container'>

                        <StaticCard 
                            src='images/pod(1).jpg' 
                            header='The Literary Voyage:&nbsp; #35 William Torstensson'
                            text="" 
                            path='/Market' 
                        />

                        <StaticCard 
                            src='images/pod(2).jpg' 
                            header="The Literary Voyage:&nbsp; #34 Sofia Ullman" 
                            text='' 
                            path='/' 
                        />

                        <StaticCard 
                            src='images/pod(3).jpg' 
                            header='The Literary Voyage:&nbsp; #33 Karl Hoffmann' 
                            text="" 
                            path='/Market' 
                        />
                    
                    </div>
                    
                </div>
            
            </div>
            
    </div>

    )
}

export default EndSection