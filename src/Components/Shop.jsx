import React from 'react';
import Store from './Store';
import ProductCard from './ProductCard';

function Shop() {
  //Add filter that filters and then maps out all products with correct category from Store should work with params from link if /sofas only display sofas and so on

  return (
    <div>
      <div className='grid grid-cols-1 space-y-2 md:grid-cols-4 md:space-y-0 md:space-x-2'>
        {Store.map((item) => (
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
  );
}

export default Shop;
