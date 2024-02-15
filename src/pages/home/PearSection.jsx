import React from 'react';
import '../../App.css';
import './PearSection.scss';
import MediumCard from '../../components/MediumCard/MediumCard';
import '../../components/MediumCard/MediumCard.scss';


function PearSection() {


    return (

    <div className='wrap-pear-container'>

            <div className='pear-container'>

                <div className='pc-container'>
                    <div className='pc-line'/>
                    <div className='pc-hb-container'>
                        <pcheader>POPULAR</pcheader>
                    </div>

                    <div className='medium-cards-container'>

                        <MediumCard 
                            src='images/book(5).jpg' 
                            header='Elderly Globetrotters' 
                            text="Jasper Wilde" 
                            path='/Market' 
                        />

                        <MediumCard 
                            src='images/book(6).jpg' 
                            header="Wings" 
                            text="Linnea Berggren"
                            path='/' 
                        />

                        <MediumCard 
                            src='images/book(7).jpg' 
                            header='Damsel' 
                            text="Clara Müller" 
                            path='/Market' 
                        />

                        <MediumCard 
                            src='images/book(8).jpg' 
                            header="WW2: Echoes" 
                            text='Tobias Hawthorne' 
                            path='/' 
                        />
                    
                    </div>
                    
                </div>

            </div>
            
    </div>

    )
}

export default PearSection