import React from 'react';

function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="max-w-6xl text-left pt-0 pl-32 pr-4 flex-1 flex flex-col justify-start text-container">
        <div className="mt-8 px-20 flex items-start justify-between">
          <div>
            <h1 className="text-6xl font-semibold flex text-left">
              <span className="left">Blog</span>
              
            </h1>
            <p className="mt-4 text-white font-semibold text-3xl">Welcome to my blog! Here I share my thoughts on various topics.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Blog;
