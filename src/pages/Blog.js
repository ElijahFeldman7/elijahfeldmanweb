import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../blog-posts.js';

function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');

  const topics = ['All', ...new Set(blogPosts.map(post => post.topic))];

  const filteredPosts = blogPosts
    .filter(post => selectedTopic === 'All' || post.topic === selectedTopic)
    .filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.info.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen flex flex-col justify-center text-white">
      <main className="max-w-6xl mx-auto text-left pt-0 px-2 sm:px-4 flex-1 flex flex-col justify-start text-container">
        <div className="mt-8">
          <h1 className="text-6xl font-bold">Blog<span style={{ color: '#1a85ff' }}>.</span></h1>
        </div>

        <div className="flex flex-col sm:flex-row mt-6 mb-4 space-y-4 sm:space-y-0 sm:space-x-4"> {/* Adjusted for stacking on very small screens */}
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
          />
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
          >
            {topics.map(topic => (
              <option key={topic} value={topic}>{topic}</option>
            ))}
          </select>
        </div>

        {/* Reverted the grid container to original PC settings, but ensuring single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <Link to={`/blog/${post.uid}`} key={post.uid}
                  // *** CRUCIAL CHANGE HERE: Apply mobile-specific width and centering only ***
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300
                             w-full sm:w-11/12 md:w-full mx-auto md:mx-0">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-400 text-sm mb-2">{post.date} - {post.topic}</p>
                <p className="text-gray-300">{post.info}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Blog;