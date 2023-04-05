import React from 'react';
import { PlusSmIcon } from '@heroicons/react/solid';

function ProductCard({ img, alt, description, price, category, room, id }) {
  return (
    <div
      key={id}
      className=' flex flex-col items-center overflow-x-scroll  border-[1px]
    border-solid border-gray-200 hover:border-gray-800 md:items-start'
    >
      <img className='' src={img} alt={alt} />
      <div className='flex w-full justify-between'>
        <div className='flex max-w-[10rem] flex-col py-4 text-sm md:ml-4 md:max-w-[15rem]'>
          <p>{description}</p>
          <p>{price}</p>
        </div>
        <button className=' mt-8 mr-2 flex h-8 w-28 items-center justify-center rounded-lg border-[1px] border-gray-200 bg-gray-50 text-sm hover:shadow-lg active:bg-gray-50 active:text-gray-500'>
          Add to Cart
          <PlusSmIcon className='h-5 w-5' />
        </button>
      </div>
    </div>
  );
}
//img, alt, description, price, category array, lookup array.filter()

export default ProductCard;
