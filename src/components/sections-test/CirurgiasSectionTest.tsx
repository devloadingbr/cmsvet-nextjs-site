'use client';

import { useState } from 'react';
import { Scissors, Heart, Bone, Pill, AlertTriangle, Zap } from 'lucide-react';
import { BadgeCSM } from '@/components/ui/badge-csm';
import ModalCSM from '@/components/ui/modal-csm';

export default function CirurgiasSectionTest() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const cirurgias = [
    {
      id: 'castracao',
      icon: <Heart className="w-8 h-8" />,
      title: 'Castração',
      description: 'Procedimento seguro e rápido para controle populacional e saúde do pet',
      details: ['Anestesia segura', 'Pós-operatório acompanhado', 'Prevenção de doenças', 'Controle comportamental']
    },
    {
      id: 'ortopedicas',
      icon: <Bone className="w-8 h-8" />,
      title: 'Ortopédicas',
      description: 'Correção de fraturas, luxações e problemas articulares',
      details: ['Osteossíntese', 'Correção de luxação patelar', 'Artroscopia', 'Amputações quando necessário']
    },
    {
      id: 'oncologicas',
      icon: <Scissors className="w-8 h-8" />,
      title: 'Oncológicas',
      description: 'Remoção de tumores e massas com análise histopatológica',
      details: ['Mastectomia', 'Remoção de tumores de pele', 'Esplenectomia', 'Biópsia e análise']
    },
    {
      id: 'odontologicas',
      icon: <Pill className="w-8 h-8" />,
      title: 'Odontológicas',
      description: 'Saúde bucal completa com equipamentos modernos',
      details: ['Limpeza dental profunda', 'Extrações dentárias', 'Tratamento de gengivite', 'Radiografia dental']
    },
    {
      id: 'emergencia',
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Emergência',
      description: 'Cirurgias urgentes disponíveis 24 horas',
      details: ['Cesariana de emergência', 'Torção gástrica', 'Trauma abdominal', 'Hemorragias']
    },
    {
      id: 'minimamente-invasivas',
      icon: <Zap className="w-8 h-8" />,
      title: 'Minimamente Invasivas',
      description: 'Procedimentos modernos com recuperação mais rápida',
      details: ['Videolaparoscopia', 'Menor trauma cirúrgico', 'Recuperação acelerada', 'Menos dor pós-operatória']
    }
  ];

  const diferenciais = [
    'Anestesista dedicado em todas as cirurgias',
    'Equipamentos de última geração',
    'Pós-operatório completo com acompanhamento',
    'Centro cirúrgico moderno e esterilizado'
  ];

  return (
    <>
      <section id="cirurgias" className="fullpage-section relative bg-gray-50 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          
          {/* Header */}
          <div className="text-center mb-10">
            <BadgeCSM variant="blue" className="mb-4 text-base">
              Centro Cirúrgico
            </BadgeCSM>
            <h2 className="text-4xl lg:text-6xl font-bold text-csm-gray-dark mb-6">
              <span className="text-csm-blue">Cirurgias</span> Completas
            </h2>
            <p className="text-xl text-csm-gray max-w-3xl mx-auto">
              Centro cirúrgico equipado para procedimentos de rotina e emergências
            </p>
          </div>

          {/* Grid de Cirurgias */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            {cirurgias.map((cirurgia) => (
              <button
                key={cirurgia.id}
                onClick={() => setActiveModal(cirurgia.id)}
                className="bg-white border-2 border-csm-blue-light rounded-lg p-4 hover:border-csm-blue hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 text-center group"
              >
                <div className="flex justify-center mb-3 text-csm-blue group-hover:scale-110 transition-transform">
                  {cirurgia.icon}
                </div>
                <h3 className="text-base font-bold text-csm-gray-dark">
                  {cirurgia.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Diferenciais */}
          <div className="bg-csm-blue-light/10 rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-csm-gray-dark mb-4 text-center">Nossos Diferenciais</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {diferenciais.map((diferencial, index) => (
                <div key={index} className="flex items-start gap-2 text-csm-gray-dark">
                  <span className="text-csm-blue mt-1">✓</span>
                  <span className="text-sm">{diferencial}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Modais */}
      {cirurgias.map((cirurgia) => (
        <ModalCSM
          key={cirurgia.id}
          isOpen={activeModal === cirurgia.id}
          onClose={() => setActiveModal(null)}
          title={cirurgia.title}
        >
          <div className="space-y-4">
            <p className="text-csm-gray leading-relaxed">{cirurgia.description}</p>
            <div>
              <h4 className="font-bold text-csm-gray-dark mb-3">Procedimentos:</h4>
              <ul className="space-y-2">
                {cirurgia.details.map((detail, index) => (
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
