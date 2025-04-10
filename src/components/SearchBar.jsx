import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSearch = () => {
    onSearch(term);
  };

  return (
    <div className="p-4 pt-2 flex justify-center">
      <input
        type="text"
        placeholder="Search businesses"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="border p-2 w-1/2 rounded-l"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 rounded-r"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
