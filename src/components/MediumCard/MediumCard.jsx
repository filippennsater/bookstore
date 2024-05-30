import React from "react";
import { Link } from "react-router-dom";
import "./MediumCard.scss";

import { connect } from 'react-redux';
import { loadCurrentItem } from "../../redux/Shopping/shopping-actions";

const MediumCard = ({ item, loadCurrentItem }) => {
    return(
        <>
            <Link className="medium-card" to={`/product/${item.id}`} onClick={() => loadCurrentItem(item)}>
                <div className="medium-card-image-wrap">
                    <img
                    src={item.image}
                    alt="mediumboi"
                    className="medium-card-image"
                    />
                </div>
                
                <div className="medium-card-header">
                    {item.title}
                </div>

                 <div className="medium-card-text">
                    {item.alt1}
                 </div>
                
            </Link>
        
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
      loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
  };

  export default connect(null, mapDispatchToProps)(MediumCard);