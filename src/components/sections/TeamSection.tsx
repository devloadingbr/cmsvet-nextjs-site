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
      color: 'bg-blue-500'
    },
    {
      name: 'Dra. Sabine Hilbert',
      experience: '6+ anos de experiência',
      specialties: ['Dermatologia', 'Comportamento'],
      description: 'Especializada em dermatologia veterinária e comportamento animal, ajudando pets com problemas de pele e comportamentais.',
      avatar: 'SH',
      color: 'bg-green-500'
    },
    {
      name: 'Dr. Marcelo Tavares',
      experience: '10+ anos de experiência',
      specialties: ['Ortopedia', 'Emergência'],
      description: 'Veterinário especializado em ortopedia e atendimentos de emergência, garantindo cuidados 24h para seu pet.',
      avatar: 'MT',
      color: 'bg-purple-500'
    }
  ];

  const serviceFeatures = [
    {
      icon: <Clock className="w-6 h-6 text-red-500" />,
      title: 'Plantão 24h',
      description: 'Veterinários disponíveis 24 horas'
    },
    {
      icon: <Home className="w-6 h-6 text-blue-500" />,
      title: 'Atendimento Domiciliar',
      description: 'Cuidado no conforto da sua casa'
    },
    {
      icon: <UserCheck className="w-6 h-6 text-green-500" />,
      title: 'Especialistas',
      description: 'Equipe altamente qualificada'
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-blue-400"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-green-400"></div>
      </div>

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
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 border-blue-100 shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 group hover:transform hover:scale-105"
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
                
                <Badge className="bg-amber-100 text-amber-700 border-amber-200 font-semibold">
                  {member.experience}
                </Badge>
              </CardHeader>

              <CardContent className="text-center">
                <div className="flex justify-center flex-wrap gap-2 mb-4">
                  {member.specialties.map((specialty, specialtyIndex) => (
                    <Badge 
                      key={specialtyIndex}
                      variant="secondary"
                      className="bg-blue-100 text-blue-700 border-blue-200"
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
        <Card className="bg-gradient-to-br from-white via-amber-50 to-rose-50 border-rose-200 relative overflow-hidden shadow-2xl">
          {/* Decorative background elements */}
          <div className="absolute top-6 right-6 text-6xl opacity-20">🐾</div>
          <div className="absolute bottom-6 left-6 text-6xl opacity-20">💖</div>
          <div className="absolute top-1/3 left-1/4 text-4xl opacity-10">🐕</div>
          <div className="absolute bottom-1/3 right-1/4 text-4xl opacity-10">🐱</div>
          
          <CardContent className="p-8 relative z-10">
            {/* Header with colorful background */}
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-6 text-white text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                🌟 Equipe Disponível 24 Horas por Dia
              </h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Nossa equipe está sempre pronta para cuidar do seu pet, seja para consultas de rotina ou emergências
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {serviceFeatures.map((feature, index) => {
                const gradients = [
                  'from-blue-500 to-cyan-400',
                  'from-emerald-500 to-green-400', 
                  'from-amber-500 to-yellow-400'
                ];
                return (
                  <div key={index} className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300`}>
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
              <div className="bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-100 border-2 border-amber-200 rounded-2xl p-8 inline-block shadow-lg">
                <div className="text-4xl mb-4">🏆</div>
                <h4 className="text-2xl font-bold mb-2 text-slate-900">
                  Mais de {stats.petsCared.toLocaleString()} Pets Já Confiaram em Nós
                </h4>
                <p className="text-slate-600 mb-6">
                  Veja o que nossos clientes têm a dizer sobre o cuidado que oferecemos aos seus companheiros de quatro patas
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl mx-auto"
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