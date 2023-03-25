import React from 'react';
import ProductCard from './ProductCard';
// import Store from './Store';

function FeaturedProducts() {
  return (
    <div className='h-full w-full max-w-[1440px]'>
      <h1>Featured Products</h1>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />

      <div className='h-40 w-40 border-2 border-black'>
        {/* {Store.map((item) => {
          <ProductCard

          // img={item.img}
          // alt={item.alt}
          // description={item.description}
          // price={item.price}
          // category={item.category}
          // room={item.room}
          />;
          //   {
          //     console.log(item.description);
          //   }
        })} */}
      </div>
    </div>
  );
}

export default FeaturedProducts;
