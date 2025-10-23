'use client';

import { useState } from 'react';
import { Stethoscope, Baby, Users, Droplet, Heart, Bone, Eye, Pill, Apple } from 'lucide-react';
import { BadgeCSM } from '@/components/ui/badge-csm';
import ModalCSM from '@/components/ui/modal-csm';

export default function ConsultasSectionTest() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const consultas = [
    {
      id: 'clinica-geral',
      icon: <Stethoscope className="w-10 h-10" />,
      title: 'Clínica Geral',
      description: 'Avaliação completa do estado de saúde do seu pet, diagnóstico e tratamento de doenças comuns.',
      details: [
        'Exame físico completo',
        'Histórico médico detalhado',
        'Orientações preventivas',
        'Prescrição de medicamentos',
        'Acompanhamento contínuo'
      ]
    },
    {
      id: 'pediatria',
      icon: <Baby className="w-10 h-10" />,
      title: 'Pediatria',
      description: 'Cuidados especializados para filhotes, desde o nascimento até a fase adulta.',
      details: [
        'Acompanhamento de crescimento',
        'Calendário de vacinação',
        'Vermifugação adequada',
        'Orientação nutricional',
        'Socialização e comportamento'
      ]
    },
    {
      id: 'geriatria',
      icon: <Users className="w-10 h-10" />,
      title: 'Geriatria',
      description: 'Atenção especial para pets idosos, garantindo qualidade de vida na terceira idade.',
      details: [
        'Check-up geriátrico completo',
        'Manejo de doenças crônicas',
        'Controle de dor',
        'Adaptação do ambiente',
        'Suplementação adequada'
      ]
    },
    {
      id: 'dermatologia',
      icon: <Droplet className="w-10 h-10" />,
      title: 'Dermatologia',
      description: 'Tratamento de problemas de pele, alergias, parasitas e doenças dermatológicas.',
      details: [
        'Diagnóstico de alergias',
        'Tratamento de dermatites',
        'Controle de parasitas',
        'Biópsias de pele',
        'Terapias específicas'
      ]
    },
    {
      id: 'cardiologia',
      icon: <Heart className="w-10 h-10" />,
      title: 'Cardiologia',
      description: 'Avaliação e tratamento de doenças cardíacas com equipamentos modernos.',
      details: [
        'Ecocardiograma',
        'Eletrocardiograma',
        'Raio-X torácico',
        'Tratamento de insuficiência cardíaca',
        'Acompanhamento cardiológico'
      ]
    },
    {
      id: 'ortopedia',
      icon: <Bone className="w-10 h-10" />,
      title: 'Ortopedia',
      description: 'Diagnóstico e tratamento de problemas ósseos, articulares e musculares.',
      details: [
        'Avaliação de claudicação',
        'Raio-X digital',
        'Tratamento de fraturas',
        'Cirurgias ortopédicas',
        'Fisioterapia veterinária'
      ]
    },
    {
      id: 'oftalmologia',
      icon: <Eye className="w-10 h-10" />,
      title: 'Oftalmologia',
      description: 'Cuidados com a saúde ocular do seu pet, prevenção e tratamento.',
      details: [
        'Exame oftalmológico completo',
        'Tratamento de conjuntivite',
        'Cirurgia de catarata',
        'Úlceras de córnea',
        'Glaucoma e pressão ocular'
      ]
    },
    {
      id: 'odontologia',
      icon: <Pill className="w-10 h-10" />,
      title: 'Odontologia',
      description: 'Saúde bucal completa, limpeza, extrações e tratamentos dentários.',
      details: [
        'Limpeza dental (profilaxia)',
        'Extração de dentes',
        'Tratamento de gengivite',
        'Radiografia dental',
        'Orientação de higiene bucal'
      ]
    },
    {
      id: 'nutricao',
      icon: <Apple className="w-10 h-10" />,
      title: 'Nutrição',
      description: 'Plano alimentar personalizado para cada fase e necessidade do seu pet.',
      details: [
        'Avaliação nutricional',
        'Dietas terapêuticas',
        'Controle de peso',
        'Suplementação',
        'Orientação alimentar'
      ]
    }
  ];

  return (
    <>
      <section id="consultas" className="fullpage-section relative bg-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          
          {/* Header */}
          <div className="text-center mb-12">
            <BadgeCSM variant="blue" className="mb-4 text-base">
              Especialidades
            </BadgeCSM>
            <h2 className="text-4xl lg:text-6xl font-bold text-csm-gray-dark mb-6">
              <span className="text-csm-blue">Consultas</span> Especializadas
            </h2>
            <p className="text-xl text-csm-gray max-w-3xl mx-auto">
              Equipe qualificada para atender todas as necessidades do seu pet
            </p>
          </div>

          {/* Grid de Consultas */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {consultas.map((consulta) => (
              <button
                key={consulta.id}
                onClick={() => setActiveModal(consulta.id)}
                className="relative bg-white border-2 border-csm-blue/30 rounded-lg p-4 hover:border-csm-blue hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 text-center group overflow-hidden"
              >
                {/* Background decorativo */}
                <div className="absolute inset-0 bg-gradient-to-br from-csm-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Badge "Clique para ver" */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <BadgeCSM variant="yellow" className="text-xs px-2 py-0.5">
                    Ver
                  </BadgeCSM>
                </div>

                <div className="relative z-10">
                  {/* Ícone com background */}
                  <div className="mb-3 flex justify-center">
                    <div className="bg-csm-blue/10 rounded-full p-3 group-hover:bg-csm-blue/20 group-hover:scale-110 transition-all">
                      <div className="text-csm-blue scale-90">
                        {consulta.icon}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-base font-bold text-csm-gray-dark mb-1 group-hover:text-csm-blue transition-colors leading-tight">
                    {consulta.title}
                  </h3>

                  {/* Indicador de clique */}
                  <div className="flex items-center justify-center gap-1 text-xs text-csm-blue font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Modais */}
      {consultas.map((consulta) => (
        <ModalCSM
          key={consulta.id}
          isOpen={activeModal === consulta.id}
          onClose={() => setActiveModal(null)}
          title={consulta.title}
        >
          <div className="space-y-4">
            <p className="text-csm-gray leading-relaxed">
              {consulta.description}
            </p>
            <div>
              <h4 className="font-bold text-csm-gray-dark mb-3">O que está incluído:</h4>
              <ul className="space-y-2">
                {consulta.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2 text-csm-gray">
                    <span className="text-csm-blue mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ModalCSM>
      ))}
    </>
  );
}
