import React from 'react';
import '../../App.css';
import './PodcastListSection.scss';

import PodcastListItem from '../../components/PodcastCard/PodcastListItem';
import { podcasts } from '../../components/PodcastCard/Podcasts';

function PodcastListSection() {
    return (

        <div className='podcastList-container'>

            <div className='podcastList-header'>Podcasts</div>

            {podcasts.map(podcast => (
                <PodcastListItem 
                    key={podcast.id} 
                    id={podcast.id}
                    image={podcast.image} 
                    title={podcast.title} 
                    guest={podcast.guest}
                    description={podcast.description}
                />
            ))}

        </div>

    )
}

export default PodcastListSection