import React from 'react';

const Socials = () => {
    return (
        <section id="socials" style={{ padding: '100px 20px', backgroundColor: '#050505', color: 'white', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '50px', fontFamily: "'Playfair Display', serif" }}>Connect With Me</h2>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                <a href="#" className="social-link" style={linkStyle}>GitHub</a>
                <a href="#" className="social-link" style={linkStyle}>LinkedIn</a>
                <a href="#" className="social-link" style={linkStyle}>Instagram</a>
                <a href="#" className="social-link" style={linkStyle}>Email</a>
            </div>

            <footer style={{ marginTop: '100px', color: '#444', fontSize: '0.9rem' }}>
                © {new Date().getFullYear()} Aaron Preston. All rights reserved.
            </footer>
        </section>
    );
};

const linkStyle = {
    fontSize: '1.5rem',
    color: '#fff',
    textDecoration: 'none',
    border: '1px solid #333',
    padding: '15px 30px',
    borderRadius: '30px',
    transition: 'all 0.3s ease',
    fontFamily: "'Inter', sans-serif"
};

export default Socials;
