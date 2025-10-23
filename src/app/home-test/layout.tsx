'use client';

import { useEffect } from 'react';

export default function HomeTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Adiciona classe ao body para ocultar Footer padrão
    document.body.classList.add('home-test-page');
    
    // Muda background para branco
    const originalBg = document.body.style.background;
    document.body.style.background = 'white';
    
    return () => {
      // Remove classe ao sair
      document.body.classList.remove('home-test-page');
      // Restaura background original
      document.body.style.background = originalBg;
    };
  }, []);

  return <>{children}</>;
}
