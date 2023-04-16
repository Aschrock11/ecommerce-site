import React, { useContext } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import { MenuIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartMenu from './ShoppingCartMenu';
import { CartContext } from '../Components/CartContext';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hamMenuOpen, setHamMenuOpen] = useState(false);
  const [cartMenuOpen, setCartMenuOpen] = useState(false);
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  return (
    <div className='sticky top-0 z-50  w-full bg-white shadow-lg '>
      <div className='max-w-1440px flex items-center justify-between py-4 pr-6 pl-2'>
        <div className='max-h-15 min-h-5 flex justify-center overflow-hidden object-cover hover:cursor-pointer  '>
          <Link to={'/'}>
            <img
              className='max-h-10 overflow-hidden object-contain  md:max-h-14'
              src='/./images/currentFurnishLogo.png'
              alt='Current-Furnish-Logo'
            ></img>
          </Link>
        </div>
        <nav className='md:text-md hidden h-10 items-center gap-3 sm:flex lg:gap-9 lg:text-xl'>
          <button>
            <Link to={'/categories'}>Our Products</Link>
          </button>
          <div>
            {cartMenuOpen && <ShoppingCartMenu productsCount={productsCount} />}
          </div>
          {/* {menuOpen && (
            <div className=' lg:text-xlg absolute mt-[225px] mr-6 flex w-20 flex-col items-center overflow-hidden border-2 border-t-0 border-solid bg-white p-4 transition-transform md:mt-[260px] md:w-[95px] lg:mt-[302px] lg:w-32'>
              <ul>
                <li>
                  <Link to={'/categories/sofa'}>Sofas</Link>
                </li>
                <li>
                  <Link to={'/categories/dining'}>Dining</Link>
                </li>
                <li>
                  <Link to={'/categories/lighting'}>Lighting</Link>
                </li>
                <li>
                  <Link to={'/categories/outdoor'}>Outdoor</Link>
                </li>
                <li>
                  <Link to={'/categories/bedroom'}>Bedroom</Link>
                </li>
              </ul>
            </div>
          )} */}
          <div className='flex'>
            <ShoppingCartIcon
              onClick={() => setCartMenuOpen(!cartMenuOpen)}
              className='cursor-pointer sm:h-6 sm:w-6 lg:h-7  lg:w-7'
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
        <MenuIcon
          onClick={() => setHamMenuOpen(!hamMenuOpen)}
          className='visible z-50 h-6 w-6 cursor-pointer sm:hidden'
        />
        {hamMenuOpen && (
          <div className=' z-1 absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-evenly bg-gray-200 bg-opacity-90 transition-transform sm:hidden'>
            <ul className=' mr-8 flex flex-col gap-24 text-center'>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li>
                <Link to={'/categories'}>Our Products</Link>
              </li>
              <li>
                <Link to={'/cart'}>Cart</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
