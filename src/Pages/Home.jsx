import React, { useState, useRef, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import CategoryFilters from '../components/business/CategoryFilters';
import BusinessCard from '../components/BusinessCard';
import TrendingPosts from '../components/TrendingPosts';
import businesses from '../data/businessList';

const Home = () => {
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [searched, setSearched] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const handleSearch = (term) => {
    if (term === '') {
      setFilteredBusinesses([]);
      setSearched(false);
      setSelectedCategory(null);
      return;
    }

    const normalizedSearch = term.toLowerCase().replace(/\s+/g, '');

    const results = businesses
      .map(b => {
        let matchedItem = null;

        if (b.items) {
          matchedItem = b.items.find(item =>
            item.toLowerCase().replace(/\s+/g, '') === normalizedSearch
          );
        }

        if (
          b.name.toLowerCase().includes(term) ||
          b.type.toLowerCase().includes(term) ||
          matchedItem
        ) {
          return { ...b, matchedItem };
        }

        return null;
      })
      .filter(b => b !== null);

    setFilteredBusinesses(results);
    setSearched(true);
    setSelectedCategory(null); // clear category if search used
    setVisibleCount(6);
  };

  const handleCategorySelect = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setFilteredBusinesses([]);
      setSearched(false);
    } else {
      const results = businesses.filter(b => b.type === category);
      setFilteredBusinesses(results);
      setSearched(true);
      setSelectedCategory(category);
      setVisibleCount(6);
    }
  };

  const observerRef = useRef(null);
  const lastBusinessRef = useCallback(
    (node) => {
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && visibleCount < filteredBusinesses.length) {
          setVisibleCount((prev) => prev + 4);
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [visibleCount, filteredBusinesses.length]
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <SearchBar onSearch={handleSearch} />
        <CategoryFilters selectedCategory={selectedCategory} onSelect={handleCategorySelect} />

        {searched && filteredBusinesses.length === 0 && (
          <div className="text-center text-gray-500 mt-10 text-lg">
            No businesses found. Try a different keyword or category.
          </div>
        )}

        {searched && filteredBusinesses.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 min-h-[400px]">
            {filteredBusinesses.slice(0, visibleCount).map((b, i) => (
              <div key={b.id} ref={i === visibleCount - 1 ? lastBusinessRef : null}>
                <BusinessCard business={b} matchedItem={b.matchedItem} />
              </div>
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
