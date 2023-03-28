import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import Shop from './Shop';
function Categories() {
  const { category } = useParams();

  console.log(category);

  return (
    <div>
      <Header />
      <h1>{category}</h1>
      <div className='mx-auto max-w-[1200px]'></div>
      <Shop />
      <Footer />
    </div>
  );
}

export default Categories;
