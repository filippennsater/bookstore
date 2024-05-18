import React from 'react'
import "./ProductItem.scss";

const ProductItem = ({item}) => {
  return (
    <div className='product-item-container'>
        <img className='product-image' src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.price}</p>
        <p>{item.qtyInStock}</p>
        <p>{item.description}</p>
    </div>
  )
}

export default ProductItem