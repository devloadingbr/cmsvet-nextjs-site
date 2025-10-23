'use client';

import { useState } from 'react';
import { FlaskConical, Camera } from 'lucide-react';
import { BadgeCSM } from '@/components/ui/badge-csm';
import ModalCSM from '@/components/ui/modal-csm';

export default function ExamesSectionTest() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const exames = [
    {
      id: 'laboratoriais',
      icon: <FlaskConical className="w-20 h-20" />,
      title: 'Exames Laboratoriais',
      subtitle: 'Diagnóstico preciso através de análises clínicas',
      items: [
        'Hemograma Completo',
        'Bioquímico (função renal, hepática)',
        'Urinálise',
        'Parasitológico de Fezes',
        'Testes de FIV/FeLV (gatos)',
        'Teste de Cinomose e Parvovirose',
        'Perfil Hormonal',
        'Cultura e Antibiograma'
      ]
    },
    {
      id: 'imagem',
      icon: <Camera className="w-20 h-20" />,
      title: 'Exames de Imagem',
      subtitle: 'Visualização interna para diagnóstico assertivo',
      items: [
        'Raio-X Digital',
        'Ultrassom Abdominal',
        'Ultrassom Obstétrico',
        'Ecocardiograma',
        'Eletrocardiograma (ECG)',
        'Ultrassom de Partes Moles'
      ],
      note: 'Alguns exames estão sujeitos à agenda de profissionais terceirizados.'
    }
  ];

  return (
    <>
      <section id="exames" className="fullpage-section relative bg-csm-blue-light flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          
          {/* Header */}
          <div className="text-center mb-12">
            <BadgeCSM variant="blue" className="mb-4 text-base">
              Diagnóstico
            </BadgeCSM>
            <h2 className="text-4xl lg:text-6xl font-bold text-csm-gray-dark mb-6">
              <span className="text-csm-blue">Exames</span> Completos
            </h2>
            <p className="text-xl text-csm-gray max-w-3xl mx-auto">
              Estrutura laboratorial completa para diagnósticos precisos e rápidos
            </p>
          </div>

          {/* Split 50/50 */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {exames.map((exame) => (
              <button
                key={exame.id}
                onClick={() => setActiveModal(exame.id)}
                className="relative bg-white border-2 border-csm-blue/30 rounded-2xl p-10 hover:border-csm-blue hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 text-center group overflow-hidden"
              >
                {/* Background decorativo */}
                <div className="absolute inset-0 bg-gradient-to-br from-csm-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Badge "Clique para ver" */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <BadgeCSM variant="yellow" className="text-xs px-3 py-1">
                    Clique para ver
                  </BadgeCSM>
                </div>

                <div className="relative z-10">
                  {/* Ícone com background */}
                  <div className="mb-6 flex justify-center">
                    <div className="bg-csm-blue/10 rounded-full p-6 group-hover:bg-csm-blue/20 group-hover:scale-110 transition-all">
                      <div className="text-csm-blue">
                        {exame.icon}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-csm-gray-dark mb-4 group-hover:text-csm-blue transition-colors">
                    {exame.title}
                  </h3>
                  
                  <p className="text-csm-gray text-lg mb-6 leading-relaxed">
                    {exame.subtitle}
                  </p>

                  {/* Informação adicional */}
                  <div className="flex items-center justify-center gap-2 text-sm text-csm-blue font-semibold">
                    <span>{exame.items.length} exames disponíveis</span>
                    <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Modais */}
      {exames.map((exame) => (
        <ModalCSM
          key={exame.id}
          isOpen={activeModal === exame.id}
          onClose={() => setActiveModal(null)}
          title={exame.title}
        >
          <div className="space-y-6">
            <p className="text-csm-gray leading-relaxed text-lg">
              {exame.subtitle}
            </p>

            <div>
              <h4 className="font-bold text-csm-gray-dark mb-4 text-lg">Exames Disponíveis:</h4>
              <div className="grid gap-3">
                {exame.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-csm-blue-light/10 rounded-lg p-3">
                    <span className="text-csm-blue font-bold">✓</span>
                    <span className="text-csm-gray-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {exame.note && (
              <div className="bg-csm-yellow/20 border-l-4 border-csm-yellow p-4 rounded">
                <p className="text-sm text-csm-gray-dark">
                  <strong>Importante:</strong> {exame.note}
                </p>
              </div>
            )}
          </div>
        </ModalCSM>
      ))}
    </>
  );
}
