'use client';

import { Clock, Users, Building, MapPin } from 'lucide-react';
import { CardCSM, CardCsmContent } from '@/components/ui/card-csm';

export default function WhyChooseSection() {
  const differentials = [
    {
      icon: <Clock className="w-10 h-10 text-csm-blue" />,
      title: 'Plantão 24h Real',
      description: 'Veterinário presente na clínica 24h, não apenas por telefone.'
    },
    {
      icon: <Users className="w-10 h-10 text-csm-blue" />,
      title: 'Equipe Especializada',
      description: 'Mais de 10 anos de experiência com especialistas dedicados.'
    },
    {
      icon: <Building className="w-10 h-10 text-csm-blue" />,
      title: 'Estrutura Completa',
      description: 'Centro cirúrgico, laboratório e internação separada para cães e gatos.'
    },
    {
      icon: <MapPin className="w-10 h-10 text-csm-blue" />,
      title: 'Localização Estratégica',
      description: 'Uberaba, Curitiba. Atendimento domiciliar em Curitiba, SJP e Pinhais.'
    }
  ];

  return (
    <section className="py-20 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-csm-gray-dark mb-6">
            Por Que Escolher a <span className="text-csm-blue">CSM?</span>
          </h2>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((differential, index) => (
            <CardCSM 
              key={index}
              variant="default"
            >
              <CardCsmContent className="p-6 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-csm-blue-light rounded-lg mx-auto mb-4">
                  {differential.icon}
                </div>
                
                <h3 className="text-lg font-bold text-csm-gray-dark mb-2">
                  {differential.title}
                </h3>
                
                <p className="text-sm text-csm-gray leading-relaxed">
                  {differential.description}
                </p>
              </CardCsmContent>
            </CardCSM>
          ))}
        </div>
      </div>
    </section>
  );
}