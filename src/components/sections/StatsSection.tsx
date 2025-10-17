'use client';

import { Clock, Heart, Users, Star } from 'lucide-react';
import { CardCSM, CardCsmContent } from '@/components/ui/card-csm';

export default function StatsSection() {
  const stats = [
    {
      icon: <Clock className="w-8 h-8 text-csm-blue" />,
      number: '24h',
      label: 'Emergência',
      description: 'Plantão veterinário 24 horas'
    },
    {
      icon: <Heart className="w-8 h-8 text-csm-blue" />,
      number: '500+',
      label: 'Pets Salvos',
      description: 'Atendimentos de emergência'
    },
    {
      icon: <Users className="w-8 h-8 text-csm-blue" />,
      number: '15+',
      label: 'Veterinários',
      description: 'Equipe especializada'
    },
    {
      icon: <Star className="w-8 h-8 text-csm-blue" />,
      number: '98%',
      label: 'Satisfação',
      description: 'Avaliação dos clientes'
    }
  ];

  return (
    <section className="py-16 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <CardCSM 
              key={index} 
              variant="default"
              className="text-center"
            >
              <CardCsmContent className="p-6">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-csm-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-csm-blue mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-csm-gray">
                  {stat.description}
                </div>
              </CardCsmContent>
            </CardCSM>
          ))}
        </div>
      </div>
    </section>
  );
}