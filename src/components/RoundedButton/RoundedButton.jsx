import React from "react";
import { Link } from "react-router-dom";
import "./RoundedButton.scss";
import { useState } from 'react';




function RoundedButton(props){
    
    const [hovered, setHovered] = useState(false);
    
    return(
        <>
        
            <Link className="rounded-button" to={props.path} style={{ 
                borderColor: props.color,
                color: hovered ? props.colorAfter : props.color,
                backgroundColor: hovered ? props.backAfter : 'initial', // Change background color on hover
                transition: 'background-color 0.3s' // Add smooth transition for hover effect

            }}

            onMouseEnter={() => setHovered(true)} // Set hovered to true on mouse enter
            onMouseLeave={() => setHovered(false)} // Set hovered to false on mouse leave
        >
                
                    <div className="rounded-button-text">
                        {props.text}
                    </div>

            </Link>
        
        </>
    );
}

export default RoundedButton;