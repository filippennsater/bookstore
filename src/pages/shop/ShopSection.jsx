import React from 'react';
import '../../App.css';
import './ShopSection.scss';
import { products } from '../../components/products/products'
import ProductItem from '../../components/products/ProductItem';

function ShopSection() {
    return (

        <div className='shop-container'>
            <div className='shop-header'>Products</div>
            <div className='product-list-container'>

                
                {products.map((item) => (
                    <ProductItem item={item} />
                ))}
            </div>
        </div>

    )
}

export default ShopSection