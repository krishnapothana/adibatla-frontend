import React, { useState, useEffect, useRef, useCallback } from 'react';
import PostCard from './PostCard';
import Spinner from './Spinner'; 

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  useEffect(() => {
    const fakePosts = Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      title: `Post ${i + 1}`,
      businessName: `Business ${i + 1}`,
      content: `Special update from business ${i + 1}`,
      createdAt: Date.now()
    }));
    setPosts(fakePosts);
  }, []);

  const lastPostRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && visibleCount < posts.length) {
          setLoading(true);
          setTimeout(() => {
            setVisibleCount((prev) => prev + 3);
            setLoading(false);
          }, 1000);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, visibleCount, posts.length]
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Trending Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.slice(0, visibleCount).map((post, index) => {
          const isLast = index === visibleCount - 1;
          return (
            <div key={post.id} ref={isLast ? lastPostRef : null}>
              <PostCard post={post} />
            </div>
          );
        })}
      </div>

      {loading && <Spinner />}
    </div>
  );
};

export default TrendingPosts;
