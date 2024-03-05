import React from "react";
import { Link } from "react-router-dom";
import "./SmallAudioCard.scss";

function SmallAudioCard(props){
    return(
        <>
            <Link className="small-audio-card" to={props.path}>
                <div className="small-audio-card-image-wrap">
                    <img
                    src={props.src}
                    alt="smallWboi"
                    className="small-audio-card-image"
                    />
                    <div className="audio-logo"/>
                </div>

                    <div className="small-audio-card-header">
                        {props.header}
                    </div>

                    <div className="small-audio-card-text">
                        {props.text}
                    </div>
                
            </Link>
        
        </>
    );
}

export default SmallAudioCard;