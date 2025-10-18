/**
 * Exemplo: Configuração Customizada
 * 
 * Como personalizar o Content Editor
 */

import { ContentEditorProvider } from '@devloadingbr/nextjs-content-editor';
import type { EditorConfig } from '@devloadingbr/nextjs-content-editor';

// ============================================
// EXEMPLO 1: Cores Personalizadas
// ============================================

export function LayoutWithCustomColors({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <ContentEditorProvider 
          config={{
            primaryColor: '#2563eb',  // Azul personalizado
            accentColor: '#f59e0b',   // Laranja personalizado
          }}
        />
      </body>
    </html>
  );
}

// ============================================
// EXEMPLO 2: Diretório Customizado
// ============================================

export function LayoutWithCustomDir({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <ContentEditorProvider 
          config={{
            componentsDir: 'app/components',  // Padrão: 'src/components'
          }}
        />
      </body>
    </html>
  );
}

// ============================================
// EXEMPLO 3: Seletores Customizados
// ============================================

export function LayoutWithCustomSelectors({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <ContentEditorProvider 
          config={{
            customSelectors: [
              'h1', 'h2', 'h3',           // Apenas títulos principais
              '.editable',                 // Classe customizada
              '[data-editable="true"]',    // Atributo data
            ]
          }}
        />
      </body>
    </html>
  );
}

// ============================================
// EXEMPLO 4: Modo Debug
// ============================================

export function LayoutWithDebug({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <ContentEditorProvider 
          config={{
            debug: true,  // Ativa logs detalhados no console
          }}
        />
      </body>
    </html>
  );
}

// ============================================
// EXEMPLO 5: Configuração Completa
// ============================================

const editorConfig: EditorConfig = {
  // Diretório onde buscar componentes editáveis
  componentsDir: 'src/components',
  
  // Extensões de arquivo permitidas
  allowedExtensions: ['.tsx', '.jsx'],
  
  // Cores do editor
  primaryColor: '#1E5AA8',
  accentColor: '#F2B749',
  
  // Seletores customizados
  customSelectors: [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'p:not(button p)',
    '[class*="badge"]',
    'button span',
    'li',
    '.custom-editable'
  ],
  
  // Modo debug
  debug: process.env.NODE_ENV === 'development',
};

export function LayoutWithFullConfig({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <ContentEditorProvider config={editorConfig} />
      </body>
    </html>
  );
}

// ============================================
// EXEMPLO 6: Condicional (apenas em dev)
// ============================================

export function LayoutConditional({ children }: { children: React.ReactNode }) {
  const isDev = process.env.NODE_ENV === 'development';
  
  return (
    <html>
      <body>
        {children}
        {isDev && <ContentEditorProvider />}
      </body>
    </html>
  );
}
