'use client';

import { useEffect } from 'react';
import { initContentEditor } from '@/lib/content-editor';

/**
 * Content Editor Provider
 * 
 * Ativa o editor de conteúdo apenas em desenvolvimento (localhost)
 * Permite edição inline de textos diretamente no navegador
 */
export default function ContentEditorProvider() {
  useEffect(() => {
    // Ativa apenas em localhost
    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1';
    
    if (isLocalhost && process.env.NODE_ENV === 'development') {
      // Aguarda um pouco para garantir que todo o conteúdo foi renderizado
      const timer = setTimeout(() => {
        initContentEditor();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Não renderiza nada - apenas efeito colateral
  return null;
}
