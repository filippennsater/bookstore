import React from "react";
import { Link } from "react-router-dom";
import "./BigCard.scss";

import { connect } from 'react-redux';
import { loadCurrentItem } from "../../redux/Shopping/shopping-actions";

const BigCard = ({ item, loadCurrentItem }) => {

    return(
        <>
            <Link className="big-card" to={`/product/${item.id}`} onClick={() => loadCurrentItem(item)}>
                <div className="big-card-image-wrap">
                    <img
                    src={item.image}
                    alt="bigboi"
                    className="big-card-image"
                    />
                    <div className="big-card-header">
                        {item.alt1}
                    </div>

                    <div className="big-card-text">
                        {item.alt2}
                    </div>
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

  export default connect(null, mapDispatchToProps)(BigCard);