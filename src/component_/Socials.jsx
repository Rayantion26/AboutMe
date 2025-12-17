import React, { useState } from 'react';
import gsap from 'gsap';

const Socials = () => {
    const [copied, setCopied] = useState(false);

    const SOCIAL_DATA = [
        {
            id: 'github',
            username: 'Rayantion26',
            url: 'https://github.com/Rayantion26',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.79 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
                </svg>
            )
        },
        {
            id: 'lastfm',
            username: 'Rayantion26',
            url: 'https://www.last.fm/user/Rayantion26',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.0002 0.00010498C5.37258 0.00010498 0 5.37268 0 12.0002C0 18.6277 5.37258 24.0002 12.0002 24.0002C18.6278 24.0002 24 18.6277 24 12.0002C24 5.37268 18.6278 0.00010498 12.0002 0.00010498ZM17.2023 18.1963C16.4962 18.5721 15.6565 18.7752 14.8082 18.7752C12.4346 18.7752 10.5901 17.1523 10.3752 14.7356C10.3061 13.9189 10.4216 13.5186 10.7417 12.8736L11.7583 10.8757C12.1895 10.0275 12.3789 9.53921 12.3789 8.65366C12.3789 7.42609 11.5361 6.64333 10.4077 6.64333C9.44473 6.64333 8.79015 7.21443 8.52845 8.27137H6.55627C6.73699 6.22557 8.35824 5.12354 10.4077 5.12354C12.637 5.12354 14.3649 6.51631 14.3649 8.79471C14.3649 9.87088 14.0722 10.5375 13.4344 11.666L12.4709 13.5709C12.229 14.0438 12.1772 14.2885 12.1772 14.8085C12.1772 16.2951 13.2504 17.2087 14.7049 17.2087C15.3565 17.2087 15.9392 17.0709 16.4866 16.786V18.1963H17.2023Z" />
                    <circle cx="17.4" cy="6.6" r="1.5" />
                </svg>
            )
        },
        {
            id: 'instagram',
            username: 'pres.26',
            url: 'https://instagram.com/pres.26',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            )
        },
        {
            id: 'email',
            username: copied ? 'Copied!' : 'aaronschool69@gmail.com', // Toggle text
            url: '#', // No default link
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
            )
        }
    ];

    const handleMouseEnter = (e) => {
        gsap.to(e.currentTarget, {
            y: -5,
            scale: 1.05,
            borderColor: '#fff',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
            duration: 0.3,
            ease: 'power2.out'
        });
    };

    const handleMouseLeave = (e) => {
        gsap.to(e.currentTarget, {
            y: 0,
            scale: 1,
            borderColor: '#333',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            duration: 0.3,
            ease: 'power2.out'
        });
    };

    const handleEmailClick = (e, social) => {
        if (social.id === 'email') {
            e.preventDefault();
            const textToCopy = 'aaronschool69@gmail.com';

            // Try modern API
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                }).catch(err => {
                    console.error('Clipboard API failed', err);
                    fallbackCopy(textToCopy);
                });
            } else {
                fallbackCopy(textToCopy);
            }
        }
    };

    const fallbackCopy = (text) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";  // Avoid scrolling to bottom
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Fallback copy failed', err);
        }
        document.body.removeChild(textArea);
    };

    return (
        <section id="socials" style={{ padding: '100px 20px', backgroundColor: '#050505', color: 'white', textAlign: 'center', fontFamily: "'Montserrat', sans-serif" }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '50px', textTransform: 'uppercase', letterSpacing: '2px' }}>Connect With Me</h2>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', maxWidth: '1000px', margin: '0 auto' }}>
                {SOCIAL_DATA.map((social) => (
                    <a
                        key={social.id}
                        href={social.url}
                        className="social-card"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={(e) => handleEmailClick(e, social)} // Intercept click
                        target={social.id === 'email' ? '_self' : '_blank'}
                        rel="noreferrer"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '15px',
                            minWidth: '200px', // Wider to fit email
                            padding: '30px 20px',
                            textDecoration: 'none',
                            color: '#fff',
                            border: '1px solid #333',
                            borderRadius: '20px',
                            transition: 'border-color 0.3s',
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{ fontSize: '2rem', color: social.id === 'email' && copied ? '#00ff66' : 'inherit', transition: 'color 0.3s' }}>
                            {social.icon}
                        </div>
                        <span style={{
                            fontSize: '1rem',
                            fontWeight: '500',
                            color: social.id === 'email' && copied ? '#00ff66' : 'inherit',
                            transition: 'color 0.3s'
                        }}>
                            {social.username}
                        </span>
                    </a>
                ))}
            </div>

            <footer style={{ marginTop: '100px', color: '#444', fontSize: '0.9rem', fontFamily: "'Roboto Mono', monospace" }}>
                © {new Date().getFullYear()} Aaron Preston. All rights reserved.
            </footer>
        </section>
    );
};

export default Socials;
