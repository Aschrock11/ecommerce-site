import React from 'react';
import ProductCard from './ProductCard';
import Store from './Store';

function FeaturedProducts() {
  const featuredItems = Store.filter((item) =>
    item.category.includes('featured')
  );

  return (
    <div className=' h-full w-full max-w-[1440px] flex-col items-center'>
      <h1 className='my-4 ml-4 text-lg md:my-[3rem] md:ml-0 md:text-3xl'>
        Featured Products
      </h1>
      <div className='grid grid-cols-1 space-y-2 md:grid-cols-4 md:space-y-0 md:space-x-2'>
        {featuredItems.map((item) => (
          <ProductCard
            img={item.img}
            alt={item.alt}
            title={item.title}
            price={item.price}
            category={item.category}
            key={item.id}
            productId={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;

// add different products to Store.js and give them the Featured category then switch out Store for Featured product on to map
