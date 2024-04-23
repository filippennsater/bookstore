import React from 'react';
import '../../App.css';
import './CartSection.scss';

function CartSection() {
    return (

        <div className='cart-container'>

            <div className='cart-wrap'>

                <div className='basket-container'>


                    <div className='cart-hb-container'>

                        <div className='cart-hb-header-wrap'>
                            <div className='cartheader'>Shopping Cart</div>
                        </div>

                        <div className='cart-hb-button-wrap'>
                            <div className='cartheader'>X items</div>
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
                            <div className='smallsumheader'>Items X</div>
                        </div>
                        <div className='head-right'>
                            <div className='smallsumheader'>X kr</div>
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

                    <select className='form-select' id="shipping" name="shipping">
                        <option defaultValue="Budbee">Budbee - free</option>
                        <option value="Postnord">Postnord - 15 kr</option>
                        <option value="DHL">DHL - 25 kr</option>
                    </select>

                    <div className='cart-line' />

                    <div className='small-header-container'>
                        <div className='head-left'>
                            <div className='smallsumheader'>Total Cost</div>
                        </div>
                        <div className='head-right'>
                            <div className='smallsumheader'>X kr</div>
                        </div>
                    </div>

                    <form>
                        <input className='checkout-button cursor-pointer' type="submit" value="Checkout" />
                    </form>

                </div>

            </div>

        </div>

    )
}

export default CartSection