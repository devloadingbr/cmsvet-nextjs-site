'use client';

import { Clock, Users, Building, MapPin, CheckCircle } from 'lucide-react';
import { CardCSM, CardCsmContent } from '@/components/ui/card-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';

export default function DiferenciaisSectionTest() {
  const differentials = [
    {
      icon: <Clock className="w-10 h-10 text-csm-blue" />,
      title: 'Plantão 24h Real',
      description: 'Veterinário presente na clínica 24h por dia, 7 dias por semana.',
      features: [
        { text: 'Veterinário na clínica 24h', variant: 'yellow' as const },
        { text: 'Internação monitorada', variant: 'blue' as const }
      ]
    },
    {
      icon: <Users className="w-10 h-10 text-csm-blue" />,
      title: 'Equipe Especializada',
      description: 'Profissionais experientes e dedicados ao cuidado do seu pet.',
      features: [
        { text: '10+ anos de experiência', variant: 'yellow' as const },
        { text: 'Educação continuada', variant: 'blue' as const }
      ]
    },
    {
      icon: <Building className="w-10 h-10 text-csm-blue" />,
      title: 'Estrutura Completa',
      description: 'Centro cirúrgico, internação e exames completos.',
      features: [
        { text: 'Centro cirúrgico moderno', variant: 'yellow' as const },
        { text: 'Equipamentos de ponta', variant: 'blue' as const }
      ]
    },
    {
      icon: <MapPin className="w-10 h-10 text-csm-blue" />,
      title: 'Localização Estratégica',
      description: 'Uberaba, Curitiba. Atendimento domiciliar disponível.',
      features: [
        { text: 'Localização central', variant: 'blue' as const },
        { text: 'Atendimento domiciliar', variant: 'yellow' as const }
      ]
    }
  ];

  return (
    <section id="diferenciais" className="fullpage-section bg-csm-blue-light flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold text-csm-gray-dark mb-6">
            Por Que Escolher a <span className="text-csm-blue">CSM?</span>
          </h2>
          <p className="text-xl text-csm-gray max-w-3xl mx-auto">
            Os diferenciais que fazem a diferença na vida do seu pet
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {differentials.map((differential, index) => (
            <CardCSM key={index} variant="default">
              <CardCsmContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-csm-blue-light rounded-lg flex items-center justify-center">
                      {differential.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-csm-gray-dark mb-3">
                      {differential.title}
                    </h3>
                    
                    <p className="text-sm text-csm-gray leading-relaxed mb-4">
                      {differential.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {differential.features.map((feature, featureIndex) => (
                        <BadgeCSM key={featureIndex} variant={feature.variant} className="text-xs">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {feature.text}
                        </BadgeCSM>
                      ))}
                    </div>
                  </div>
                </div>
              </CardCsmContent>
            </CardCSM>
          ))}
        </div>

      </div>
    </section>
  );
}
