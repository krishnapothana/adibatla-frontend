import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-900 shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">AdibatlaForYou</h1>
      <div className="space-x-4">
        <a href="/" className="text-white hover:underline">Home</a>
        <a href="/trending" className="text-white hover:underline">Trending</a>
        <a href="/about" className="text-white hover:underline">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
