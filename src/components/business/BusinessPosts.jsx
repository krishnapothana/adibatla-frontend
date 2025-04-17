// ✅ BusinessPosts.jsx (with Infinite Scroll)
import { useEffect, useRef, useState, useCallback } from 'react';
import Spinner from '../Spinner';

const BusinessPosts = ({ posts }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const observerRef = useRef();
  const loaderRef = useRef();

  const lastPostRef = useCallback(
    (node) => {
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && visibleCount < posts.length) {
          setVisibleCount((prev) => prev + 3);
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [visibleCount, posts.length]
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.slice(0, visibleCount).map((post, index) => (
          <div
            key={post.id}
            ref={index === visibleCount - 1 ? lastPostRef : null}
            className="border p-4 rounded shadow bg-white"
          >
            <h4 className="font-semibold">{post.title}</h4>
            <p className="mt-2">{post.content}</p>
            <p className="text-xs text-gray-400 mt-1">
              {new Date(post.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
      {visibleCount < posts.length && (
        <div ref={loaderRef} className="text-center mt-4">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default BusinessPosts;