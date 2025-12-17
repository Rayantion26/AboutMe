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
                padding: '100px 20px',
                textAlign: 'center'
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
                Professional Profile
            </h2>

            <div style={{
                width: '90%', // Ensure it doesn't touch edges on mobile
                maxWidth: '800px',
                marginBottom: '60px',
                lineHeight: '1.8',
                color: '#ccc',
                fontFamily: "'Roboto', sans-serif",
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                fontWeight: 300,
                padding: '0 10px', // Extra safety padding
                margin: '0 auto' // Center physically
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
