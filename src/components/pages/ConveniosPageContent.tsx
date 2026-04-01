'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Phone,
  ClipboardCheck,
  CalendarCheck,
  ShieldCheck,
  Clock,
  Users,
  Building2,
  FileCheck,
  ChevronDown,
  ChevronUp,
  Heart,
  ExternalLink,
  Check,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { ButtonCSM } from '@/components/ui/button-csm';
import { CardCSM, CardCsmContent } from '@/components/ui/card-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';
import { contact, urls, whatsappMessages } from '@/lib/env';

const convenios = [
  {
    name: 'Petlove Saúde',
    logo: '/images/convenios/petlove.png',
    site: 'https://saude.petlove.com.br',
    description:
      'A maior plataforma pet do Brasil. Controle 100% online com planos acessíveis e rede credenciada extensa.',
    highlights: [
      'Planos a partir de R$14,90/mês',
      'Rede com 6.000+ clínicas credenciadas',
      'Controle do plano 100% online',
      'Cobertura para consultas, exames, vacinas e cirurgias',
    ],
  },
  {
    name: 'Petbee',
    logo: '/images/convenios/petbee.png',
    site: 'https://www.petbee.com.br',
    description:
      'Planos sem coparticipação com consultas e exames ilimitados. Opção dedicada para pets idosos.',
    highlights: [
      'Sem coparticipação em nenhum procedimento',
      'Consultas e exames ilimitados',
      'Até 60 diárias de internação por ano',
      'Plano Senior dedicado para pets idosos',
    ],
  },
  {
    name: 'Pet Veter',
    logo: '/images/convenios/petveter.png',
    site: 'https://www.planopetveter.com.br',
    description:
      '99% de satisfação entre tutores. App exclusivo com prontuário digital e acompanhamento em tempo real.',
    highlights: [
      'Planos a partir de R$49,90/mês',
      '200+ clínicas credenciadas em PR, SC e RS',
      'App com prontuário digital em tempo real',
      'Plano Platinum com fisioterapia e acupuntura',
    ],
  },
  {
    name: 'Dog Life',
    logo: '/images/convenios/doglife.svg',
    site: 'https://www.doglife.com.br',
    description:
      'Pioneira no Brasil desde 2005. Eleita o melhor plano de saúde pet do país por 3 anos consecutivos.',
    highlights: [
      'Carência zero para consultas e vacinas',
      'Rede com 5.000+ clínicas em 25 estados',
      'Sem microchipagem obrigatória',
      'Eleita melhor plano pet 2023, 2024 e 2025',
    ],
  },
];

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Verifique seu Plano',
    description:
      'Confira se seu convênio é aceito na CSM. Aceitamos Petlove, Petbee, Pet Veter e Dog Life.',
  },
  {
    icon: CalendarCheck,
    title: 'Agende sua Consulta',
    description:
      'Entre em contato via WhatsApp ou telefone para agendar. Informe seu convênio no agendamento.',
  },
  {
    icon: ShieldCheck,
    title: 'Atendimento Garantido',
    description:
      'Seu pet será atendido com toda a estrutura da CSM. O convênio cobre os procedimentos conforme seu plano.',
  },
];

const vantagens = [
  {
    icon: Clock,
    title: 'Atendimento 24 Horas',
    description:
      'Emergências cobertas pelo convênio a qualquer hora do dia ou da noite, incluindo feriados.',
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    description:
      'Veterinários credenciados e experientes, prontos para atender seu pet com excelência.',
  },
  {
    icon: Building2,
    title: 'Estrutura Completa',
    description:
      'Exames laboratoriais, diagnóstico por imagem, centro cirúrgico e internação 24h.',
  },
  {
    icon: FileCheck,
    title: 'Sem Burocracia',
    description:
      'Processo simplificado de atendimento. Basta apresentar a carteirinha ou dados do plano.',
  },
];

