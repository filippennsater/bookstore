import React from 'react';
import '../../App.css';
import './PodcastSection.scss';

import { useParams } from 'react-router-dom';
import { podcasts } from '../../components/PodcastCard/Podcasts';

function PodcastSection() {
    const { id } = useParams();
    const podcast = podcasts.find(podcast => podcast.id === parseInt(id));

    console.log("Podcast ID from URL:", id); // Debugging log
    console.log("Podcast found:", podcast); // Debugging log

    if (!podcast) {
        return <div>Podcast not found</div>;
    }

    return (
        <div className='podcast-container'>
            <img src={podcast.image} alt={podcast.title} />
            <h1>{podcast.title}</h1>
            <h2>Guest: {podcast.guest}</h2>
            <p>{podcast.description}</p>
            <a href={podcast.link} target="_blank" rel="noopener noreferrer">Listen on SoundCloud</a>
        </div>
    );
}

export default PodcastSection;