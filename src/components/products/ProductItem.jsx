import React from 'react'
import "./ProductItem.scss";
//import { Link } from 'react-router-dom';

import {connect} from 'react-redux';
import { addToCart } from "../../redux/Shopping/shopping-actions";

const ProductItem = ({item, addToCart}) => {
  return (
    <div className='product-item-container'>
        <img className='product-image' src={item.image} alt={item.title} />
        <div className='product-title'>{item.title}</div>
        <div className='product-price'>{item.price} kr</div>
        <div className='product-qty'>{item.qtyInStock}</div>
        <div className='product-text'>{item.description}</div>
        <div className='buy-button' onClick={() => addToCart(item.id)}>Add To Cart</div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    //loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);