const faqItems = [
  {
    question: 'Quais convênios são aceitos na CSM?',
    answer:
      'Aceitamos os planos de saúde pet Petlove, Petbee, Pet Veter e Dog Life. Se seu convênio não está na lista, entre em contato para verificar possibilidade de credenciamento.',
  },
  {
    question: 'Como funciona o atendimento com convênio?',
    answer:
      'Basta informar seu convênio no momento do agendamento e apresentar a carteirinha ou dados do plano no dia da consulta. Os procedimentos cobertos serão faturados diretamente ao convênio.',
  },
  {
    question: 'Preciso de autorização prévia para atendimento?',
    answer:
      'Para consultas e procedimentos de rotina, geralmente não é necessária autorização prévia. Para cirurgias e procedimentos de maior complexidade, o convênio pode solicitar autorização, que a própria CSM ajuda a providenciar.',
  },
  {
    question: 'Emergências são cobertas pelo convênio?',
    answer:
      'Sim! Atendemos emergências 24 horas com cobertura dos convênios aceitos. Em caso de urgência, traga seu pet imediatamente. A documentação do convênio pode ser apresentada durante ou após o atendimento.',
  },
  {
    question: 'Como saber se meu plano cobre determinado procedimento?',
    answer:
      'A cobertura depende do plano contratado com seu convênio. Recomendamos verificar diretamente com a operadora ou entrar em contato conosco para esclarecimentos antes do procedimento.',
  },
  {
    question: 'E se eu não tiver convênio?',
    answer:
      'Atendemos também de forma particular! Oferecemos diversas formas de pagamento, incluindo cartões de crédito e débito, PIX e parcelamento. Entre em contato para mais informações.',
  },
];

