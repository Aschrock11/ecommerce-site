import React from 'react';
import { PlusSmIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

function ProductCard({
  img,
  alt,
  title,
  price,
  category,
  room,
  id,
  productId,
}) {
  return (
    <div
      key={id}
      className=' flex flex-col items-center overflow-x-scroll  border-[1px]
    border-solid border-gray-200 hover:border-gray-800 md:items-start'
    >
      <Link to={`/item/${productId}`}>
        <img className='' src={img} alt={alt} />
        <div className='flex w-full justify-between'>
          <div className='ml-6 flex max-w-[10rem] flex-col py-4 text-sm md:ml-4 md:max-w-[15rem]'>
            <p>{title}</p>
            <p>{price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
//img, alt, title, price, category array, lookup array.filter()

export default ProductCard;
