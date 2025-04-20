import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    onSearch(term.toLowerCase());
  }, [term]);

  return (
    <div className="px-4 pt-2">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search items or businesses"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="w-full md:w-1/2 px-5 py-3 border border-gray-300 bg-white text-black placeholder-gray-500 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* ✅ Clean, neutral tone */}
      <p className="text-sm text-gray-500 mt-2 text-center">
        Try searching for biryani, toothbrush or pastry
      </p>
    </div>
  );
};

export default SearchBar;
