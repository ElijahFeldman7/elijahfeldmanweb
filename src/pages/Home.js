import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <main className="max-w-xl mx-auto text-left pt-0 px-4 flex-1 flex flex-col justify-start text-container">
        <div className="mt-8 flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-serif italic"><Link to="/">Elijah Feldman</Link></h1>
            <div className="text-gray-400 text-xl mt-1">
              <span className="italic">is a <span>learner</span>, <span>researcher</span>, and</span>
              <span className="italic"> aspiring <span>developer.</span></span>
            </div>
          </div>
          <div className="ml-8">
            <div className="ml-8 w-32 h-32 rounded-full overflow-hidden">
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
              Hi! I go by Eli. I like systems and solving large scale problems. I am currently building <a href = "/projects/#BioBlitz" className ="hover:underline" style={{ color: '#1a85ff' }}>BioBlitz </a>, a platform making preparing for USABO and MCATs as fun as playing a game. I also am working this summer at <a href="https://gmu.edu" className="hover:underline" style={{ color: '#1a85ff' }}>GMU</a>, uncovering human smuggling networks. I'm also running a few fun personal projects, like building Jarvis from IronMan.
            <br />
            <br />
              I volunteer at <a href="https://mitosisphere.org" className = "hover:underline" style={{ color: '#1a85ff' }}>Mitosisphere</a>, a platform that makes Biology questions.
            <br />
            <br />
              I'm especially interested in deep learning research and transformer architectures. I have been working on transformer optimization methods.
            </p>

          </div>
        </div>

        <hr className="my-8 border-gray-500" />

        <footer className="text-center text-neutral-500 text-sm p-6 flex flex-col items-center space-y-2">
          <div className="flex items-center justify-center space-x-3">
            <a href="https://github.com/ElijahFeldman7" target="_blank" className = "hover:underline" rel="noopener noreferrer" aria-label="GitHub">
              github
            </a>
            <a href="https://www.linkedin.com/in/elijah-feldman-48798330b" target="_blank" className = "hover:underline" rel="noopener noreferrer" aria-label="LinkedIn">
              linkedin
            </a>
            <a href="mailto:2028efeldman@tjhsst.edu" className="hover:underline text-white">email</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Home;