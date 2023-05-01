import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ImageWithOverlay from './ImageWithOverlay';

const About = () => {
  return (
    <div>
      <Header />
      <ImageWithOverlay
        src='https://assets3.thrillist.com/v1/image/2838843/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70'
        alt='image of beach'
        caption='About Us'
      />
      <div className='flex w-[80%]'>
        <p className='w-1/2 font-light'>
          At CurrentFurnish, we're passionate about modern furniture and home
          decor that elevates your living spaces. Our story began in 2016, when
          a group of designers and furniture enthusiasts in Southern California
          came together to create a brand that embodies their shared vision for
          contemporary and functional furniture. Since then, we've been on a
          mission to curate a collection of modern pieces that blend style and
          function, with a focus on quality, affordability, and sustainability.
          Our furniture is carefully crafted to last, with innovative designs
          that enhance your lifestyle and transform your home. At Current
          Funish, we believe that furniture should be more than just a
          functional item in your home - it should also be an expression of your
          unique style and personality. That's why we offer a wide range of
          designs, from sleek and minimalist to bold and eclectic, to suit a
          variety of tastes and preferences. We're dedicated to providing a
          seamless shopping experience for our customers, with exceptional
          customer service and fast, reliable shipping. Whether you're looking
          for a statement piece to transform your living room or a practical
          solution for your home office, we've got you covered. Thank you for
          choosing CurrentFurnish as your destination for modern furniture and
          home decor. We're excited to help you create a space that truly
          reflects your style and enhances your life.
        </p>
        <img
          className='w-1/2'
          src='https://cdn.roveconcepts.com/sites/default/files/images/20180917-Noah-Sofa-%26-Wassily-chair-%26-Bennett-media-console_View13_Product.jpg'
          alt='image of livingroom'
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
