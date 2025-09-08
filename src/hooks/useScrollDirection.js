import { useEffect, useState } from 'react';

export function useScrollDirection({ threshold = 8 } = {}) {
  const [dir, setDir] = useState('up');
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      if (Math.abs(delta) > threshold) {
        setDir(delta > 0 ? 'down' : 'up');
        lastY = y;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return dir;
}
