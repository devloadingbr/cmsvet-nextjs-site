'use client';

import { useState } from 'react';
import { X, Wrench } from 'lucide-react';

export default function ConstructionBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
      {/* Balão de Fala */}
      <div className="relative bg-white rounded-2xl shadow-2xl border-2 border-csm-yellow p-4 max-w-xs">
        {/* Botão Fechar */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 bg-csm-blue text-white rounded-full p-1 hover:bg-csm-blue-hover transition-colors shadow-lg"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Conteúdo */}
        <div className="flex items-start gap-3">
          {/* Cachorrinho Animado */}
          <div className="flex-shrink-0 text-4xl animate-wiggle">
            🐕
          </div>

          {/* Mensagem */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Wrench className="w-4 h-4 text-csm-yellow" />
              <span className="font-bold text-csm-gray-dark text-sm">
                Au au! 🦴
              </span>
            </div>
            <p className="text-sm text-csm-gray leading-relaxed">
              Site em <span className="font-semibold text-csm-blue">construção</span>! 
              Estamos trabalhando para trazer novidades incríveis para você e seu pet! 🐾
            </p>
          </div>
        </div>

        {/* Seta do Balão */}
        <div className="absolute -bottom-3 right-8 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-csm-yellow"></div>
        <div className="absolute -bottom-[10px] right-[34px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
      </div>

      {/* Patinhas Decorativas */}
      <div className="absolute -bottom-8 right-4 text-2xl opacity-50">
        🐾
      </div>
    </div>
  );
}
