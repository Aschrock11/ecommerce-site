import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { getProductData } from './Store';

const CartProduct = ({ id, quantity }) => {
  const cart = useContext(CartContext);
  const productData = getProductData(id);

  return (
    <div
      className='border-t-[1px]
    border-solid border-gray-200'
    >
      <h3 className='my-2 ml-2'>{productData.title}</h3>
      <img src={productData.img} alt={productData.alt} />
      <div className='ml-2 mt-1'>
        <p>{quantity} total</p>
        <p>${quantity * productData.price.slice(1)}</p>
      </div>

      <button
        className='mx-auto mt-1 mb-4 flex h-8 w-[92%] items-center justify-center rounded-lg border-[1px] border-gray-200 bg-gray-100 text-sm hover:shadow-lg active:bg-gray-200 active:text-gray-500'
        onClick={() => cart.deleteFromCart(id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartProduct;
