import React from 'react';
import '../../App.css';
import './GreenSection.scss';
import SmallWhiteCard from '../../components/SmallWhiteCard/SmallWhiteCard';
import '../../components/SmallWhiteCard/SmallWhiteCard.scss';


function GreenSection() {


    return (

    <div className='green-container'>

                <div className='gc-container'>
                    <div className='gc-line'/>
                    <div className='gc-hb-container'>
                        <gcheader>AUDIOBOOKS</gcheader>
                    </div>

                    <div className='small-white-cards-container'>

                        <SmallWhiteCard 
                            src='images/book(1).jpg' 
                            header='Explore Beatrice Fitzwilliams new book "What If?"' 
                            text="Intriguing questions about alternate realities and choice" 
                            path='/Market' 
                        />

                        <SmallWhiteCard 
                            src='images/book(2).jpg' 
                            header="Enchanting enigmas and captivating adventures" 
                            text='' 
                            path='/' 
                        />

                        <SmallWhiteCard 
                            src='images/book(3).jpg' 
                            header='Discover the secrets of craft beer from brewing to tasting!' 
                            text="" 
                            path='/Market' 
                        />

                        <SmallWhiteCard 
                            src='images/book(4).jpg' 
                            header="A beautifully illustrated tale about transformation and self-discovery" 
                            text='' 
                            path='/' 
                        />
                    
                    </div>
                    
                </div>
            
    </div>

    )
}

export default GreenSection