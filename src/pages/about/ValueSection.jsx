import React from 'react';
import '../../App.css';
import './ValueSection.scss';




function ValueSection() {


    return (

    <div className='val-container'>

            <div className='valc-container'>

                    <div className='valc-hb-container'/>

                    <div className='val-bottom-container'>

                        <div className='val-text-container'>
                            <valctext>At Philip & Pen, we are committed to sustainable practices in every aspect of our online bookstore. We prioritize environmentally friendly packaging materials, opting for recycled and biodegradable options wherever possible to minimize our ecological footprint. Additionally, we partner with publishers who share our values, selecting books printed on sustainably sourced paper and utilizing digital distribution methods whenever feasible. We actively encourage customers to consider digital formats for their reading enjoyment, reducing the need for physical materials. Through these efforts, we strive to contribute positively to the environment while providing exceptional literary experiences to our valued patrons!</valctext>
                        </div>

                        <div className='val-circle-container'>
                            <div className='val-outer-circle'>
                                <div className='val-circle'/>
                            </div>
                        </div>
                        
                    </div>

            </div>
            
    </div>

    )
}

export default ValueSection