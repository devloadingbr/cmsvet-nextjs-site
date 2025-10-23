'use client';

import { useState } from 'react';
import { BadgeCSM } from '@/components/ui/badge-csm';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import ModalCSM from '@/components/ui/modal-csm';
import { Award, GraduationCap, Stethoscope } from 'lucide-react';

export default function EquipeSectionTest() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const veterinarians = [
    {
      id: 'catarina',
      name: 'Dra. Catarina Gadelha',
      avatar: 'CG',
      role: 'Diretora Clínica',
      isDirector: true,
      experience: '8+ anos de experiência',
      specialties: ['Clínica Geral', 'Cirurgia', 'Gestão Clínica'],
      description: 'Responsável geral por toda a operação da clínica. Supervisiona internamentos, define protocolos médicos e coordena todas as cirurgias. Formada pela UFPR com especialização em cirurgia de pequenos animais.',
      education: 'UFPR - Medicina Veterinária',
      certifications: ['Cirurgia de Pequenos Animais', 'Gestão Clínica Veterinária']
    },
    {
      id: 'anny',
      name: 'Dra. Anny Caroline',
      avatar: 'AC',
      role: 'Veterinária',
      experience: '5+ anos',
      specialties: ['Clínica Geral', 'Dermatologia'],
      description: 'Especialista em dermatologia veterinária e clínica geral.',
      education: 'Medicina Veterinária',
      certifications: ['Dermatologia Veterinária']
    },
    {
      id: 'bruno',
      name: 'Dr. Bruno Steven Becker',
      avatar: 'BB',
      role: 'Veterinário',
      experience: '6+ anos',
      specialties: ['Clínica Geral', 'Ortopedia'],
      description: 'Especialista em ortopedia e traumatologia veterinária.',
      education: 'Medicina Veterinária',
      certifications: ['Ortopedia Veterinária']
    },
    {
      id: 'carolina',
      name: 'Dra. Carolina Grassi Warnecke',
      avatar: 'CW',
      role: 'Veterinária',
      experience: '4+ anos',
      specialties: ['Clínica Geral', 'Cardiologia'],
      description: 'Especialista em cardiologia veterinária.',
      education: 'Medicina Veterinária',
      certifications: ['Cardiologia Veterinária']
    },
    {
      id: 'valquiria',
      name: 'Dra. Valquiria Kury',
      avatar: 'VK',
      role: 'Veterinária',
      experience: '7+ anos',
      specialties: ['Clínica Geral', 'Anestesiologia'],
      description: 'Especialista em anestesiologia veterinária.',
      education: 'Medicina Veterinária',
      certifications: ['Anestesiologia Veterinária']
    },
    {
      id: 'giovana',
      name: 'Dra. Giovana Anchieta',
      avatar: 'GA',
      role: 'Veterinária',
      experience: '3+ anos',
      specialties: ['Clínica Geral', 'Medicina Felina'],
      description: 'Especialista em medicina felina.',
      education: 'Medicina Veterinária',
      certifications: ['Medicina Felina']
    },
    {
      id: 'isabella',
      name: 'Dra. Isabella Martins Pereira',
      avatar: 'IP',
      role: 'Veterinária',
      experience: '5+ anos',
      specialties: ['Clínica Geral', 'Oncologia'],
      description: 'Especialista em oncologia veterinária.',
      education: 'Medicina Veterinária',
      certifications: ['Oncologia Veterinária']
    },
    {
      id: 'laura',
      name: 'Dra. Laura Kauanne Duenha Brito',
      avatar: 'LB',
      role: 'Veterinária',
      experience: '4+ anos',
      specialties: ['Clínica Geral', 'Endocrinologia'],
      description: 'Especialista em endocrinologia veterinária.',
      education: 'Medicina Veterinária',
      certifications: ['Endocrinologia Veterinária']
    },
    {
      id: 'leticia',
      name: 'Dra. Letícia Souza Maciel',
      avatar: 'LM',
      role: 'Veterinária',
      experience: '6+ anos',
      specialties: ['Clínica Geral', 'Nefrologia'],
      description: 'Especialista em nefrologia veterinária.',
      education: 'Medicina Veterinária',
      certifications: ['Nefrologia Veterinária']
    },
    {
      id: 'yasmim',
      name: 'Dra. Yasmim da Conceição',
      avatar: 'YC',
      role: 'Veterinária',
      experience: '3+ anos',
      specialties: ['Clínica Geral', 'Oftalmologia'],
      description: 'Especialista em oftalmologia veterinária.',
      education: 'Medicina Veterinária',
      certifications: ['Oftalmologia Veterinária']
    },
    {
      id: 'rebeca',
      name: 'Dra. Rebeca Fuccio',
      avatar: 'RF',
      role: 'Veterinária',
      experience: '5+ anos',
      specialties: ['Clínica Geral', 'Nutrição'],
      description: 'Especialista em nutrição veterinária.',
      education: 'Medicina Veterinária',
      certifications: ['Nutrição Veterinária']
    },
    {
      id: 'thayana',
      name: 'Dra. Thayana Martins Piber',
      avatar: 'TP',
      role: 'Veterinária',
      experience: '4+ anos',
      specialties: ['Clínica Geral', 'Comportamento'],
      description: 'Especialista em comportamento animal.',
      education: 'Medicina Veterinária',
      certifications: ['Comportamento Animal']
    }
  ];

  return (
    <>
      <section id="equipe" className="fullpage-section bg-white flex items-center justify-center relative overflow-hidden">
        {/* Background decorativo sutil */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-20 right-20 w-96 h-96 bg-csm-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-csm-yellow rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-8">
            <BadgeCSM variant="yellow" className="text-sm px-4 py-2 mb-3">
              Equipe de Plantão 24h
            </BadgeCSM>
            <h2 className="text-4xl lg:text-6xl font-bold text-csm-gray-dark mb-4">
              Nossa Equipe <span className="text-csm-blue">Veterinária</span>
            </h2>
            <p className="text-base text-csm-gray max-w-2xl mx-auto">
              Clique em cada profissional para conhecer mais detalhes
            </p>
          </div>

          {/* Grid Uniforme - Todas as Veterinárias */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
            {veterinarians.map((vet) => (
              <button
                key={vet.id}
                onClick={() => setActiveModal(vet.id)}
                className="group relative bg-white border-2 border-csm-blue/20 rounded-xl p-4 hover:border-csm-blue hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 text-center overflow-hidden"
              >
                {/* Background hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-csm-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Badge especial para Diretora */}
                {vet.isDirector && (
                  <div className="absolute top-2 right-2">
                    <BadgeCSM variant="yellow" className="text-xs px-2 py-0.5">
                      <Award className="w-3 h-3 mr-1" />
                      Diretora
                    </BadgeCSM>
                  </div>
                )}

                {/* Badge "Clique" no hover */}
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <BadgeCSM variant="blue" className="text-xs px-2 py-0.5">
                    Ver perfil
                  </BadgeCSM>
                </div>

                <div className="relative z-10">
                  {/* Avatar */}
                  <Avatar className={`w-16 h-16 mx-auto mb-3 ${vet.isDirector ? 'bg-csm-yellow' : 'bg-csm-blue'} ring-2 ${vet.isDirector ? 'ring-csm-yellow/30' : 'ring-csm-blue/30'} group-hover:scale-110 transition-transform`}>
                    <AvatarFallback className="text-base font-bold text-white bg-transparent">
                      {vet.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  {/* Nome */}
                  <h3 className="text-sm font-bold text-csm-gray-dark mb-1 group-hover:text-csm-blue transition-colors leading-tight">
                    {vet.name}
                  </h3>
                  
                  {/* Especialidade principal */}
                  <p className="text-xs text-csm-gray">
                    {vet.specialties[1] || vet.specialties[0]}
                  </p>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Modais para cada veterinária */}
      {veterinarians.map((vet) => (
        <ModalCSM
          key={vet.id}
          isOpen={activeModal === vet.id}
          onClose={() => setActiveModal(null)}
          title={vet.name}
        >
          <div className="space-y-6">
            {/* Avatar e Info Básica */}
            <div className="flex items-center gap-4">
              <Avatar className={`w-20 h-20 ${vet.isDirector ? 'bg-csm-yellow' : 'bg-csm-blue'}`}>
                <AvatarFallback className="text-2xl font-bold text-white bg-transparent">
                  {vet.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex gap-2 mb-2">
                  <BadgeCSM variant={vet.isDirector ? "yellow" : "blue"} className="text-sm">
                    {vet.role}
                  </BadgeCSM>
                  <BadgeCSM variant="blue" className="text-sm">
                    {vet.experience}
                  </BadgeCSM>
                </div>
              </div>
            </div>

            {/* Descrição */}
            <p className="text-csm-gray leading-relaxed">
              {vet.description}
            </p>

            {/* Especialidades */}
            <div>
              <h4 className="font-bold text-csm-gray-dark mb-3 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-csm-blue" />
                Especialidades
              </h4>
              <div className="flex flex-wrap gap-2">
                {vet.specialties.map((specialty, index) => (
                  <BadgeCSM key={index} variant="blue" className="text-sm">
                    {specialty}
                  </BadgeCSM>
                ))}
              </div>
            </div>

            {/* Formação */}
            <div>
              <h4 className="font-bold text-csm-gray-dark mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-csm-blue" />
                Formação
              </h4>
              <p className="text-csm-gray">{vet.education}</p>
            </div>

            {/* Certificações */}
            {vet.certifications && vet.certifications.length > 0 && (
              <div>
                <h4 className="font-bold text-csm-gray-dark mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-csm-blue" />
                  Certificações
                </h4>
                <ul className="space-y-2">
                  {vet.certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-2 text-csm-gray">
                      <span className="text-csm-blue mt-1">✓</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </ModalCSM>
      ))}
    </>
  );
}
