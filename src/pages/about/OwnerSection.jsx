import React from 'react';
import '../../App.css';
import './OwnerSection.scss';




function OwnerSection() {


    return (

    <div className='own-container'>

            <div className='ownc-container'>

                    <div className='ownc-hb-container'/>

                    <div className='own-bottom-container'>

                    <div className='own-circle-container'>
                            <div className='own-outer-circle'>
                                <div className='own-circle'/>
                            </div>
                        </div>

                        <div className='own-text-container'>
                            <ownctext>Hello and welcome to our website, my name is Philip and I'm delighted to greet you to our online bookstore as I'm the proud owner of Philip & Pen, your go-to destination for all things books! From our modest beginnings, our love for literature has been the driving force behind our journey. We've poured our hearts into curating a diverse selection of titles, hoping to cater to every reader's taste. Take your time exploring our virtual shelves, and may you find joy in every page turned. Happy reading, and thank you for choosing Philip & Pen!</ownctext>
                        </div>                        
                        
                    </div>

            </div>
            
    </div>

    )
}

export default OwnerSection