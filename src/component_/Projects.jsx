import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import n8nImage from '../assets/N8NImage.jpg';
import rrBotQR from '../assets/RRBotQR.jpg';
import '../App.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const [showQR, setShowQR] = useState(false);
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
                    end: "+=400%",
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
                width: isDesktop ? '35vw' : '90vw',
                height: isDesktop ? '35vw' : '45vh',
                borderRadius: isDesktop ? '50px' : '30px',
                left: isDesktop ? '25%' : '50%',
                top: isDesktop ? '50%' : '40%', // Move up on mobile
                ease: "power2.inOut",
                duration: 2
            }, "phase1")
                .fromTo(imageRef.current, {
                    scale: 1.6
                }, {
                    scale: 1.15,
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
                    width: isDesktop ? '37vw' : '92vw',
                    height: isDesktop ? '37vw' : '46vh',
                    left: isDesktop ? '25%' : '50%',
                    top: isDesktop ? '50%' : '40%',
                    duration: 1,
                    ease: "power2.out"
                }, "phase1+=1");

            // 2. Content Animation
            if (isMobile) {
                gsap.set(contentRightRef.current, {
                    top: '58%', // Moved up from 63% to ensure button visibility
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
                    src={n8nImage}
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
                    fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', // Optimized for mobile
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
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    lineHeight: '1.7',
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
                <button
                    onClick={() => setShowQR(true)}
                    onMouseEnter={(e) => gsap.to(e.currentTarget, { boxShadow: '0 0 20px #ff6b6b', borderColor: '#ff6b6b', color: '#ff6b6b', scale: 1.05, duration: 0.3 })}
                    onMouseLeave={(e) => gsap.to(e.currentTarget, { boxShadow: '0 0 0px transparent', borderColor: 'rgba(255, 255, 255, 0.3)', color: '#fff', scale: 1, duration: 0.3 })}
                    style={{
                        padding: '12px 30px',
                        backgroundColor: 'transparent',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '30px',
                        color: 'white',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '500',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        marginTop: '20px',
                        transition: 'all 0.3s ease'
                    }}
                >
                    SCAN TO ADD FRIEND
                </button>
            </div>

            {/* QR Code Modal */}
            {showQR && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0,0,0,0.9)',
                        zIndex: 1000,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity: 0,
                        animation: 'fadeIn 0.5s forwards'
                    }}
                    onClick={() => setShowQR(false)}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: window.innerWidth < 800 ? 'column' : 'row',
                            width: '80%',
                            maxWidth: '1000px',
                            maxHeight: '90vh',
                            backgroundColor: '#111',
                            border: '1px solid #333',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 0 50px rgba(255, 107, 107, 0.2)'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* QR Image Section */}
                        <div style={{
                            flex: 1,
                            backgroundColor: '#fff',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '20px'
                        }}>
                            <img
                                src={rrBotQR}
                                alt="RR Bot QR Code"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '400px',
                                    objectFit: 'contain'
                                }}
                            />
                        </div>

                        {/* Text / Commands Section */}
                        <div style={{
                            flex: 1.2,
                            padding: '40px',
                            color: '#fff',
                            overflowY: 'auto'
                        }}>
                            <h2 style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: '2rem',
                                color: '#ff6b6b',
                                marginBottom: '20px'
                            }}>
                                RR BOT COMMANDS
                            </h2>
                            <p style={{ fontFamily: "'Roboto', sans-serif", color: '#ccc', marginBottom: '30px', lineHeight: '1.6' }}>
                                Creating a new file on RR Bot needs a 2FA Code, so if you really want a personal file, <strong>CONTACT ME!!</strong><br />
                                Since this is testing only, you can use file name <code>"purchasetest"</code> as a reference. Enjoy!!
                            </p>

                            <div style={{
                                backgroundColor: '#222',
                                padding: '20px',
                                borderRadius: '10px',
                                fontFamily: "'Roboto Mono', monospace",
                                fontSize: '0.9rem',
                                borderLeft: '4px solid #ff6b6b'
                            }}>
                                <div style={{ marginBottom: '10px' }}><span style={{ color: '#ff6b6b' }}>/help</span> - For help</div>
                                <div style={{ marginBottom: '10px' }}><span style={{ color: '#ff6b6b' }}>/newpurchase</span> (file name) - For new purchases</div>
                                <div style={{ marginBottom: '10px' }}><span style={{ color: '#ff6b6b' }}>/getfile</span> (file name) - For getting files</div>
                                <div><span style={{ color: '#ff6b6b' }}>/create</span> (file name) (2FA Code) - For creating file</div>
                            </div>

                            <button
                                onClick={() => setShowQR(false)}
                                style={{
                                    marginTop: '30px',
                                    padding: '10px 20px',
                                    backgroundColor: 'transparent',
                                    border: '1px solid #555',
                                    color: '#888',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    fontFamily: "'Roboto', sans-serif"
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                    <style>{`
                        @keyframes fadeIn {
                            to { opacity: 1; }
                        }
                    `}</style>
                </div>
            )}

        </section>
    );
};

export default Projects;
