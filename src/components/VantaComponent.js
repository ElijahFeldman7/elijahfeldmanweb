
import React, { useState, useEffect, useRef } from 'react';

const VantaComponent = ({ children, style }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    let effect = vantaEffect;
    if (!effect && vantaRef.current) {
      effect = window.VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0,
        color1: 0xfff,
        color2: 0x195cfa,
        birdSize: 1.50,
        wingSpan: 17.00,
        separation: 55.00,
        alignment: 22.00,
        cohesion: 29.00
      });
      setVantaEffect(effect);
    }
    return () => {
      if (effect) effect.destroy();
    };
  }, []); // Run only once on mount

  return (
    <div ref={vantaRef} style={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: -1, ...style }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)', /* Adjust opacity here */
          zIndex: 0, /* On top of Vanta.js, but behind other content */
        }}
      ></div>
      {children}
    </div>
  );
};

export default VantaComponent;
