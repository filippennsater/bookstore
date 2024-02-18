import React from 'react';
import '../../App.css';
import './EndSection.scss';
import StaticCard from '../../components/StaticCard/StaticCard';
import '../../components/StaticCard/StaticCard.scss';


function EndSection() {


    return (

    <div className='wrap-end-container'>

            <div className='end-container'>

                <div className='ec-container'>
                    <div className='ec-line'/>
                    <div className='ec-hb-container'>
                        <echeader>PODCAST: The Literary Voyage</echeader>
                    </div>

                    <div className='static-cards-container'>

                        <StaticCard 
                            src='images/pod(1).jpg' 
                            header='The Literary Voyage: #35&nbsp;William Torstensson'
                            text="" 
                            path='/Market' 
                        />

                        <StaticCard 
                            src='images/pod(2).jpg' 
                            header="The Literary Voyage: #34&nbsp;Sofia Ullman" 
                            text='' 
                            path='/' 
                        />

                        <StaticCard 
                            src='images/pod(3).jpg' 
                            header='The Literary Voyage: #33&nbsp;Karl Hoffmann' 
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