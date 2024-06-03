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

                <div className="plid-header">
                    {props.title}
                </div>

                <div className="pli-text">
                    {props.description}
                </div>
                
          </div>
        </>
    );
}

export default PodcastListItem