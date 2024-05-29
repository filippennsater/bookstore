import React from "react";
import "./SingleItemSection.scss";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const SingleItemSection = ({ current, addToCart }) => {

  return (
    <div className='singleItem-container'>
      <div className='singleItem-info-wrap'>
        <div className='singleItem-left-container'>
          <img
            className='singleItem-img'
            src={current.image}
            alt={current.title}
          />
        </div>
        <div className='singleItem-right-container'>
          <div className='h35'>{current.title}</div>
          <div className='p35'>{current.description}</div>
          <div className='h35'>{current.price} kr</div>

          <div className='h36'>Category:
            <div className='p36'>{current.category}
            </div>
          </div>

          <div className='singleItem-button-container'>
            <button
              onClick={() => addToCart(current.id)}
              className='singleItem-add-button'
            >
              Add To Cart
            </button>
          </div>
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