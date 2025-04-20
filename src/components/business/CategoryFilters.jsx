import React, { useRef, useEffect, useState } from 'react';

const categories = [
  "Restaurant", "Bakery", "Cafe", "Grocery", "Salon",
  "Internet Cafe", "Stationery", "Pharmacy", "Clothing", "Electronics"
];

const CategoryFilters = ({ selectedCategory, onSelect }) => {
  const wrapperRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const container = wrapperRef.current;
    if (container) {
      const check = () => {
        setIsOverflowing(container.scrollWidth > container.clientWidth);
      };
      check();
      window.addEventListener('resize', check);
      return () => window.removeEventListener('resize', check);
    }
  }, []);

  return (
    <div className="py-2 px-4 overflow-x-auto">
      <div
        ref={wrapperRef}
        className={`flex gap-3 ${
          isOverflowing ? 'w-max' : 'sm:flex-wrap sm:justify-center'
        }`}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`whitespace-nowrap px-4 py-1 rounded-full text-sm border 
              transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-blue-100 text-gray-700'
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilters;
