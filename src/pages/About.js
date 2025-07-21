
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function About() {
  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, appearOptions);
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <main className="max-w-6xl mx-auto text-left pt-0 px-4 flex-1 flex flex-col justify-start text-container">
        <div className="mt-8 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold"><Link to="/">Elijah Feldman</Link></h1>
            <div className="text-white text-lg mt-1">
              <span className="italic">is a <span className="text-white">learner</span>, <span className="text-white">researcher</span>, and</span><br />
              <span className="italic">aspiring <span className="text-white italic">developer.</span></span>
            </div>
          </div>
          <div className="ml-8 flex flex-col items-end space-y-2">
            <Link to="/projects" className="text-white hover:underline font-medium">Projects</Link>
            <Link to="/contact" className="text-white hover:underline font-medium">Contact Me</Link>
          </div>
        </div>

        <p className="mt-6 text-white leading-relaxed">
          Hi! I go by Eli. I'm currently a sophomore studying at <a href="https://www.tjhsst.fcps.edu" className="hover:underline underline">TJ</a>, passionate about computer science, fascinated by <span className="italic">algorithms, computation, and information</span>.
        </p>

        <p className="mt-6 text-white leading-relaxed">
          I want to work on <span className="italic">fundamental problems</span>, those that impact human understanding and intelligence.
        </p>

        <p className="mt-6 text-white leading-relaxed">
          Most recently, that's meant exploring neural optimization, deep learning, and some <span className="italic">Biology</span>.
        </p>
        <figure className="mt-4">
          <img src="/glacier.jpg" alt="Elijah Feldman" className="fade-in" style={{ marginTop: '0.5rem' }} />
          <figcaption className="mt-2 text-center">
            <span className="block text-white font-medium italic">In quiet places, we find space to reflect and grow.</span>
            <span className="block text-white text-sm italic">Glacier National Park, Montana</span>
          </figcaption>
        </figure>
        <p className="mt-6 text-white leading-relaxed">
          I'm currently working on a few projects, including:
          <ul className="list-disc list-inside mt-2">
            <li className="mt-2"><span className="italic">IAadamW</span> - an optimizer for deep learning</li>
            <li className="mt-2"><span className="italic">BioBlitz</span> - making Bio competitive and fun</li>
            <li className="mt-2"><span className="italic">Entity recognition</span> - interning at <a href="https://gmu.edu" className="underline">GMU</a></li>
          </ul>
        </p>
        <figure className="mt-4">
          <img src="/yosemeti.jpg" alt="Elijah Feldman" className="fade-in" style={{ marginTop: '0.5rem' }} />
          <figcaption className="mt-2 text-center">
            <span className="block text-white font-medium italic">"The Mountains Are Calling and I Must Go"</span> <span className="text-white">- John Muir</span>
            <span className="block text-white text-sm italic">Yosemite National Park, California</span>
          </figcaption>
        </figure>
        <p className="mt-6 text-white leading-relaxed">
          I'm working at my school as a <a href="https://sysadmins.tjhsst.edu">sysadmin</a>. I'm always looking for new challenges and opportunities to grow.
        </p>
      </main>

      <footer className="text-center text-neutral-500 text-sm p-6 flex flex-col items-center space-y-2">
        <div className="flex items-center justify-center space-x-3">
          <a href="https://github.com/ElijahFeldman7" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg className="inline-block w-6 h-6 text-white hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="https://github.com/ElijahFeldman7" target="_blank" rel="noopener noreferrer" className="hover:underline text-white font-medium">@ElijahFeldman7</a>
          <svg className="inline-block w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.29 6.71c.39.36 1.02.36 1.41 0L20 10.01V20H4z" />
          </svg>
          <a href="mailto:2028efeldman@tjhsst.edu" className="hover:underline text-white font-medium">2028efeldman@tjhsst.edu</a>
        </div>
      </footer>
    </div>
  );
}

export default About;
