// ✅ BusinessReviews.jsx (with Infinite Scroll)
import { useEffect, useRef, useState, useCallback } from 'react';
import Spinner from '../Spinner';

const BusinessReviews = ({ reviews }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const observerRef = useRef();
  const loaderRef = useRef();

  const lastReviewRef = useCallback(
    (node) => {
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && visibleCount < reviews.length) {
          setVisibleCount((prev) => prev + 3);
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [visibleCount, reviews.length]
  );

  return (
    <div className="space-y-4">
      {reviews.slice(0, visibleCount).map((r, index) => (
        <div
          key={r.id}
          ref={index === visibleCount - 1 ? lastReviewRef : null}
          className="border p-3 rounded bg-gray-50"
        >
          <p className="font-semibold">
            {r.user} - <span className="text-yellow-600">⭐ {r.rating}</span>
          </p>
          <p className="text-sm mt-1">{r.comment}</p>
        </div>
      ))}
      {visibleCount < reviews.length && (
        <div ref={loaderRef} className="text-center mt-4">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default BusinessReviews;
