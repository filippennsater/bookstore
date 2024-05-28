import React from 'react'
import "./ProductItem.scss";
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { loadCurrentItem, addToCart } from "../../redux/Shopping/shopping-actions";


const ProductItem = ({ item, addToCart, loadCurrentItem }) => {
  return (
    <div className='product-item-container'>
      <Link to={`/product/${item.id}`} onClick={() => loadCurrentItem(item)}>
        <img className='product-image' src={item.image} alt={item.title} />
        <div className='product-title'>{item.title}</div>
      </Link>
      <div className='product-price'>{item.price} kr</div>
      <div className='product-qty'>{item.qtyInStock}</div>
      <div className='product-text'>{item.description}</div>
      <button className='buy-button' onClick={() => addToCart(item.id)}>Add To Cart</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);