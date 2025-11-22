import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import FloatingLines from './FloatingLines';
import TextPressure from './TextPressure';
import ScrollReveal from './ScrollReveal';
import ScrollTextType from './ScrollTextType';
import LiquidTransitionEffect from './LiquidTransitionEffect';
import Cubes from './Cubes';
import './App.css';

function App() {
  const [textPressureActive, setTextPressureActive] = useState(false);
  const [areLinesVisible, setAreLinesVisible] = useState(true);
  const floatingLinesContainerRef = useRef(null);
  const nothingSectionRef = useRef(null);
  const lenisRef = useRef(null);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.08,
      smoothTouch: false,
      touchMultiplier: 1.2,
      infinite: false,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll handling for floating lines and other effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Fade out floating lines by 80% of viewport height
      const fadeStart = 0;
      const fadeEnd = windowHeight * 0.8;
      let newOpacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
      newOpacity = Math.max(0, Math.min(1, newOpacity));

      if (floatingLinesContainerRef.current) {
        floatingLinesContainerRef.current.style.opacity = newOpacity;
        floatingLinesContainerRef.current.style.pointerEvents = newOpacity > 0 ? 'auto' : 'none';
      }

      if (newOpacity <= 0 && areLinesVisible) {
        setAreLinesVisible(false);
      } else if (newOpacity > 0 && !areLinesVisible) {
        setAreLinesVisible(true);
      }

      if (scrollY > windowHeight * 0.8) {
        setTextPressureActive(true);
      } else {
        setTextPressureActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [areLinesVisible]);

  return (
    <>
      <div className="content-wrapper">
        <header className="top-bar">
          <div className="logo">TzuChi</div>
          <div className="center-top"></div>
          <div className="date-location">Created<br />2025/11/21</div>
        </header>
        <main className="center-content">
          <h1>Aaron Preston</h1>
          <h2>李宜倖</h2>
          <div className="role">Year 2</div>
        </main>
        <div></div>
      </div>

      {/* Spacer before Page 2 */}
      <div className="spacer-section" style={{ width: '100%', minHeight: '80vh', backgroundColor: '#000', zIndex: 2 }}></div>

      <div style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 20%)',
        marginTop: '-20vh',
        paddingTop: '20vh',
      }}>
        <div style={{ position: 'relative', minHeight: '80vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'relative', flex: 1, width: '100%' }}>
            <TextPressure
              text="MY DREAM"
              flex={true}
              alpha={false}
              stroke={true}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={36}
              active={true}
            />
          </div>
          <div style={{ position: 'relative', height: '100vh', flex: 1, width: '100%' }}>
            <TextPressure
              text="IN 5 YEARS??"
              flex={true}
              alpha={false}
              stroke={true}
              width={true}
              weight={true}
              italic={true}
              textColor="#c8ff81ff"
              strokeColor="#ffffffff"
              minFontSize={36}
              active={true}
            />
          </div>
        </div>
      </div>

      <div style={{ width: '100%', height: '50px', backgroundColor: '#000', zIndex: 2 }}></div>

      <div ref={nothingSectionRef} style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, backgroundColor: 'black', padding: '40px' }}>
        <div style={{ maxWidth: '800px', color: 'white' }}>
          <ScrollReveal baseOpacity={0.1} enableBlur={true} baseRotation={35} blurStrength={5}>
            nothing
          </ScrollReveal>
        </div>
      </div>

      <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'left', justifyContent: 'center', zIndex: 2, backgroundColor: 'black', padding: '40px' }}>
        <div style={{ maxWidth: '800px', color: 'white' }}>
          <ScrollReveal baseOpacity={0.1} enableBlur={false} baseRotation={35} blurStrength={5}>
            But as how Matthew said.<br /><br />
          </ScrollReveal>
        </div>
      </div>

      <div style={{ fontSize: '2rem', position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, backgroundColor: 'black', padding: '60px' }}>
        <div style={{ maxWidth: '1800px', color: 'white' }}>
          <ScrollReveal baseOpacity={0.2} enableBlur={false} baseRotation={5} blurStrength={6}>
            <h4>"Every day, every week, every year of my life, my hero's always 10 years away.<br />
              I'm never going to be my hero. I'm not going to attain that.<br />
              I know I'm not, and that's just fine with me, because that keeps me with somebody to keep on chasing."<br /><br />
            </h4>
            <h3>- Matthew McConaughey's</h3>
          </ScrollReveal>
        </div>
      </div>

      <div className="scroll-text-section">
        <div className="scroll-text-container">
          <ScrollTextType
            text="But here's what i've been working on.
            
            For these past few years
            
            or days"
            showCursor={true}
            cursorCharacter="|"
            className="scroll-text-component"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: '200', letterSpacing: '0.03em' }}
          />
        </div>
      </div>

      {/* Integrated Liquid Transition */}
      <LiquidTransitionEffect>
        <div style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          width: '100%',
          minHeight: '100vh'
        }}>
          {/* Full-page Cubes background */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '80%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1
          }}>
            <Cubes
              gridSize={12}
              maxAngle={45}
              radius={3.5}
              borderStyle="2px solid rgba(82, 39, 255, 0.3)"
              faceColor="#1a1a2e"
              rippleColor="#ff6b6b"
              rippleSpeed={2.5}
              autoAnimate={true}
              rippleOnClick={true}
            />
          </div>

          {/* Centered My-Works text overlay */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none'
          }}>
            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 'bold',
              color: 'white',
              textShadow: '0 0 20px rgba(255, 107, 107, 0.5), 0 0 40px rgba(82, 39, 255, 0.3)',
              letterSpacing: '0.1em',
              pointerEvents: 'auto'
            }}>
              My-Works
            </h1>
          </div>
        </div>
      </LiquidTransitionEffect>

      <div
        ref={floatingLinesContainerRef}
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, transition: 'opacity 0.1s ease-out' }}
      >
        <FloatingLines
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[12, 5, 4]}
          lineDistance={[20, 22, 18]}
          bendRadius={10.0}
          bendStrength={-1}
          interactive={true}
          parallax={true}
          paused={!areLinesVisible}
        />
      </div>
    </>
  );
}

export default App;
