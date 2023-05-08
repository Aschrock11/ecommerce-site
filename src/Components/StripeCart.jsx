// import { loadStripe } from '@stripe/stripe-js';
// import axios from 'axios';
// import React from 'react';
// import { useCartContext } from '../ctx/cartContext';

// const Cart = () => {
//   const { cartItems, removeCartItem } = useCartContext();
//   const stripePromise = loadStripe(
//     process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
//   );

//   const handleCheckout = async () => {
//     const lineItems = cartItems.map((item) => {
//       return {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: item.name,
//           },
//           unit_amount: item.price * 100, // because stripe interprets price in cents
//         },
//         quantity: item.quantity,
//       };
//     });

//     const { data } = await axios.post(
//       'https://ecommerce-site-966n.vercel.app/api/checkout',
//       { lineItems }
//     );

//     const stripe = await stripePromise;

//     await stripe.redirectToCheckout({ sessionId: data.id });
//   };
// };
