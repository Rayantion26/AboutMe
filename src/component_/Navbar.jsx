import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Navbar = ({ isMenuOpen, setIsMenuOpen, scrollToSection, onHomeClick }) => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const lastScrollY = useRef(0);

    // Smart Header Logic
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const lastY = lastScrollY.current;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    // Logic: Hide on scroll down, Show on scroll up
                    // Buffer of 10px to prevent jitter
                    if (currentScrollY > lastY + 10 && currentScrollY > 50) {
                        setIsHeaderVisible(false);
                    } else if (currentScrollY < lastY - 10 || currentScrollY < 50) {
                        setIsHeaderVisible(true);
                    }
                    lastScrollY.current = currentScrollY;
                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Button Hover Effects
    const handleBtnEnter = (e) => {
        gsap.to(e.target, {
            y: -3,
            borderColor: '#fff',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
            duration: 0.3
        });
    };

    const handleBtnLeave = (e) => {
        gsap.to(e.target, {
            y: 0,
            borderColor: 'transparent',
            boxShadow: 'none',
            duration: 0.3
        });
    };

    return (
        <header
            className="top-bar"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: '20px 40px',
                boxSizing: 'border-box',
                zIndex: 10003,
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)',
                // Glassmorphism & Mask
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                pointerEvents: isHeaderVisible ? 'auto' : 'none'
            }}
        >
            {/* Hamburger Icon (Mobile Only) */}
            <div
                className="hamburger-icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{ zIndex: 10002, cursor: 'pointer', display: 'none' }}
            >
                {isMenuOpen ? '✕' : '☰'}
            </div>

            <a
                className="logo"
                href="/"
                onClick={onHomeClick}
                style={{
                    cursor: 'pointer',
                    color: 'inherit',
                    textDecoration: 'none',
                    padding: '10px'
                }}
            >
                Home
            </a>

            <nav className="center-top desktop-nav">
                {['about', 'projects', 'audiophile', 'skills', 'socials'].map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        onMouseEnter={handleBtnEnter}
                        onMouseLeave={handleBtnLeave}
                        className="nav-link"
                        style={{
                            border: '1px solid transparent',
                            borderRadius: '20px',
                            padding: '8px 16px'
                        }}
                    >
                        {section === 'audiophile' ? 'Interests' : section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                ))}
            </nav>

            <div className="date-location" style={{ padding: '10px' }}>Created<br />2025/11/21</div>
        </header>
    );
};

export default Navbar;
