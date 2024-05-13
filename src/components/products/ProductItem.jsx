import React from 'react'

const ProductItem = ({item}) => {
  return (
    <div>
        <img src={item.image} alt={item.title} />
        
    </div>
  )
}

export default ProductItem