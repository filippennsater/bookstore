import React from "react";
import { Link } from "react-router-dom";
import "./BigCard.scss";

function BigCard(props){
    return(
        <>
            <Link className="card">
                <img
                src={props.src}
                alt="bigboi"
                className="card-image"
                />
            </Link>
        
        </>
    );
}

export default BigCard;