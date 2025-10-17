'use client';

import { Phone, MessageCircle, Star, CheckCircle, Clock, Stethoscope } from 'lucide-react';
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
                <Clock className="w-4 h-4 mr-2" />
                Plantão 24h Ativo • Emergências
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

            {/* Avaliações e Stats */}
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-csm-yellow text-csm-yellow" />
                  ))}
                </div>
                <span className="text-csm-gray-dark font-semibold">4.9/5</span>
              </div>
              <div className="h-6 w-px bg-csm-gray-light"></div>
              <div className="text-csm-gray">
                <span className="font-bold text-csm-blue">{stats.petsCared.toLocaleString()}+</span> pets atendidos
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonCSM 
                variant="urgency"
                size="lg" 
                className="flex-1 sm:flex-initial"
                onClick={() => window.open(urls.whatsappWithMessage(whatsappMessages.emergency), '_blank')}
              >
                <MessageCircle className="w-5 h-5" />
                EMERGÊNCIA 24H
              </ButtonCSM>
              <ButtonCSM 
                variant="secondary"
                size="lg" 
                className="flex-1 sm:flex-initial"
                onClick={() => window.open(urls.phoneCall, '_self')}
              >
                <Phone className="w-5 h-5" />
                VER SERVIÇOS
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

          {/* Right Content - 60% */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Card Principal com Imagem */}
            <div className="relative w-full max-w-lg">
              <CardCSM variant="default" className="overflow-hidden">
                <div className="relative h-[400px] lg:h-[500px] bg-csm-blue flex items-center justify-center">
                  {/* Placeholder para imagem */}
                  <div className="text-center text-white p-8">
                    <Stethoscope className="w-24 h-24 mx-auto mb-4 opacity-50" />
                    <p className="text-lg opacity-75">Imagem da Clínica</p>
                    <p className="text-sm opacity-50 mt-2">Substitua por foto real</p>
                  </div>
                </div>
              </CardCSM>

              {/* Badge Flutuante - Top Right */}
              <div className="absolute -top-4 -right-4 z-10">
                <CardCSM variant="default" className="bg-white shadow-lg">
                  <div className="p-4 text-center">
                    <div className="text-3xl font-bold text-csm-blue">10+</div>
                    <div className="text-xs text-csm-gray">Anos de</div>
                    <div className="text-xs text-csm-gray">Experiência</div>
                  </div>
                </CardCSM>
              </div>

              {/* Badge Flutuante - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 z-10">
                <CardCSM variant="highlight" className="bg-csm-yellow shadow-lg">
                  <div className="p-4 text-center">
                    <div className="text-2xl font-bold text-csm-gray-dark">85%</div>
                    <div className="text-xs text-csm-gray-dark">Satisfação</div>
                    <div className="text-xs text-csm-gray-dark">dos Clientes</div>
                  </div>
                </CardCSM>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}