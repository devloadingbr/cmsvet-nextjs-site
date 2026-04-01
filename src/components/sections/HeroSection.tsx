'use client';

import { Phone, CheckCircle, MapPin, Navigation } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { ButtonCSM } from '@/components/ui/button-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';
import { CardCSM } from '@/components/ui/card-csm';
import { stats, urls, whatsappMessages } from '@/lib/env';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-csm-blue-light/20 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content - 40% */}
          <div className="space-y-8">
            {/* Badge Amarelo */}
            <div>
              <BadgeCSM variant="yellow" className="text-base">
                CSM Clínica Veterinária
              </BadgeCSM>
            </div>

            {/* Título Principal */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-csm-gray-dark">Cuidado Veterinário</span>
                <br />
                <span className="text-csm-blue">Profissional 24 Horas</span>
              </h1>
              <p className="text-lg text-csm-gray leading-relaxed">
                Equipe especializada pronta para cuidar do seu pet com excelência médica e tecnologia de ponta. Atendimento emergencial e consultas de rotina.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-csm-gray">
                <MapPin className="w-4 h-4 text-csm-blue" />
                <span>Uberaba, Curitiba</span>
              </div>
              <div className="h-6 w-px bg-csm-gray-light"></div>
              <div className="text-csm-gray">
                <span className="font-bold text-csm-blue">{stats.yearsExperience}+</span> anos de experiência
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonCSM
                variant="whatsapp"
                size="lg"
                className="flex-1 sm:flex-initial"
                data-track="whatsapp_click"
                data-track-location="hero"
                onClick={() => window.open(urls.whatsappWithMessage(whatsappMessages.emergency), '_blank')}
              >
                <FaWhatsapp className="w-5 h-5" />
                WHATSAPP
              </ButtonCSM>
              <ButtonCSM
                variant="secondary"
                size="lg"
                className="flex-1 sm:flex-initial"
                data-track="ligar_click"
                data-track-location="hero"
                onClick={() => window.open(urls.phoneCall, '_self')}
              >
                <Phone className="w-5 h-5" />
                TELEFONE
              </ButtonCSM>
            </div>

            {/* Benefícios com Ícones */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-2 text-csm-gray-dark">
                <CheckCircle className="w-5 h-5 text-csm-blue flex-shrink-0" />
                <span className="text-sm">Veterinário 24h</span>
              </div>
              <div className="flex items-center gap-2 text-csm-gray-dark">
                <CheckCircle className="w-5 h-5 text-csm-blue flex-shrink-0" />
                <span className="text-sm">Centro Cirúrgico</span>
              </div>
              <div className="flex items-center gap-2 text-csm-gray-dark">
                <CheckCircle className="w-5 h-5 text-csm-blue flex-shrink-0" />
                <span className="text-sm">Atend. Domiciliar</span>
              </div>
            </div>
          </div>

          {/* Right Content - Mapa */}
          <div className="flex flex-col items-center gap-4">
            <CardCSM variant="default" className="overflow-hidden w-full">
              <div className="relative h-[350px] lg:h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5!2d-49.2308!3d-25.4628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3b0f1a1a1a1%3A0x1234567890abcdef!2sR.+J%C3%BAlio+Wischral%2C+1099+-+Uberaba%2C+Curitiba+-+PR!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização CSM Clínica Veterinária"
                  className="absolute inset-0"
                />
              </div>
            </CardCSM>
            
            <ButtonCSM
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              data-track="tracar_rota_click"
              data-track-location="hero"
              onClick={() => window.open('https://www.google.com/maps?q=Rua+Julio+Wischral,+1099,+Uberaba,+Curitiba,+PR', '_blank')}
            >
              <Navigation className="w-5 h-5" />
              Traçar Rota
            </ButtonCSM>
          </div>

        </div>
      </div>
    </section>
  );
}