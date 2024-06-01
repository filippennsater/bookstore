import React from 'react';
import '../../App.css';
import './PurpleSection.scss';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import '../../components/RoundedButton/RoundedButton.scss';



function PurpleSection() {


    return (

    <div className='purple-container'>

            <div className='purpc-container'>

                    <div className='purpc-line'/>

                    <div className='purpc-hb-container'>

                        <div className='purpc-hb-header-wrap'>
                            <div className='purpcheader'>BOOK INVENTORY SUGGESTIONS</div>
                        </div>

                        <div className='purpc-hb-button-wrap'>
                            <RoundedButton
                            text='See more'
                            color='white'
                            colorAfter='#5A2677'
                            backAfter='white'
                            path='/suggestion'
                            />
                        </div>

                    </div>

                    <div className='purp-bottom-container'>

                        <div className='purp-circle-container'>
                            <div className='purp-outer-circle'>
                                <div className='purp-circle'/>
                            </div>
                        </div>

                        <div className='purp-text-container'>
                            <div className='purpctext'>Your input matters! We value your recommendations to enhance our store's inventory and cater to your preferences. Ready to share your favorite reads? Click the button to the right and let's make our shelves even better together!</div>
                        </div>

                    </div>

            </div>
            
    </div>

    )
}

export default PurpleSection