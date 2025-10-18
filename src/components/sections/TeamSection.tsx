'use client';

import { UserCheck, Clock, Home, Award } from 'lucide-react';
import { CardCSM, CardCsmContent, CardCsmHeader, CardCsmTitle } from '@/components/ui/card-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';
import { ButtonCSM } from '@/components/ui/button-csm';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { stats } from '@/lib/env';

export default function TeamSection() {
  const clinicalDirector = {
    name: 'Dra. Catarina Gadelha',
    role: 'Diretora Clínica e Responsável Técnica',
    experience: '8+ anos de experiência',
    specialties: ['Clínica Geral', 'Cirurgia', 'Gestão Clínica'],
    description: 'Responsável geral por toda a operação da clínica. Supervisiona internamentos, define protocolos médicos, coordena todas as cirurgias e decisões clínicas. Gerencia o relacionamento com clientes e garante a excelência em cada atendimento. Toda a estrutura médica e administrativa da CSM passa pela supervisão direta da Dra. Catarina.',
    avatar: 'CG',
    color: 'bg-csm-blue'
  };

  const onCallVets = [
    { name: 'Dra. Anny Caroline', avatar: 'AC' },
    { name: 'Dr. Bruno Steven Becker', avatar: 'BB' },
    { name: 'Dra. Carolina Grassi Warnecke', avatar: 'CW' },
    { name: 'Dra. Valquiria Kury', avatar: 'VK' },
    { name: 'Dra. Giovana Anchieta', avatar: 'GA' },
    { name: 'Dra. Isabella Martins Pereira', avatar: 'IP' },
    { name: 'Dra. Laura Kauanne Duenha Brito', avatar: 'LB' },
    { name: 'Dra. Letícia Souza Maciel', avatar: 'LM' },
    { name: 'Dra. Yasmim da Conceição', avatar: 'YC' },
    { name: 'Dra. Rebeca Fuccio', avatar: 'RF' },
    { name: 'Dra. Thayana Martins Piber', avatar: 'TP' }
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
            Nossa Equipe <span className="text-csm-blue">Veterinária</span>
          </h2>
          <p className="text-xl text-csm-gray max-w-3xl mx-auto">
            Profissionais experientes e dedicados, prontos para cuidar do seu pet com excelência e carinho
          </p>
        </div>

        {/* Clinical Director - Destaque */}
        <div className="flex justify-center mb-12">
          <CardCSM 
            variant="highlight"
            className="max-w-md w-full"
          >
            <CardCsmHeader className="text-center">
              <Avatar className={`w-32 h-32 ${clinicalDirector.color} mx-auto mb-4`}>
                <AvatarFallback className="text-3xl font-bold text-white bg-transparent">
                  {clinicalDirector.avatar}
                </AvatarFallback>
              </Avatar>
              
              <CardCsmTitle className="text-2xl font-bold text-csm-gray-dark mb-2">
                {clinicalDirector.name}
              </CardCsmTitle>
              
              <BadgeCSM variant="yellow" className="text-base mb-3">
                {clinicalDirector.role}
              </BadgeCSM>
              
              <BadgeCSM variant="blue">
                {clinicalDirector.experience}
              </BadgeCSM>
            </CardCsmHeader>

            <CardCsmContent className="text-center">
              <div className="flex justify-center flex-wrap gap-2 mb-4">
                {clinicalDirector.specialties.map((specialty, index) => (
                  <BadgeCSM 
                    key={index}
                    variant="blue"
                  >
                    {specialty}
                  </BadgeCSM>
                ))}
              </div>
              <p className="text-csm-gray leading-relaxed">
                {clinicalDirector.description}
              </p>
            </CardCsmContent>
          </CardCSM>
        </div>

        {/* On-Call Veterinarians */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-csm-gray-dark mb-2">
              Equipe de <span className="text-csm-blue">Plantão 24h</span>
            </h3>
            <p className="text-csm-gray">
              Veterinários especializados disponíveis para cuidar do seu pet a qualquer momento
            </p>
          </div>

          <CardCSM variant="default" className="max-w-5xl mx-auto">
            <CardCsmContent className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {onCallVets.map((vet, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-csm-blue-light transition-colors duration-200"
                  >
                    <Avatar className="w-12 h-12 bg-csm-blue flex-shrink-0">
                      <AvatarFallback className="text-sm font-bold text-white bg-transparent">
                        {vet.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-csm-gray-dark truncate">
                        {vet.name}
                      </p>
                      <p className="text-xs text-csm-gray">
                        {vet.name.includes('Dr. Bruno') ? 'Médico Veterinário' : 'Médica Veterinária'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardCsmContent>
          </CardCSM>
        </div>

        {/* Bottom Section - Redesign Moderno */}
        <div className="bg-gradient-to-br from-csm-blue-light/10 to-white rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <BadgeCSM variant="blue" className="mb-4">
                  Disponibilidade Total
                </BadgeCSM>
                <h3 className="text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-4">
                  Equipe Disponível <span className="text-csm-blue">24 Horas por Dia</span>
                </h3>
                <p className="text-lg text-csm-gray leading-relaxed">
                  Nossa equipe está sempre pronta para cuidar do seu pet, seja para consultas de rotina ou emergências. Atendimento profissional quando você mais precisa.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-csm-gray-dark mb-1">{feature.title}</h4>
                      <p className="text-sm text-csm-gray">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div>
                <ButtonCSM 
                  variant="primary"
                  size="lg"
                >
                  Ver Mais Casos de Sucesso
                </ButtonCSM>
              </div>
            </div>

            {/* Right Content - Stats Cards */}
            <div className="relative lg:h-[400px] flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Main Card */}
                <CardCSM variant="default" className="bg-white shadow-xl">
                  <CardCsmContent className="p-8 text-center">
                    <Award className="w-16 h-16 text-csm-blue mx-auto mb-4" />
                    <div className="text-4xl font-bold text-csm-blue mb-2">
                      {stats.petsCared.toLocaleString()}+
                    </div>
                    <p className="text-csm-gray-dark font-semibold mb-2">
                      Pets Confiaram em Nós
                    </p>
                    <p className="text-sm text-csm-gray">
                      Histórias de sucesso e recuperação
                    </p>
                  </CardCsmContent>
                </CardCSM>

                {/* Floating Badge - Top Right */}
                <div className="absolute top-2 right-2 sm:-top-6 sm:-right-6 z-10">
                  <CardCSM variant="default" className="bg-csm-blue shadow-lg">
                    <div className="p-3 sm:p-4 text-center">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white mx-auto mb-2" />
                      <div className="text-lg sm:text-xl font-bold text-white">24/7</div>
                      <div className="text-xs text-white/80">Disponível</div>
                    </div>
                  </CardCSM>
                </div>

                {/* Floating Badge - Bottom Left */}
                <div className="absolute bottom-2 left-2 sm:-bottom-6 sm:-left-6 z-10">
                  <CardCSM variant="highlight" className="bg-csm-yellow shadow-lg">
                    <div className="p-3 sm:p-4 text-center">
                      <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-csm-gray-dark mx-auto mb-2" />
                      <div className="text-lg sm:text-xl font-bold text-csm-gray-dark">100%</div>
                      <div className="text-xs text-csm-gray-dark">Dedicação</div>
                    </div>
                  </CardCSM>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}