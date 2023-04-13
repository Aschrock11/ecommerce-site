import { ArrowLeftIcon } from '@heroicons/react/outline';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div>
      <Header />
      <Link to={'/'}>
        <ArrowLeftIcon className='h-6 w-6' />
      </Link>
      <h1>Thank you for completing your order!</h1>
      <Footer />
    </div>
  );
};

export default Success;
