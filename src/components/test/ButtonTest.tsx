/**
 * COMPONENTE DE TESTE - BOTÕES CSM
 * 
 * Use este componente para validar os botões
 * Remover após validação
 */

'use client';

import { ButtonCSM } from '@/components/ui/button-csm';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export function ButtonTest() {
  return (
    <div className="p-8 space-y-12 bg-white">
      <h1 className="text-3xl font-bold text-csm-blue">
        Teste de Botões CSM
      </h1>

      {/* Variantes */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-csm-gray-dark">Variantes</h2>
        
        <div className="space-y-4">
          <div>
            <p className="text-sm text-csm-gray mb-2 font-semibold">PRIMARY (Azul)</p>
            <div className="flex gap-4 flex-wrap">
              <ButtonCSM variant="primary">
                Agendar Consulta
              </ButtonCSM>
              <ButtonCSM variant="primary">
                <Calendar className="w-5 h-5" />
                Com Ícone
              </ButtonCSM>
              <ButtonCSM variant="primary" disabled>
                Desabilitado
              </ButtonCSM>
            </div>
          </div>

          <div>
            <p className="text-sm text-csm-gray mb-2 font-semibold">SECONDARY (Outline Azul)</p>
            <div className="flex gap-4 flex-wrap">
              <ButtonCSM variant="secondary">
                Saiba Mais
              </ButtonCSM>
              <ButtonCSM variant="secondary">
                <Phone className="w-5 h-5" />
                Com Ícone
              </ButtonCSM>
              <ButtonCSM variant="secondary" disabled>
                Desabilitado
              </ButtonCSM>
            </div>
          </div>

          <div>
            <p className="text-sm text-csm-gray mb-2 font-semibold">URGENCY (Laranja)</p>
            <div className="flex gap-4 flex-wrap">
              <ButtonCSM variant="urgency">
                Emergência 24h
              </ButtonCSM>
              <ButtonCSM variant="urgency">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Urgente
              </ButtonCSM>
              <ButtonCSM variant="urgency" disabled>
                Desabilitado
              </ButtonCSM>
            </div>
          </div>
        </div>
      </section>

      {/* Tamanhos */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-csm-gray-dark">Tamanhos</h2>
        
        <div className="space-y-4">
          <div>
            <p className="text-sm text-csm-gray mb-2 font-semibold">SMALL</p>
            <div className="flex gap-4 flex-wrap items-center">
              <ButtonCSM variant="primary" size="sm">
                Pequeno
              </ButtonCSM>
              <ButtonCSM variant="secondary" size="sm">
                Pequeno
              </ButtonCSM>
              <ButtonCSM variant="urgency" size="sm">
                Pequeno
              </ButtonCSM>
            </div>
          </div>

          <div>
            <p className="text-sm text-csm-gray mb-2 font-semibold">MEDIUM (Padrão)</p>
            <div className="flex gap-4 flex-wrap items-center">
              <ButtonCSM variant="primary" size="md">
                Médio
              </ButtonCSM>
              <ButtonCSM variant="secondary" size="md">
                Médio
              </ButtonCSM>
              <ButtonCSM variant="urgency" size="md">
                Médio
              </ButtonCSM>
            </div>
          </div>

          <div>
            <p className="text-sm text-csm-gray mb-2 font-semibold">LARGE</p>
            <div className="flex gap-4 flex-wrap items-center">
              <ButtonCSM variant="primary" size="lg">
                Grande
              </ButtonCSM>
              <ButtonCSM variant="secondary" size="lg">
                Grande
              </ButtonCSM>
              <ButtonCSM variant="urgency" size="lg">
                Grande
              </ButtonCSM>
            </div>
          </div>
        </div>
      </section>

      {/* Exemplos de Uso Real */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-csm-gray-dark">Exemplos de Uso Real</h2>
        
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="bg-csm-gray-light p-8 rounded-lg">
            <h3 className="text-xl font-bold text-csm-blue mb-4">Hero Section</h3>
            <div className="flex gap-4 flex-wrap">
              <ButtonCSM variant="urgency" size="lg">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </ButtonCSM>
              <ButtonCSM variant="primary" size="lg">
                <Phone className="w-5 h-5" />
                Ligação
              </ButtonCSM>
            </div>
          </div>

          {/* Card de Serviço */}
          <div className="bg-white border-2 border-csm-blue-light p-6 rounded-lg">
            <h3 className="text-xl font-bold text-csm-gray-dark mb-2">Consulta Veterinária</h3>
            <p className="text-csm-gray mb-4">
              Atendimento completo com veterinários especializados
            </p>
            <ButtonCSM variant="primary" className="w-full">
              Agendar Consulta
            </ButtonCSM>
          </div>

          {/* CTA Section */}
          <div className="bg-csm-blue p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Seu Pet Merece o Melhor Cuidado
            </h3>
            <div className="flex gap-4 justify-center flex-wrap">
              <ButtonCSM variant="urgency" size="lg">
                Emergência 24h
              </ButtonCSM>
              <ButtonCSM variant="secondary" size="lg" className="bg-white hover:bg-csm-blue-light">
                Saiba Mais
              </ButtonCSM>
            </div>
          </div>
        </div>
      </section>

      {/* Estados Interativos */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-csm-gray-dark">Estados Interativos</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-csm-gray mb-2">Passe o mouse para ver o hover</p>
            <div className="flex gap-4 flex-wrap">
              <ButtonCSM variant="primary">Hover Azul Escuro</ButtonCSM>
              <ButtonCSM variant="secondary">Hover Azul Claro</ButtonCSM>
              <ButtonCSM variant="urgency">Hover Laranja Escuro</ButtonCSM>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-csm-gray mb-2">Focus (Tab para navegar)</p>
            <div className="flex gap-4 flex-wrap">
              <ButtonCSM variant="primary">Focus Ring Azul</ButtonCSM>
              <ButtonCSM variant="secondary">Focus Ring Azul</ButtonCSM>
              <ButtonCSM variant="urgency">Focus Ring Azul</ButtonCSM>
            </div>
          </div>
        </div>
      </section>

      {/* Documentação */}
      <section className="space-y-4 bg-csm-blue-light p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-csm-blue">Como Usar</h2>
        <div className="space-y-2 text-sm font-mono">
          <p className="text-csm-gray-dark">
            <strong>Import:</strong> import &#123; ButtonCSM &#125; from '@/components/ui/button-csm'
          </p>
          <p className="text-csm-gray-dark">
            <strong>Primary:</strong> &lt;ButtonCSM variant="primary"&gt;Texto&lt;/ButtonCSM&gt;
          </p>
          <p className="text-csm-gray-dark">
            <strong>Secondary:</strong> &lt;ButtonCSM variant="secondary"&gt;Texto&lt;/ButtonCSM&gt;
          </p>
          <p className="text-csm-gray-dark">
            <strong>Urgency:</strong> &lt;ButtonCSM variant="urgency"&gt;Texto&lt;/ButtonCSM&gt;
          </p>
          <p className="text-csm-gray-dark">
            <strong>Tamanhos:</strong> size="sm" | "md" | "lg"
          </p>
        </div>
      </section>
    </div>
  );
}
