import React from "react";
import { Link } from "react-router-dom";
import "./SmallCard.scss";

function SmallCard(props){
    return(
        <>
            <Link className="card" to={props.path}>
                <div className="card-image-wrap">
                    <img
                    src={props.src}
                    alt="smallboi"
                    className="card-image"
                    />
                    <div className="small-card-header">
                        {props.header}
                    </div>

                    <div className="small-card-text">
                        {props.text}
                    </div>
                </div>
            </Link>
        
        </>
    );
}

export default SmallCard;