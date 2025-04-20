import React, { useEffect, useRef, useCallback, useState } from 'react';
import Spinner from '../Spinner';

const BusinessItems = ({ items }) => {
  const [visibleCount, setVisibleCount] = useState(8);
  const observerRef = useRef(null);

  const lastItemRef = useCallback(
    (node) => {
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && visibleCount < items.length) {
          setVisibleCount((prev) => prev + 4);
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [visibleCount, items.length]
  );

  if (!items || items.length === 0) {
    return <p className="text-gray-500">No items listed by this business.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {items.slice(0, visibleCount).map((item, index) => (
        <div
          key={index}
          ref={index === visibleCount - 1 ? lastItemRef : null}
          className="border p-3 rounded shadow-sm bg-white text-center text-sm font-medium capitalize"
        >
          {item}
        </div>
      ))}
      {visibleCount < items.length && <Spinner />}
    </div>
  );
};

export default BusinessItems;
