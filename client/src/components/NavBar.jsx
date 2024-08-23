import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ user }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">E-Commerce</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          {user ? (
            <Link to="/profile" className="text-gray-700 hover:text-blue-500">{user.name}</Link>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-blue-500">Login</Link>
              <Link to="/register" className="text-gray-700 hover:text-blue-500">Register</Link>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            {/* Icone de Menu pour Mobile */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
