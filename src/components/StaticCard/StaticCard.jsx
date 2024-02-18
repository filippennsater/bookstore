import React from "react";
import { Link } from "react-router-dom";
import "./SmallWhiteCard.scss";

function SmallWhiteCard(props){
    return(
        <>
            <Link className="small-white-card" to={props.path}>
                <div className="small-white-card-image-wrap">
                    <img
                    src={props.src}
                    alt="smallWboi"
                    className="small-white-card-image"
                    />
                </div>

                    <div className="small-white-card-header">
                        {props.header}
                    </div>

                    <div className="small-white-card-text">
                        {props.text}
                    </div>
                
            </Link>
        
        </>
    );
}

export default SmallWhiteCard;