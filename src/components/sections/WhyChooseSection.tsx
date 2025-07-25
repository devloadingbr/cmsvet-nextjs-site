'use client';

import { Clock, Users, Building, MapPin, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function WhyChooseSection() {
  const differentials = [
    {
      icon: <Clock className="w-12 h-12 text-red-500" />,
      title: 'Plantão 24h Real',
      description: 'Não é só telefone. Veterinário presente na clínica 24h por dia, 7 dias por semana. Internação com monitoramento constante.',
      features: ['Veterinário na clínica 24h', 'Internação monitorada', 'Emergências reais']
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: 'Equipe Especializada',
      description: 'Catarina Gadelha, Sabine Hilbert e Marcelo Tavares. Equipe com mais de 10 anos de experiência e educação continuada.',
      features: ['Mais de 10 anos de experiência', 'Educação continuada', 'Especialistas dedicados']
    },
    {
      icon: <Building className="w-12 h-12 text-emerald-500" />,
      title: 'Estrutura Completa',
      description: 'Centro cirúrgico moderno, laboratório próprio, ultrassom, raio-X, internação separada para cães e gatos. Medicamentos importados.',
      features: ['Centro cirúrgico moderno', 'Laboratório próprio', 'Equipamentos de ponta']
    },
    {
      icon: <MapPin className="w-12 h-12 text-violet-500" />,
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
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Por Que Escolher a <span className="text-blue-600">CSM?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Os diferenciais que fazem a diferença na vida do seu pet
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {differentials.map((differential, index) => (
            <Card 
              key={index}
              className="bg-white border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:transform hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {differential.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {differential.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {differential.description}
                    </p>

                    <div className="space-y-2">
                      {differential.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="mr-2 mb-2 bg-emerald-600 text-white border-emerald-600">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
}