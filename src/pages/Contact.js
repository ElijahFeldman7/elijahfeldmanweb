
import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <main className="max-w-6xl mx-auto text-left pt-0 px-4 flex-1 flex flex-col justify-start text-container">
        <div className="mt-8 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold flex items-center">
              <Link to="/">Elijah Feldman</Link>
              <span className="text-lg mx-3 text-neutral-400 hidden sm:inline">—</span>
              <span className="hidden sm:inline">Contact</span><span className="text-5xl" style={{ color: '#195cfa' }}>.</span>
            </h1>
          </div>
        </div>

        <p className="mt-6 text-white leading-relaxed text-lg">
          I want you to reach out. For my resume or questions, email me or find me on GitHub:
        </p>
        <div className="flex items-center flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-6 sm:space-y-0 mt-6">
          <a href="mailto:2028efeldman@tjhsst.edu" className="inline-flex items-center gap-2 text-white hover:underline font-medium text-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            2028efeldman@tjhsst.edu
          </a>
          <a href="https://github.com/ElijahFeldman7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:underline font-medium text-lg">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
            @ElijahFeldman7
          </a>
        </div>
      </main>
    </div>
  );
}

export default Contact;
