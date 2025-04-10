import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // show 4 initially

  useEffect(() => {
    // Fake data — replace with real API later
    const fakePosts = [
      { id: 1, title: 'Biryani Discount', businessName: 'Spicy Kitchen', content: '50% off today!', createdAt: Date.now() },
      { id: 2, title: 'New Tea Flavor', businessName: 'Tea Time', content: 'Try our new Masala Elaichi!', createdAt: Date.now() },
      { id: 3, title: 'Gaming Cafe Hourly Offer', businessName: 'GameZone', content: 'Only ₹20/hr after 6PM!', createdAt: Date.now() },
      { id: 4, title: 'Grocery Combo Deal', businessName: 'Daily Mart', content: 'Get ₹100 off on combos!', createdAt: Date.now() },
      { id: 5, title: 'New Ice Cream Launch', businessName: 'Cream House', content: 'Launching 5 new flavors!', createdAt: Date.now() },
      { id: 6, title: 'Biryani Discount', businessName: 'Spicy Kitchen', content: '50% off today!', createdAt: Date.now() },
      { id: 7, title: 'New Tea Flavor', businessName: 'Tea Time', content: 'Try our new Masala Elaichi!', createdAt: Date.now() },
      { id: 8, title: 'Gaming Cafe Hourly Offer', businessName: 'GameZone', content: 'Only ₹20/hr after 6PM!', createdAt: Date.now() },
      { id: 9, title: 'Grocery Combo Deal', businessName: 'Daily Mart', content: 'Get ₹100 off on combos!', createdAt: Date.now() },
      { id: 10, title: 'New Ice Cream Launch', businessName: 'Cream House', content: 'Launching 5 new flavors!', createdAt: Date.now() },
    ];
    setPosts(fakePosts);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Trending Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.slice(0, visibleCount).map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {visibleCount < posts.length && (
        <div className="text-center mt-4">
          <button
            onClick={() => setVisibleCount(visibleCount + 3)}
            className="text-blue-600 hover:underline"
          >
            Load more ({visibleCount}/{posts.length})
          </button>
        </div>
      )}
    </div>
  );
};

export default TrendingPosts;
