'use client';

import { UserCheck, Clock, Home, Award } from 'lucide-react';
import { CardCSM, CardCsmContent, CardCsmHeader, CardCsmTitle } from '@/components/ui/card-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';
import { ButtonCSM } from '@/components/ui/button-csm';
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
      color: 'bg-csm-blue'
    },
    {
      name: 'Dra. Sabine Hilbert',
      experience: '6+ anos de experiência',
      specialties: ['Dermatologia', 'Comportamento'],
      description: 'Especializada em dermatologia veterinária e comportamento animal, ajudando pets com problemas de pele e comportamentais.',
      avatar: 'SH',
      color: 'bg-csm-blue'
    }
  ];

  const serviceFeatures = [
    {
      icon: <Clock className="w-6 h-6 text-csm-blue" />,
      title: 'Plantão 24h',
      description: 'Veterinários disponíveis 24 horas'
    },
    {
      icon: <Home className="w-6 h-6 text-csm-blue" />,
      title: 'Atendimento Domiciliar',
      description: 'Cuidado no conforto da sua casa'
    },
    {
      icon: <UserCheck className="w-6 h-6 text-csm-blue" />,
      title: 'Especialistas',
      description: 'Equipe altamente qualificada'
    }
  ];

  return (
    <section className="py-20 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-csm-gray-dark mb-6">
            Nossa Equipe <span className="text-csm-blue">Especializada</span>
          </h2>
          <p className="text-xl text-csm-gray max-w-3xl mx-auto">
            Veterinários experientes e dedicados, prontos para cuidar do seu pet com carinho e profissionalismo
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <CardCSM 
              key={index}
              variant="default"
            >
              <CardCsmHeader className="text-center">
                <Avatar className={`w-24 h-24 ${member.color} mx-auto mb-4`}>
                  <AvatarFallback className="text-2xl font-bold text-white bg-transparent">
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
                
                <CardCsmTitle className="text-xl font-bold text-csm-gray-dark mb-1">
                  {member.name}
                </CardCsmTitle>
                
                <div className="flex justify-center">
                  <BadgeCSM variant="yellow">
                    {member.experience}
                  </BadgeCSM>
                </div>
              </CardCsmHeader>

              <CardCsmContent className="text-center">
                <div className="flex justify-center flex-wrap gap-2 mb-4">
                  {member.specialties.map((specialty, specialtyIndex) => (
                    <BadgeCSM 
                      key={specialtyIndex}
                      variant="blue"
                    >
                      {specialty}
                    </BadgeCSM>
                  ))}
                </div>
                <p className="text-csm-gray text-sm leading-relaxed">
                  {member.description}
                </p>
              </CardCsmContent>
            </CardCSM>
          ))}
        </div>

        {/* Bottom Section */}
        <CardCSM variant="highlight" className="relative overflow-hidden">
          
          <CardCsmContent className="p-8 relative z-10">
            {/* Header */}
            <div className="bg-csm-blue rounded-lg p-6 text-white text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                Equipe Disponível 24 Horas por Dia
              </h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Nossa equipe está sempre pronta para cuidar do seu pet, seja para consultas de rotina ou emergências
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-csm-blue-light rounded-lg flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-xl mb-2 text-csm-gray-dark">{feature.title}</h4>
                  <p className="text-csm-gray text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="bg-csm-yellow-light border-2 border-csm-yellow rounded-lg p-8 inline-block">
                <div className="w-16 h-16 bg-csm-yellow rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-csm-gray-dark" />
                </div>
                <h4 className="text-2xl font-bold mb-2 text-csm-gray-dark">
                  Mais de {stats.petsCared.toLocaleString()} Pets Já Confiaram em Nós
                </h4>
                <p className="text-csm-gray mb-6">
                  Veja o que nossos clientes têm a dizer sobre o cuidado que oferecemos aos seus companheiros de quatro patas
                </p>
                <ButtonCSM 
                  variant="primary"
                  size="lg"
                >
                  Ver Mais Casos de Sucesso
                </ButtonCSM>
              </div>
            </div>
          </CardCsmContent>
        </CardCSM>
      </div>
    </section>
  );
}