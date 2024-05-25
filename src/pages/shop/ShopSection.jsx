import React from 'react';
import '../../App.css';
import './ShopSection.scss';
//import { products } from '../../components/products/products'
import ProductItem from '../../components/products/ProductItem';

import { connect } from 'react-redux';

const ShopSection= ({products}) => {
    return (

        <div className='shop-container'>
            <div className='shop-header'>Products</div>
            <div className='product-list-container'>

                
                {products.map((item) => (
                    <ProductItem key={item.id} item={item} />
                ))}
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return{
        products: state.shop.products,
    };
};

export default connect(mapStateToProps)(ShopSection);