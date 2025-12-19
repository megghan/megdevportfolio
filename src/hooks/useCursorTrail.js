import { useEffect, useRef } from 'react';

/**
 * Hook personalizado para criar e rastrear o elemento do rastro do mouse.
 * * @returns {object} Um objeto contendo a referência (ref) que deve ser anexada ao elemento HTML do rastro.
 */
export const useCursorTrail = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    // A função é abortada se a referência não estiver pronta.
    if (!cursorRef.current) return;

    const cursor = cursorRef.current;
    
    // Tamanho do rastro é 25x25px (definido no globals.css), ajustamos para centralizar.
    const halfSize = 65;

    // Função que rastreia e move o rastro
    const updateCursor = (e) => {
      // Usa requestAnimationFrame para garantir a máxima performance visual (60fps)
      requestAnimationFrame(() => {
        // Move o rastro para a posição do mouse, centralizando-o
        cursor.style.transform = `translate(${e.clientX - halfSize}px, ${e.clientY - halfSize}px)`; 
      });
    };

    // Adiciona o listener para o movimento do mouse
    document.addEventListener('mousemove', updateCursor);

    // Função de limpeza: Remove o listener quando o componente for desmontado
    return () => {
      document.removeEventListener('mousemove', updateCursor);
    };
  }, []); // Garante que o listener só será criado uma vez na montagem

  return { cursorRef };
};