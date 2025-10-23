'use client';

import { UserCheck, Clock, Award } from 'lucide-react';
import { CardCSM, CardCsmContent, CardCsmHeader, CardCsmTitle } from '@/components/ui/card-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';
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

        {/* Two Column Layout: Dra. Catarina | Outros Veterinários */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Coluna Esquerda - Dra. Catarina */}
          <CardCSM variant="highlight">
            <CardCsmHeader className="text-center">
              <Avatar className={`w-24 h-24 ${clinicalDirector.color} mx-auto mb-4`}>
                <AvatarFallback className="text-2xl font-bold text-white bg-transparent">
                  {clinicalDirector.avatar}
                </AvatarFallback>
              </Avatar>
              
              <CardCsmTitle className="text-xl font-bold text-csm-gray-dark mb-2">
                {clinicalDirector.name}
              </CardCsmTitle>
              
              <BadgeCSM variant="yellow" className="text-sm mb-2">
                {clinicalDirector.role}
              </BadgeCSM>
              
              <BadgeCSM variant="blue" className="text-xs">
                {clinicalDirector.experience}
              </BadgeCSM>
            </CardCsmHeader>

            <CardCsmContent className="text-center">
              <div className="flex justify-center flex-wrap gap-2 mb-4">
                {clinicalDirector.specialties.map((specialty, index) => (
                  <BadgeCSM 
                    key={index}
                    variant="blue"
                    className="text-xs"
                  >
                    {specialty}
                  </BadgeCSM>
                ))}
              </div>
              <p className="text-sm text-csm-gray leading-relaxed">
                {clinicalDirector.description}
              </p>
            </CardCsmContent>
          </CardCSM>

          {/* Coluna Direita - Equipe de Plantão */}
          <CardCSM variant="default">
            <CardCsmHeader className="text-center pb-4">
              <h3 className="text-xl font-bold text-csm-gray-dark mb-2">
                Equipe de <span className="text-csm-blue">Plantão 24h</span>
              </h3>
              <p className="text-sm text-csm-gray">
                Veterinários especializados disponíveis a qualquer momento
              </p>
            </CardCsmHeader>

            <CardCsmContent className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {onCallVets.map((vet, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-csm-blue-light transition-colors duration-200"
                  >
                    <Avatar className="w-10 h-10 bg-csm-blue flex-shrink-0">
                      <AvatarFallback className="text-xs font-bold text-white bg-transparent">
                        {vet.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-csm-gray-dark truncate">
                        {vet.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardCsmContent>
          </CardCSM>
        </div>

        {/* Bottom Section - Stats Compacto */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          <CardCSM variant="default">
            <CardCsmContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-csm-blue mx-auto mb-2" />
              <div className="text-2xl font-bold text-csm-blue">24/7</div>
              <div className="text-xs text-csm-gray">Disponível</div>
            </CardCsmContent>
          </CardCSM>

          <CardCSM variant="default">
            <CardCsmContent className="p-6 text-center">
              <Award className="w-8 h-8 text-csm-blue mx-auto mb-2" />
              <div className="text-2xl font-bold text-csm-blue">{stats.petsCared.toLocaleString()}+</div>
              <div className="text-xs text-csm-gray">Pets Atendidos</div>
            </CardCsmContent>
          </CardCSM>

          <CardCSM variant="default">
            <CardCsmContent className="p-6 text-center">
              <UserCheck className="w-8 h-8 text-csm-blue mx-auto mb-2" />
              <div className="text-2xl font-bold text-csm-blue">100%</div>
              <div className="text-xs text-csm-gray">Dedicação</div>
            </CardCsmContent>
          </CardCSM>
        </div>
      </div>
    </section>
  );
}