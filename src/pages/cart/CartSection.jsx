import React, { useState, useEffect } from "react";
import '../../App.css';
import './CartSection.scss';

import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";

const CartSection = ({ cart }) => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price;
        });

        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    const [selectedShipping, setSelectedShipping] = useState("0");

    const handleShippingChange = (e) => {
        setSelectedShipping(e.target.value);
    };

    // Convert selectedShipping to a number, defaulting to 0 if empty string
    const shippingCost = parseInt(selectedShipping) || 0; // Use 0 if NaN

    const [showRedText, setShowRedText] = useState(false);

    const handleSettingsClick = () => {
        setShowRedText(true);
        setTimeout(() => {
            setShowRedText(false);
        }, 3000);
    };

    return (

        <div className='cart-container'>
            <div className='cart-wrap'>
                <div className='basket-container'>
                    <div className='cart-hb-container'>

                        <div className='cart-hb-header-wrap'>
                            <div className='cartheader'>Shopping Cart</div>
                        </div>

                        <div className='cart-hb-button-wrap'>
                            <div className='cartheader'>{totalItems} items</div>
                        </div>

                    </div>

                    <div className='cart-line' />

                    <div className='basket-item-wrap'>
                        <div className='basket-left-head'>
                            <div className='basketheader'>Product Details</div>
                        </div>
                        <div className='basket-other-head'>
                            <div className='basketheader'>Quantity</div>
                        </div>
                        <div className='basket-other-head'>
                            <div className='basketheader'>Price</div>
                        </div>
                        <div className='basket-other-head'>
                            <div className='basketheader'>Total</div>
                        </div>
                    </div>

                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}

                </div>



                <div className='summary-container'>
                    <div className='cart-hb-container'>
                        <div className='cart-hb-header-wrap'>
                            <div className='cartheader'>Order Summary</div>
                        </div>
                    </div>

                    <div className='cart-line' />

                    <div className='small-header-container'>
                        <div className='head-left'>
                            <div className='smallsumheader'>Items {totalItems}</div>
                        </div>
                        <div className='head-right'>
                            <div className='smallsumheader'>{totalPrice} kr</div>
                        </div>
                    </div>

                    <div className='small-header-container'>
                        <div className='head-left'>
                            <div className='smallsumheader'>Shipping</div>
                        </div>
                        <div className='head-right'>
                            <div className='smallsumheader'></div>
                        </div>
                    </div>

                    <select className='form-select' id="shipping" name="shipping" value={selectedShipping} onChange={handleShippingChange}>
                        <option defaultValue="0">Budbee - free</option>
                        <option value="15">Postnord - 15 kr</option>
                        <option value="25">DHL - 25 kr</option>
                    </select>

                    <div className='cart-line' />

                    <div className='small-header-container'>
                        <div className='head-left'>
                            <div className='smallsumheader'>Total Cost</div>
                        </div>
                        <div className='head-right'>
                            <div className='smallsumheader'>{totalPrice + shippingCost} kr</div>
                        </div>
                    </div>

                    <form>
                        <input className='checkout-button cursor-pointer' type="submit" value="Checkout" onClick={handleSettingsClick}/>
                    </form>

                    <div className='redTextCart-container'>
                        {showRedText && <div className="redTextCart">This is only a demo</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(CartSection);