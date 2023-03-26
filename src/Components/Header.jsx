import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import { MenuIcon } from '@heroicons/react/solid';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hamMenuOpen, setHamMenuOpen] = useState(false);
  return (
    <div className='sticky top-0 z-50  w-full bg-white shadow-lg'>
      <div className='max-w-1440px flex items-center justify-between py-4 pr-6 pl-2'>
        <div className='max-h-15 min-h-5 flex justify-center overflow-hidden object-cover  '>
          <img
            className='max-h-10 overflow-hidden object-contain md:max-h-14'
            src='./images/currentFurnishLogo.png'
            alt='Current-Furnish-Logo'
          />
        </div>
        <nav className='hidden h-10 items-center gap-3 sm:flex md:text-xl lg:gap-9 lg:text-3xl'>
          <button onClick={() => setMenuOpen(!menuOpen)}>Categories</button>

          {menuOpen && (
            <div className=' absolute mt-52 flex w-20 flex-col border-2 border-solid md:w-[95px] lg:w-28'>
              <ul>
                <li>Sofas</li>
                <li>Dining</li>
                <li>Lighting</li>
                <li>Outdoor</li>
                <li>Bedroom</li>
              </ul>
            </div>
          )}

          <ShoppingCartIcon className='cursor-pointer sm:h-6 sm:w-6 lg:h-8  lg:w-8' />
        </nav>
        <MenuIcon
          onClick={() => setHamMenuOpen(!hamMenuOpen)}
          className='visible z-50 h-6 w-6 cursor-pointer sm:hidden'
        />
        {hamMenuOpen && (
          <div className=' z-1 absolute top-0 flex h-screen w-full flex-col items-center justify-evenly bg-gray-500 bg-opacity-95 sm:hidden'>
            <ul className=' mr-8 flex flex-col gap-24 text-center'>
              <li>Sofas</li>
              <li>Dining</li>
              <li>Lighting</li>
              <li>Outdoor</li>
              <li>Bedroom</li>
              <li>Shopping Cart</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
