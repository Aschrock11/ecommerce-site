import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { getProductData } from './Store';

const CartProduct = ({ id, quantity }) => {
  const cart = useContext(CartContext);
  const productData = getProductData(id);
  return (
    <div>
      <h3>{productData.title}</h3>
      <p>{quantity} total</p>
      <p>${quantity * productData.price.slice(1)}</p>
      <button onClick={() => cart.deleteFromCart(id)}>Remove</button>
    </div>
  );
};

export default CartProduct;
