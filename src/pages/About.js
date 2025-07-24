
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function About() {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = [" researcher.", " learner.", "n aspiring developer."];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setTypedText(
        isDeleting
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

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
            <h1 className="text-6xl font-bold"><Link to="/">Elijah Feldman</Link><span style={{ color: '#1a85ff' }}>.</span></h1>
            <div className="text-white text-lg mt-1">
              <span className="semi-bold text-4xl">I'm a<span style={{ color: '#1a85ff' }}>{typedText}</span></span>
            </div>
          </div>
        </div>

        <div className="flex mt-6 items-start">
          <div className="flex-1">
            <p className="text-white semi-bold text-xl leading-relaxed">
              Hi! I go by Eli. I'm currently a sophomore studying at <a href="https://www.tjhsst.fcps.edu" className="hover:underline" style={{ color: '#1a85ff' }}>TJ</a>, passionate about computer science, fascinated by <span className="italic">algorithms, computation, and information</span>.
              I want to work on <span className="italic">solving problems</span>, those that impact human understanding and intelligence.
              Most recently, that's meant exploring neural optimization, deep learning, and some <span className="italic">Biology</span>.
              <br />
              <br />
              I'm currently working on a few projects, including <span className="italic">BioBlitz</span>, making Biology competitive and fun, IAadamW, an optimizer for transformers, and entity recognition at <a href="https://gmu.edu" style={{ color: '#1a85ff' }} className="hover:underline">GMU</a>.
            </p>
          </div>
          <figure className="w-80 ml-4 flex-shrink-0">
            <img src="/glacier.jpg" alt="Elijah Feldman" className="fade-in rounded-md" />
            <figcaption className="mt-2 text-center text-white text-sm italic">Glacier National Park, Montana</figcaption>
          </figure>
        </div>
        <div className="flex mt-4">
        </div>
        <div className="flex mt-6">
          <div className="flex-1">
            <p className="text-white semi-bold text-xl leading-relaxed">
              I'm working at my school as a <a href="https://sysadmins.tjhsst.edu" style={{ color: '#1a85ff' }} className = "hover:underline">sysadmin</a>. I'm always looking for new challenges and opportunities to grow. I use Ubuntu on my laptop.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
