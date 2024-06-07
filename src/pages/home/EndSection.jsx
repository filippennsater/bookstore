import React from 'react';
import '../../App.css';
import './EndSection.scss';
import StaticCard from '../../components/StaticCard/StaticCard';
import '../../components/StaticCard/StaticCard.scss';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import '../../components/RoundedButton/RoundedButton.scss';
import { podcasts } from '../../components/StaticCard/Podcasts';


function EndSection() {


    return (

        <div className='wrap-end-container'>

            <div className='end-container'>

                <div className='ec-container'>
                    <div className='ec-line' />
                    <div className='ec-hb-container'>

                        <div className='ec-hb-header-wrap'>
                            <div className="echeader">PODCAST: The Literary Voyage</div>
                        </div>

                        <div className='ec-hb-button-wrap'>
                            <RoundedButton
                                text='See more'
                                color='black'
                                colorAfter='white'
                                backAfter='black'
                                path='/podcastList'
                            />
                        </div>

                    </div>

                    <div className='static-cards-container'>

                        {podcasts.slice(0,3).map(podcast => (
                            <StaticCard
                                src={podcast.image} 
                                header={podcast.title} 
                                text={podcast.guest} 
                                id={podcast.id}
                            />
                        ))}

                    </div>

                </div>

            </div>

        </div>

    )
}

export default EndSection