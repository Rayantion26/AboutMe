import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import FloatingLines from './FloatingLines';
import Navbar from './component_/Navbar'; // Imported Navbar
import About from './component_/About';
import AudiophileSection from './component_/AudiophileSection';
import CoffeeSection from './component_/CoffeeSection';
import ArduinoSection from './component_/ArduinoSection';
import Projects from './component_/Projects';
import Skills from './component_/Skills';
import ResumeSection from './component_/ResumeSection'; // Import
import FiveYearsSection from './component_/FiveYearsSection';
import Socials from './component_/Socials';
import ArduinoProjectsPage from './component_/ArduinoProjectsPage';
import CustomCursor from './component_/CustomCursor';
import LoadingScreen from './component_/LoadingScreen';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

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
      textShadow: '0 0 40px rgba(255, 255, 255, 0.8)',
      scale: 1.05,
      duration: 0.3
    });
  };

  const handleMouseLeave = () => {
    gsap.to(textRef.current, {
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
          fontSize: 'clamp(2rem, 12vw, 15rem)', // Reduced from 3rem/15vw to fit mobile
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

// FloatingLines Configuration (Static to prevent WebGL context thrashing)
const FL_ENABLED_WAVES = ['top', 'middle', 'bottom'];
const FL_LINE_COUNT = [12, 5, 4];
const FL_LINE_DISTANCE = [20, 22, 18];

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false); // New state for fade-out

  const [lenis, setLenis] = useState(null); // Lifted to state for Navbar
  const [linesPaused, setLinesPaused] = useState(false); // Restored state
  const floatingLinesContainerRef = useRef(null);
  const lenisRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    // Reset scroll to top on mount
    window.scrollTo(0, 0);

    const lenisInstance = new Lenis({
      duration: 1.0, // Snappier
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.8, // More responsive
      smoothTouch: false, // Default touch handling preventing weird overrides
      touchMultiplier: 0.8, // More responsive
      infinite: false,
    });
    lenisRef.current = lenisInstance;
    window.lenis = lenisInstance; // Expose for global control (e.g. Lightbox)
    setLenis(lenisInstance); // Trigger re-render for children

    // Connect Lenis to GSAP ScrollTrigger
    lenisInstance.on('scroll', ScrollTrigger.update);

    // Use GSAP ticker for Lenis for perfect sync
    const updateLenis = (time) => {
      lenisInstance.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0); // Disable lag smoothing for instant response

    // Stop/Start Lenis based on loading state
    if (lenisInstance) {
      if (isLoading) lenisInstance.stop();
      else lenisInstance.start();
    }

    // --- Floating Lines Fade via GSAP ---
    if (floatingLinesContainerRef.current) {
      // 1. Visual Fade
      gsap.to(floatingLinesContainerRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#projects",
          start: "top bottom",
          end: "center center",
          scrub: true,
        }
      });

      // 2. Logic Pause (Performance)
      ScrollTrigger.create({
        trigger: "#projects",
        start: "center center", // When opacity reaches 0
        end: "max",
        onEnter: () => setLinesPaused(true),
        onLeaveBack: () => setLinesPaused(false) // Resume when compiling back up
      });
    }

    if (location.state?.targetSection) {
      setTimeout(() => {
        const element = document.getElementById(location.state.targetSection);
        if (element) {
          lenisInstance.scrollTo(element, { immediate: true });
          window.history.replaceState({}, document.title);
        }
      }, 100);
    }

    return () => {
      lenisInstance.destroy();
      gsap.ticker.remove(updateLenis);
      // ScrollTrigger.getAll().forEach(t => t.kill()); // REMOVED: This kills triggers of the NEXT page too if they mount fast.
    };
  }, [location]);

  // Handle Scroll Locking during Loading
  useEffect(() => {
    if (lenis) {
      if (isLoading) lenis.stop();
      else lenis.start();
    }
  }, [lenis, isLoading]);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element);
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (isLeaving) return;

    setIsLeaving(true);
    setIsMenuOpen(false);

    // Wait for fade out then reload
    setTimeout(() => {
      window.location.href = '/';
    }, 800); // 0.8s matches transition
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Exit Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000',
        zIndex: 999999, // Extremely high
        opacity: isLeaving ? 1 : 0,
        pointerEvents: isLeaving ? 'all' : 'none',
        transition: 'opacity 0.8s ease-in-out'
      }}></div>

      {/* Isolated Navbar Component - Moved outside content-wrapper for correct layering */}
      <Navbar
        lenis={lenis} // PASS LENIS PROP
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        onHomeClick={handleHomeClick}
      />

      {/* Mobile Side Drawer + Backdrop - Moved outside content-wrapper */}
      <div
        className={`mobile-menu-backdrop ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div className={`mobile-menu-sidebar ${isMenuOpen ? 'open' : ''}`}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left', paddingLeft: '40px' }}>
          <a
            href="/"
            onClick={handleHomeClick}
            className="mobile-nav-link"
            style={{ textDecoration: 'none', color: '#fff' }}
          >
            Home
          </a>

          {['about', 'projects', 'audiophile', 'skills', 'resume', 'fiveyears', 'socials'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="mobile-nav-link"
            >
              {section === 'audiophile' ? 'Interests' : section === 'fiveyears' ? '5 Years' : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      <div className="content-wrapper">

        <main className="center-content">
          <h1>Aaron Preston</h1>
          <h2>李宜倖</h2>
          <div className="role">Year 2</div>
        </main>
        <div></div>
      </div>

      <div
        ref={floatingLinesContainerRef}
        style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: 0, backgroundColor: '#000' }}
      >
        <FloatingLines
          enabledWaves={FL_ENABLED_WAVES}
          lineCount={FL_LINE_COUNT}
          lineDistance={FL_LINE_DISTANCE}
          bendRadius={10.0}
          bendStrength={-1}
          interactive={true}
          parallax={true}
          paused={linesPaused}
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

      <div id="resume">
        <ResumeSection />
      </div>

      <div id="fiveyears">
        <FiveYearsSection />
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
