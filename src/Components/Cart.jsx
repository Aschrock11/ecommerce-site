import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { useContext } from 'react';
import { CartContext } from '../Components/CartContext';
import CartProduct from './CartProduct';
import axios from 'axios';

const Cart = () => {
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  // const checkout = async () => {
  //   await fetch('https://ecommerce-site-q1jt.vercel.app/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ items: cart.items }),
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((response) => {
  //       if (response.url) {
  //         window.location.assign(response.url);
  //       }
  //     });
  // };

  const handleCheckout = async () => {
    const lineItems = cartItems.map((item) => {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, // because stripe interprets price in cents
        },
        quantity: item.quantity,
      };
    });

    const { data } = await axios.post(
      'https://ecommerce-site-966n.vercel.app/api/checkout',
      { lineItems }
    );

    const stripe = await stripePromise;

    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div>
      <Header />
      <div className='relative mx-auto max-w-[1200px]'>
        <div className='h-full w-full bg-white shadow-lg'>
          <p className=' ml-2 text-center text-lg'>{`${productsCount} item${
            productsCount === 1 ? '' : 's'
          } in cart`}</p>
          <div className='flex h-[78%] flex-col overflow-y-scroll'>
            <div>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                  key={currentProduct.id}
                />
              ))}
            </div>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='mt-2 flex justify-center'>
              <h1 className='text-lg'>{`Total: $${cart.getTotalCost()}`}</h1>
            </div>
            <button
              className='mb-4 flex h-8 w-[92%] items-center justify-center rounded-lg border-[1px] border-gray-200 bg-gray-100 text-sm hover:shadow-lg active:bg-gray-200 active:text-gray-500'
              onClick={handleCheckout}
            >
              Purchase Items
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
