import React, { useContext } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import { MenuIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartMenu from './ShoppingCartMenu';
import { CartContext } from '../Components/CartContext';
import { XIcon } from '@heroicons/react/solid';

function Header() {
  const [hamMenuOpen, setHamMenuOpen] = useState(false);
  const [cartMenuOpen, setCartMenuOpen] = useState(false);
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  return (
    <div className='sticky top-0  z-50 w-full bg-white shadow-lg'>
      <div className='max-w-1440px flex items-center justify-between py-4 pr-6 pl-2'>
        <MenuIcon
          onClick={() => setHamMenuOpen(!hamMenuOpen)}
          className='visible h-6 w-6 cursor-pointer sm:hidden'
        />
        <div className='absolute z-50 md:hidden'>
          <XIcon
            onClick={() => setHamMenuOpen(!hamMenuOpen)}
            className={`${
              hamMenuOpen ? 'visible' : 'hidden'
            } z-50 flex h-6 w-6 cursor-pointer rounded-full border-2 border-gray-300 shadow-lg active:bg-gray-200`}
          />
        </div>

        <div className='max-h-15 min-h-5 flex justify-center overflow-hidden object-cover hover:cursor-pointer  '>
          <Link to={'/'}>
            <img
              className='max-h-10 overflow-hidden object-contain  md:max-h-14'
              src='/./images/currentFurnishLogo.png'
              alt='Current-Furnish-Logo'
            ></img>
          </Link>
        </div>
        <nav className='md:text-md flex h-10 items-center gap-3 lg:gap-9 lg:text-xl'>
          <button>
            <Link className='hidden sm:flex' to={'/categories'}>
              Our Products
            </Link>
          </button>

          <div>
            {cartMenuOpen && (
              <div>
                <ShoppingCartMenu
                  productsCount={productsCount}
                  setCartMenuOpen={setCartMenuOpen}
                />
                <div
                  className='absolute top-0 bottom-0 left-0 right-0 z-20 h-screen w-screen bg-black opacity-70'
                  onClick={() => setCartMenuOpen(false)}
                />
              </div>
            )}
          </div>
          <div className='flex'>
            {/* <Link to={'/checkout'}>
              <ShoppingCartIcon className='flex h-6 w-6 cursor-pointer sm:hidden lg:h-7  lg:w-7' />
            </Link> */}
            <ShoppingCartIcon
              onClick={() => setCartMenuOpen(!cartMenuOpen)}
              className='h-6 w-6 cursor-pointer sm:flex lg:h-7  lg:w-7'
            />
            <div
              className={`${
                productsCount > 0 ? 'relative' : 'hidden'
              }  bottom-4 text-xs font-bold`}
            >
              <p>{productsCount}</p>
            </div>
          </div>
        </nav>

        {hamMenuOpen && (
          <div className=' z-1 absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-evenly bg-gray-200 transition-transform sm:hidden'>
            <ul className='flex w-[50%] flex-col gap-12 text-center'>
              <li className='border-b border-black pb-4'>
                <Link to={'/'} className='text-3xl font-light'>
                  Home
                </Link>
              </li>
              <li className='border-b border-black pb-4'>
                <Link to={'/about'} className='text-3xl font-light'>
                  About
                </Link>
              </li>
              <li className='border-b border-black pb-4'>
                <Link to={'/categories'} className='text-3xl font-light'>
                  Our Products
                </Link>
              </li>
              <li className='border-b border-black pb-4'>
                <Link to={'/checkout'} className='text-3xl font-light'>
                  Checkout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
