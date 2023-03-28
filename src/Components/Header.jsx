import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import { MenuIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hamMenuOpen, setHamMenuOpen] = useState(false);
  return (
    <div className='sticky top-0 z-50  w-full bg-white shadow-lg '>
      <div className='max-w-1440px flex items-center justify-between py-4 pr-6 pl-2'>
        <div className='max-h-15 min-h-5 flex justify-center overflow-hidden object-cover hover:cursor-pointer  '>
          <Link to={'/'}>
            <img
              className='max-h-10 overflow-hidden object-contain  md:max-h-14'
              src='./images/currentFurnishLogo.png'
              alt='Current-Furnish-Logo'
            ></img>
          </Link>
        </div>
        <nav className='hidden h-10 items-center gap-3 sm:flex md:text-xl lg:gap-9 lg:text-3xl'>
          <button onClick={() => setMenuOpen(!menuOpen)}>Shop</button>

          {menuOpen && (
            <div className=' absolute mt-52 flex w-20 flex-col items-center overflow-hidden border-2 border-solid bg-white p-4 md:w-[95px] lg:w-28'>
              <ul>
                <li>
                  <Link to={'/categories'}>Sofas</Link>
                </li>
                <li>
                  <Link to={'/categories'}>Dining</Link>
                </li>
                <li>
                  <Link to={'/categories'}>Lighting</Link>
                </li>
                <li>
                  <Link to={'/categories'}>Outdoor</Link>
                </li>
                <li>
                  <Link to={'/categories'}>Bedroom</Link>
                </li>
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
          <div className=' z-1 absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-evenly bg-gray-200 bg-opacity-90 sm:hidden'>
            <ul className=' mr-8 flex flex-col gap-24 text-center'>
              <li>
                <Link to={'/categories/sofas'}>Sofas</Link>
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
        )}
      </div>
    </div>
  );
}

export default Header;
