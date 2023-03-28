import React from 'react';

function Footer() {
  return (
    <div className=' grid grid-cols-1  gap-y-10 bg-gray-100 px-32 py-14 text-gray-600 md:grid-cols-4'>
      <div className=' space-y-4 text-sm text-gray-800'>
        <h5 className=' font-bold'>COMMUNITY</h5>
        <p>Accessibility</p>
        <p>About</p>
        <p>Newsletter</p>
      </div>
      <div className=' space-y-4 text-sm text-gray-800'>
        <h5 className=' font-bold'>Services</h5>
        <p>Contact</p>
        <p>FAQ</p>
        <p>Privacy</p>
      </div>
      <div className=' space-y-4 text-sm text-gray-800'>
        <h5 className=' font-bold'>SUPPORT</h5>
        <p>Terms</p>
        <p>Blog</p>
        <p>Investors</p>
      </div>
      <div className=' space-y-4 text-sm text-gray-800'>
        <h5 className=' font-bold'>ABOUT</h5>
        <p>Careers</p>
        <p>Support</p>
        <p>Social</p>
      </div>
    </div>
  );
}

export default Footer;
