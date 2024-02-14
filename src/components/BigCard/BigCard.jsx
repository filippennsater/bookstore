import React from "react";
import { Link } from "react-router-dom";
import "./BigCard.scss";

function BigCard(props){
    return(
        <>
            <Link className="card" to={props.path}>
                <div className="card-image-wrap">
                    <img
                    src={props.src}
                    alt="bigboi"
                    className="card-image"
                    />
                    <div className="big-card-header">
                        {props.header}
                    </div>

                    <div className="big-card-text">
                        {props.text}
                    </div>
                </div>
            </Link>
        
        </>
    );
}

export default BigCard;