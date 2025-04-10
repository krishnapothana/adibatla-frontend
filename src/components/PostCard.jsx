import React from 'react';

const PostCard = ({ post }) => (
  <div className="border p-4 rounded shadow bg-white">
    <h3 className="font-semibold">{post.title}</h3>
    <p className="text-sm text-gray-600">{post.businessName}</p>
    <p className="mt-2">{post.content}</p>
    <p className="text-xs text-gray-400 mt-1">{new Date(post.createdAt).toLocaleString()}</p>
  </div>
);

export default PostCard;
