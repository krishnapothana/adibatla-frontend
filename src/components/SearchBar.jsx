import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    onSearch(term.toLowerCase());      // handleSearch is passed as onSearch prop
  }, [term]);

  return (
    <div className="p-4 pt-2 flex justify-center">
      <input
        type="text"
        placeholder="Search businesses..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="w-full md:w-1/2 px-5 py-3 border border-gray-300 bg-white text-black placeholder-gray-500 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default SearchBar;