export default function ConveniosPageContent() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-csm-blue-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-6">
              <BadgeCSM variant="yellow">Convênios e Planos de Saúde Pet</BadgeCSM>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-csm-gray-dark leading-tight">
                Aceitamos os Principais{' '}
                <span className="text-csm-blue">Planos de Saúde Pet</span>
              </h1>
              <p className="text-lg text-csm-gray leading-relaxed">
                A CSM Clínica Veterinária é credenciada aos principais convênios
                pet do Brasil. Seu pet recebe atendimento completo com toda a
                nossa estrutura, enquanto seu convênio cuida dos custos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={urls.whatsappWithMessage(whatsappMessages.appointment)} data-track="whatsapp_click" data-track-location="hero" data-track-label="convenios">
                  <ButtonCSM variant="urgency" size="lg">
                    <FaWhatsapp className="w-5 h-5" />
                    AGENDAR PELO WHATSAPP
                  </ButtonCSM>
                </a>
                <a href={urls.phoneCall} data-track="ligar_click" data-track-location="hero" data-track-label="convenios">
                  <ButtonCSM variant="secondary" size="lg">
                    <Phone className="w-5 h-5" />
                    {contact.phone.primary}
                  </ButtonCSM>
                </a>
              </div>
            </div>

            {/* Right - Logo Grid */}
            <div className="grid grid-cols-2 gap-4">
              {convenios.map((convenio) => (
                <CardCSM key={convenio.name} variant="default">
                  <CardCsmContent className="p-6 flex items-center justify-center">
                    <div className="relative w-full h-20">
                      <Image
                        src={convenio.logo}
                        alt={`Logo ${convenio.name}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 40vw, 200px"
                      />
                    </div>
                  </CardCsmContent>
                </CardCSM>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMO FUNCIONA ===== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BadgeCSM variant="blue" className="mb-4">
              Como Funciona
            </BadgeCSM>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-4">
              Atendimento Simples e{' '}
              <span className="text-csm-blue">Sem Burocracia</span>
            </h2>
            <p className="text-lg text-csm-gray max-w-2xl mx-auto">
              Em 3 passos simples, seu pet é atendido com a cobertura do seu convênio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="relative mx-auto mb-6">
                  <div className="w-16 h-16 rounded-full bg-csm-blue-light flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-csm-blue" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-csm-yellow flex items-center justify-center text-sm font-bold text-csm-gray-dark">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-csm-gray-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-csm-gray leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONVÊNIOS DETALHADOS ===== */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-csm-blue-light/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BadgeCSM variant="yellow" className="mb-4">
              Nossos Convênios
            </BadgeCSM>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-4">
              Conheça os Planos que{' '}
              <span className="text-csm-blue">Aceitamos</span>
            </h2>
            <p className="text-lg text-csm-gray max-w-2xl mx-auto">
              Trabalhamos com os principais convênios pet para garantir o melhor
              atendimento ao seu companheiro
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {convenios.map((convenio) => (
              <CardCSM key={convenio.name} variant="highlight">
                <CardCsmContent className="p-6 lg:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 shrink-0">
                      <Image
                        src={convenio.logo}
                        alt={`Logo ${convenio.name}`}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-csm-gray-dark">
                        {convenio.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-csm-gray mb-4 leading-relaxed">
                    {convenio.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {convenio.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-csm-blue shrink-0 mt-0.5" />
                        <span className="text-sm text-csm-gray-dark">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={convenio.site}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ButtonCSM variant="secondary" size="sm">
                      Visitar Site
                      <ExternalLink className="w-4 h-4" />
                    </ButtonCSM>
                  </a>
                </CardCsmContent>
              </CardCSM>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VANTAGENS ===== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BadgeCSM variant="blue" className="mb-4">
              Vantagens
            </BadgeCSM>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-4">
              Por que Usar seu Convênio na{' '}
              <span className="text-csm-blue">CSM</span>
            </h2>
            <p className="text-lg text-csm-gray max-w-2xl mx-auto">
              Além da cobertura do seu plano, você conta com toda a estrutura e
              experiência da CSM
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {vantagens.map((vantagem) => (
              <CardCSM key={vantagem.title} variant="default">
                <CardCsmContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-csm-blue-light flex items-center justify-center shrink-0">
                      <vantagem.icon className="w-6 h-6 text-csm-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-csm-gray-dark mb-1">
                        {vantagem.title}
                      </h3>
                      <p className="text-sm text-csm-gray leading-relaxed">
                        {vantagem.description}
                      </p>
                    </div>
                  </div>
                </CardCsmContent>
              </CardCSM>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-csm-blue-light/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BadgeCSM variant="blue" className="mb-4">
              Dúvidas Frequentes
            </BadgeCSM>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-4">
              Perguntas sobre{' '}
              <span className="text-csm-blue">Convênios</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <CardCSM key={index} variant="default">
                <CardCsmContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-csm-gray-dark pr-4">
                      {item.question}
                    </span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-csm-blue shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-csm-gray shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-5 pb-5 pt-0">
                      <div className="border-t border-csm-blue-light pt-4">
                        <p className="text-csm-gray leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </CardCsmContent>
              </CardCSM>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-16 lg:py-20 bg-csm-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Tem convênio?{' '}
                <span className="text-csm-yellow">Agende agora</span>
              </h2>
              <p className="text-lg text-white/80 mb-2">
                Entre em contato e agende a consulta do seu pet com a cobertura
                do seu plano de saúde.
              </p>
              <p className="text-sm text-white/60">
                Não tem convênio? Também atendemos particular com diversas
                formas de pagamento, incluindo cartão, PIX e parcelamento.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a href={urls.whatsappWithMessage(whatsappMessages.appointment)} data-track="whatsapp_click" data-track-location="cta-final" data-track-label="convenios">
                <ButtonCSM variant="whatsapp" size="lg">
                  <FaWhatsapp className="w-5 h-5" />
                  WHATSAPP
                </ButtonCSM>
              </a>
              <a href={urls.phoneCall} data-track="ligar_click" data-track-location="cta-final" data-track-label="convenios">
                <ButtonCSM
                  variant="secondary"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Phone className="w-5 h-5" />
                  {contact.phone.primary}
                </ButtonCSM>
              </a>
            </div>
          </div>

          {/* Logos no rodapé do CTA */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-center text-sm text-white/60 mb-6">
              Convênios aceitos
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {convenios.map((convenio) => (
                <div
                  key={convenio.name}
                  className="relative w-24 h-10 bg-white/10 rounded-lg p-2"
                >
                  <Image
                    src={convenio.logo}
                    alt={`Logo ${convenio.name}`}
                    fill
                    className="object-contain p-1"
                    sizes="96px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
