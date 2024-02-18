import React from 'react';
import '../../App.css';
import './EndSection.scss';
import SmallCard from '../../components/SmallCard/SmallCard';
import '../../components/SmallCard/SmallCard.scss';


function EndSection() {


    return (

    <div className='wrap-end-container'>

            <div className='end-container'>

                <div className='ec-container'>
                    <div className='ec-line'/>
                    <div className='ec-hb-container'>
                        <fcheader>PODCAST: The Literary Voyage</fcheader>
                    </div>

                    <div className='small-cards-container'>

                        <SmallCard 
                            src='images/pod(1).jpg' 
                            header='Explore Beatrice Fitzwilliams new book "What If?"' 
                            text="" 
                            path='/Market' 
                        />

                        <SmallCard 
                            src='images/pod(2).jpg' 
                            header="Enchanting enigmas and captivating adventures" 
                            text='' 
                            path='/' 
                        />

                        <SmallCard 
                            src='images/pod(3).jpg' 
                            header='Discover the secrets of craft beer from brewing to tasting!' 
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