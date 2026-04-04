import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('.group') || target.closest('.project-card')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const animateRing = () => {
      setRingPos(prev => ({
        x: prev.x + ((mousePos.x) - prev.x) * 0.15,
        y: prev.y + ((mousePos.y) - prev.y) * 0.15,
      }));
      animationId = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [mousePos]);

  return (
    <>
      {/* Dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] bg-violet-600 dark:bg-[var(--primary)]"
        style={{ transform: `translate(${mousePos.x - 6}px, ${mousePos.y - 6}px)` }}
      />
      {/* Ring */}
      <div
        className={`fixed top-0 left-0 border-2 rounded-full pointer-events-none z-[9998] transition-all duration-300 border-violet-600 dark:border-[var(--primary)] ${
          isHovering ? 'w-12 h-12 border-purple-500 dark:border-[var(--secondary)] opacity-80' : 'w-9 h-9 opacity-60'
        }`}
        style={{ 
          transform: `translate(${ringPos.x - (isHovering ? 24 : 18)}px, ${ringPos.y - (isHovering ? 24 : 18)}px)` 
        }}
      />
    </>
  );
};
