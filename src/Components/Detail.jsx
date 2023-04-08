import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Store from './Store';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { productId } = useParams();
  console.log(productId);
  const product = Store.find((product) => product.id === productId);
  const { img, alt, description, price } = product;
  return (
    <div>
      <Header />
      <div>
        <h1>{description}</h1>
        <img src={img} alt={alt} />
        <p>{price}</p>
      </div>
      <Footer />
    </div>
  );
};
export default Detail;
