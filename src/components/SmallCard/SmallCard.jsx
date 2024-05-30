import React from "react";
import { Link } from "react-router-dom";
import "./SmallCard.scss";

import { connect } from 'react-redux';
import { loadCurrentItem } from "../../redux/Shopping/shopping-actions";

const SmallCard = ({ item, loadCurrentItem }) => {
    return(
        <>
            <Link className="small-card" to={`/product/${item.id}`} onClick={() => loadCurrentItem(item)}>
                <div className="small-card-image-wrap">
                    <img
                    src={item.image}
                    alt="smallboi"
                    className="small-card-image"
                    />
                    <div className="small-card-header">
                        {item.alt1}
                    </div>

                    <div className="small-card-text">
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

  export default connect(null, mapDispatchToProps)(SmallCard);