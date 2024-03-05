import React from 'react';
import '../../App.css';
import './WhiteSection.scss';

import ReviewSlider from '../../components/ReviewSlider/ReviewSlider';




function WhiteSection() {


    return (

    <div className='white-container'>

      <div className='whitec-container'>

        <div className='whitec-hb-container'>

              <div className='whitec-hb-header-wrap'>

                    <whitecheader>Reviews</whitecheader>

              </div>
        </div>

        <ReviewSlider/>

      </div>

    </div>

    )
}


export default WhiteSection