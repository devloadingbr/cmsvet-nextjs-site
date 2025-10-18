'use client';

import { useEffect } from 'react';
import { initContentEditorAdvanced } from '@/lib/content-editor-advanced';

/**
 * Content Editor Provider - ADVANCED MODE
 * 
 * Ativa o editor de conteúdo avançado apenas em desenvolvimento (localhost)
 * ATENÇÃO: Esta versão MODIFICA o código-fonte diretamente!
 * 
 * Permite edição inline de textos e salva alterações nos arquivos .tsx
 */
export default function ContentEditorProvider() {
  useEffect(() => {
    // Ativa apenas em localhost
    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1';
    
    if (isLocalhost && process.env.NODE_ENV === 'development') {
      // Aguarda um pouco para garantir que todo o conteúdo foi renderizado
      const timer = setTimeout(() => {
        initContentEditorAdvanced();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Não renderiza nada - apenas efeito colateral
  return null;
}
