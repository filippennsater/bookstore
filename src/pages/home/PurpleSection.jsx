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
                            <purpcheader>NEW ARRIVALS</purpcheader>
                        </div>

                        <div className='purpc-hb-button-wrap'>
                            <RoundedButton
                            text='See more'
                            color='white'
                            colorAfter='#5A2677'
                            backAfter='white'
                            path='/Market'
                            />
                        </div>

                    </div>
            </div>
            
    </div>

    )
}

export default PurpleSection