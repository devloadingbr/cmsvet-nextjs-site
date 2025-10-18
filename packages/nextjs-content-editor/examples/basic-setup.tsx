/**
 * Exemplo: Setup Básico
 * 
 * Como adicionar o Content Editor ao seu projeto Next.js
 */

// ============================================
// 1. LAYOUT PRINCIPAL
// ============================================

// app/layout.tsx
import { ContentEditorProvider } from '@devloadingbr/nextjs-content-editor';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        
        {/* Adicione o Provider aqui */}
        <ContentEditorProvider />
      </body>
    </html>
  );
}

// ============================================
// 2. API ROUTE - SCAN
// ============================================

// app/api/content-editor/scan/route.ts
export { GET } from '@devloadingbr/nextjs-content-editor/api/scan';

// ============================================
// 3. API ROUTE - SAVE
// ============================================

// app/api/content-editor/save/route.ts
export { POST } from '@devloadingbr/nextjs-content-editor/api/save';

// ============================================
// 4. PRONTO!
// ============================================

// Execute: npm run dev
// Abra: http://localhost:3000
// Pressione: Ctrl + E
