import React from 'react';
import Store from './Store.js';
import ProductCard from './ProductCard.jsx';
function TrendingProducts() {
  const trendingItems = Store.filter((item) =>
    item.category.includes('trending')
  );

  return (
    <div className='mb-[80px]'>
      <div className=' h-full w-full max-w-[1440px] flex-col items-center'>
        <h1 className='my-[5rem] ml-4 text-3xl'>Trending Products</h1>
        <div className='grid grid-cols-1 space-y-2 md:grid-cols-4 md:space-y-0 md:space-x-2'>
          {trendingItems.map((item) => (
            <ProductCard
              img={item.img}
              alt={item.alt}
              description={item.description}
              price={item.price}
              category={item.category}
              room={item.room}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;

//switch out the featured products for the trending products add some to Store
