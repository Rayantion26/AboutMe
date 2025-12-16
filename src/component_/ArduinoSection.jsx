import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import arduinoImg from '../assets/RobotLineTracker.jpg';
import '../App.css';

gsap.registerPlugin(ScrollTrigger);

const ArduinoSection = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const imageRef = useRef(null);
    const centerTextRef = useRef(null);
    const contentRightRef = useRef(null);
    const borderRef = useRef(null);

    useEffect(() => {
        let mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 800px)",
            isMobile: "(max-width: 799px)"
        }, (context) => {
            let { isDesktop, isMobile } = context.conditions;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: isDesktop ? "+=800%" : "+=250%",
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

            // --- ANIMATION PHASES ---

            // 1. Squircle Shape & Position
            tl.to(wrapperRef.current, {
                width: isDesktop ? '35vw' : '85vw',
                height: isDesktop ? '35vw' : '35dvh',
                borderRadius: isDesktop ? '50px' : '30px',
                left: isDesktop ? '25%' : '50%',
                top: isDesktop ? '50%' : '30%',
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
                    width: isDesktop ? '37vw' : '87vw',
                    height: isDesktop ? '37vw' : '37dvh',
                    left: isDesktop ? '25%' : '50%',
                    top: isDesktop ? '50%' : '30%',
                    duration: 1,
                    ease: "power2.out"
                }, "phase1+=1");

            // 2. Content Animation
            if (isMobile) {
                gsap.set(contentRightRef.current, {
                    top: '55%', // Text starts below the image (30% center + half height ~17.5% = ~47.5%. 55% clears it)
                    bottom: 'auto',
                    left: '50%',
                    right: 'auto',
                    width: '85%',
                    xPercent: -50,
                    yPercent: 0,
                    x: 0,
                    textAlign: 'center',
                    padding: '0 10px'
                });

                tl.fromTo(contentRightRef.current,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
                    "phase1+=1"
                );
            } else {
                gsap.set(contentRightRef.current, {
                    top: '50%',
                    right: '5%',
                    left: 'auto',
                    bottom: 'auto',
                    width: '45%',
                    xPercent: 0,
                    yPercent: -50,
                    x: 50,
                    y: 0,
                    textAlign: 'left'
                });

                tl.fromTo(contentRightRef.current,
                    { opacity: 0, x: 50 },
                    { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" },
                    "phase1+=1"
                );
            }
        });

        return () => mm.revert();
    }, []);

    const handleMouseEnter = () => {
        gsap.to(imageRef.current, { scale: 1, duration: 0.5, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
        gsap.to(imageRef.current, { scale: 1.15, duration: 0.5, ease: "power2.out" });
    };

    const handleClick = () => {
        navigate('/arduino-projects');
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
                    fontSize: 'clamp(3rem, 15vw, 15rem)',
                    color: 'white',
                    letterSpacing: '0.05em',
                    margin: 0,
                    textWrap: 'balance'
                }}>
                    ENGINEER
                </h1>
            </div>

            <div
                ref={borderRef}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '25%', // Default desktop pos, overridden by GSAP
                    transform: 'translate(-50%, -50%)',
                    width: '37vw',
                    height: '37vw',
                    borderRadius: '60px',
                    border: '2px solid rgba(0, 151, 156, 0.3)',
                    boxShadow: '0 0 30px rgba(0, 151, 156, 0.1)',
                    zIndex: 5,
                    opacity: 0,
                    pointerEvents: 'none'
                }}
            ></div>

            <div
                ref={wrapperRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                style={{
                    position: 'absolute',
                    zIndex: 2,
                    overflow: 'hidden',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                    cursor: 'pointer',
                    backgroundColor: '#1a1a1a'
                }}
            >
                <img
                    ref={imageRef}
                    src={arduinoImg}
                    alt="Arduino Engineering"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: 'scale(1.15)',
                        transition: 'transform 0.5s ease-out'
                    }}
                />
            </div>

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
                    fontSize: 'clamp(1.5rem, 5vw, 4rem)',
                    marginBottom: '20px',
                    textTransform: 'uppercase',
                    lineHeight: '1.1',
                    color: '#00979C',
                    textWrap: 'balance'
                }}>
                    Smart Systems & IoT
                </h2>
                <div style={{ width: '60px', height: '4px', backgroundColor: '#00979C', marginBottom: '30px', display: 'inline-block' }}></div>
                <p style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    lineHeight: '1.7',
                    fontWeight: '300',
                    color: '#ccc',
                    marginBottom: '40px'
                }}>
                    Specializing in embedded systems and automated solutions. From autonomous line-following robots to RFID parking complexes,
                    I build the bridge between code and the physical world.
                </p>
                <button
                    onClick={handleClick}
                    className="view-project-btn"
                    style={{
                        padding: '15px 40px',
                        border: '1px solid #00979C',
                        backgroundColor: 'transparent',
                        color: '#00979C',
                        borderRadius: '30px',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        letterSpacing: '0.1rem',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s ease'
                    }}
                >
                    View Projects
                </button>
            </div>
        </section>
    );
};

export default ArduinoSection;
