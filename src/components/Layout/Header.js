import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-indigo-600">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-white text-2xl">Business Consulting Club</h1>
        <nav>
          <Link to="/" className="text-white px-3">Home</Link>
          <Link to="/dashboard" className="text-white px-3">Dashboard</Link>
          <Link to="/signin" className="text-white px-3">Sign In</Link>
          <Link to="/signup" className="text-white px-3">Sign Up</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
