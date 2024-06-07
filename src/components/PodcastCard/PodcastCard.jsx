import React from "react";
import { Link } from "react-router-dom";
import "./PodcastCard.scss";

function PodcastCard(props) {
    return (
        <>
            <Link className="podcast-card" to={`/podcast/${props.id}`}>

                <div className="podcast-card-image-wrap">
                    <img
                        src={props.src}
                        alt="smallWboi"
                        className="podcast-card-image"
                    />
                </div>

                <div className="podcast-card-header">
                    {props.header}
                </div>

                <div className="podcast-card-text">
                    {props.text}
                </div>
                
            </Link>
        </>
    );
}

export default PodcastCard;