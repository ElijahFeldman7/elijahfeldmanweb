
import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <main className="max-w-6xl mx-auto text-left pt-0 px-4 flex-1 flex flex-col justify-start text-container">
        <div className="mt-8 flex items-start justify-between">
          <div>
            <h1 className="text-5xl font-bold flex items-center flex-wrap">
              <span>Projects </span><span className="text-5xl" style={{ color: '#1a85ff' }}>.</span>
            </h1>
          </div>
        </div>

        <div className="mt-8 mb-12">
          <h2 className="font-semibold text-medium mb-2">Table of Contents</h2>
          <ul className=" list-inside text-white space-y-1">
            <li><a href="#bioblitz" className="text-white hover:underline">BioBlitz</a></li>
            <li><a href="#workflow" className="text-white hover:underline">Workflow</a></li>

          </ul>
        </div>

        <div className="space-y-12">
          <div id="bioblitz" className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-start pt-12 border-t border-white">
            <div className="col-span-1 md:col-span-2">
              <p className="text-sm text-white mb-2">Feb 2025 - Present</p>
              <h3 className="text-xl font-bold text-white mb-3">BioBlitz</h3>
              <p className="text-white leading-relaxed mb-4">
                A platform and competition format designed to make Biology engaging and fun for students. Features live quizzes, real-time leaderboards, and detailed analytics. I'm still working on this one.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-white text-black text-xs font-medium px-2.5 py-1 rounded-full">Firebase</span>
                <span className="bg-white text-black text-xs font-medium px-2.5 py-1 rounded-full">Node.js</span>
                <span className="bg-white text-black text-xs font-medium px-2.5 py-1 rounded-full">TypeScript</span>
              </div>
              <div className="flex flex-wrap items-center gap-1 mb-4 text-sm">
                <span className="font-semibold">Links:</span>
                <a href="https://github.com/aarnav593/hacktj25" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-white hover:text-white">Github</a>
              </div>
            </div>
            <div className="md:col-span-1 mt-4 md:mt-0">
              <img src="/bioblitz.png" alt="Elijah Feldman BioBlitz Project Screenshot" className="rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300 w-full md:max-w-full max-w-sm mx-auto" width="600" height="400" />
            </div>
          </div>

          <div id="workflow" className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-start pt-12 border-t border-white">
            <div className="col-span-1 md:col-span-2">
              <p className="text-sm text-white mb-2">2024</p>
              <h3 className="text-xl font-bold text-white mb-3">Workflow</h3>
              <p className="text-white leading-relaxed mb-4">
                I wanted to organize my work. Similar to Notion, but more personalized. Has a pomodoro timer, to-do-list, quick links, notes, and a habit tracker. I integrated this with a to-do list on a seperate page that automatically updates.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-white text-black text-xs font-medium px-2.5 py-1 rounded-full">HTML/CSS</span>
                <span className="bg-white text-black text-xs font-medium px-2.5 py-1 rounded-full">JavaScript</span>
              </div>
              <div className="flex flex-wrap items-center gap-1 mb-4 text-sm">
                <span className="font-semibold">Links:</span>
                <a href="https://github.com/ElijahFeldman7/workflow" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-white hover:text-white">Github</a><span>,</span>
                <a href="https://elijahfeldman7.github.io/workflow" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-white hover:text-white">Workflow Website</a><span>,</span>
                <a href="https://elijahfeldman7.github.io/to-do-list" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-white hover:text-white">To-Do List Website</a>
              </div>
            </div>
            <div className="md:col-span-1 mt-4 md:mt-0 flex flex-col gap-4">
              <img src="/to-do.png" alt="Workflow To-Do Screenshot" className="rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300 w-full md:max-w-full max-w-sm mx-auto" width="600" height="400" />
              <img src="/workflow.png" alt="Workflow Main Screenshot" className="rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300 w-full md:max-w-full max-w-sm mx-auto" width="600" height="400" />
            </div>
          </div>
        </div>

        <footer className="text-center text-neutral-500 text-sm p-4 flex flex-col items-center space-y-2">
          <div className="flex items-center justify-center space-x-3">
            <a href="https://github.com/ElijahFeldman7" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg className="inline-block w-6 h-6 text-black hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://github.com/ElijahFeldman7" target="_blank" rel="noopener noreferrer" className="hover:underline text-black font-medium">@ElijahFeldman7</a>
            <svg className="inline-block w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.29 6.71c.39.36 1.02.36 1.41 0L20 10.01V20H4z" />
            </svg>
            <a href="mailto:2028efeldman@tjhsst.edu" className="hover:underline text-black font-medium">2028efeldman@tjhsst.edu</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Projects;
