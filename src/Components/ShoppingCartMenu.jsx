import React, { useContext, useEffect } from 'react';
import { CartContext } from '../Components/CartContext';
import CartProduct from './CartProduct';
import { XIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
function ShoppingCartMenu({ productsCount, setCartMenuOpen }) {
  const cart = useContext(CartContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='absolute right-0 top-0 z-50 h-screen w-full bg-white shadow-lg sm:w-1/4'>
      <div
        className='flex
     justify-center gap-2 border-[1px] border-solid border-gray-300 '
      >
        <p className=' py-4 text-center text-xl md:text-2xl'>
          {`${productsCount} item${productsCount === 1 ? '' : 's'} in cart`}
        </p>
        <XIcon
          onClick={() => setCartMenuOpen(false)}
          className='absolute right-0  mt-2 mr-2 h-5 w-5 hover:cursor-pointer hover:rounded-full hover:border-2 hover:border-gray-300 hover:shadow-lg active:bg-gray-200'
        />
      </div>

      <div className='flex h-[74%] flex-col overflow-y-scroll'>
        {cart.items.map((currentProduct, idx) => (
          <CartProduct
            id={currentProduct.id}
            quantity={currentProduct.quantity}
            key={currentProduct.id}
          />
        ))}
      </div>
      <div className='absolute bottom-0 mb-24  flex w-full flex-col items-center justify-end bg-white'>
        <h1 className='mt-2 text-xl'>{`Total: $${cart.getTotalCost()}`}</h1>
        <Link
          to={'/checkout'}
          className={`${
            productsCount === 0 ? 'hidden' : 'visible'
          }my-4 flex w-[92%] items-center justify-center rounded-lg border-[1px] border-gray-200 bg-gray-100 py-2 text-sm hover:shadow-lg active:bg-gray-200 active:text-gray-500`}
        >
          <button>Purchase Items</button>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartMenu;
