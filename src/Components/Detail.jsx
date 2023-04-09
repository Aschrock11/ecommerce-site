import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Store from './Store';
import { useParams } from 'react-router-dom';
import { PlusSmIcon } from '@heroicons/react/solid';

const Detail = () => {
  const { productId } = useParams();
  console.log(productId);
  const product = Store.find((product) => product.id === productId);
  const { img, alt, description, price } = product;
  return (
    <div>
      <Header />
      <div className='m-auto flex max-w-[1200px]'>
        <div className='w-2/3'>
          <img className='w-full' src={img} alt={alt} />
        </div>
        <div className='flex w-1/3 flex-col justify-between bg-gray-50'>
          <div className='ml-6'>
            <h1 className='mt-16 text-3xl'>{description}</h1>
            <p className='mt-4 text-2xl'>{price}</p>
          </div>
          <div className=' flex h-1/4 w-full items-end justify-center'>
            <button className='mb-8 flex h-12 w-[90%] items-center justify-center rounded-lg border-[1px] border-gray-200 bg-gray-100 text-sm hover:shadow-lg active:bg-gray-200 active:text-gray-500'>
              Add to Cart
              <PlusSmIcon className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Detail;
