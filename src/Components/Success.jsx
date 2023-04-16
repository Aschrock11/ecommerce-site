import { ArrowLeftIcon } from '@heroicons/react/outline';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div>
      <Header />
      <div className='m-6'>
        <Link to={'/'}>
          <ArrowLeftIcon className='h-6 w-6' />
        </Link>
      </div>

      <div className='flex h-[200px] w-full items-center justify-center'>
        <h1>Thank you for completing your order!</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
