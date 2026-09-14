import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {

    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [isGold, setIsGold] = useState(false);

    useEffect (() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest('a, button, input, textarea, select, [role="button"]');
            if(interactive) {
                setIsHovering(true);
                setIsGold(!!target.closest('.group')?.querySelector('.text-secondary-fixed') || !!interactive.classList.contains('gold-hover'));

            } else {
                setIsHovering(false);
                setIsGold(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [] );

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
            <motion.div
                className="absolute w-2 h-2 rounded-full"
                style= {{
                    backgroundColor: isGold ? 'var(--color-secondary-fixed)' : 'var(--color-surface-tint)',
                    boxShadow: isGold ? '0 0 10px rgba(255, 224, 136, 0.5)' : '0 0 10px rgba(0, 230, 57, 0.5)',
                }}

                animate= {{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                }}

                transition = {{ type: 'tween', ease: 'backOut', duration: 0.1 }}
            />
            <motion.div
                className="absolute rounded-full border"
                style = {{
                    borderColor: isGold ? 'var(--color-secondary-fixed)' : 'var(--color-surface-tint)',
                    backgroundColor: isHovering ? (isGold ? 'rgba(255, 224, 136, 0.1)' : 'rgba(0, 230, 57, 0.1)') : 'transparent',
                }}
                animate = {{
                    x: mousePosition.x - (isHovering ? 24 : 16),
                    y: mousePosition.y - (isHovering ? 24 : 16),
                    width: isHovering ? 40 : 32,
                    height: isHovering ? 40: 32,
                }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
            />
        </div>
    );
}