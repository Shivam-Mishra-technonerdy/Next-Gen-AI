import { useState, useEffect } from 'react';

/**
 * A custom React hook that returns true if the page has been scrolled
 * past a certain threshold (in pixels).
 */
export function useScroll(threshold = 20): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Check on mount (in case page is loaded scrolled down)
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isScrolled;
}
