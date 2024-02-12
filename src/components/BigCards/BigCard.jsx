import React from "react";
import { Link } from "react-router-dom";
import "./BigCard.scss";

function BigCard(props){
    return(
        <>
            <Link className="card">
                <div className="card-image-wrap">
                    <img
                    src={props.src}
                    alt="bigboi"
                    className="card-image"
                    />
                </div>
            </Link>
        
        </>
    );
}

export default BigCard;