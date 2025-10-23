'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { urls, whatsappMessages } from '@/lib/env';

export default function WhatsAppFloat() {
  return (
    <a
      href={urls.whatsappWithMessage(whatsappMessages.emergency)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-slow"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </a>
  );
}
