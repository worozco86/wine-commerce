import React from 'react'
import { CartContext } from "../context/ShoppingCartContext";
import { useContext } from 'react';

const CartWidget = () => {
const [cart, setCart] = useContext(CartContext);

const quantity = cart.reduce((acc, curr) => {
  return acc + curr.quantity;
},0);


  return (
    <div className="cart-w">
        <span className="material-symbols-outlined">shopping_cart</span>
        <span className="cart-num">{quantity}</span>
    </div>
  );
};

export default CartWidget