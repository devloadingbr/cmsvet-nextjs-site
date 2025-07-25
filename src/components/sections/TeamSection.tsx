'use client';

import { UserCheck, Clock, Home } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { stats } from '@/lib/env';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Dra. Catarina Gadelha',
      experience: '8+ anos de experiência',
      specialties: ['Clínica Geral', 'Cirurgia'],
      description: 'Especialista em clínica geral e procedimentos cirúrgicos, com foco em cuidados preventivos e emergências.',
      avatar: 'CG',
      color: 'bg-blue-600'
    },
    {
      name: 'Dra. Sabine Hilbert',
      experience: '6+ anos de experiência',
      specialties: ['Dermatologia', 'Comportamento'],
      description: 'Especializada em dermatologia veterinária e comportamento animal, ajudando pets com problemas de pele e comportamentais.',
      avatar: 'SH',
      color: 'bg-emerald-600'
    }
  ];

  const serviceFeatures = [
    {
      icon: <Clock className="w-6 h-6 text-red-500" />,
      title: 'Plantão 24h',
      description: 'Veterinários disponíveis 24 horas'
    },
    {
      icon: <Home className="w-6 h-6 text-blue-600" />,
      title: 'Atendimento Domiciliar',
      description: 'Cuidado no conforto da sua casa'
    },
    {
      icon: <UserCheck className="w-6 h-6 text-emerald-600" />,
      title: 'Especialistas',
      description: 'Equipe altamente qualificada'
    }
  ];

  return (
    <section className="py-20 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Nossa Equipe <span className="text-blue-600">Especializada</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Veterinários experientes e dedicados, prontos para cuidar do seu pet com carinho e profissionalismo
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="bg-white border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:transform hover:scale-105"
            >
              <CardHeader className="text-center">
                <Avatar className={`w-24 h-24 ${member.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <AvatarFallback className="text-2xl font-bold text-white bg-transparent">
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
                
                <CardTitle className="text-xl font-bold text-slate-900 mb-1">
                  {member.name}
                </CardTitle>
                
                <div className="flex justify-center">
                  <Badge className="bg-amber-500 text-white border-amber-500 font-semibold">
                    {member.experience}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="text-center">
                <div className="flex justify-center flex-wrap gap-2 mb-4">
                  {member.specialties.map((specialty, specialtyIndex) => (
                    <Badge 
                      key={specialtyIndex}
                      variant="secondary"
                      className="bg-blue-600 text-white border-blue-600"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <Card className="bg-white border-2 border-blue-200 relative overflow-hidden shadow-2xl">
          {/* Decorative background elements */}
          <div className="absolute top-6 right-6 text-6xl opacity-20">🐾</div>
          <div className="absolute bottom-6 left-6 text-6xl opacity-20">💖</div>
          <div className="absolute top-1/3 left-1/4 text-4xl opacity-10">🐕</div>
          <div className="absolute bottom-1/3 right-1/4 text-4xl opacity-10">🐱</div>
          
          <CardContent className="p-8 relative z-10">
            {/* Header with colorful background */}
            <div className="bg-blue-600 rounded-2xl p-6 text-white text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                🌟 Equipe Disponível 24 Horas por Dia
              </h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Nossa equipe está sempre pronta para cuidar do seu pet, seja para consultas de rotina ou emergências
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {serviceFeatures.map((feature, index) => {
                const colors = [
                  'bg-blue-600',
                  'bg-emerald-600', 
                  'bg-amber-500'
                ];
                return (
                  <div key={index} className="text-center">
                    <div className={`w-20 h-20 ${colors[index]} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <h4 className="font-bold text-xl mb-2 text-slate-900">{feature.title}</h4>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <div className="bg-white border-2 border-amber-500 rounded-2xl p-8 inline-block shadow-lg">
                <div className="text-4xl mb-4">🏆</div>
                <h4 className="text-2xl font-bold mb-2 text-slate-900">
                  Mais de {stats.petsCared.toLocaleString()} Pets Já Confiaram em Nós
                </h4>
                <p className="text-slate-600 mb-6">
                  Veja o que nossos clientes têm a dizer sobre o cuidado que oferecemos aos seus companheiros de quatro patas
                </p>
                <Button 
                  size="lg"
                  className="bg-pink-500 hover:bg-pink-600 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl mx-auto cursor-pointer"
                >
                  <span>💬</span>
                  Ver Mais Casos de Sucesso
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}