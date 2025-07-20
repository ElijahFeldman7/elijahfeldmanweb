import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <main className="max-w-3xl mx-auto text-left pt-0 px-4 flex-1 flex flex-col justify-start text-container">
        <div className="mt-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold font-serif italic"><Link to="/">Elijah Feldman</Link></h1>
            <div className="text-gray-200 text-lg mt-1">
              <span className="italic">is a <span className="text-white">learner</span>, <span className="text-white">researcher</span>, and</span><br />
              <span className="italic">aspiring <span className="text-white italic">developer.</span></span>
            </div>
          </div>
          <div className="ml-8">
            <div style={{ width: '8rem', height: '8rem', borderRadius: '50%', overflow: 'hidden' }}>
              <img src="/glacier.jpg" alt="Elijah Feldman" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '20% 50%' }} />
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-500" />

        <div className="flex">
          <div className="flex flex-col pr-16">
            <Link to="/about" className="text-gray-400 hover:underline hover:text-white text-sm mb-4">ABOUT</Link>
            <Link to="/projects" className="text-gray-400 hover:underline hover:text-white text-sm mb-4">PROJECTS</Link>
            <Link to="/contact" className="text-gray-400 hover:underline hover:text-white text-sm mb-4">CONTACT</Link>
            <div className="text-gray-400 text-xs">
              <span className="text-black bg-white rounded-full px-2 py-1 mt-4">⌘K</span>  for menu
            </div>
          </div>

          <div>
            <p className="text-white leading-relaxed">
              Elijah Feldman is a passionate and driven individual with a strong interest in computer science and technology. He is a quick learner and is always looking for new challenges. He is a great team player and is always willing to help others. He is a great asset to any team and is sure to be a valuable contributor to any project.
            </p>
          </div>
        </div>

        <hr className="my-8 border-gray-500" />

        <footer className="text-center text-neutral-500 text-sm p-6 flex flex-col items-center space-y-2">
          <div className="flex items-center justify-center space-x-3">
            <a href="https://github.com/ElijahFeldman7" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg className="inline-block w-6 h-6 text-white hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/elijah-feldman-a5764024a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg className="inline-block w-6 h-6 text-white hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="mailto:2028efeldman@tjhsst.edu" className="hover:underline text-white font-medium">2028efeldman@tjhsst.edu</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Home;