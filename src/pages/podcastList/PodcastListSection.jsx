import React from 'react';
import '../../App.css';
import './PodcastListSection.scss';

import PodcastListItem from '../../components/StaticCard/PodcastListItem';
import { podcasts } from '../../components/StaticCard/Podcasts';

function PodcastListSection() {
    return (

        <div className='podcastList-container'>
            {podcasts.map(podcast => (
                <PodcastListItem 
                    key={podcast.id} 
                    id={podcast.id}
                    image={podcast.image} 
                    title={podcast.title} 
                    description={podcast.description}
                    path={`/podcast/${podcast.id}`} // Dynamic link
                />
            ))}

        </div>

    )
}

export default PodcastListSection