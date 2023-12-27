import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

import Checkout1 from './Checkout1';

const Checkout = () => {
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <div className='w-100% relative max-w-[1200px]'>
        <div className=''>
          <Checkout1 />
        </div>
        <div className='h-full bg-white shadow-lg'>
          <div className='flex h-[78%] flex-col overflow-y-scroll'></div>
          <div className='flex flex-col items-center justify-center'></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
