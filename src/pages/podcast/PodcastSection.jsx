import React from 'react';
import '../../App.css';
import './PodcastSection.scss';

import { useParams } from 'react-router-dom';
import { podcasts } from '../../components/PodcastCard/Podcasts';

function PodcastSection() {
    const { id } = useParams();
    const podcast = podcasts.find(podcast => podcast.id === parseInt(id));

    if (!podcast) {
        return <div>Podcast not found</div>;
    }

    return (


        <div className='podcast-container'>

            <div className='podcast-info-container'>

                <div className='podcast-left-container'>

                    <div className='podcast-picture-container'>
                        <img
                            src={podcast.image}
                            alt={podcast.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    <div className='podcast-name-container'>
                        {podcast.guest}
                    </div>

                </div>

                <div className='podcast-right-container'>

                    <div className='podcast-info-head-container'>
                        {podcast.title}
                    </div>
                    <div className='podcast-info-text-container'>
                        {podcast.description}
                    </div>


                    <div className='soundcloud-container'>

                        <div
                            dangerouslySetInnerHTML={{
                                //This soundcloud link is just a placeholder until there are real podcasts
                                __html: `
                                    <iframe 
                                    width="100%" 
                                    height="170" 
                                    scrolling="no" 
                                    frameborder="no" 
                                    allow="autoplay" 
                                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1841915679&color=%23572d87&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                                </iframe>
                                <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
                                    <a href="https://soundcloud.com/user-112527409" title="Nord" target="_blank" style="color: #cccccc; text-decoration: none;">Nord</a> · 
                                    <a href="https://soundcloud.com/user-112527409/lofi-test" title="Lofi Test" target="_blank" style="color: #cccccc; text-decoration: none;">Lofi Test</a>
                                </div>`
                            }}
                        />

                    </div>

                </div>

            </div>

        </div>
    );
}

export default PodcastSection;