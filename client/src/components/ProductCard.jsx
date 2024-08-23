/*// frontend/src/components/ProductCard.jsx

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';

// Initialise Stripe avec ta clé publique
const stripePromise = loadStripe('your_stripe_public_key');

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleOrderClick = async () => {
    try {
      const stripe = await stripePromise;

      const response = await fetch('http://localhost:5000/api/payment/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product }),
      });

      const session = await response.json();
      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      console.error('Error redirecting to checkout:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md w-72">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h5 className="text-lg font-semibold text-gray-700 mb-2">{product.name}</h5>
        <p className="text-gray-500 mb-4">Price: {product.price} FCFA</p>
        <button
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={handleOrderClick}
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default ProductCard;*/


import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md w-72">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h5 className="text-lg font-semibold text-gray-700 mb-2">{product.name}</h5>
        <p className="text-gray-500 mb-4">Price: {product.price} FCFA</p>
        <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Order
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
