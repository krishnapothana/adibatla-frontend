import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import BusinessCard from '../components/BusinessCard';
import TrendingPosts from '../components/TrendingPosts';
import businesses from '../data/businessList';

const Home = () => {
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (term) => {
    if (term === '') {
      setFilteredBusinesses([]);
      setSearched(false);
      return;
    }

    const results = businesses.filter(b =>
      b.name.toLowerCase().includes(term) || b.type.toLowerCase().includes(term)
    );
    setFilteredBusinesses(results);
    setSearched(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <SearchBar onSearch={handleSearch} />
        {searched && filteredBusinesses.length === 0 && (
          <div className="text-center text-gray-500 mt-10 text-lg">
            No businesses found. Try a different keyword.
          </div>
        )}
        {filteredBusinesses.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 min-h-[400px]">
            {filteredBusinesses.map(b => (
              <BusinessCard key={b.id} business={b} />
            ))}
          </div>
        )}
        {!searched && <TrendingPosts />}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
