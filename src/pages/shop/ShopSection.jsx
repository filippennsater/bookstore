import React from 'react';
import '../../App.css';
import './ShopSection.scss';
import { products } from '../../components/products/products'
import ProductItem from '../../components/products/ProductItem';

function ShopSection() {
    return (

        <div className='shop-container'>

            <h1>Products</h1>
            {products.map((item) => (
                <ProductItem item={item} />
            ))}

        </div>

    )
}

export default ShopSection