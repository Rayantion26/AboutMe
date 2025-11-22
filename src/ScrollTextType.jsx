import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TextType.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollTextType – reveals text based on scroll progress using GSAP Pinning.
 * The component pins itself to the viewport while typing, giving the effect of
 * "stopping" the page until typing is complete.
 * Supports both plain text strings and JSX with <br /> tags.
 */
const ScrollTextType = ({
    text = '',
    children,
    className = '',
    showCursor = true,
    cursorCharacter = '|',
    cursorClassName = '',
    style = {},
    onLockChange,
    ...props
}) => {
    const [displayed, setDisplayed] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const containerRef = useRef(null);
    const textRef = useRef(null);

    // Convert children to plain text for character counting
    const getPlainText = () => {
        if (text) return text;
        if (!children) return '';

        // Extract text from children, treating <br /> as newline
        const extractText = (node) => {
            if (typeof node === 'string') return node;
            if (Array.isArray(node)) return node.map(extractText).join('');
            if (node?.type === 'br') return '\n';
            if (node?.props?.children) return extractText(node.props.children);
            return '';
        };

        return extractText(children);
    };

    const plainText = getPlainText();

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        setDisplayed('');
        setIsTyping(false);

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: el,
                start: "center center",
                end: "+=8000", // Increased from 5000 for even slower typing
                pin: true,
                scrub: 0,
                onUpdate: (self) => {
                    // Type for the first 70% of scroll, hold for the last 30%
                    const typeProgress = Math.min(1, self.progress / 0.7);
                    const length = Math.ceil(typeProgress * plainText.length);
                    setDisplayed(plainText.substring(0, length));

                    // Show cursor only while typing (not before, not after)
                    setIsTyping(length > 0 && length < plainText.length);

                    // Move to top during the hold phase (70% - 100%)
                    if (self.progress > 0.7) {
                        const moveProgress = (self.progress - 0.7) / 0.3;
                        // Move from center (0%) to top (-50vh)
                        const yPos = moveProgress * -50;
                        el.style.transform = `translateY(${yPos}vh)`;
                    } else {
                        el.style.transform = 'translateY(0)';
                    }
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, [plainText]);

    // Render displayed text with line breaks
    const renderText = () => {
        return displayed.split('\n').map((line, i, arr) => (
            <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
            </React.Fragment>
        ));
    };

    return (
        <div
            ref={containerRef}
            className={`text-type ${className}`}
            style={{ width: '100%', textAlign: 'center', ...style }}
            {...props}
        >
            <span ref={textRef} className="text-type__content">
                {renderText()}
            </span>
            {showCursor && isTyping && (
                <span className={`text-type__cursor ${cursorClassName}`}> {cursorCharacter} </span>
            )}
        </div>
    );
};

export default ScrollTextType;
