import React from 'react';
import '../../App.css';
import './FlowerSection.scss';
import SmallCard from '../../components/SmallCard/SmallCard';
import '../../components/SmallCard/SmallCard.scss';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import '../../components/RoundedButton/RoundedButton.scss';

import { connect } from 'react-redux';

const FlowerSection = ({ products }) => {

    return (

        <div className='wrap-flower-container'>

            <div className='flower-container'>

                <div className='fc-container'>
                    <div className='fc-line' />
                    <div className='fc-hb-container'>

                        <div className='fc-hb-header-wrap'>
                            <div className='fcheader'>NEW ARRIVALS</div>
                        </div>

                        <div className='fc-hb-button-wrap'>
                            <RoundedButton
                                text='See more'
                                color='#42752F'
                                colorAfter='white'
                                backAfter='#42752F'
                                path='/shop'
                            />
                        </div>

                    </div>

                    <div className='small-cards-container'>

                        {products.slice(0, 4).map((item) => (
                            <SmallCard key={item.id} item={item} />
                        ))}


                        {/*

                        How I did it before with props, now I load all the info from my local "database"

                        <SmallCard 
                            src={require('../../components/products/productImages/book(1).jpg')}
                            header='Explore Beatrice Fitzwilliams new book "What If?"' 
                            text="Intriguing questions about alternate realities and choice" 
                            path='/shop' 
                        />

                        <SmallCard 
                            src={require('../../components/products/productImages/book(2).jpg')}
                            header="Enchanting enigmas and captivating adventures" 
                            text='' 
                            path='/shop' 
                        />

                        <SmallCard 
                            src={require('../../components/products/productImages/book(3).jpg')}
                            header='Discover the secrets of craft beer from brewing to tasting!' 
                            text="" 
                            path='/shop' 
                        />

                        <SmallCard 
                            src={require('../../components/products/productImages/book(4).jpg')}
                            header="A beautifully illustrated tale about transformation and self-discovery" 
                            text='' 
                            path='/shop' 
                        />
                    */}

                    </div>

                </div>

            </div>

        </div>

    )
}

const mapStateToProps = state => {
    return {
        products: state.shop.products,
    };
};

export default connect(mapStateToProps)(FlowerSection);