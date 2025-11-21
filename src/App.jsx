import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import FloatingLines from './FloatingLines';
import TextPressure from './TextPressure';
import ScrollReveal from './ScrollReveal';
import './App.css';

function App() {
  const [textPressureActive, setTextPressureActive] = useState(false);
  const [areLinesVisible, setAreLinesVisible] = useState(true);
  const floatingLinesContainerRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Fade out completely by the time we scroll 80% of the viewport height
      const fadeStart = 0;
      const fadeEnd = windowHeight * 0.8;

      let newOpacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
      newOpacity = Math.max(0, Math.min(1, newOpacity));

      // Direct DOM manipulation to avoid React re-renders on every scroll frame
      if (floatingLinesContainerRef.current) {
        floatingLinesContainerRef.current.style.opacity = newOpacity;
        floatingLinesContainerRef.current.style.pointerEvents = newOpacity > 0 ? 'auto' : 'none';
      }

      // Only update state when crossing the threshold to pause/unpause heavy components
      if (newOpacity <= 0 && areLinesVisible) {
        setAreLinesVisible(false);
      } else if (newOpacity > 0 && !areLinesVisible) {
        setAreLinesVisible(true);
      }

      // Activate TextPressure when we are mostly on the second page
      if (scrollY > windowHeight * 0.8) {
        setTextPressureActive(true);
      } else {
        setTextPressureActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set correct state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [areLinesVisible]);

  return (
    <>
      <div className="content-wrapper">
        <header className="top-bar">
          <div className="logo">TzuChi</div> {/* Placeholder logo like the photo */}
          <div className="center-top"></div>
          <div className="date-location">Made — 2025/11/21</div>
        </header>

        <main className="center-content">
          <h1>
            Aaron Preston
          </h1>
          <h2>
            李宜倖
          </h2>
          <div className="role">Year 2</div>
        </main>

        {/* Footer or bottom elements could go here */}
        <div></div>
      </div>

      <div style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 20%)',
        marginTop: '-20vh', /* Pull it up to overlap */
        paddingTop: '20vh'  /* Compensate for the pull */
      }}>
        <div style={{ position: 'relative', height: '800px', width: '100%', display: 'flex', flexDirection: 'column' }}>
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
          <div style={{ position: 'relative', flex: 1, width: '100%' }}>
            <TextPressure
              text="IN FIVE YEARS??"
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

      <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, backgroundColor: 'black', padding: '40px' }}>
        <div style={{ maxWidth: '800px', color: 'white' }}>
          <ScrollReveal
            baseOpacity={0.5}
            enableBlur={true}
            baseRotation={10}
            blurStrength={30}
          >
            nothing like nothing except being alive
          </ScrollReveal>
        </div>
      </div>

      <div
        ref={floatingLinesContainerRef}
        style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: 0, transition: 'opacity 0.1s ease-out' }}
      >
        <FloatingLines
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[7, 5, 4]}
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
