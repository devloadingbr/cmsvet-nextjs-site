'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalCSMProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export default function ModalCSM({ isOpen, onClose, title, children, footer }: ModalCSMProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Fechar com ESC
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl max-w-2xl w-[90%] max-h-[80vh] overflow-y-auto shadow-2xl animate-modal-slide-in">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-csm-blue-light px-6 py-4 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-csm-gray-dark">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-csm-blue-light/20 flex items-center justify-center transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-6 h-6 text-csm-gray-dark" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="sticky bottom-0 bg-white border-t border-csm-blue-light px-6 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
