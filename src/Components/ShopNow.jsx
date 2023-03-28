import React from 'react';

function ShopNow() {
  return (
    <div className=' mt-[5rem] flex max-w-[1200px] flex-col md:flex-row'>
      <div className='text-center md:mr-14 md:ml-12 md:mt-4 md:w-1/2 md:text-left'>
        <h1 className='mb-4 text-2xl'>Elevate your space</h1>
        <p className='mb-8'>
          Modern furniture is the centerpiece of any contemporary space, it's
          where you relax, and express your unique style. Find your perfect fit
          in our range of styles, from sleek and minimalist to bold and
          statement-making.
        </p>
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
