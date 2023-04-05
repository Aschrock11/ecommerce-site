import React from 'react';

function Footer() {
  return (
    <div className=' px-42 flex grid grid-cols-1  gap-y-10 bg-gray-100 py-14 pl-24 text-gray-600 md:grid-cols-4'>
      <div className=' space-y-4 text-sm text-gray-800'>
        <h5 className=' cursor-pointer font-bold  hover:text-blue-800'>
          COMMUNITY
        </h5>
        <p className='cursor-pointer hover:text-blue-800 '>Accessibility</p>
        <p className='cursor-pointer hover:text-blue-800 '>About</p>
        <p className='cursor-pointer hover:text-blue-800 '>Newsletter</p>
      </div>
      <div className=' space-y-4 text-sm text-gray-800'>
        <h5 className=' cursor-pointer font-bold  hover:text-blue-800'>
          SERVICES
        </h5>
        <p className='cursor-pointer hover:text-blue-800 '>Contact</p>
        <p className='cursor-pointer hover:text-blue-800 '>FAQ</p>
        <p className='cursor-pointer hover:text-blue-800 '>Privacy</p>
      </div>
      <div className=' space-y-4 text-sm text-gray-800'>
        <h5 className=' cursor-pointer font-bold  hover:text-blue-800'>
          SUPPORT
        </h5>
        <p className='cursor-pointer hover:text-blue-800 '>Terms</p>
        <p className='cursor-pointer hover:text-blue-800 '>Blog</p>
        <p className='cursor-pointer hover:text-blue-800 '>Investors</p>
      </div>
      <div className=' space-y-4 text-sm text-gray-800'>
        <h5 className=' cursor-pointer font-bold  hover:text-blue-800'>
          ABOUT
        </h5>
        <p className='cursor-pointer hover:text-blue-800 '>Careers</p>
        <p className='cursor-pointer hover:text-blue-800 '>Support</p>
        <p className='cursor-pointer hover:text-blue-800 '>Social</p>
      </div>
    </div>
  );
}

export default Footer;
