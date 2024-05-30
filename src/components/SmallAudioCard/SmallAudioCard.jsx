import React from "react";
import { Link } from "react-router-dom";
import "./SmallAudioCard.scss";

import { connect } from 'react-redux';
import { loadCurrentItem } from "../../redux/Shopping/shopping-actions";

const SmallAudioCard = ({ item, loadCurrentItem }) => {

    return(
        <>
            <Link className="small-audio-card" to={`/product/${item.id}`} onClick={() => loadCurrentItem(item)}>
                <div className="small-audio-card-image-wrap">
                    <img
                    src={item.image}
                    alt="smallWboi"
                    className="small-audio-card-image"
                    />
                    <div className="audio-logo"/>
                </div>

                    <div className="small-audio-card-header">
                        {item.title}
                    </div>

                    {/* 
                    <div className="small-audio-card-text">
                        {props.text}
                    </div>
                    */}
                    
            </Link>
        
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
      loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
  };

  export default connect(null, mapDispatchToProps)(SmallAudioCard);