/**
 * COMPONENTE DE TESTE - BADGES CSM
 * 
 * Use este componente para validar os badges
 * Remover após validação
 */

'use client';

import { BadgeCSM } from '@/components/ui/badge-csm';
import { CardCSM, CardCsmHeader, CardCsmTitle, CardCsmContent } from '@/components/ui/card-csm';
import { ButtonCSM } from '@/components/ui/button-csm';

export function BadgeTest() {
  return (
    <div className="p-8 space-y-12 bg-white">
      <h1 className="text-3xl font-bold text-csm-blue">
        Teste de Badges CSM
      </h1>

      {/* Variantes */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-csm-gray-dark">Variantes</h2>
        
        <div className="space-y-4">
          <div>
            <p className="text-sm text-csm-gray mb-2 font-semibold">BLUE (Azul - Padrão)</p>
            <div className="flex gap-3 flex-wrap">
              <BadgeCSM variant="blue">Informativo</BadgeCSM>
              <BadgeCSM variant="blue">Especializado</BadgeCSM>
              <BadgeCSM variant="blue">24 Horas</BadgeCSM>
              <BadgeCSM variant="blue">+15k Pets</BadgeCSM>
            </div>
          </div>

          <div>
            <p className="text-sm text-csm-gray mb-2 font-semibold">YELLOW (Amarelo - Destaque)</p>
            <div className="flex gap-3 flex-wrap">
              <BadgeCSM variant="yellow">Popular</BadgeCSM>
              <BadgeCSM variant="yellow">Destaque</BadgeCSM>
              <BadgeCSM variant="yellow">Novo</BadgeCSM>
              <BadgeCSM variant="yellow">8+ Anos</BadgeCSM>
            </div>
          </div>

          <div>
            <p className="text-sm text-csm-gray mb-2 font-semibold">GRAY (Cinza - Secundário)</p>
            <div className="flex gap-3 flex-wrap">
              <BadgeCSM variant="gray">Secundário</BadgeCSM>
              <BadgeCSM variant="gray">Info</BadgeCSM>
              <BadgeCSM variant="gray">Categoria</BadgeCSM>
              <BadgeCSM variant="gray">Tag</BadgeCSM>
            </div>
          </div>
        </div>
      </section>

      {/* Exemplos de Uso Real */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-csm-gray-dark">Exemplos de Uso Real</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Hero Section - Trust Badges */}
          <CardCSM variant="default">
            <CardCsmHeader>
              <CardCsmTitle className="text-lg">Hero Section - Trust Badges</CardCsmTitle>
            </CardCsmHeader>
            <CardCsmContent>
              <div className="flex gap-3 flex-wrap">
                <BadgeCSM variant="blue">+15k pets</BadgeCSM>
                <BadgeCSM variant="yellow">Plantão 24h</BadgeCSM>
              </div>
            </CardCsmContent>
          </CardCSM>

          {/* Card de Plano - Badge Popular */}
          <CardCSM variant="highlight" className="relative">
            <BadgeCSM variant="yellow" className="absolute -top-3 right-4">
              Popular
            </BadgeCSM>
            <CardCsmHeader>
              <CardCsmTitle className="text-lg">Plano Família</CardCsmTitle>
            </CardCsmHeader>
            <CardCsmContent>
              <div className="text-3xl font-bold text-csm-blue mb-2">R$ 590</div>
              <p className="text-csm-gray text-sm">1-3 pets</p>
            </CardCsmContent>
          </CardCSM>

          {/* Card de Serviço - Badge de Categoria */}
          <CardCSM variant="default">
            <CardCsmHeader>
              <div className="flex items-center justify-between mb-2">
                <CardCsmTitle className="text-lg">Consulta Veterinária</CardCsmTitle>
                <BadgeCSM variant="blue">Clínica Geral</BadgeCSM>
              </div>
            </CardCsmHeader>
            <CardCsmContent>
              <p className="text-csm-gray text-sm">
                Check-ups de rotina e diagnósticos precisos
              </p>
            </CardCsmContent>
          </CardCSM>

          {/* Card de Equipe - Badge de Experiência */}
          <CardCSM variant="default">
            <CardCsmHeader>
              <CardCsmTitle className="text-lg">Dra. Catarina Gadelha</CardCsmTitle>
              <div className="flex gap-2 mt-2">
                <BadgeCSM variant="yellow">8+ anos</BadgeCSM>
                <BadgeCSM variant="blue">Cirurgia</BadgeCSM>
              </div>
            </CardCsmHeader>
            <CardCsmContent>
              <p className="text-csm-gray text-sm">
                Especialista em clínica geral e procedimentos cirúrgicos
              </p>
            </CardCsmContent>
          </CardCSM>
        </div>
      </section>

      {/* Badges em Diferentes Contextos */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-csm-gray-dark">Badges em Diferentes Contextos</h2>
        
        <div className="space-y-6">
          {/* Sobre fundo branco */}
          <div className="bg-white p-6 rounded-lg border border-csm-gray-light">
            <p className="text-sm text-csm-gray mb-3 font-semibold">Sobre fundo branco</p>
            <div className="flex gap-3 flex-wrap">
              <BadgeCSM variant="blue">Azul</BadgeCSM>
              <BadgeCSM variant="yellow">Amarelo</BadgeCSM>
              <BadgeCSM variant="gray">Cinza</BadgeCSM>
            </div>
          </div>

          {/* Sobre fundo azul claro */}
          <div className="bg-csm-blue-light p-6 rounded-lg">
            <p className="text-sm text-csm-gray mb-3 font-semibold">Sobre fundo azul claro</p>
            <div className="flex gap-3 flex-wrap">
              <BadgeCSM variant="blue">Azul</BadgeCSM>
              <BadgeCSM variant="yellow">Amarelo</BadgeCSM>
              <BadgeCSM variant="gray">Cinza</BadgeCSM>
            </div>
          </div>

          {/* Sobre fundo cinza claro */}
          <div className="bg-csm-gray-light p-6 rounded-lg">
            <p className="text-sm text-csm-gray mb-3 font-semibold">Sobre fundo cinza claro</p>
            <div className="flex gap-3 flex-wrap">
              <BadgeCSM variant="blue">Azul</BadgeCSM>
              <BadgeCSM variant="yellow">Amarelo</BadgeCSM>
              <BadgeCSM variant="gray">Cinza</BadgeCSM>
            </div>
          </div>

          {/* Sobre fundo azul (invertido) */}
          <div className="bg-csm-blue p-6 rounded-lg">
            <p className="text-sm text-white mb-3 font-semibold">Sobre fundo azul escuro</p>
            <div className="flex gap-3 flex-wrap">
              <BadgeCSM variant="yellow">Amarelo (melhor contraste)</BadgeCSM>
              <BadgeCSM variant="gray" className="bg-white text-csm-blue">Branco customizado</BadgeCSM>
            </div>
          </div>
        </div>
      </section>

      {/* Badges com Botões */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-csm-gray-dark">Badges com Botões</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <CardCSM variant="default">
            <CardCsmContent className="p-6 text-center">
              <BadgeCSM variant="blue" className="mb-4">Recomendado</BadgeCSM>
              <h3 className="text-xl font-bold text-csm-gray-dark mb-2">Plano Básico</h3>
              <p className="text-csm-gray text-sm mb-4">Para 1-3 pets</p>
              <ButtonCSM variant="secondary" className="w-full">
                Escolher
              </ButtonCSM>
            </CardCsmContent>
          </CardCSM>

          <CardCSM variant="highlight">
            <CardCsmContent className="p-6 text-center">
              <BadgeCSM variant="yellow" className="mb-4">Popular</BadgeCSM>
              <h3 className="text-xl font-bold text-csm-gray-dark mb-2">Plano Família</h3>
              <p className="text-csm-gray text-sm mb-4">Para 4-6 pets</p>
              <ButtonCSM variant="primary" className="w-full">
                Escolher
              </ButtonCSM>
            </CardCsmContent>
          </CardCSM>

          <CardCSM variant="default">
            <CardCsmContent className="p-6 text-center">
              <BadgeCSM variant="gray" className="mb-4">Premium</BadgeCSM>
              <h3 className="text-xl font-bold text-csm-gray-dark mb-2">Plano Matilha</h3>
              <p className="text-csm-gray text-sm mb-4">Para 7-10 pets</p>
              <ButtonCSM variant="secondary" className="w-full">
                Escolher
              </ButtonCSM>
            </CardCsmContent>
          </CardCSM>
        </div>
      </section>

      {/* Documentação */}
      <section className="space-y-4 bg-csm-blue-light p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-csm-blue">Como Usar</h2>
        <div className="space-y-2 text-sm font-mono">
          <p className="text-csm-gray-dark">
            <strong>Import:</strong> import &#123; BadgeCSM &#125; from '@/components/ui/badge-csm'
          </p>
          <p className="text-csm-gray-dark">
            <strong>Blue:</strong> &lt;BadgeCSM variant="blue"&gt;Texto&lt;/BadgeCSM&gt;
          </p>
          <p className="text-csm-gray-dark">
            <strong>Yellow:</strong> &lt;BadgeCSM variant="yellow"&gt;Texto&lt;/BadgeCSM&gt;
          </p>
          <p className="text-csm-gray-dark">
            <strong>Gray:</strong> &lt;BadgeCSM variant="gray"&gt;Texto&lt;/BadgeCSM&gt;
          </p>
        </div>
      </section>
    </div>
  );
}
