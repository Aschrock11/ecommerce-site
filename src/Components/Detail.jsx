import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Store from './Store';
import { useParams } from 'react-router-dom';
import { PlusSmIcon, MinusIcon } from '@heroicons/react/solid';
import { CartContext } from '../Components/CartContext';
import { useContext } from 'react';

const Detail = () => {
  const cart = useContext(CartContext);
  const { productId } = useParams();
  const product = Store.find((product) => product.id === productId);
  const { img, alt, title, price, description } = product;
  const productQuantity = cart.getProductQuantity(product.id);

  console.log(cart.items);

  return (
    <div>
      <Header />
      <div className='m-auto flex max-w-[1200px] flex-col md:flex-row'>
        <div className='m-6 text-2xl md:hidden'>{title}</div>
        <div className='md:w-2/3'>
          <img className='w-full' src={img} alt={alt} />
        </div>
        <div className='flex flex-col justify-between bg-gray-50 md:w-1/3'>
          <div className='ml-6 mr-6'>
            <h1 className='mt-16 hidden text-3xl md:flex'>{title}</h1>
            <p className='mt-4'>{description}</p>
            <p className='mt-4 text-2xl'>{price}</p>
          </div>
          <div className=' mt-4 flex h-1/4 w-full items-end justify-center md:mt-0'>
            {productQuantity > 0 ? (
              <div className='mx-6 flex w-full gap-4'>
                <button
                  onClick={() => cart.removeOneFromCart(product.id)}
                  className='mb-8 flex h-12 w-[92%] items-center justify-center rounded-lg border-[1px] border-gray-200 bg-gray-100 text-sm hover:shadow-lg active:bg-gray-200 active:text-gray-500'
                >
                  Remove from Cart
                  <MinusIcon className='h-5 w-5' />
                </button>
                <button
                  onClick={() => cart.addOneToCart(product.id)}
                  className='mb-8 flex h-12 w-[92%] items-center justify-center rounded-lg border-[1px] border-gray-200 bg-gray-100 text-sm hover:shadow-lg active:bg-gray-200 active:text-gray-500'
                >
                  Add to Cart
                  <PlusSmIcon className='h-5 w-5' />
                </button>
              </div>
            ) : (
              <button
                onClick={() => cart.addOneToCart(product.id)}
                className='mb-8 flex h-12 w-[92%] items-center justify-center rounded-lg border-[1px] border-gray-200 bg-gray-100 text-sm hover:shadow-lg active:bg-gray-200 active:text-gray-500'
              >
                Add to Cart
                <PlusSmIcon className='h-5 w-5' />
              </button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Detail;
