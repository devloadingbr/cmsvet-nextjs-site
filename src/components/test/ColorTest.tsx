/**
 * COMPONENTE DE TESTE - CORES CSM
 * 
 * Use este componente para validar que as cores estão funcionando
 * Remover após validação
 */

'use client';

import { colorsCsm } from '@/lib/colors-csm';

export function ColorTest() {
  return (
    <div className="p-8 space-y-8 bg-white">
      <h1 className="text-3xl font-bold text-csm-blue">
        Teste de Cores CSM
      </h1>

      {/* Azul */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-csm-gray-dark">Azul CSM</h2>
        <div className="flex gap-4">
          <div className="w-32 h-32 bg-csm-blue rounded-lg flex items-center justify-center text-white font-bold">
            Primary
          </div>
          <div className="w-32 h-32 bg-csm-blue-hover rounded-lg flex items-center justify-center text-white font-bold">
            Hover
          </div>
          <div className="w-32 h-32 bg-csm-blue-light rounded-lg flex items-center justify-center text-csm-blue font-bold">
            Light
          </div>
        </div>
      </section>

      {/* Amarelo */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-csm-gray-dark">Amarelo CSM</h2>
        <div className="flex gap-4">
          <div className="w-32 h-32 bg-csm-yellow rounded-lg flex items-center justify-center text-csm-gray-dark font-bold">
            Primary
          </div>
          <div className="w-32 h-32 bg-csm-yellow-hover rounded-lg flex items-center justify-center text-csm-gray-dark font-bold">
            Hover
          </div>
          <div className="w-32 h-32 bg-csm-yellow-light rounded-lg flex items-center justify-center text-csm-gray-dark font-bold">
            Light
          </div>
        </div>
      </section>

      {/* Laranja (Urgência) */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-csm-gray-dark">Laranja (Urgência)</h2>
        <div className="flex gap-4">
          <div className="w-32 h-32 bg-csm-orange rounded-lg flex items-center justify-center text-white font-bold">
            Urgência
          </div>
          <div className="w-32 h-32 bg-csm-orange-hover rounded-lg flex items-center justify-center text-white font-bold">
            Hover
          </div>
        </div>
      </section>

      {/* Cinza */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-csm-gray-dark">Cinza</h2>
        <div className="flex gap-4">
          <div className="w-32 h-32 bg-csm-gray rounded-lg flex items-center justify-center text-white font-bold">
            Neutro
          </div>
          <div className="w-32 h-32 bg-csm-gray-dark rounded-lg flex items-center justify-center text-white font-bold">
            Escuro
          </div>
          <div className="w-32 h-32 bg-csm-gray-light rounded-lg flex items-center justify-center text-csm-gray-dark font-bold border">
            Claro
          </div>
        </div>
      </section>

      {/* Verde (Sucesso) */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-csm-gray-dark">Verde (Sucesso)</h2>
        <div className="flex gap-4">
          <div className="w-32 h-32 bg-csm-green rounded-lg flex items-center justify-center text-white font-bold">
            Sucesso
          </div>
        </div>
      </section>

      {/* Botões de Teste */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-csm-gray-dark">Botões</h2>
        <div className="flex gap-4">
          <button className="bg-csm-blue hover:bg-csm-blue-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Primário
          </button>
          <button className="border-2 border-csm-blue text-csm-blue hover:bg-csm-blue-light px-6 py-3 rounded-lg font-semibold transition-colors">
            Secundário
          </button>
          <button className="bg-csm-orange hover:bg-csm-orange-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Urgência
          </button>
        </div>
      </section>

      {/* Tipografia */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-csm-gray-dark">Tipografia</h2>
        <p className="text-csm-blue text-xl font-bold">Título Azul CSM</p>
        <p className="text-csm-gray-dark text-lg">Texto Cinza Escuro (corpo)</p>
        <p className="text-csm-gray">Texto Cinza Neutro (secundário)</p>
      </section>

      {/* Valores das Cores */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-csm-gray-dark">Valores HEX</h2>
        <div className="grid grid-cols-2 gap-4 text-sm font-mono">
          <div>
            <strong>Azul Primary:</strong> {colorsCsm.azul.primary}
          </div>
          <div>
            <strong>Amarelo Primary:</strong> {colorsCsm.amarelo.primary}
          </div>
          <div>
            <strong>Laranja Urgência:</strong> {colorsCsm.laranja.urgencia}
          </div>
          <div>
            <strong>Verde Sucesso:</strong> {colorsCsm.verde.sucesso}
          </div>
        </div>
      </section>
    </div>
  );
}
