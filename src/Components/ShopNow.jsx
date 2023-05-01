import React from 'react';
import { Link } from 'react-router-dom';

function ShopNow() {
  return (
    <div className=' flex max-w-[1200px] flex-col md:mt-[5rem] md:flex-row'>
      <div className='text-center md:mr-14 md:ml-12 md:mt-4 md:w-1/2 md:text-left'>
        <h1 className='my-4 text-xl md:text-2xl lg:text-3xl'>
          Elevate your space
        </h1>
        <p className=' mb-4 font-light md:mb-8 md:text-lg lg:text-xl lg:leading-10'>
          Modern furniture is the centerpiece of any contemporary space, it's
          where you relax, and express your unique style. Find your perfect fit
          in our range of styles, from sleek and minimalist to bold and
          statement-making.
        </p>
        <Link to={'/categories'}>
          <button className='mx-auto my-4 flex h-12 w-[92%] items-center justify-center rounded-lg border-[1px] border-gray-200 bg-gray-100 text-sm hover:shadow-lg active:bg-gray-200 active:text-gray-500 md:mx-0'>
            Shop Now
          </button>
        </Link>
      </div>
      <div className='md:mr-4 md:w-1/2 '>
        <img
          src='https://www.decorilla.com/online-decorating/wp-content/uploads/2018/07/15_Minimalist-interior-design-living-room.jpg'
          alt=''
        />
      </div>
    </div>
  );
}

export default ShopNow;
