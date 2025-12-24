import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import '../App.css';

gsap.ticker.fps(60);

const CustomCursor = () => {
    const mainCursor = useRef(null);
    const trailerCursor = useRef(null);
    const [spawns, setSpawns] = useState([]);
    const location = useLocation();

    // State
    const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    // Hover State
    const isHovering = useRef(false);

    // Config
    const VELOCITY = 0.15; // Trailer lag

    // Scale Ref
    const currentScale = useRef(0.2);

    // Color cycle ref
    const colorObj = useRef({ hue: 0 });

    // Ref for tracking if we are currently scrolling
    const isScrolling = useRef(false);
    // Ref for the show timeout
    const showTimeout = useRef(null);

    useEffect(() => {
        // --- 1. SETUP & MOVEMENT ---

        // Mobile Visibility Logic
        let isMobile = window.matchMedia("(max-width: 799px)").matches;
        let mobileHideTimer = null;

        // Initial State for Mobile
        if (isMobile) {
            if (mainCursor.current) gsap.set(mainCursor.current, { opacity: 0 });
            if (trailerCursor.current) gsap.set(trailerCursor.current, { opacity: 0 });
        }

        const showCursorMobile = () => {
            if (!isMobile) return;
            if (mobileHideTimer) clearTimeout(mobileHideTimer);
            if (showTimeout.current) clearTimeout(showTimeout.current);

            // Show instantly
            if (mainCursor.current) gsap.to(mainCursor.current, { opacity: 1, duration: 0.1, overwrite: 'auto' });
            if (trailerCursor.current) gsap.to(trailerCursor.current, { opacity: 1, duration: 0.1, overwrite: 'auto' });
        };

        const hideCursorMobile = () => {
            if (!isMobile) return;
            mobileHideTimer = setTimeout(() => {
                if (mainCursor.current) gsap.to(mainCursor.current, { opacity: 0, duration: 0.3 });
                if (trailerCursor.current) gsap.to(trailerCursor.current, { opacity: 0, duration: 0.3 });
            }, 250);
        };

        const hideCursorMobileInstant = () => {
            if (!isMobile) return;
            if (mobileHideTimer) clearTimeout(mobileHideTimer);
            if (showTimeout.current) clearTimeout(showTimeout.current);

            // Hide instantly with overwrite to stop any showing animation
            if (mainCursor.current) gsap.to(mainCursor.current, { opacity: 0, duration: 0.1, overwrite: 'auto' });
            if (trailerCursor.current) gsap.to(trailerCursor.current, { opacity: 0, duration: 0.1, overwrite: 'auto' });
        };

        const onMouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };

            // Move Main Dot Instantly
            if (mainCursor.current) {
                gsap.set(mainCursor.current, {
                    x: e.clientX,
                    y: e.clientY
                });
            }
        };

        // Touch handling for mobile cursor visibility
        const onTouchStart = (e) => {
            isMobile = window.matchMedia("(max-width: 799px)").matches;
            if (isMobile) {
                isScrolling.current = false; // Reset scroll state
                if (showTimeout.current) clearTimeout(showTimeout.current);

                // Update position immediately on touch so it's ready
                if (e.touches && e.touches.length > 0) {
                    mouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
                    if (mainCursor.current) {
                        gsap.set(mainCursor.current, { x: e.touches[0].clientX, y: e.touches[0].clientY });
                    }
                    pos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
                    if (trailerCursor.current) {
                        gsap.set(trailerCursor.current, { x: e.touches[0].clientX, y: e.touches[0].clientY });
                    }
                }

                // DELAY showing the cursor. If user moves finger (scrolls) before this fires, we cancel it.
                showTimeout.current = setTimeout(() => {
                    if (!isScrolling.current) {
                        showCursorMobile();
                    }
                }, 150); // 150ms delay
            }
        };

        const onTouchMove = () => {
            // If scrolling/moving on mobile
            if (isMobile) {
                isScrolling.current = true;
                // Hide instantly and cancel any pending show
                hideCursorMobileInstant();
            }
        };

        const onTouchEnd = () => {
            if (!isMobile) return;

            // If we tapped quickly (before timeout fired) and DID NOT scroll, show it now
            if (!isScrolling.current) {
                // If the timer is still running, it means we tapped fast. Show feedback.
                showCursorMobile();
            }

            // Then schedule fade out
            hideCursorMobile();
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchend', onTouchEnd, { passive: true });
        window.addEventListener('touchmove', onTouchMove, { passive: true }); // Hide on move

        // --- 2. TRAILER PHYSICS LOOP ---
        // const currentScale = useRef(0.2); // Start small matches core size (8px / 40px = 0.2)
        const updateTrailer = () => {
            // ... (rest is same, but careful not to break the loop)
            // Wait, I am replacing the useEffect body partly.
            // I should use replace_file_content carefully.
            // I will return the ticker logic here too as I need to keep the file valid.

            // Re-pasting the loop logic is risky if I don't need to change it.
            // But I needed to change the addEventListener part which is intertwined.
            // Actually, I can just replace the event listener block.

            // Lerp position
            const dt = 1.0 - Math.pow(1.0 - VELOCITY, gsap.ticker.deltaRatio());

            const prevX = pos.current.x;
            const prevY = pos.current.y;

            pos.current.x += (mouse.current.x - pos.current.x) * dt;
            pos.current.y += (mouse.current.y - pos.current.y) * dt;

            // Calculate Velocity / Distance for Dynamic Scaling
            const dx = mouse.current.x - pos.current.x;
            const dy = mouse.current.y - pos.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Determine Target Scale
            let targetScale = 0.2; // Default resting size (matches core)

            if (isHovering.current) {
                targetScale = 3; // Large on hover
            } else {
                // Grow as we move away/lag behind
                // Cap at 1.0 (original 40px) or slightly larger if fast
                targetScale = 0.2 + Math.min(dist * 0.005, 0.8);
            }

            // Lerp Scale for smoothness
            currentScale.current += (targetScale - currentScale.current) * 0.15;

            if (trailerCursor.current) {
                gsap.set(trailerCursor.current, {
                    x: pos.current.x,
                    y: pos.current.y,
                    scale: currentScale.current
                });
            }
            requestAnimationFrame(updateTrailer);
        };
        const ticker = requestAnimationFrame(updateTrailer);


        // --- 3. INTERACTIVE (MAGNETIC / HOVER) ---
        // Global delegation to detect hoverable elements
        const onMouseOver = (e) => {
            const target = e.target;
            if (!target || !target.tagName) return; // Safety check

            const isLink = target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('interactive') ||
                window.getComputedStyle(target).cursor === 'pointer';

            if (isLink) {
                if (!isHovering.current) {
                    isHovering.current = true;
                    // Animate Style Props (Scale handled in loop)
                    gsap.to(trailerCursor.current, {
                        backgroundColor: 'white',
                        mixBlendMode: 'difference',
                        borderWidth: 0,
                        duration: 0.3
                    });
                    gsap.to(mainCursor.current, { scale: 0, duration: 0.3 });
                }
            } else if (isHovering.current) {
                // If we move to a non-interactive element but state is still hovering 
                // (e.g., previous element disappeared/unmounted without firing mouseout)
                isHovering.current = false;
                gsap.to(trailerCursor.current, {
                    backgroundColor: 'transparent',
                    mixBlendMode: 'normal',
                    borderWidth: '2px',
                    duration: 0.3
                });
                gsap.to(mainCursor.current, { scale: 1, duration: 0.3 });
            }
        };

        const onMouseOut = (e) => {
            const target = e.target;
            if (!target || !target.tagName) return; // Safety check

            const isLink = target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('interactive');

            if (isLink) {
                isHovering.current = false;
                // Revert Style Props
                gsap.to(trailerCursor.current, {
                    backgroundColor: 'transparent',
                    mixBlendMode: 'normal',
                    borderWidth: '2px',
                    duration: 0.3
                });
                gsap.to(mainCursor.current, { scale: 1, duration: 0.3 });
            }
        };

        // Use capture to ensure we catch bubbling events or deep elements
        document.addEventListener('mouseover', onMouseOver, true);
        document.addEventListener('mouseout', onMouseOut, true);


        // --- 3.5 ROUTE CHANGE CLEANUP ---
        // Force reset cursor when navigating
        const resetCursor = () => {
            isHovering.current = false;
            // IMPORTANT: Don't force opacity here for mobile, let the touch logic handle it?
            // Actually, we want to ensure properties reset.
            if (trailerCursor.current) {
                gsap.to(trailerCursor.current, {
                    backgroundColor: 'transparent',
                    mixBlendMode: 'normal',
                    borderWidth: '2px',
                    scale: 1, // Ensure size resets
                    duration: 0.3,
                    overwrite: 'auto'
                });
            }
            if (mainCursor.current) {
                gsap.to(mainCursor.current, { scale: 1, duration: 0.3, overwrite: 'auto' });
            }
        };
        // Expose reset for the location effect to call - actually better to just have the effect separate.



        // --- 4. COLOR CYCLE (Only applies when NOT hovering) ---
        // If hovering, we usually want white/difference for contrast.

        gsap.to(colorObj.current, {
            hue: 360,
            duration: 10,
            repeat: -1,
            ease: "linear",
            onUpdate: () => {
                if (!isHovering.current && trailerCursor.current) {
                    const color = `hsl(${colorObj.current.hue}, 100%, 60%)`;
                    trailerCursor.current.style.borderColor = color;
                    trailerCursor.current.style.boxShadow = `0 0 10px ${color}`;
                    // Core color
                    if (mainCursor.current) {
                        mainCursor.current.style.backgroundColor = color;
                    }
                }
            }
        });

        // Initial set
        gsap.set(trailerCursor.current, { scale: 1, xPercent: -50, yPercent: -50 });
        gsap.set(mainCursor.current, { scale: 1, xPercent: -50, yPercent: -50 });


        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchend', onTouchEnd);
            window.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('mouseover', onMouseOver, true);
            document.removeEventListener('mouseout', onMouseOut, true);
            cancelAnimationFrame(ticker);
            if (mobileHideTimer) clearTimeout(mobileHideTimer);
            if (showTimeout.current) clearTimeout(showTimeout.current);
        };
    }, []);

    // Reset on Location Change
    useEffect(() => {
        isHovering.current = false;
        if (trailerCursor.current) {
            gsap.to(trailerCursor.current, {
                backgroundColor: 'transparent',
                mixBlendMode: 'normal',
                borderWidth: '2px',
                scale: 1,
                duration: 0.3,
                overwrite: 'auto'
            });
        }
        if (mainCursor.current) {
            gsap.to(mainCursor.current, { scale: 1, duration: 0.3, overwrite: 'auto' });
        }
    }, [location]);

    // --- CLICK BURST ---
    // Keep this as it adds "juice"
    const handleClick = () => {
        const count = 5;
        const newSpawns = [];
        for (let i = 0; i < count; i++) {
            const size = Math.random() * 20 + 5;
            const dist = Math.random() * 100 + 50;
            const hue = Math.floor(Math.random() * 360);
            const color = `hsl(${hue}, 100%, 60%)`;
            newSpawns.push({
                id: Date.now() + i + Math.random(),
                x: mouse.current.x,
                y: mouse.current.y,
                size, dist, color
            });
        }
        setSpawns(prev => [...prev, ...newSpawns]);
    };

    useEffect(() => {
        window.addEventListener('mousedown', handleClick);
        return () => window.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <>
            {/* 1. Main Core (Small Dot) */}
            <div
                ref={mainCursor}
                style={{
                    position: 'fixed',
                    top: 0, left: 0,
                    width: '8px', height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    pointerEvents: 'none',
                    zIndex: 1000001,
                    mixBlendMode: 'normal'
                }}
            />

            {/* 2. Trailer (Ring) */}
            <div
                ref={trailerCursor}
                style={{
                    position: 'fixed',
                    top: 0, left: 0,
                    width: '40px', height: '40px',
                    borderRadius: '50%',
                    border: '2px solid white',
                    backgroundColor: 'transparent',
                    pointerEvents: 'none',
                    zIndex: 1000000,
                    mixBlendMode: 'screen', // Default blending
                    transition: 'opacity 0.3s ease'
                }}
            />

            {/* 3. Spawns */}
            {spawns.map(spawn => (
                <SpawnBall
                    key={spawn.id}
                    initialX={spawn.x} initialY={spawn.y}
                    size={spawn.size} dist={spawn.dist} color={spawn.color}
                    onComplete={() => setSpawns(prev => prev.filter(s => s.id !== spawn.id))}
                />
            ))}
        </>
    );
};

// Simplified Spawn for Burst
const SpawnBall = ({ initialX, initialY, size, dist, color, onComplete }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        const angle = Math.random() * Math.PI * 2;
        const targetX = initialX + Math.cos(angle) * dist;
        const targetY = initialY + Math.sin(angle) * dist;

        gsap.fromTo(el,
            { x: initialX, y: initialY, scale: 0, opacity: 1 },
            {
                x: targetX, y: targetY, scale: 1, opacity: 0,
                duration: 0.8, ease: "power2.out",
                onComplete: onComplete
            }
        );
    }, []);

    return (
        <div
            ref={ref}
            style={{
                position: 'fixed',
                top: 0, left: 0,
                width: `${size}px`, height: `${size}px`,
                backgroundColor: color,
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9997,
                transform: 'translate(-50%, -50%)',
            }}
        />
    );
};

export default CustomCursor;
