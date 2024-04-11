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


                    <form>
                        <label>
                            Name<br />
                            <input className='input-competition' type="text" name="name" /><br />
                        </label>
                        <label>
                            Email<br />
                            <input className='input-competition' type="text" name="name" /><br />
                        </label>
                        <label>
                            Phonenumber<br />
                            <input className='input-competition' type="text" name="name" /><br /><br />
                        </label>

                        <input type="file" />
                        <input type="submit" value="Submit" />
                    </form>

                </div>

            </div>

        </div>

    )
}

export default CartSection