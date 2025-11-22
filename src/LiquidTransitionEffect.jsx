import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './LiquidTransition.css';

gsap.registerPlugin(ScrollTrigger);

// Easing function for smoother splash (Ease Out Cubic)
function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
}

export default function LiquidTransitionEffect({ children }) {
    const containerRef = useRef(null);
    const blockRef = useRef(null);
    const splashContainerRef = useRef(null);
    const frontWaveRef = useRef(null);

    useEffect(() => {
        const block = blockRef.current;
        const splashContainer = splashContainerRef.current;
        const frontWave = frontWaveRef.current;
        const container = containerRef.current;

        if (!block || !splashContainer || !container) return;

        // Configuration
        const SPLIT_POINT = 0.7; // Wave starts earlier, overlaps with falling cube
        const MIN_SCALE = 0.2;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: "+=2000",
                    pin: true,
                    scrub: 0.5,
                    anticipatePin: 1,
                    onUpdate: (self) => {
                        const globalProgress = self.progress;
                        const viewportHeight = window.innerHeight;
                        const viewportWidth = window.innerWidth;

                        // Responsive Block Size
                        const isMobile = viewportWidth < 768;
                        const blockWidth = isMobile ? Math.min(100, viewportWidth * 0.25) : 150;
                        const padding = 20;

                        // Update block size dynamically
                        block.style.width = `${blockWidth}px`;
                        block.style.height = `${blockWidth}px`;

                        // Start: OUTSIDE FRAME (Top Right)
                        const startX = viewportWidth + 50;
                        const startY = -250;

                        // End: Bottom Left
                        const endX = padding;
                        const endY = viewportHeight - blockWidth - padding;

                        // --- LOGIC SPLIT ---

                        if (globalProgress < SPLIT_POINT) {
                            // === PHASE 1: FALLING ===
                            const phaseProgress = globalProgress / SPLIT_POINT;

                            block.style.opacity = '1';

                            // Parabolic Trajectory
                            const currentX = startX + (endX - startX) * phaseProgress;
                            const currentY = startY + (endY - startY) * (phaseProgress * phaseProgress);

                            // Rotation & Scale
                            const rotation = phaseProgress * 360;
                            const currentScale = 1 - (phaseProgress * (1 - MIN_SCALE));

                            block.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${rotation}deg) scale(${currentScale})`;

                            // Reset Splash
                            splashContainer.style.transform = 'translateY(105%)';

                        } else {
                            // === PHASE 2: SPLASH / CONSUME ===

                            let splashProgress = (globalProgress - SPLIT_POINT) / (1 - SPLIT_POINT);

                            // 1. Block Animation (Impact)
                            const currentScale = MIN_SCALE * (1 - splashProgress);

                            // We keep it at the impact site
                            block.style.transform = `translate(${endX}px, ${endY}px) rotate(${360 + (splashProgress * 45)}deg) scale(${currentScale})`;

                            // 2. WATER WAVE ANIMATION

                            // Apply Easing for natural liquid feel
                            const easedProgress = easeOutCubic(splashProgress);

                            // A. Vertical Rise (The Fill)
                            const risePercent = 105 - (easedProgress * 115);
                            splashContainer.style.transform = `translateY(${risePercent}%)`;

                            // B. Horizontal Flow (The "Left to Right" feel)
                            const waveShiftFront = -easedProgress * 20;
                            if (frontWave) {
                                frontWave.style.transform = `translateX(${waveShiftFront}%)`;
                            }
                        }
                    }
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} style={{ position: 'relative', minHeight: '300vh' }}>
            {/* The Block */}
            <div
                ref={blockRef}
                id="falling-block"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '150px',
                    height: '150px',
                    backgroundColor: 'white',
                    borderRadius: '24px',
                    boxShadow: '0 0 30px rgba(255, 255, 255, 0.4)',
                    zIndex: 100, // Higher z-index to appear in front
                    opacity: 0,
                    pointerEvents: 'none',
                    willChange: 'transform'
                }}
            />

            {/* The Splash / Water Layer */}
            <div
                ref={splashContainerRef}
                id="splash-container"
                style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '120vh',
                    zIndex: 40,
                    pointerEvents: 'none',
                    transform: 'translateY(105%)',
                    willChange: 'transform',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                }}
            >
                {/* Front Wave (Solid White) */}
                <svg
                    ref={frontWaveRef}
                    id="front-wave"
                    style={{
                        display: 'block',
                        width: '200%',
                        height: '200px',
                        position: 'relative',
                        marginBottom: '-1px',
                        fill: 'white',
                        transform: 'translateX(0%)',
                        transformOrigin: 'bottom'
                    }}
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,133.3C672,128,768,160,864,170.7C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>

                {/* The Solid White Ocean Body */}
                <div
                    className="white-body"
                    style={{
                        backgroundColor: 'white',
                        flexGrow: 1,
                        width: '100%',
                        minHeight: '100vh'
                    }}
                />
            </div>

            {/* Your content */}
            <div style={{ position: 'relative', zIndex: 60 }}>
                {children}
            </div>
        </div>
    );
}
