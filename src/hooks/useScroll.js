import { useState, useEffect } from 'react';

/**
 * Hook to track scroll position
 */
export function useScroll() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return { isScrolled };
}
