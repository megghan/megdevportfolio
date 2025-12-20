import { useEffect, useRef } from 'react';

/**
 * Hook personalizado para criar e rastrear o elemento do rastro do mouse.
 */
export const useCursorTrail = () => {
  // 1. Tipamos o ref como HTMLDivElement para o TS saber que ele tem propriedades de estilo (.style)
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    const cursor = cursorRef.current;
    
    // Tamanho do rastro ajustado para centralizar.
    const halfSize = 65;

    // 2. Tipamos o evento 'e' como MouseEvent
    const updateCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        if (cursor) {
          cursor.style.transform = `translate(${e.clientX - halfSize}px, ${e.clientY - halfSize}px)`; 
        }
      });
    };

    document.addEventListener('mousemove', updateCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return { cursorRef };
};