import React from 'react';
import '../../App.css';
import './ValueSection.scss';




function ValueSection() {


    return (

    <div className='val-container'>

            <div className='valc-container'>

                    <div className='valc-line'/>

                    <div className='valc-hb-container'>

                        <div className='valc-hb-header-wrap'>
                            <valcheader>Our values</valcheader>
                        </div>

                        

                    </div>

                    <div className='val-bottom-container'>

                        <div className='val-circle-container'>
                            <div className='val-outer-circle'>
                                <div className='val-circle'/>
                            </div>
                        </div>

                        <div className='val-text-container'>
                            <valctext>Your input matters! We value your recommendations to enhance our store's inventory and cater to your preferences. Ready to share your favorite reads? Click the button to the right and let's make our shelves even better together!</valctext>
                        </div>

                    </div>

            </div>
            
    </div>

    )
}

export default ValueSection