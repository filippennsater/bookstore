import React from "react";
import { Link } from "react-router-dom";
import "./MediumCard.scss";

function MediumCard(props){
    return(
        <>
            <Link className="medium-card" to={props.path}>
                <div className="medium-card-image-wrap">
                    <img
                    src={props.src}
                    alt="mediumboi"
                    className="medium-card-image"
                    />
                </div>
                
                <div className="medium-card-header">
                    {props.header}
                </div>

                 <div className="medium-card-text">
                    {props.text}
                 </div>
                
            </Link>
        
        </>
    );
}

export default MediumCard;