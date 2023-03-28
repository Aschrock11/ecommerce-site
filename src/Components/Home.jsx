import React from 'react';
import Header from './Header';
import CategorySection from './CategorySection';
import FeaturedProducts from './FeaturedProducts';
import ShopNow from './ShopNow';
import TrendingProducts from './TrendingProducts';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <div>
        <Header />
        <div className='mx-auto max-w-[1200px]'>
          <CategorySection />
          <FeaturedProducts />
          <ShopNow />
          <TrendingProducts />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
