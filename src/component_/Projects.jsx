import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../App.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const imageRef = useRef(null);
    const centerTextRef = useRef(null);
    const contentRightRef = useRef(null);
    const borderRef = useRef(null);

    useEffect(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 800px)", () => {
            // DESKTOP
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=800%",
                    scrub: 2,
                    pin: true,
                    anticipatePin: 1
                }
            });

            gsap.set(wrapperRef.current, {
                width: '100vw',
                height: '100vh',
                borderRadius: '0px',
                top: '50%',
                left: '50%',
                xPercent: -50,
                yPercent: -50,
            });

            // Reset mobile styles
            gsap.set(contentRightRef.current, {
                top: '50%',
                right: '5%',
                left: 'auto',
                bottom: 'auto',
                width: '45%',
                x: 50,
                y: 0
            });

            tl.to(wrapperRef.current, {
                width: '35vw',
                height: '35vw',
                borderRadius: '50px',
                left: '25%',
                ease: "power2.inOut",
                duration: 2
            }, "phase1")
                .to(centerTextRef.current, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 1,
                    ease: "power2.in",
                }, "phase1")
                .to(borderRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out"
                }, "phase1+=1")
                .fromTo(contentRightRef.current,
                    { opacity: 0, x: 50 },
                    { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" },
                    "phase1+=1"
                );
        });

        mm.add("(max-width: 799px)", () => {
            // MOBILE
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=800%",
                    scrub: 2,
                    pin: true,
                    anticipatePin: 1
                }
            });

            gsap.set(wrapperRef.current, {
                width: '100vw',
                height: '100vh',
                borderRadius: '0px',
                top: '50%',
                left: '50%',
                xPercent: -50,
                yPercent: -50,
            });

            // Adjust border for mobile
            gsap.set(borderRef.current, {
                width: '85vw',
                height: '85vw',
                left: '50%',
                top: '40%'
            });

            // Adjust content for mobile
            gsap.set(contentRightRef.current, {
                top: 'auto',
                bottom: '5%',
                left: '50%',
                right: 'auto',
                width: '90%',
                xPercent: -50,
                x: 0,
                y: 50,
                textAlign: 'center'
            });

            tl.to(wrapperRef.current, {
                width: '80vw',
                height: '80vw',
                borderRadius: '40px',
                left: '50%',
                top: '40%',
                ease: "power2.inOut",
                duration: 2
            }, "phase1")
                .to(centerTextRef.current, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 1,
                    ease: "power2.in",
                }, "phase1")
                .to(borderRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out"
                }, "phase1+=1")
                .fromTo(contentRightRef.current,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
                    "phase1+=1"
                );
        });

        return () => mm.revert();
    }, []);

    const handleMouseEnter = () => {
        gsap.to(imageRef.current, { scale: 1, duration: 0.5, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
        gsap.to(imageRef.current, { scale: 1.15, duration: 0.5, ease: "power2.out" });
    };

    return (
        <section
            ref={containerRef}
            style={{
                height: '100vh',
                width: '100%',
                position: 'relative',
                backgroundColor: '#000',
                overflow: 'hidden'
            }}
        >
            {/* Center Text (Layer 1) */}
            <div
                ref={centerTextRef}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10,
                    width: '100%',
                    textAlign: 'center',
                    pointerEvents: 'none',
                    mixBlendMode: 'difference'
                }}
            >
                <h1 style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: '900',
                    fontSize: 'clamp(3rem, 15vw, 15rem)', // Large Impact Text
                    color: 'white',
                    letterSpacing: '0.05em',
                    margin: 0,
                    textWrap: 'balance'
                }}>
                    N8N
                </h1>
            </div>

            {/* Artistic Border */}
            <div
                ref={borderRef}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '25%',
                    transform: 'translate(-50%, -50%)',
                    width: '37vw',
                    height: '37vw',
                    borderRadius: '60px',
                    border: '2px solid rgba(255, 107, 107, 0.3)', // N8N Red/Orange
                    boxShadow: '0 0 30px rgba(255, 107, 107, 0.1)',
                    zIndex: 5,
                    opacity: 0,
                    pointerEvents: 'none'
                }}
            ></div>

            {/* Image Wrapper */}
            <div
                ref={wrapperRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    position: 'absolute',
                    zIndex: 2,
                    overflow: 'hidden',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                    backgroundColor: '#1a1a1a'
                }}
            >
                <img
                    ref={imageRef}
                    src="https://placehold.co/1920x1080/ff6b6b/ffffff?text=N8N+Automation" // Placeholder
                    alt="N8N Project"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: 'scale(1.15)',
                        transition: 'transform 0.5s ease-out'
                    }}
                />
            </div>

            {/* Right Content (Layer 2) */}
            <div
                ref={contentRightRef}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '5%',
                    transform: 'translate(0, -50%)',
                    width: '45%',
                    zIndex: 5,
                    opacity: 0,
                    color: 'white'
                }}
            >
                <h2 style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: '900',
                    fontSize: 'clamp(1.5rem, 3.5vw, 4rem)', // Slightly smaller for long title
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    lineHeight: '1.2',
                    color: '#ff6b6b', // N8N Color
                    textWrap: 'balance'
                }}>
                    TongBian Receipt Reader Line Bot (R.R. Line Bot)
                </h2>
                <div style={{ width: '60px', height: '4px', backgroundColor: '#ff6b6b', marginBottom: '30px', display: 'inline-block' }}></div>
                <p style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
                    lineHeight: '1.8',
                    fontWeight: '300',
                    color: '#ccc',
                    marginBottom: '40px'
                }}>
                    An intelligent automation bot built with n8n that processes receipts and integrates directly with LINE messenger.
                    It uses OCR to extract data and automatically categorizes expenses, streamlining personal finance management.
                </p>

                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                    <span style={{ padding: '8px 20px', backgroundColor: '#222', borderRadius: '20px', fontSize: '0.9rem', color: '#fff' }}>n8n</span>
                    <span style={{ padding: '8px 20px', backgroundColor: '#222', borderRadius: '20px', fontSize: '0.9rem', color: '#fff' }}>LINE API</span>
                    <span style={{ padding: '8px 20px', backgroundColor: '#222', borderRadius: '20px', fontSize: '0.9rem', color: '#fff' }}>OCR</span>
                </div>
            </div>
        </section>
    );
};

export default Projects;
