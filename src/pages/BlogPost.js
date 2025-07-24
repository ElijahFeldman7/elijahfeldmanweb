import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../blog-posts.json';

function BlogPost() {
  const { uid } = useParams();
  const post = blogPosts.find(p => p.uid === uid);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center text-white">
      <main className="max-w-4xl mx-auto text-left pt-0 px-4 flex-1 flex flex-col justify-start text-container">
        <div className="mt-8">
          <h1 className="text-5xl font-bold">{post.title}<span style={{ color: '#1a85ff' }}>.</span></h1>
          <p className="text-gray-400 text-lg mt-2">{post.date} - {post.topic}</p>
        </div>
        <img src={post.image} alt={post.title} className="w-full h-96 object-cover my-8 rounded-lg"/>
        <div className="text-xl leading-relaxed">
          <p>{post.info}</p>
        </div>
      </main>
    </div>
  );
}

export default BlogPost;
