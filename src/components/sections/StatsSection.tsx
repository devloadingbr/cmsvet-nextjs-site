'use client';

import { Clock, Heart, Users, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function StatsSection() {
  const stats = [
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      number: '24h',
      label: 'Emergência',
      description: 'Plantão veterinário 24 horas'
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      number: '500+',
      label: 'Pets Salvos',
      description: 'Atendimentos de emergência'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      number: '15+',
      label: 'Veterinários',
      description: 'Equipe especializada'
    },
    {
      icon: <Star className="w-8 h-8 text-amber-500" />,
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
            <Card 
              key={index} 
              className="text-center group hover:transform hover:scale-105 transition-all duration-300 bg-gradient-to-br from-slate-50 to-blue-50 border-blue-100 shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-blue-600 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-600">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}