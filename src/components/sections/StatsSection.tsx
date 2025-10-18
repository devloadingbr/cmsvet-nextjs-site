'use client';

import { Clock, Heart, Users, Star, TrendingUp } from 'lucide-react';
import { CardCSM, CardCsmContent } from '@/components/ui/card-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';

export default function StatsSection() {
  return (
    <section className="py-20 relative bg-gradient-to-b from-csm-blue-light/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <BadgeCSM variant="blue" className="mb-4">
                Números que Falam
              </BadgeCSM>
              <h2 className="text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-4">
                Resultados que <span className="text-csm-blue">Comprovam</span> Nossa Excelência
              </h2>
              <p className="text-lg text-csm-gray leading-relaxed">
                Mais de uma década cuidando dos pets de Curitiba com dedicação, tecnologia e amor. Números que refletem nosso compromisso com a saúde animal.
              </p>
            </div>

            {/* Stats Grid Pequeno */}
            <div className="grid grid-cols-2 gap-4">
              <CardCSM variant="default" className="text-center">
                <CardCsmContent className="p-4">
                  <Heart className="w-8 h-8 text-csm-blue mx-auto mb-2" />
                  <div className="text-2xl font-bold text-csm-blue mb-1">500+</div>
                  <div className="text-xs text-csm-gray">Pets Salvos</div>
                </CardCsmContent>
              </CardCSM>

              <CardCSM variant="default" className="text-center">
                <CardCsmContent className="p-4">
                  <Users className="w-8 h-8 text-csm-blue mx-auto mb-2" />
                  <div className="text-2xl font-bold text-csm-blue mb-1">15+</div>
                  <div className="text-xs text-csm-gray">Veterinários</div>
                </CardCsmContent>
              </CardCSM>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="relative lg:h-[400px] flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Main Card */}
              <CardCSM variant="default" className="bg-white shadow-xl">
                <CardCsmContent className="p-8 text-center">
                  <TrendingUp className="w-16 h-16 text-csm-blue mx-auto mb-4" />
                  <div className="text-5xl font-bold text-csm-blue mb-2">
                    98%
                  </div>
                  <p className="text-csm-gray-dark font-semibold mb-2">
                    Taxa de Satisfação
                  </p>
                  <p className="text-sm text-csm-gray">
                    Avaliação dos nossos clientes
                  </p>
                </CardCsmContent>
              </CardCSM>

              {/* Floating Badge - Top Right */}
              <div className="absolute top-2 right-2 sm:-top-6 sm:-right-6 z-10">
                <CardCSM variant="default" className="bg-csm-blue shadow-lg">
                  <div className="p-3 sm:p-4 text-center">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white mx-auto mb-2" />
                    <div className="text-xl sm:text-2xl font-bold text-white">24h</div>
                    <div className="text-xs text-white/80">Emergência</div>
                  </div>
                </CardCSM>
              </div>

              {/* Floating Badge - Bottom Left */}
              <div className="absolute bottom-2 left-2 sm:-bottom-6 sm:-left-6 z-10">
                <CardCSM variant="highlight" className="bg-csm-yellow shadow-lg">
                  <div className="p-3 sm:p-4 text-center">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-csm-gray-dark mx-auto mb-2" />
                    <div className="text-xl sm:text-2xl font-bold text-csm-gray-dark">10+</div>
                    <div className="text-xs text-csm-gray-dark">Anos</div>
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