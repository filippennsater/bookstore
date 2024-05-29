import React from 'react';
import '../../App.css';
import './PearSection.scss';
import MediumCard from '../../components/MediumCard/MediumCard';
import '../../components/MediumCard/MediumCard.scss';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import '../../components/RoundedButton/RoundedButton.scss';


function PearSection() {


    return (

    <div className='wrap-pear-container'>

            <div className='pear-container'>

                <div className='pc-container'>
                    <div className='pc-line'/>
                    <div className='pc-hb-container'>
                        
                        <div className='pc-hb-header-wrap'>
                            <div className='pcheader'>POPULAR</div>
                        </div>

                        <div className='pc-hb-button-wrap'>
                            <RoundedButton
                            text='See more'
                            color='#93CF9C'
                            colorAfter='white'
                            backAfter='#93CF9C'
                            path='/shop'
                            />
                        </div>

                    </div>

                    <div className='medium-cards-container'>

                        <MediumCard 
                            src={require('../../components/products/productImages/book(5).jpg')}
                            header='Elderly Globetrotters' 
                            text="Jasper Wilde" 
                            path='/shop' 
                        />

                        <MediumCard 
                            src={require('../../components/products/productImages/book(6).jpg')}
                            header="Wings" 
                            text="Linnea Berggren"
                            path='/shop' 
                        />

                        <MediumCard 
                            src={require('../../components/products/productImages/book(7).jpg')}
                            header='Damsel' 
                            text="Clara Müller" 
                            path='/shop' 
                        />

                        <MediumCard 
                            src={require('../../components/products/productImages/book(8).jpg')}
                            header="WW2: Echoes" 
                            text='Tobias Hawthorne' 
                            path='/shop' 
                        />
                    
                    </div>
                    
                </div>

            </div>
            
    </div>

    )
}

export default PearSection