import React, { useState } from "react";
//import styles from "./CartItem.module.css";
import './CartItem.scss';

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (

    <div className='cartItem-item-wrap'>
      <div className='cartItem-left-head'>

        <img
          className='cartItem-image'
          src={item.image}
          alt={item.title}
        />

        <div className='cartItem-info'>
          <div className='cartItem-header'>
            {item.title}
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className='deleteItemBtn'
          />
        </div>

      </div>

      <div className='cartItem-other-head'>
        <input
          className="qty-input"
          min="1"
          type="number"
          id="qty"
          name="qty"
          value={input}
          onChange={onChangeHandler}
        />
      </div>

      <div className='cartItem-other-head'>
        {item.price} kr
      </div>

      <div className='cartItem-other-head'>
        {input * item.price} kr
      </div>


    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);