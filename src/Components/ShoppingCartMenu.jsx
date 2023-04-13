import React, { useContext } from 'react';
import { CartContext } from '../Components/CartContext';
import CartProduct from './CartProduct';
function ShoppingCartMenu({ productsCount }) {
  const cart = useContext(CartContext);
  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };
  return (
    <div className='absolute right-0 mt-[35px] h-[800px] w-1/4  bg-white shadow-lg'>
      <p className='ml-2 text-lg'>{`${productsCount} items in cart`}</p>
      <div className='flex h-[78%] flex-col overflow-y-scroll'>
        <div>
          {cart.items.map((currentProduct, idx) => (
            <CartProduct
              id={currentProduct.id}
              quantity={currentProduct.quantity}
              key={currentProduct.id}
            />
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='mt-2 flex justify-center'>
          <h1 className='text-lg'>{`Total: $${cart.getTotalCost()}`}</h1>
        </div>
        <button
          className='flex h-8 w-[92%] items-center justify-center rounded-lg border-[1px] border-gray-200 bg-gray-100 text-sm hover:shadow-lg active:bg-gray-200 active:text-gray-500'
          onClick={checkout}
        >
          Purchase Items
        </button>
      </div>
    </div>
  );
}

export default ShoppingCartMenu;
