'use client';

import { Heart, Clock, Camera, Shield } from 'lucide-react';
import { BadgeCSM } from '@/components/ui/badge-csm';
import { CardCSM, CardCsmContent } from '@/components/ui/card-csm';

export default function InternamentoSectionTest() {
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-csm-blue" />,
      title: 'UTI Veterinária Equipada',
      description: 'Estrutura completa com equipamentos modernos para cuidados intensivos'
    },
    {
      icon: <Clock className="w-8 h-8 text-csm-blue" />,
      title: 'Monitoramento 24h',
      description: 'Veterinário presente na clínica 24 horas por dia acompanhando seu pet'
    },
    {
      icon: <Camera className="w-8 h-8 text-csm-blue" />,
      title: 'Câmeras para Tutores',
      description: 'Acompanhe seu pet remotamente através de câmeras de monitoramento'
    },
    {
      icon: <Shield className="w-8 h-8 text-csm-blue" />,
      title: 'Isolamento Adequado',
      description: 'Internação separada para cães e gatos, com isolamento para casos contagiosos'
    }
  ];

  return (
    <section id="internamento" className="fullpage-section relative bg-white flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <BadgeCSM variant="yellow" className="mb-4 text-base">
            Cuidados Intensivos
          </BadgeCSM>
          <h2 className="text-4xl lg:text-6xl font-bold text-csm-gray-dark mb-6">
            <span className="text-csm-blue">Internamento</span> e UTI
          </h2>
          <p className="text-xl text-csm-gray max-w-3xl mx-auto">
            Estrutura completa para cuidar do seu pet quando ele mais precisa
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <CardCSM key={index} variant="default">
              <CardCsmContent className="p-6 flex items-start gap-4">
                <div className="bg-csm-blue-light rounded-lg p-3 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-csm-gray-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-csm-gray">
                    {feature.description}
                  </p>
                </div>
              </CardCsmContent>
            </CardCSM>
          ))}
        </div>

      </div>
    </section>
  );
}
