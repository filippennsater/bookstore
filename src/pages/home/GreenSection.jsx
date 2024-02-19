import React from 'react';
import '../../App.css';
import './GreenSection.scss';
import SmallWhiteCard from '../../components/SmallWhiteCard/SmallWhiteCard';
import '../../components/SmallWhiteCard/SmallWhiteCard.scss';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import '../../components/RoundedButton/RoundedButton.scss';


function GreenSection() {


    return (

    <div className='green-container'>

                <div className='gc-container'>
                    <div className='gc-line'/>
                    <div className='gc-hb-container'>

                    <div className='gc-hb-header-wrap'>
                            <gcheader>AUDIOBOOKS</gcheader>
                        </div>

                        <div className='gc-hb-button-wrap'>
                            <RoundedButton
                            text='See more'
                            color='white'
                            colorAfter='#93CF9C'
                            backAfter='white'
                            path='/Market'
                            />
                        </div>
                    </div>

                    <div className='small-white-cards-container'>

                        <SmallWhiteCard 
                            src='images/audiobook(1).jpg' 
                            header='Vincent' 
                            text="" 
                            path='/Market' 
                        />

                        <SmallWhiteCard 
                            src='images/audiobook(2).jpg' 
                            header="Reflections by the Moonlit Pond" 
                            text='' 
                            path='/' 
                        />

                        <SmallWhiteCard 
                            src='images/audiobook(3).jpg' 
                            header='A Summer Saga' 
                            text="" 
                            path='/Market' 
                        />

                        <SmallWhiteCard 
                            src='images/audiobook(4).jpg' 
                            header="DR. Raven" 
                            text='' 
                            path='/' 
                        />
                    
                    </div>
                    
                </div>
            
    </div>

    )
}

export default GreenSection