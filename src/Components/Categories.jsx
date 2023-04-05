import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import Shop from './Shop';

function Categories() {
  const { category } = useParams();

  return (
    <div>
      <Header />
      <div className='mx-auto max-w-[1200px]'></div>
      <Shop categoryTitle={category} />
      <Footer />
    </div>
  );
}

export default Categories;
