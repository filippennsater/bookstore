import React from "react";
import { Link } from "react-router-dom";
import "./StaticCard.scss";

function StaticCard(props){
    return(
        <>
            <Link className="static-card" to={props.path}>
                <div className="static-card-image-wrap">
                    <img
                    src={props.src}
                    alt="smallWboi"
                    className="static-card-image"
                    />
                </div>

                    <div className="static-card-header">
                        {props.header}
                    </div>

                    <div className="static-card-text">
                        {props.text}
                    </div>
                
            </Link>
        
        </>
    );
}

export default StaticCard;