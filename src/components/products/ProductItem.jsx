import React from 'react'
import "./ProductItem.scss";

const ProductItem = ({item}) => {
  return (
    <div className='product-item-container'>
        <img className='product-image' src={item.image} alt={item.title} />
        <div className='product-title'>{item.title}</div>
        <div className='product-price'>{item.price} kr</div>
        <div className='product-qty'>{item.qtyInStock}</div>
        <div className='product-text'>{item.description}</div>
        <div className='buy-button'>Add To Cart</div>
    </div>
  )
}

export default ProductItem