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
                            <cartheader>Shopping Cart</cartheader>
                        </div>

                        <div className='cart-hb-button-wrap'>
                            <cartheader>X items</cartheader>
                        </div>

                    </div>
                    <div className='cart-line' />

                </div>




                <div className='summary-container'>

                    <div className='cart-hb-container'>

                        <div className='cart-hb-header-wrap'>
                            <cartheader>Order Summary</cartheader>
                        </div>

                    </div>
                    <div className='cart-line' />

                    <div className='small-header-container'>
                        <div className='head-left'>
                            <smallsumheader>Items X</smallsumheader>
                        </div>
                        <div className='head-right'>
                            <smallsumheader>X kr</smallsumheader>
                        </div>
                    </div>

                    <div className='small-header-container'>
                        <div className='head-left'>
                            <smallsumheader>Shipping</smallsumheader>
                        </div>
                        <div className='head-right'>
                            <smallsumheader></smallsumheader>
                        </div>
                    </div>

                    <select className='form-select' id="shipping" name="shipping">
                        <option value="Budbee" selected>Budbee - free</option>
                        <option value="Postnord">Postnord - 15 kr</option>
                        <option value="DHL">DHL - 25 kr</option>
                    </select>

                    <div className='cart-line' />

                    <div className='small-header-container'>
                        <div className='head-left'>
                            <smallsumheader>Total Cost</smallsumheader>
                        </div>
                        <div className='head-right'>
                            <smallsumheader>X kr</smallsumheader>
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