import React from "react";
import "./SingleItemSection.scss";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const SingleItemSection = ({ current, addToCart }) => {

  return (
    <div className='SingleItem-container'>
      <div className='SingleItem'>
        <img
          className='singleItem-image'
          src={current.image}
          alt={current.title}
        />
        <div className='singleItem-details'>
          <div className='details-title'>{current.title}</div>
          <div className='details-description'>{current.description}</div>
          <div className='details-price'>$ {current.price}</div>

          <button
            onClick={() => addToCart(current.id)}
            className='details-addBtn'
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItemSection);