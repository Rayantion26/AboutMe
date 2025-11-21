import { useEffect, useRef, useState } from 'react';
import './TextType.css';

/**
 * ScrollTextType – reveals text based on scroll progress.
 * While the text is not fully typed, page scrolling is locked (body overflow hidden).
 * When typing completes, normal scrolling resumes.
 * The component notifies its parent about the lock state via `onLockChange`.
 */
const ScrollTextType = ({
    text = '',
    className = '',
    showCursor = true,
    cursorCharacter = '|',
    cursorClassName = '',
    style = {},
    onLockChange, // (isLocked: boolean) => void
    ...props
}) => {
    const [displayed, setDisplayed] = useState('');
    const containerRef = useRef(null);
    const originalOverflow = useRef('');

    // Save original overflow on mount
    useEffect(() => {
        originalOverflow.current = document.body.style.overflow || '';
    }, []);

    // Scroll handling and lock logic
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const winH = window.innerHeight;

            // Is the element visible?
            const inView = rect.top < winH && rect.bottom > 0;

            // Compute progress (0‑1) while visible
            let progress = 0;
            const timeout = setTimeout(() => onLockChange(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [displayed, text, onLockChange]);

    return (
        <div
            ref={containerRef}
            className={`text-type ${className}`}
            style={style}
            {...props}
        >
            <span className="text-type__content">{displayed}</span>
            {showCursor && (
                <span className={`text-type__cursor ${cursorClassName}`}> {cursorCharacter} </span>
            )}
        </div>
    );
};

export default ScrollTextType;
