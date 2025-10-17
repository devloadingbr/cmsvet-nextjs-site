'use client';

import { Clock, Users, Building, MapPin, CheckCircle } from 'lucide-react';
import { CardCSM, CardCsmContent } from '@/components/ui/card-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';

export default function WhyChooseSection() {
  const differentials = [
    {
      icon: <Clock className="w-12 h-12 text-csm-blue" />,
      title: 'Plantão 24h Real',
      description: 'Não é só telefone. Veterinário presente na clínica 24h por dia, 7 dias por semana. Internação com monitoramento constante.',
      features: ['Veterinário na clínica 24h', 'Internação monitorada', 'Emergências reais']
    },
    {
      icon: <Users className="w-12 h-12 text-csm-blue" />,
      title: 'Equipe Especializada',
      description: 'Catarina Gadelha, Sabine Hilbert e Marcelo Tavares. Equipe com mais de 10 anos de experiência e educação continuada.',
      features: ['Mais de 10 anos de experiência', 'Educação continuada', 'Especialistas dedicados']
    },
    {
      icon: <Building className="w-12 h-12 text-csm-blue" />,
      title: 'Estrutura Completa',
      description: 'Centro cirúrgico moderno, laboratório próprio, ultrassom, raio-X, internação separada para cães e gatos. Medicamentos importados.',
      features: ['Centro cirúrgico moderno', 'Laboratório próprio', 'Equipamentos de ponta']
    },
    {
      icon: <MapPin className="w-12 h-12 text-csm-blue" />,
      title: 'Localização Estratégica',
      description: 'Localização central com estacionamento. Atendimento domiciliar em toda região metropolitana. Ambulância veterinária.',
      features: ['Localização central', 'Atendimento domiciliar', 'Ambulância veterinária']
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
          <p className="text-xl text-csm-gray max-w-3xl mx-auto">
            Os diferenciais que fazem a diferença na vida do seu pet
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {differentials.map((differential, index) => (
            <CardCSM 
              key={index}
              variant="default"
            >
              <CardCsmContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-csm-blue-light rounded-lg flex items-center justify-center">
                      {differential.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-csm-gray-dark mb-4">
                      {differential.title}
                    </h3>
                    
                    <p className="text-csm-gray leading-relaxed mb-6">
                      {differential.description}
                    </p>

                    <div className="space-y-2">
                      {differential.features.map((feature, featureIndex) => (
                        <BadgeCSM key={featureIndex} variant="blue" className="mr-2 mb-2">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {feature}
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