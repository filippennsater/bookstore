import React from 'react';
import '../../App.css';
import './GreenSection.scss';
import SmallAudioCard from '../../components/SmallAudioCard/SmallAudioCard';
import '../../components/SmallAudioCard/SmallAudioCard.scss';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import '../../components/RoundedButton/RoundedButton.scss';


function GreenSection() {


    return (

    <div className='green-container'>

                <div className='gc-container'>
                    <div className='gc-line'/>
                    <div className='gc-hb-container'>

                    <div className='gc-hb-header-wrap'>
                            <div className='gcheader'>AUDIOBOOKS</div>
                        </div>

                        <div className='gc-hb-button-wrap'>
                            <RoundedButton
                            text='See more'
                            color='white'
                            colorAfter='#93CF9C'
                            backAfter='white'
                            path='/shop'
                            />
                        </div>
                    </div>

                    <div className='small-audio-cards-container'>

                        <SmallAudioCard 
                            src={require('../../components/products/productImages/audiobook(1).jpg')}
                            header='Vincent' 
                            text="" 
                            path='/shop' 
                        />

                        <SmallAudioCard 
                            src={require('../../components/products/productImages/audiobook(2).jpg')}
                            header="Reflections by the Moonlit Pond" 
                            text='' 
                            path='/shop' 
                        />

                        <SmallAudioCard 
                            src={require('../../components/products/productImages/audiobook(3).jpg')}
                            header='A Summer Saga' 
                            text="" 
                            path='/shop' 
                        />

                        <SmallAudioCard 
                            src={require('../../components/products/productImages/audiobook(4).jpg')}
                            header="DR. Raven" 
                            text='' 
                            path='/shop' 
                        />
                    
                    </div>
                    
                </div>
            
    </div>

    )
}

export default GreenSection