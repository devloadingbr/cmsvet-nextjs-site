'use client';

import { useState } from 'react';
import { Shield, Dog, Cat, Calendar, Plane } from 'lucide-react';
import { BadgeCSM } from '@/components/ui/badge-csm';
import ModalCSM from '@/components/ui/modal-csm';

export default function VacinasSectionTest() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const vacinas = [
    {
      id: 'caes',
      icon: <Dog className="w-16 h-16" />,
      title: 'Vacinas para Cães',
      subtitle: 'Proteção completa para seu cachorro',
      color: 'bg-csm-blue',
      vaccines: [
        { name: 'V8 ou V10', description: 'Proteção contra cinomose, parvovirose, hepatite, leptospirose e outras doenças' },
        { name: 'Antirrábica', description: 'Obrigatória por lei, protege contra a raiva' },
        { name: 'Gripe Canina (KC)', description: 'Previne tosse dos canis e traqueobronquite' },
        { name: 'Giárdia', description: 'Proteção contra parasita intestinal' },
        { name: 'Leishmaniose', description: 'Prevenção de doença transmitida por mosquito' }
      ]
    },
    {
      id: 'gatos',
      icon: <Cat className="w-16 h-16" />,
      title: 'Vacinas para Gatos',
      subtitle: 'Cuidado essencial para seu felino',
      color: 'bg-csm-blue',
      vaccines: [
        { name: 'V3 ou V4 ou V5', description: 'Proteção contra rinotraqueíte, calicivirose, panleucopenia e clamidiose' },
        { name: 'Antirrábica', description: 'Obrigatória por lei, protege contra a raiva' },
        { name: 'FeLV', description: 'Proteção contra leucemia felina' }
      ]
    },
    {
      id: 'calendario',
      icon: <Calendar className="w-16 h-16" />,
      title: 'Calendário de Vacinação',
      subtitle: 'Cronograma completo por idade',
      color: 'bg-csm-yellow',
      schedule: [
        { age: '6-8 semanas', vaccines: 'Primeira dose V8/V10 (cães) ou V3/V4/V5 (gatos)' },
        { age: '12 semanas', vaccines: 'Segunda dose V8/V10 ou V3/V4/V5' },
        { age: '16 semanas', vaccines: 'Terceira dose V8/V10 ou V3/V4/V5 + Antirrábica' },
        { age: 'Anual', vaccines: 'Reforço de todas as vacinas' },
        { age: 'Conforme necessidade', vaccines: 'Vacinas complementares (Gripe, Giárdia, Leishmaniose, FeLV)' }
      ]
    },
    {
      id: 'importadas',
      icon: <Plane className="w-16 h-16" />,
      title: 'Vacinas Importadas',
      subtitle: 'Tecnologia de ponta para seu pet',
      color: 'bg-csm-yellow',
      benefits: [
        'Maior eficácia e proteção',
        'Menos reações adversas',
        'Tecnologia mais moderna',
        'Proteção de longa duração',
        'Recomendadas para pets sensíveis'
      ]
    }
  ];

  return (
    <>
      <section id="vacinas" className="fullpage-section relative bg-gray-50 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
          
          {/* Header */}
          <div className="text-center mb-8">
            <BadgeCSM variant="yellow" className="mb-4 text-base">
              <Shield className="w-4 h-4 mr-1" />
              Prevenção
            </BadgeCSM>
            <h2 className="text-4xl lg:text-6xl font-bold text-csm-gray-dark mb-6">
              <span className="text-csm-blue">Vacinação</span> Completa
            </h2>
            <p className="text-xl text-csm-gray max-w-3xl mx-auto">
              Proteja seu pet contra doenças graves com nosso programa completo de vacinação
            </p>
          </div>

          {/* Grid de Vacinas */}
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {vacinas.map((vacina) => (
              <button
                key={vacina.id}
                onClick={() => setActiveModal(vacina.id)}
                className="relative bg-white border-2 border-csm-blue/30 rounded-xl p-6 hover:border-csm-blue hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 text-center group overflow-hidden"
              >
                {/* Background decorativo */}
                <div className="absolute inset-0 bg-gradient-to-br from-csm-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Badge "Clique para ver" */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <BadgeCSM variant="yellow" className="text-xs px-2 py-1">
                    Clique
                  </BadgeCSM>
                </div>

                <div className="relative z-10">
                  {/* Ícone com background */}
                  <div className="mb-4 flex justify-center">
                    <div className={`${vacina.color} w-20 h-20 rounded-full flex items-center justify-center text-white group-hover:scale-110 group-hover:shadow-lg transition-all`}>
                      {vacina.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-csm-gray-dark mb-2 group-hover:text-csm-blue transition-colors">
                    {vacina.title}
                  </h3>
                  
                  <p className="text-csm-gray text-base mb-4 leading-relaxed">
                    {vacina.subtitle}
                  </p>

                  {/* Informação adicional */}
                  <div className="flex items-center justify-center gap-2 text-sm text-csm-blue font-semibold">
                    <span>
                      {vacina.vaccines ? `${vacina.vaccines.length} vacinas` : 
                       vacina.benefits ? `${vacina.benefits.length} benefícios` : 'Ver detalhes'}
                    </span>
                    <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Modais */}
      {vacinas.map((vacina) => (
        <ModalCSM
          key={vacina.id}
          isOpen={activeModal === vacina.id}
          onClose={() => setActiveModal(null)}
          title={vacina.title}
        >
          <div className="space-y-6">
            <p className="text-csm-gray leading-relaxed">
              {vacina.subtitle}
            </p>

            {vacina.vaccines && (
              <div>
                <h4 className="font-bold text-csm-gray-dark mb-4 text-lg">Vacinas Disponíveis:</h4>
                <div className="space-y-4">
                  {vacina.vaccines.map((vaccine, index) => (
                    <div key={index} className="bg-csm-blue-light/10 rounded-lg p-4">
                      <h5 className="font-bold text-csm-blue mb-1">{vaccine.name}</h5>
                      <p className="text-sm text-csm-gray">{vaccine.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {vacina.schedule && (
              <div>
                <h4 className="font-bold text-csm-gray-dark mb-4 text-lg">Cronograma Recomendado:</h4>
                <div className="space-y-3">
                  {vacina.schedule.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="bg-csm-yellow text-csm-gray-dark font-bold px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                        {item.age}
                      </div>
                      <p className="text-csm-gray text-sm flex-1">{item.vaccines}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {vacina.benefits && (
              <div>
                <h4 className="font-bold text-csm-gray-dark mb-4 text-lg">Benefícios:</h4>
                <ul className="space-y-2">
                  {vacina.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-csm-gray">
                      <span className="text-csm-blue mt-1">✓</span>
                      <span>{benefit}</span>
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
