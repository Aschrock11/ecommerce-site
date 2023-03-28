import React from 'react';

function ProductCard({ img, alt, description, price, category, room, id }) {
  return (
    <div
      key={id}
      className='flex flex-col  items-center
    overflow-x-scroll border-[1px] border-solid border-gray-200 hover:border-gray-800'
    >
      <img className='' src={img} alt={alt} />
      <div className='max-w-[10rem] py-4 text-sm md:max-w-[15rem]'>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}
//img, alt, description, price, category array, lookup array.filter()

export default ProductCard;
