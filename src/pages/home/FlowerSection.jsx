import React from 'react';
import '../../App.css';
import './FlowerSection.scss';
import SmallCard from '../../components/SmallCard/SmallCard';
import '../../components/SmallCard/SmallCard.scss';


function FlowerSection() {


    return (

    <div className='wrap-flower-container'>

            <div className='flower-container'>

                <div className='fc-container'>
                    <div className='fc-line'/>
                    <div className='fc-hb-container'>
                        <fcheader>NEW ARRIVALS</fcheader>
                    </div>

                    <div className='small-cards-container'>

                        <SmallCard 
                            src='images/book(1).jpg' 
                            header='Explore Beatrice Fitzwilliams new book "What If?"' 
                            text="Intriguing questions about alternate realities and choice" 
                            path='/Market' 
                        />

                        <SmallCard 
                            src='images/book(2).jpg' 
                            header="Enchanting enigmas and captivating adventures" 
                            text='' 
                            path='/' 
                        />

                        <SmallCard 
                            src='images/book(3).jpg' 
                            header='Discover the secrets of craft beer from brewing to tasting!' 
                            text="" 
                            path='/Market' 
                        />

                        <SmallCard 
                            src='images/book(4).jpg' 
                            header="A beautifully illustrated tale about transformation and self-discovery" 
                            text='' 
                            path='/' 
                        />
                    
                    </div>
                    
                </div>
            
            </div>
            
    </div>

    )
}

export default FlowerSection