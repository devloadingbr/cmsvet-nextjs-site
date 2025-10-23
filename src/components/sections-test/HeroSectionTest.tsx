'use client';

import { Phone, CheckCircle, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { ButtonCSM } from '@/components/ui/button-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';
import { stats, urls, whatsappMessages } from '@/lib/env';

export default function HeroSectionTest() {
  return (
    <section id="hero" className="fullpage-section relative bg-gradient-csm-blue flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center space-y-8">
          
          {/* Badge */}
          <div className="flex justify-center">
            <BadgeCSM variant="yellow" className="text-lg px-6 py-2">
              CSM Clínica Veterinária
            </BadgeCSM>
          </div>

          {/* Título Principal */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Atendimento 24 Horas</span>
              <br />
              <span className="text-csm-yellow">Urgência e Emergência</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Equipe veterinária presente na clínica 24h por dia, 7 dias por semana. 
              Pronto para cuidar do seu pet quando você mais precisa.
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 flex-wrap text-lg">
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-5 h-5 text-csm-yellow" />
              <span>Uberaba, Curitiba</span>
            </div>
            <div className="h-8 w-px bg-white/30"></div>
            <div className="text-white/90">
              <span className="font-bold text-csm-yellow text-2xl">{stats.yearsExperience}+</span> anos de experiência
            </div>
            <div className="h-8 w-px bg-white/30"></div>
            <div className="text-white/90">
              <span className="font-bold text-csm-yellow text-2xl">500+</span> pets atendidos
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <ButtonCSM 
              variant="urgency"
              size="lg" 
              className="w-full sm:w-auto text-lg px-8 py-6"
              onClick={() => window.open(urls.whatsappWithMessage(whatsappMessages.emergency), '_blank')}
            >
              <FaWhatsapp className="w-6 h-6" />
              EMERGÊNCIA 24H
            </ButtonCSM>
            <ButtonCSM 
              variant="primary"
              size="lg" 
              className="w-full sm:w-auto text-lg px-8 py-6 bg-white text-csm-blue hover:bg-gray-100"
              onClick={() => window.open(urls.phoneCall, '_self')}
            >
              <Phone className="w-6 h-6" />
              LIGAR AGORA
            </ButtonCSM>
          </div>

          {/* Benefícios */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
            <div className="flex items-center justify-center gap-3 text-white">
              <CheckCircle className="w-6 h-6 text-csm-yellow flex-shrink-0" />
              <span className="text-base font-medium">Veterinário 24h na Clínica</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <CheckCircle className="w-6 h-6 text-csm-yellow flex-shrink-0" />
              <span className="text-base font-medium">Centro Cirúrgico Completo</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <CheckCircle className="w-6 h-6 text-csm-yellow flex-shrink-0" />
              <span className="text-base font-medium">Atendimento Domiciliar</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
