import React from 'react';
import '../../App.css';
import './PodcastListItem.scss';
import "./StaticCard.scss";
import { Link } from "react-router-dom";



function PodcastListItem(props) {
    return (

        <>
            <div className="pli-container">

                <img
                    src={props.image}
                    alt="smallWboi"
                    className="pli-image"
                />

                <div className="pli-left-container">
                    <div className="pli-header">
                        {props.title}
                    </div>
                    <div className="pli-header2">
                        {props.guest}
                    </div>
                </div>

                <div className="pli-right-container">
                    <div className="pli-text">
                        {props.description}
                    </div>
                        <Link className='pli-button-container' to={`/podcast/${props.id}`}>
                            <div className="pli-button">Listen to this podcast&nbsp;&nbsp;<i class="fa-solid fa-play" /></div>
                        </Link>
                </div>

            </div>
        </>
    );
}

export default PodcastListItem