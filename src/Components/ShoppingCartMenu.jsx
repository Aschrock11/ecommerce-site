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
    <div className='absolute right-0 mt-[44px] h-[800px] w-1/4 bg-white shadow-lg'>
      <div className='flex flex-col'>
        <div>
          <p>{`you have ${productsCount} items in your cart`}</p>

          {cart.items.map((currentProduct, idx) => (
            <CartProduct
              id={currentProduct.id}
              img={currentProduct.img}
              quantity={currentProduct.quantity}
              key={currentProduct.id}
            />
          ))}
          <img src='' alt='' />

          <h1>{`Total: $${cart.getTotalCost()}`}</h1>
        </div>
        <div className='flex justify-center'>
          <button
            className='flex h-8 w-[92%] items-center justify-center rounded-lg border-[1px] border-gray-200 bg-gray-100 text-sm hover:shadow-lg active:bg-gray-200 active:text-gray-500'
            onClick={checkout}
          >
            Purchase Items
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartMenu;
