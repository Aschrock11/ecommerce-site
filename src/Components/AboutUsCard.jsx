import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsCard = () => {
  return (
    <div>
      <div className=' flex max-w-[1200px] flex-col md:mt-[5rem] md:flex-row-reverse'>
        <div className='text-center md:mr-14 md:ml-12 md:mt-4 md:w-1/2 md:text-left'>
          <h1 className='my-4 text-xl md:text-2xl lg:text-3xl'>Who We Are</h1>
          <p className=' mb-4 font-light md:mb-8 md:text-lg lg:text-xl lg:leading-10'>
            Discover modern furniture that's stylish, functional, and affordable
            at CurrentFurnish. We're passionate about design and quality, and
            we're committed to bringing you the latest trends and unique pieces
            that will transform your living spaces. Explore our collection today
            and experience the perfect blend of form and function. Learn more
            about us by clicking below.
          </p>
          <Link to={'/about'}>
            <button className='mx-auto my-4 flex h-12 w-[92%] items-center justify-center rounded-lg border-[1px] border-gray-200 bg-gray-100 text-sm hover:shadow-lg active:bg-gray-200 active:text-gray-500 md:mx-0'>
              About us
            </button>
          </Link>
        </div>
        <div className='md:mr-4 md:w-1/2 '>
          <img
            src='https://cdn.roveconcepts.com/sites/default/files/images/Porter%20Modular%20Scene-PerformanceWeave-Almond_View002_daytime_Product.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
