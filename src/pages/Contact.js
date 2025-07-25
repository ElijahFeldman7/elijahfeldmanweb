
import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="max-w-6xl text-left pt-0 px-4 sm:pl-32 sm:pr-4 flex-1 flex flex-col justify-start text-container">
        <div className="mt-8 px-4 sm:px-20 flex items-start justify-between">
          <div>
            <h1 className="text-6xl font-semibold flex text-left">
              <span className="left">Emails</span>
            </h1>
          </div>
        </div>

        <div className="mt-6 px-4 sm:px-20">
          <div style={{marginBottom: '1rem'}}>
            <a href="mailto:eli@elijahfeldman.me" className="text-base text-4xl text-white hover:underline hover:text-gray-400">eli <span className="text-gray-500">[@]</span> elijahfeldman.me</a>
            <p className="text-medium text-gray-300">The main way to reach me! Email forwarding is on.</p>
          </div>
          <div style={{marginBottom: '1rem'}}>
            <a href="mailto:2028efeldman@tjhsst.edu" className="text-base text-4xl text-white hover:underline hover:text-gray-400">2028efeldman <span className="text-gray-500">[@]</span> tjhsst.edu</a>
            <p className="text-medium text-gray-300">For school related inquiries! Email forwarding is on.</p>
          </div>
          <div style={{marginBottom: '1rem'}}>
            <a href="mailto:efeldma5@gmu.edu" className="text-base text-4xl text-white hover:underline hover:text-gray-400">efeldma5 <span className="text-gray-500">[@]</span> gmu.edu</a>
            <p className="text-medium text-gray-300">For GMU research related inquiries.</p>
          </div>
          <h1 className="text-6xl font-semibold flex text-left">
              <span className="left">Socials</span>
          </h1>
          <div style={{marginBottom: '1rem', marginTop: '1rem'}}>
            <a href="https://Github.com/ElijahFeldman7" className="text-base text-4xl text-white hover:underline hover:text-gray-400">elijahfeldman7 <span className="text-gray-500">[@]</span> github</a>
          </div>
          <div style={{marginBottom: '1rem'}}>
            <a href="https://www.linkedin.com/elijah-feldman-48798330b" className="text-base text-4xl text-white hover:underline hover:text-gray-400">elijahfeldman <span className="text-gray-500">[@]</span> linkedin</a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
