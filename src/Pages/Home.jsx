import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import TrendingPosts from '../components/TrendingPosts';
import Footer from '../components/Footer';

const Home = () => {
  const handleSearch = (term) => {
    console.log("Searching for:", term);
    // Later you can filter trending posts or redirect to search results
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="mt-2">
        <SearchBar onSearch={handleSearch} />
        <TrendingPosts />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
