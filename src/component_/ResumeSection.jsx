import React, { useRef } from 'react';
import gsap from 'gsap';
import '../App.css';
import resumeFile from '../assets/Resume.pdf'; // Assuming file exists or placeholder

const ResumeSection = () => {
    const containerRef = useRef(null);
    const buttonRef = useRef(null);

    const handleMouseEnter = () => {
        gsap.to(buttonRef.current, {
            scale: 1.1,
            backgroundColor: '#fff',
            color: '#000',
            duration: 0.3,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = () => {
        gsap.to(buttonRef.current, {
            scale: 1,
            backgroundColor: 'transparent',
            color: '#fff',
            duration: 0.3,
            ease: "power2.out"
        });
    };

    return (
        <section
            id="resume"
            ref={containerRef}
            style={{
                minHeight: '60vh', // Not full height, just a focused section
                width: '100%',
                position: 'relative',
                backgroundColor: '#050505', // Very dark grey, slight contrast to pure black
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '150px 30px', // Increased vertical and horizontal padding
                textAlign: 'center',
                boxSizing: 'border-box' // Prevent width overflow
            }}
        >
            <h2 style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontWeight: 900,
                color: '#fff',
                marginBottom: '30px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
            }}>
                Professional <wbr /> Profile
            </h2>

            <div style={{
                width: '100%',
                maxWidth: '600px', // Tighter constraint for readability
                marginBottom: '60px',
                lineHeight: '1.8',
                color: '#ccc',
                fontFamily: "'Roboto', sans-serif",
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                fontWeight: 300,
                padding: '0 20px', // More internal padding
                margin: '0 auto', // strict centering
                textAlign: 'center', // Explicit center alignment
                boxSizing: 'border-box'
            }}>
                <p>
                    I specialize in building scalable web applications and integrating complex hardware systems.
                    With a strong foundation in both frontend development and automation workflows,
                    I bridge the gap between digital interfaces and physical device control.
                    Download my resume to see my full experience, education, and technical stack in detail.
                </p>
            </div>

            <a
                href={resumeFile}
                download="Aaron_Preston_Resume.pdf"
                style={{ textDecoration: 'none' }}
            >
                <div
                    ref={buttonRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        padding: '15px 40px',
                        border: '2px solid #fff',
                        borderRadius: '50px',
                        color: '#fff',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: '700',
                        fontSize: '1rem',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        transition: 'box-shadow 0.3s'
                    }}
                >
                    Download Resume
                </div>
            </a>

        </section>
    );
};

export default ResumeSection;
