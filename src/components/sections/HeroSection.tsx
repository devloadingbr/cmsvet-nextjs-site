'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { ButtonCSM } from '@/components/ui/button-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';
import { clinic, stats, urls, whatsappMessages } from '@/lib/env';

export default function HeroSection() {
  return (
    <div className="min-h-[80vh] sm:min-h-screen relative bg-white">
      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh] sm:min-h-screen py-12 sm:py-16">
        <div className="text-center space-y-6 sm:space-y-8 lg:space-y-12 w-full">

          {/* Trust Badges - Redesign Profissional */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            <BadgeCSM variant="blue">
              +{Math.floor(stats.petsCared / 1000)}k pets atendidos
            </BadgeCSM>
            <BadgeCSM variant="yellow">
              Plantão 24h
            </BadgeCSM>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight">
              <span className="text-csm-blue">Seu Pet Precisa de Cuidado?</span>
              <span className="block text-csm-yellow text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl mt-1 sm:mt-2">{clinic.name} 24&nbsp;Horas</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-csm-gray-dark max-w-3xl mx-auto leading-relaxed px-2">
              {clinic.description}
            </p>
          </div>

          {/* CTA Buttons - Redesign Profissional */}
          <div className="flex flex-row gap-4 sm:gap-6 justify-center max-w-4xl mx-auto px-2">
            <ButtonCSM 
              variant="primary"
              size="lg" 
              className="flex-1 max-w-xs"
              onClick={() => window.open(urls.whatsappWithMessage(whatsappMessages.emergency), '_blank')}
            >
              <MessageCircle className="w-5 h-5" />
              WHATSAPP
            </ButtonCSM>
            <ButtonCSM 
              variant="secondary"
              size="lg" 
              className="flex-1 max-w-xs"
              onClick={() => window.open(urls.phoneCall, '_self')}
            >
              <Phone className="w-5 h-5" />
              LIGAÇÃO
            </ButtonCSM>
          </div>



        </div>
      </div>

    </div>
  );
}