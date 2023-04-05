import React from 'react';
import ImageWithOverlay from './ImageWithOverlay';
import { Link } from 'react-router-dom';

function CategorySection() {
  return (
    <div className='mt-[80px] grid grid-cols-1 space-x-0 space-y-2 md:grid-cols-2 md:space-x-2 md:space-y-0'>
      <ImageWithOverlay
        src='./images/livingroom.jpg'
        alt='image of furnished living room'
        caption='Living Room furniture'
      />
      <div className='grid grid-cols-2 space-x-2 md:grid-cols-2'>
        <ImageWithOverlay
          src='./images/lighting.jpg'
          alt='image of lighting fixture'
          caption='Lighting'
        />
        <div className='grid space-y-2 md:grid-cols-1'>
          <ImageWithOverlay
            src='./images/diningroom.jpg'
            alt='image of furnished dining room'
            caption='Dining Furniture'
          />
          <ImageWithOverlay
            src='./images/outdoor.jpg'
            alt='image of outdoor seating'
            caption='Outdoor Furniture'
          />
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
