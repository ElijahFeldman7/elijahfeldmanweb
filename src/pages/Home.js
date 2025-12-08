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
              <span className="italic">  <span>developer.</span></span>
            </div>
          </div>
          <div className="ml-8">
            <div className="ml-8 w-32 h-32 rounded-full overflow-hidden">
            <img src="/gallery/IMG_0640.jpg" alt="Elijah Feldman" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '10% 50%' }} />
          </div>
          </div>
        </div>

        <hr className="my-8 border-gray-500" />

        <div className="flex">
          <div className="flex flex-col pr-16">
            <Link to="/about" className="text-gray-400 hover:underline hover:text-white text-sm mb-4">ABOUT</Link>
            <Link to="/projects" className="text-gray-400 hover:underline hover:text-white text-sm mb-4">PROJECTS</Link>
            <Link to="/contact" className="text-gray-400 hover:underline hover:text-white text-sm mb-4">CONTACT</Link>
            <Link to="/blog" className="text-gray-400 hover:underline hover:text-white text-sm mb-4">BLOG</Link>
            <Link to="/gallery" className="text-gray-400 hover:underline hover:text-white text-sm mb-4">GALLERY</Link>



            <div className="text-gray-400 text-xs">
              <span className="text-black bg-white rounded-full px-2 py-1 mt-4">⌘K</span>  for menu
            </div>
          </div>

          <div>
            <p className="text-white leading-relaxed">
              Hi! I go by Eli. I like systems and solving large scale problems. You'll find me working on some form of Computer Science research.
              I am currently building <Link to="/https://bioblitz.net" className="hover:underline" style={{ color: '#1a85ff' }}>BioBlitz </Link>, a platform making competitive biology questions easily accessible. 
              I spent my time last summer at <a href="https://gmu.edu" className="hover:underline" style={{ color: '#1a85ff' }}>GMU</a>, creating graphs out of human smuggling cases. I'm also spend a significant amount of time
              as a sysadmin at my school, where I am learning how to manage servers.
            <br />
            <br />
              I volunteer at <Link to="https://arbccompetition.org" className="hover:underline" style={{ color: '#1a85ff'}}>ARBC</Link> a place thats hosts biology competitions. I am working on the testing software currently.
            <br />
            <br />
              I'm especially interested in safe and faster AI. Right now I'm working on watermarking LLMs and also a better optimizer for transformers. 
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