import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import Lenis from 'lenis';
import FloatingLines from './FloatingLines';
import Navbar from './component_/Navbar'; // Imported Navbar
import About from './component_/About';
import AudiophileSection from './component_/AudiophileSection';
import CoffeeSection from './component_/CoffeeSection';
import ArduinoSection from './component_/ArduinoSection';
import Projects from './component_/Projects';
import Skills from './component_/Skills';
import Socials from './component_/Socials';
import ArduinoProjectsPage from './component_/ArduinoProjectsPage';
import CustomCursor from './component_/CustomCursor';
import LoadingScreen from './component_/LoadingScreen';
import './App.css';

const SectionTitlePage = ({ title }) => {
  const textRef = useRef(null);

  useEffect(() => {
    // Floating Animation
    gsap.to(textRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(textRef.current, {
      color: 'transparent',
      webkitTextStroke: '2px #fff',
      textShadow: '0 0 40px rgba(255, 255, 255, 0.8)',
      scale: 1.05,
      duration: 0.3
    });
  };

  const handleMouseLeave = () => {
    gsap.to(textRef.current, {
      color: '#fff',
      webkitTextStroke: '0px transparent',
      textShadow: '0 0 30px rgba(255,255,255,0.1)',
      scale: 1,
      duration: 0.3
    });
  };

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      color: '#fff',
      zIndex: 1,
      position: 'relative'
    }}>
      <h1
        ref={textRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: '900',
          fontSize: 'clamp(3rem, 15vw, 15rem)',
          margin: 0,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: '#fff',
          textShadow: '0 0 30px rgba(255,255,255,0.1)',
          cursor: 'default',
          willChange: 'transform, color, text-shadow',
          textAlign: 'center',
          padding: '0 20px',
          width: '100%',
          textWrap: 'balance'
        }}
      >
        {title}
      </h1>
    </div>
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [areLinesVisible, setAreLinesVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cleaned Up: No more excessive state causing re-renders!
  // const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  const floatingLinesContainerRef = useRef(null);
  const lenisRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize Lenis for smooth scrolling
  useEffect(() => {

    // Reset scroll to top on mount
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 0.8, // Heavy friction
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.1, // Reduced speed
      smoothTouch: false,
      touchMultiplier: 0.3, // Reduced speed
      infinite: false,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (location.state?.targetSection) {
      setTimeout(() => {
        const element = document.getElementById(location.state.targetSection);
        if (element) {
          lenis.scrollTo(element, { immediate: true });
          window.history.replaceState({}, document.title);
        }
      }, 100);
    }

    return () => {
      lenis.destroy();
    };
  }, [location]);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element);
    }
  };

  // Scroll opacity logic ONLY (Performant DOM updates, no state spam)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Floating lines opacity
      const fadeStart = 0;
      const fadeEnd = windowHeight * 0.8;
      let newOpacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
      newOpacity = Math.max(0, Math.min(1, newOpacity));

      if (floatingLinesContainerRef.current) {
        floatingLinesContainerRef.current.style.opacity = newOpacity;
        floatingLinesContainerRef.current.style.pointerEvents = newOpacity > 0 ? 'auto' : 'none';
      }

      // Only check state if it actually changes to prevent re-renders
      if (newOpacity <= 0 && areLinesVisible) {
        setAreLinesVisible(false);
      } else if (newOpacity > 0 && !areLinesVisible) {
        setAreLinesVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [areLinesVisible]);


  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className="content-wrapper">

        {/* Isolated Navbar Component */}
        <Navbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
        />

        {/* Mobile Side Drawer + Backdrop */}
        <div
          className={`mobile-menu-backdrop ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* The Sidebar itself */}
        <div className={`mobile-menu-sidebar ${isMenuOpen ? 'open' : ''}`}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left', paddingLeft: '40px' }}>
            {/* Mobile Home Link */}
            <a
              href="/"
              className="mobile-nav-link"
              style={{ textDecoration: 'none', color: '#fff' }}
            >
              Home
            </a>

            {['about', 'projects', 'audiophile', 'skills', 'socials'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="mobile-nav-link"
              >
                {section === 'audiophile' ? 'Interests' : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <main className="center-content">
          <h1>Aaron Preston</h1>
          <h2>李宜倖</h2>
          <div className="role">Year 2</div>
        </main>
        <div></div>
      </div>

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

      <div id="about">
        <About />
      </div>

      {/* COMBINED PROJECTS SECTION */}
      <div id="projects">
        <SectionTitlePage title="PROJECTS" />
        <ArduinoSection />
        <Projects />
      </div>

      <div id="audiophile">
        <SectionTitlePage title="INTERESTS" />
        <AudiophileSection />
        <CoffeeSection />
      </div>

      <div id="skills">
        <Skills />
      </div>
      <div id="socials">
        <Socials />
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arduino-projects" element={<ArduinoProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;
