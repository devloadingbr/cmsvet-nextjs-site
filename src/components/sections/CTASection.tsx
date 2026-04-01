'use client';

import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { ButtonCSM } from '@/components/ui/button-csm';
import { urls, whatsappMessages } from '@/lib/env';

export default function CTASection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-csm-blue-light/10 to-white rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-4">
                Seu Pet Merece o <span className="text-csm-blue">Melhor Cuidado</span>
              </h2>
              <p className="text-lg text-csm-gray leading-relaxed">
                Nossa equipe está pronta para atender. Entre em contato agora.
              </p>
            </div>

            {/* Right Content - CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonCSM
                variant="whatsapp"
                size="lg"
                className="flex-1"
                data-track="whatsapp_click"
                data-track-location="cta-section"
                onClick={() => window.open(urls.whatsappWithMessage(whatsappMessages.emergency), '_blank')}
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </ButtonCSM>
              <ButtonCSM
                variant="secondary"
                size="lg"
                className="flex-1"
                data-track="ligar_click"
                data-track-location="cta-section"
                onClick={() => window.open(urls.phoneCall, '_self')}
              >
                <Phone className="w-5 h-5" />
                Ligar Agora
              </ButtonCSM>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
