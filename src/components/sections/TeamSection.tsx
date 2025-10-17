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
    description: 'Responsável técnica e diretora clínica. Especialista em clínica geral e procedimentos cirúrgicos, com foco em cuidados preventivos e emergências.',
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
            className="max-w-2xl w-full"
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