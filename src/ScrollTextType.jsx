import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TextType.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollTextType – reveals text based on scroll progress using GSAP Pinning.
 * The component pins itself while typing, provides a fade‑out near the end and
 * moves the text upward during the hold phase. It no longer attempts to lock
 * scrolling via onLockChange, allowing the page to scroll freely after the
 * animation completes.
 */
const ScrollTextType = ({
    text = '',
    children,
    className = '',
    showCursor = true,
    cursorCharacter = '|',
    cursorClassName = '',
    style = {},
    onComplete,
    ...props
}) => {
    const [displayed, setDisplayed] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [scrollDistance, setScrollDistance] = useState('+=2000');

    // Convert children/text to plain string for counting characters
    const getPlainText = () => {
        if (text) return text;
        if (!children) return '';
        const extract = (node) => {
            if (typeof node === 'string') return node;
            if (Array.isArray(node)) return node.map(extract).join('');
            if (node?.type === 'br') return '\n';
            if (node?.props?.children) return extract(node.props.children);
            return '';
        };
        return extract(children);
    };
    const plainText = getPlainText();

    useEffect(() => {
        const el = containerRef.current;
        const content = contentRef.current;
        if (!el || !content) return;

        setDisplayed('');
        setIsTyping(false);

        const ctx = gsap.context(() => {
            const isMobile = window.innerWidth < 768;
            const dist = isMobile ? '+=1000' : '+=2000';
            setScrollDistance(dist);

            ScrollTrigger.create({
                trigger: el,
                start: 'center center',
                end: dist,
                pin: true,
                scrub: 0,
                // No onEnter – we no longer lock scrolling
                onUpdate: (self) => {
                    // typing progress (first 70% of scroll)
                    const typeProgress = Math.min(1, self.progress / 0.7);
                    const length = Math.ceil(typeProgress * plainText.length);
                    setDisplayed(plainText.substring(0, length));
                    const typing = length > 0 && length < plainText.length;
                    setIsTyping(typing);

                    // move up during hold phase (70%–100%)
                    if (self.progress > 0.7) {
                        const moveProg = (self.progress - 0.7) / 0.3;
                        const yPos = moveProg * -50; // -50vh
                        content.style.transform = `translateY(${yPos}vh)`;
                    } else {
                        content.style.transform = 'translateY(0)';
                    }

                    // fade out in last 10% for smooth transition
                    if (self.progress > 0.9) {
                        const fadeProg = (self.progress - 0.9) / 0.1;
                        containerRef.current.style.opacity = `${1 - fadeProg}`;
                    } else {
                        containerRef.current.style.opacity = '1';
                    }
                },
                onLeave: () => {
                    // reset opacity when leaving the section
                    if (containerRef.current) containerRef.current.style.opacity = '1';
                    if (onComplete) onComplete();
                },
                onLeaveBack: () => {
                    // nothing to do when scrolling back up
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, [plainText]);

    const renderText = () =>
        displayed.split('\n').map((line, i, arr) => (
            <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
            </React.Fragment>
        ));

    return (
        <div
            ref={containerRef}
            className={`text-type ${className}`}
            style={{ width: '100%', textAlign: 'center', position: 'relative', ...style }}
            {...props}
        >
            <div ref={contentRef} style={{ width: '100%', willChange: 'transform' }}>
                <span className="text-type__content">{renderText()}</span>
                {showCursor && isTyping && (
                    <span className={`text-type__cursor ${cursorClassName}`}>{cursorCharacter}</span>
                )}
            </div>
            {/* Overlay for Liquid Transition */}
            {props.overlay && (
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10 }}>
                    {React.cloneElement(props.overlay, { triggerRef: containerRef, scrollDistance })}
                </div>
            )}
        </div>
    );
};

export default ScrollTextType;
