import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import audiophileImg from '../assets/audiophile.jpg';
import '../App.css';

gsap.registerPlugin(ScrollTrigger);

const AudiophileSection = () => {
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
                width: '35vw', // Slightly smaller squircle
                height: '35vw',
                borderRadius: '50px',
                left: '25%', // Move to left quarter
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
                }, "phase1+=1") // Start halfway through image move
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
            {/* Center Text */}
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
                    fontSize: 'clamp(3rem, 12vw, 10rem)',
                    color: 'white',
                    letterSpacing: '0.05em',
                    margin: 0,
                    textWrap: 'balance'
                }}>
                    AUDIOPHILE
                </h1>
            </div>

            {/* Artistic Border Container */}
            <div
                ref={borderRef}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '25%',
                    transform: 'translate(-50%, -50%)',
                    width: '37vw', // Slightly larger than squircle (35vw)
                    height: '37vw',
                    borderRadius: '60px',
                    border: '2px solid rgba(255,255,255,0.3)',
                    boxShadow: '0 0 30px rgba(255,255,255,0.1)',
                    zIndex: 5,
                    opacity: 0,
                    pointerEvents: 'none'
                }}
            ></div>

            {/* Image Wrapper (Squircle Target) */}
            <div
                ref={wrapperRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    position: 'absolute',
                    zIndex: 2,
                    overflow: 'hidden',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                    cursor: 'none'
                }}
            >
                <img
                    ref={imageRef}
                    src={audiophileImg}
                    alt="Audiophile Equipment"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: 'scale(1.15)', // Initial slight zoom
                        transition: 'transform 0.5s ease-out'
                    }}
                />
            </div>

            {/* Right Content */}
            <div
                ref={contentRightRef}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '5%', // Reduced right margin to give more space
                    transform: 'translate(0, -50%)',
                    width: '45%', // Increased width to prevent text compression
                    zIndex: 5,
                    opacity: 0,
                    color: 'white'
                }}
            >
                <h2 style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: '900',
                    fontSize: 'clamp(3rem, 6vw, 6rem)', // Adjusted clamp
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    lineHeight: '0.9',
                    whiteSpace: 'nowrap',
                    textWrap: 'balance'
                }}>
                    Audiophile
                </h2>
                <div style={{ width: '60px', height: '4px', backgroundColor: '#fff', marginBottom: '30px', display: 'inline-block' }}></div>
                <p style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
                    lineHeight: '1.8',
                    fontWeight: '300',
                    color: '#ccc'
                }}>
                    Immerse yourself in the purest sound. My journey into high-fidelity audio involves custom-tuned in-ear monitors,
                    precision DACs, and a relentless pursuit of the perfect frequency response. It's not just about hearing music;
                    it's about feeling every vibration and nuance as the artist intended.
                </p>
            </div>
        </section>
    );
};

export default AudiophileSection;
