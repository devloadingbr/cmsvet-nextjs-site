/**
 * COMPONENTE DE TESTE - CARDS CSM
 * 
 * Use este componente para validar os cards
 * Remover após validação
 */

'use client';

import {
  CardCSM,
  CardCsmHeader,
  CardCsmTitle,
  CardCsmDescription,
  CardCsmContent,
  CardCsmFooter,
} from '@/components/ui/card-csm';
import { ButtonCSM } from '@/components/ui/button-csm';
import { Check, AlertTriangle, Stethoscope, Calendar } from 'lucide-react';

export function CardTest() {
  return (
    <div className="p-8 space-y-12 bg-csm-gray-light min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-csm-blue mb-2">
          Teste de Cards CSM
        </h1>
        <p className="text-csm-gray mb-8">
          Componentes de card profissionais sem gradientes
        </p>

        {/* Variantes */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-csm-gray-dark">Variantes</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card Padrão */}
            <CardCSM variant="default">
              <CardCsmHeader>
                <CardCsmTitle>Card Padrão</CardCsmTitle>
                <CardCsmDescription>
                  Borda sutil azul claro, sombra suave
                </CardCsmDescription>
              </CardCsmHeader>
              <CardCsmContent>
                <p className="text-csm-gray-dark">
                  Este é um card padrão com borda sutil. Passe o mouse para ver o efeito de elevação.
                </p>
              </CardCsmContent>
              <CardCsmFooter>
                <ButtonCSM variant="secondary" size="sm">
                  Ação
                </ButtonCSM>
              </CardCsmFooter>
            </CardCSM>

            {/* Card Destaque */}
            <CardCSM variant="highlight">
              <CardCsmHeader>
                <CardCsmTitle>Card Destaque</CardCsmTitle>
                <CardCsmDescription>
                  Borda azul forte, sombra média
                </CardCsmDescription>
              </CardCsmHeader>
              <CardCsmContent>
                <p className="text-csm-gray-dark">
                  Este é um card de destaque com borda azul forte. Usado para elementos importantes.
                </p>
              </CardCsmContent>
              <CardCsmFooter>
                <ButtonCSM variant="primary" size="sm">
                  Ação Principal
                </ButtonCSM>
              </CardCsmFooter>
            </CardCSM>
          </div>
        </section>

        {/* Exemplos de Uso Real */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-csm-gray-dark">Exemplos de Uso Real</h2>
          
          {/* Grid de Serviços */}
          <div className="grid md:grid-cols-3 gap-6">
            <CardCSM variant="default">
              <CardCsmHeader>
                <div className="w-16 h-16 bg-csm-blue-light rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-csm-blue" />
                </div>
                <CardCsmTitle className="text-xl">Urgência</CardCsmTitle>
                <CardCsmDescription>
                  Consulta de Urgência e Emergência
                </CardCsmDescription>
              </CardCsmHeader>
              <CardCsmContent>
                <p className="text-csm-gray leading-relaxed mb-4">
                  Para situações que não podem esperar: dificuldades respiratórias, vômitos, acidentes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-csm-gray-dark">
                    <Check className="w-4 h-4 text-csm-green mt-0.5" />
                    Avaliação imediata
                  </li>
                  <li className="flex items-start gap-2 text-sm text-csm-gray-dark">
                    <Check className="w-4 h-4 text-csm-green mt-0.5" />
                    Plantão 24h
                  </li>
                </ul>
              </CardCsmContent>
              <CardCsmFooter>
                <ButtonCSM variant="primary" className="w-full">
                  Como Funciona
                </ButtonCSM>
              </CardCsmFooter>
            </CardCSM>

            <CardCSM variant="default">
              <CardCsmHeader>
                <div className="w-16 h-16 bg-csm-blue-light rounded-lg flex items-center justify-center mb-4">
                  <Stethoscope className="w-8 h-8 text-csm-blue" />
                </div>
                <CardCsmTitle className="text-xl">Consultas</CardCsmTitle>
                <CardCsmDescription>
                  Consulta Veterinária Completa
                </CardCsmDescription>
              </CardCsmHeader>
              <CardCsmContent>
                <p className="text-csm-gray leading-relaxed mb-4">
                  Check-ups de rotina, diagnósticos precisos e acompanhamento completo da saúde do seu pet.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-csm-gray-dark">
                    <Check className="w-4 h-4 text-csm-green mt-0.5" />
                    Equipe especializada
                  </li>
                  <li className="flex items-start gap-2 text-sm text-csm-gray-dark">
                    <Check className="w-4 h-4 text-csm-green mt-0.5" />
                    Tecnologia moderna
                  </li>
                </ul>
              </CardCsmContent>
              <CardCsmFooter>
                <ButtonCSM variant="primary" className="w-full">
                  Agendar
                </ButtonCSM>
              </CardCsmFooter>
            </CardCSM>

            <CardCSM variant="highlight">
              <CardCsmHeader>
                <div className="w-16 h-16 bg-csm-yellow-light rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-csm-yellow" />
                </div>
                <CardCsmTitle className="text-xl">Plano Popular</CardCsmTitle>
                <CardCsmDescription>
                  Mais escolhido pelos clientes
                </CardCsmDescription>
              </CardCsmHeader>
              <CardCsmContent>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-csm-blue">R$ 590</span>
                  <span className="text-csm-gray">/ano</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-csm-gray-dark">
                    <Check className="w-4 h-4 text-csm-green mt-0.5" />
                    Vacinas completas
                  </li>
                  <li className="flex items-start gap-2 text-sm text-csm-gray-dark">
                    <Check className="w-4 h-4 text-csm-green mt-0.5" />
                    Microchipagem
                  </li>
                  <li className="flex items-start gap-2 text-sm text-csm-gray-dark">
                    <Check className="w-4 h-4 text-csm-green mt-0.5" />
                    R$ 1.500 crédito
                  </li>
                </ul>
              </CardCsmContent>
              <CardCsmFooter>
                <ButtonCSM variant="urgency" className="w-full">
                  Escolher Plano
                </ButtonCSM>
              </CardCsmFooter>
            </CardCSM>
          </div>
        </section>

        {/* Card de Estatísticas */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-csm-gray-dark">Cards de Estatísticas</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <CardCSM variant="default" className="text-center">
              <CardCsmContent className="p-6">
                <div className="text-4xl font-bold text-csm-blue mb-2">24h</div>
                <div className="text-lg font-semibold text-csm-blue mb-1">Emergência</div>
                <div className="text-sm text-csm-gray">Plantão veterinário 24 horas</div>
              </CardCsmContent>
            </CardCSM>

            <CardCSM variant="default" className="text-center">
              <CardCsmContent className="p-6">
                <div className="text-4xl font-bold text-csm-blue mb-2">500+</div>
                <div className="text-lg font-semibold text-csm-blue mb-1">Pets Salvos</div>
                <div className="text-sm text-csm-gray">Atendimentos de emergência</div>
              </CardCsmContent>
            </CardCSM>

            <CardCSM variant="default" className="text-center">
              <CardCsmContent className="p-6">
                <div className="text-4xl font-bold text-csm-blue mb-2">15+</div>
                <div className="text-lg font-semibold text-csm-blue mb-1">Veterinários</div>
                <div className="text-sm text-csm-gray">Equipe especializada</div>
              </CardCsmContent>
            </CardCSM>

            <CardCSM variant="default" className="text-center">
              <CardCsmContent className="p-6">
                <div className="text-4xl font-bold text-csm-blue mb-2">98%</div>
                <div className="text-lg font-semibold text-csm-blue mb-1">Satisfação</div>
                <div className="text-sm text-csm-gray">Avaliação dos clientes</div>
              </CardCsmContent>
            </CardCSM>
          </div>
        </section>

        {/* Card de Depoimento */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-csm-gray-dark">Card de Depoimento</h2>
          
          <CardCSM variant="default" className="max-w-2xl">
            <CardCsmContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-csm-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                  MS
                </div>
                <div>
                  <h3 className="font-semibold text-csm-gray-dark">Maria Silva</h3>
                  <p className="text-sm text-csm-gray">Tutora de 5 cães</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-csm-yellow">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-csm-gray-dark leading-relaxed italic">
                &quot;Tenho 5 cães resgatados. Antes pagava R$ 450/mês em plano tradicional. 
                Hoje pago R$ 91/mês e tenho o MESMO cuidado. A diferença compra ração premium para todos!&quot;
              </p>
            </CardCsmContent>
          </CardCSM>
        </section>

        {/* Documentação */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-csm-gray-dark">Como Usar</h2>
          
          <CardCSM variant="highlight">
            <CardCsmContent className="p-6">
              <div className="space-y-2 text-sm font-mono">
                <p className="text-csm-gray-dark">
                  <strong>Import:</strong> import &#123; CardCSM, CardCsmHeader, ... &#125; from &apos;@/components/ui/card-csm&apos;
                </p>
                <p className="text-csm-gray-dark">
                  <strong>Padrão:</strong> &lt;CardCSM variant=&quot;default&quot;&gt;...&lt;/CardCSM&gt;
                </p>
                <p className="text-csm-gray-dark">
                  <strong>Destaque:</strong> &lt;CardCSM variant=&quot;highlight&quot;&gt;...&lt;/CardCSM&gt;
                </p>
                <p className="text-csm-gray-dark mt-4">
                  <strong>Subcomponentes:</strong>
                </p>
                <ul className="list-disc list-inside text-csm-gray-dark ml-4">
                  <li>CardCsmHeader - Cabeçalho do card</li>
                  <li>CardCsmTitle - Título do card</li>
                  <li>CardCsmDescription - Descrição do card</li>
                  <li>CardCsmContent - Conteúdo principal</li>
                  <li>CardCsmFooter - Rodapé (ações)</li>
                </ul>
              </div>
            </CardCsmContent>
          </CardCSM>
        </section>
      </div>
    </div>
  );
}
