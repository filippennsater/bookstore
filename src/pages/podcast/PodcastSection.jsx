import React from 'react';
import '../../App.css';
import './PodcastSection.scss';

import { useParams } from 'react-router-dom';
import { podcasts } from '../../components/StaticCard/Podcasts';

function PodcastSection() {

    const { id } = useParams();
    const podcast = podcasts.find(podcast => podcast.id === parseInt(id));

    return (

        <div className='podcast-container'>

            <h1>{podcast.title}</h1>
            <h2>Guest: {podcast.guest}</h2>

        </div>

    )
}

export default PodcastSection