import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import FloatingLines from './FloatingLines';
import TextPressure from './TextPressure';
import ScrollReveal from './ScrollReveal';
import ScrollTextType from './ScrollTextType';
import './App.css';

function App() {
  const [textPressureActive, setTextPressureActive] = useState(false);
  const [areLinesVisible, setAreLinesVisible] = useState(true);
  const floatingLinesContainerRef = useRef(null);

  const [isScrollLocked, setIsScrollLocked] = useState(false);

  const lenisRef = useRef(null);

  // Prevent native scrolling when locked
  useEffect(() => {
    const handler = (e) => {
      if (isScrollLocked) {
        e.preventDefault();
      }
    };
    window.addEventListener('wheel', handler, { passive: false });
    window.addEventListener('touchmove', handler, { passive: false });
    return () => {
      window.removeEventListener('wheel', handler);
      window.removeEventListener('touchmove', handler);
    };
  }, [isScrollLocked]);

  // Initialize Lenis for smooth scrolling, respecting scroll lock
  useEffect(() => {
    const lenis = new Lenis({
      duration: 5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.08,
      smoothTouch: false,
      touchMultiplier: 1.0,
      infinite: false,
    });
    lenisRef.current = lenis;

    function raf(time) {
      if (isScrollLocked) {
        // Skip Lenis updates while locked
        requestAnimationFrame(raf);
        return;
      }
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isScrollLocked]);

  // React to lock changes: stop/start Lenis
  useEffect(() => {
    if (!lenisRef.current) return;
    if (isScrollLocked) {
      lenisRef.current.stop();
    } else {
      lenisRef.current.start();
    }
  }, [isScrollLocked]);

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
          <div className="date-location">Created<br />2025/11/21</div>
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

      {/* 400px black spacer before Page 2 */}
      <div style={{
        width: '100%',
        height: '800px',
        backgroundColor: '#000',
        zIndex: 2
      }}></div>

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
          <div style={{ position: 'relative', height: '100vh', flex: 1, width: '100%' }}>
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

      <div style={{
        width: '100%',
        height: '50px',
        backgroundColor: '#000',
        zIndex: 2
      }}>
      </div>

      <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, backgroundColor: 'black', padding: '40px' }}>
        <div style={{ maxWidth: '800px', color: 'white' }}>
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={false}
            baseRotation={35}
            blurStrength={5}
          >
            nothing
          </ScrollReveal>
        </div>
      </div>

      <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, backgroundColor: 'black', padding: '60px' }}>
        <div style={{ maxWidth: '1000px', color: 'white' }}>
          <ScrollReveal
            baseOpacity={0.2}
            enableBlur={false}
            baseRotation={15}
            blurStrength={6}
          >
            ---------But as how matthew said---------
            "Every day, every week, every year of my life, my hero's always 10 years away.
            I'm never going to be my hero. I'm not going to attain that.
            I know I'm not, and that's just fine with me, because that keeps me with somebody to keep on chasing."
            - Matthew McConaughey's
          </ScrollReveal>
        </div>
      </div>

      {/* <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, backgroundColor: 'black', padding: '40px' }}>
        <div style={{ maxWidth: '800px', color: 'white', fontSize: '2.5rem', fontWeight: '300', lineHeight: '1.5' }}>
          <ScrollTextType
            text="But as how matthew said."
            showCursor={true}
            cursorCharacter="|"
            style={{ fontSize: '3rem', fontWeight: '200', letterSpacing: '0.03em' }}
            onLockChange={setIsScrollLocked}
          />
        </div>
      </div>

      <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, backgroundColor: 'black', padding: '40px' }}>
        <div style={{ maxWidth: '800px', color: 'white', fontSize: '2.5rem', fontWeight: '300', lineHeight: '1.5' }}>
          <ScrollTextType
            text="But as how matthew said."
            showCursor={true}
            cursorCharacter="|"
            style={{ fontSize: '3rem', fontWeight: '200', letterSpacing: '0.03em' }}
            onLockChange={setIsScrollLocked}
          />
        </div>
      </div>
      */}

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
