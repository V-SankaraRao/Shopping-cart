// CartCard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from './store/Slice';
import './App.css'

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id)); // Make sure item.id is correct
  };

  return (
    <div className='card' >
      <img src={item.image} alt={item.name} />
      <button onClick={handleRemove}>Remove</button>
      <h4>{item.price}</h4>
    </div>
  );
};

export default CartCard;
