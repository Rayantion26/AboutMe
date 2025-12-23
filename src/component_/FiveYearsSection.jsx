import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CodingTransition from './transition/CodingTransition';

gsap.registerPlugin(ScrollTrigger);

const FiveYearsSection = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const buttonRef = useRef(null);
    const codeBgRef = useRef(null);
    const [isNavigating, setIsNavigating] = useState(false);

    useEffect(() => {
        // --- 1. Background "Code Rain" Effect (Simple CSS/JS version) ---
        // We'll create some floating code elements
        const codes = [
            "SYSTEM.INIT_V5()", "TARGET: 2030", "HERO_STATUS: LOADING...",
            "OPTIMIZE_INTENT", "VIBE_CODING::ENABLED", "GRAVITY: 9.81",
            "LATENCY: 12ms", "CONNECTION_SECURE", "THE_CHASE.EXE"
        ];

        // Clear previous if any (Strict Mode handling)
        if (codeBgRef.current) codeBgRef.current.innerHTML = '';

        codes.forEach((text, i) => {
            const span = document.createElement('span');
            span.innerText = text;
            span.style.position = 'absolute';
            span.style.color = 'rgba(0, 255, 255, 0.1)';
            span.style.fontFamily = "'Courier New', Courier, monospace";
            span.style.fontSize = `${Math.random() * 10 + 10}px`;
            span.style.left = `${Math.random() * 90}%`;
            span.style.top = `${Math.random() * 90}%`;
            span.style.userSelect = 'none';
            span.style.pointerEvents = 'none';
            codeBgRef.current.appendChild(span);

            // Floating animation for code
            gsap.to(span, {
                y: `+=${Math.random() * 50 + 20}`,
                opacity: 0.3,
                duration: Math.random() * 3 + 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });

        // --- 2. Entrance Animation ---
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "center center",
                toggleActions: "play none none reverse",
                // markers: true
            }
        });

        tl.fromTo(titleRef.current,
            { opacity: 0, y: 50, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
        )
            .fromTo(buttonRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
                "-=0.3"
            );

    }, []);

    const handleButtonEnter = () => {
        gsap.to(buttonRef.current, {
            scale: 1.1,
            boxShadow: "0 0 20px rgba(0, 255, 255, 0.6)",
            textShadow: "0 0 10px rgba(0, 255, 255, 0.8)",
            duration: 0.3,
            ease: "power2.out"
        });
    };

    const handleButtonLeave = () => {
        gsap.to(buttonRef.current, {
            scale: 1,
            boxShadow: "0 0 0px rgba(0, 255, 255, 0)",
            textShadow: "none",
            duration: 0.3,
            ease: "power2.out"
        });
    };

    // Glitch effect on Text Hover
    const handleTitleHover = () => {
        const originalText = "ME IN 5 YEARS?";
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        let iterations = 0;

        const interval = setInterval(() => {
            titleRef.current.innerText = originalText
                .split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return originalText[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");

            if (iterations >= originalText.length) {
                clearInterval(interval);
            }
            iterations += 1 / 3;
        }, 30);
    };

    const handleEnterSystem = (e) => {
        e.preventDefault();
        setIsNavigating(true);
    };

    const handleAnimationComplete = () => {
        window.location.href = '/5Years/';
    };

    return (
        <section
            ref={containerRef}
            style={{
                position: 'relative',
                width: '100%',
                minHeight: '60vh', // Significant but not full screen
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#000',
                borderTop: '1px solid rgba(0, 255, 255, 0.2)',
                borderBottom: '1px solid rgba(0, 255, 255, 0.2)',
                overflow: 'hidden',
                padding: '50px 20px'
            }}
        >
            {isNavigating && <CodingTransition onComplete={handleAnimationComplete} />}

            {/* Background Code Layer */}
            <div ref={codeBgRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}></div>

            {/* Content Content */}
            <h2
                ref={titleRef}
                onMouseEnter={handleTitleHover}
                style={{
                    fontFamily: "'Courier New', Courier, monospace", // Fallback monospace
                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                    color: '#fff',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    marginBottom: '10px',
                    zIndex: 2,
                    cursor: 'default',
                    borderBottom: '2px solid cyan',
                    paddingBottom: '0.5rem'
                }}
            >
                ME IN 5 YEARS?
            </h2>

            <p style={{
                color: '#aaa',
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: '1rem',
                marginBottom: '40px',
                zIndex: 2,
                textAlign: 'center',
                maxWidth: '600px'
            }}>
                "My hero is me in 5 years."<br />
                <span style={{ color: 'cyan', fontSize: '0.8rem' }}>// TARGET: 2030 // INITIATE_SEQUENCE</span>
            </p>

            <a
                ref={buttonRef}
                href="/5Years/"
                onClick={handleEnterSystem}
                onMouseEnter={handleButtonEnter}
                onMouseLeave={handleButtonLeave}
                style={{
                    position: 'relative',
                    padding: '15px 40px',
                    backgroundColor: 'transparent',
                    border: '1px solid cyan',
                    color: 'cyan',
                    fontFamily: "'Courier New', Courier, monospace",
                    fontSize: '1.2rem',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    letterSpacing: '0.1em',
                    zIndex: 2,
                    overflow: 'hidden',
                    cursor: 'pointer'
                }}
            >
                ENTER SYSTEM
            </a>

            {/* Decoration Lines */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                color: 'cyan',
                fontSize: '0.7rem',
                fontFamily: 'monospace',
                opacity: 0.7
            }}>
                SYS.READY &gt;&gt;
            </div>
        </section>
    );
};

export default FiveYearsSection;
