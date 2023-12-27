import React, { useState, useContext } from 'react';
import CartProduct from './CartProduct';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Checkout1 = () => {
  const countries = ['China', 'Russia', 'UK'];
  const [menu, setMenu] = useState(false);
  const [country, setCountry] = useState('United States');
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const changeText = (e) => {
    setMenu(false);
    setCountry(e.target.textContent);
  };

  return (
    <div className='flex items-center justify-center'>
      <div className='flex items-center justify-center py-16 px-4 2xl:container md:px-6 2xl:mx-auto 2xl:ml-96 2xl:px-0'>
        <div className='flex w-full flex-col items-start justify-start space-y-9'>
          <div className='flex flex-col items-start justify-start space-y-2'>
            <button className='flex flex-row items-center space-x-1 text-gray-600 hover:text-gray-500'>
              <svg
                className='fill-stroke'
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M2.91681 7H11.0835'
                  stroke='currentColor'
                  strokeWidth='0.666667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M2.91681 7L5.25014 9.33333'
                  stroke='currentColor'
                  strokeWidth='0.666667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M2.91681 7.00002L5.25014 4.66669'
                  stroke='currentColor'
                  strokeWidth='0.666667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <Link to={'/'}>
                <p className='text-sm leading-none'>Back</p>
              </Link>
            </button>
            <p className='text-3xl font-semibold leading-7 text-gray-800 lg:text-4xl lg:leading-9'>
              Checkout
            </p>
          </div>

          <div className='flex w-full flex-col justify-center space-y-6 xl:flex-row xl:justify-between xl:space-y-0 xl:space-x-6'>
            <div className='flex flex-col items-center justify-center bg-gray-100 py-7 px-10 sm:flex-row sm:py-0 xl:w-full xl:flex-col xl:py-10'>
              <div className='mt-6 w-52 sm:mt-0 sm:w-96 xl:my-10 xl:w-auto xl:px-20'>
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
            </div>

            <div className='flex flex-col bg-gray-100 p-8 lg:w-full xl:w-3/5'>
              <button className='flex w-full flex-row items-center justify-center space-x-2 rounded border border-transparent bg-gray-900 py-4 text-white hover:border-gray-300 hover:bg-white hover:text-gray-900'>
                <div>
                  <svg
                    className='fill-current'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10.9099 4.27692C9.6499 4.27692 9.1174 4.87817 8.2399 4.87817C7.34021 4.87817 6.65396 4.28129 5.56208 4.28129C4.49333 4.28129 3.35365 4.93379 2.6299 6.04535C1.61365 7.61285 1.78615 10.565 3.43208 13.08C4.02083 13.9804 4.80708 14.99 5.83833 15.001H5.85708C6.75333 15.001 7.01958 14.4141 8.25302 14.4072H8.27177C9.48677 14.4072 9.73052 14.9975 10.623 14.9975H10.6418C11.673 14.9866 12.5015 13.8679 13.0902 12.971C13.514 12.326 13.6715 12.0022 13.9965 11.2725C11.6155 10.3688 11.233 6.99348 13.5877 5.69942C12.869 4.79942 11.859 4.27817 10.9068 4.27817L10.9099 4.27692Z'
                      fill='currentColor'
                    />
                    <path
                      d='M10.6338 1C9.88379 1.05094 9.00879 1.52844 8.49629 2.15188C8.03129 2.71688 7.64879 3.555 7.79879 4.36781H7.85879C8.65754 4.36781 9.47504 3.88688 9.95254 3.27063C10.4125 2.68406 10.7613 1.85281 10.6338 1V1Z'
                      fill='currentColor'
                    />
                  </svg>
                </div>
                <div>
                  <p className='text-base leading-4'>Pay</p>
                </div>
              </button>

              <div className='mt-6 flex flex-row items-center justify-center'>
                <hr className='w-full border' />
                <p className='flex flex-shrink-0 px-4 text-base leading-4 text-gray-600'>
                  or pay with card
                </p>
                <hr className='w-full border' />
              </div>

              <div className='mt-8'>
                <input
                  className='w-full rounded border border-gray-300 p-4 text-base leading-4 text-gray-600 placeholder-gray-600'
                  type='email'
                  placeholder='Email'
                />
              </div>

              <label className='mt-8 text-base leading-4 text-gray-800'>
                Card details
              </label>
              <div className='mt-2 flex-col'>
                <div>
                  <input
                    className='w-full rounded-tl rounded-tr border border-gray-300 p-4 text-base leading-4 text-gray-600 placeholder-gray-600'
                    type='email'
                    placeholder='0000 1234 6549 15151'
                  />
                </div>
                <div className='flex flex-row'>
                  <input
                    className='w-full rounded-bl border border-gray-300 p-4 text-base leading-4 text-gray-600 placeholder-gray-600'
                    type='email'
                    placeholder='MM/YY'
                  />
                  <input
                    className='w-full rounded-br border border-gray-300 p-4 text-base leading-4 text-gray-600 placeholder-gray-600'
                    type='email'
                    placeholder='CVC'
                  />
                </div>
              </div>

              <label className='mt-8 text-base leading-4 text-gray-800'>
                Name on card
              </label>
              <div className='mt-2 flex-col'>
                <div>
                  <input
                    className='w-full rounded border border-gray-300 p-4 text-base leading-4 text-gray-600 placeholder-gray-600'
                    type='email'
                    placeholder='Name on card'
                  />
                </div>
              </div>

              <label className='mt-8 text-base leading-4 text-gray-800'>
                Country or region
              </label>
              <div className='mt-2 flex-col'>
                <div className='relative'>
                  <button
                    className='w-full rounded-tr rounded-tl border border-gray-300 bg-white p-4 text-left text-base leading-4 text-gray-600 placeholder-gray-600'
                    type='email'
                  >
                    {country}
                  </button>
                  <svg
                    onClick={() => setMenu(!menu)}
                    className={
                      'absolute  top-4 right-4 transform cursor-pointer ' +
                      (menu ? 'rotate-180' : '')
                    }
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M3.5 5.75L8 10.25L12.5 5.75'
                      stroke='#27272A'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <div
                    className={
                      'absolute z-10 mt-1 flex w-full flex-col justify-start bg-gray-50 text-gray-600 ' +
                      (menu ? 'block' : 'hidden')
                    }
                  >
                    {countries.map((country) => (
                      <div
                        key={country}
                        className='cursor-pointer px-4 py-2 hover:bg-gray-800 hover:text-white'
                        onClick={changeText}
                      >
                        {country}
                      </div>
                    ))}
                  </div>
                </div>
                <input
                  className='w-full rounded-bl rounded-br border border-gray-300 p-4 text-base leading-4 text-gray-600 placeholder-gray-600'
                  type='text'
                  placeholder='ZIP'
                />
              </div>

              <button className='mt-8 flex w-full items-center justify-center rounded border border-transparent bg-gray-900 py-4 text-white hover:border-gray-300 hover:bg-white hover:text-gray-900'>
                <div>
                  <p className='text-base leading-4'>
                    Pay ${cart.getTotalCost()}
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout1;
