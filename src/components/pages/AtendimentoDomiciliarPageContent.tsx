'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  Stethoscope,
  Shield,
  FlaskConical,
  Syringe,
  HeartPulse,
  ClipboardCheck,
  CalendarCheck,
  Home,
  MapPin,
  Heart,
  Activity,
  Clock,
  ShieldCheck,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Check,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { ButtonCSM } from '@/components/ui/button-csm';
import { CardCSM, CardCsmContent } from '@/components/ui/card-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';
import { contact, urls, whatsappMessages } from '@/lib/env';

const servicos = [
  {
    icon: Stethoscope,
    title: 'Consultas Clínicas',
    description:
      'Avaliação completa com anamnese, exame físico e orientação personalizada no conforto da sua casa.',
  },
  {
    icon: Shield,
    title: 'Vacinação',
    description:
      'Protocolo completo de vacinas para cães e gatos, com armazenamento adequado e certificado.',
  },
  {
    icon: FlaskConical,
    title: 'Coleta de Exames',
    description:
      'Coleta de sangue, urina e outros materiais para análise laboratorial sem sair de casa.',
  },
  {
    icon: Syringe,
    title: 'Medicação e Fluidoterapia',
    description:
      'Aplicação de medicamentos injetáveis, orais e fluidoterapia (soro) com acompanhamento.',
  },
  {
    icon: HeartPulse,
    title: 'Acompanhamento Pós-Operatório',
    description:
      'Curativos, remoção de pontos, troca de bandagens e monitoramento da recuperação.',
  },
  {
    icon: ClipboardCheck,
    title: 'Cuidados Preventivos',
    description:
      'Vermífugos, antipulgas, microchipagem, corte de unhas e orientação nutricional.',
  },
];

const steps = [
  {
    icon: Phone,
    title: 'Entre em Contato',
    description:
      'Ligue ou envie mensagem pelo WhatsApp informando o que seu pet precisa e sua localização.',
  },
  {
    icon: CalendarCheck,
    title: 'Agendamos a Visita',
    description:
      'Combinamos data, horário e endereço. Enviamos orientações de preparo para o atendimento.',
  },
  {
    icon: Home,
    title: 'Receba o Veterinário',
    description:
      'Nosso veterinário vai até você com todo o equipamento necessário para atender seu pet.',
  },
];

const cobertura = [
  {
    city: 'Curitiba',
    detail: 'Todos os bairros',
  },
  {
    city: 'São José dos Pinhais',
    detail: 'Área urbana',
  },
  {
    city: 'Pinhais',
    detail: 'Área urbana',
  },
];

const vantagens = [
  {
    icon: Heart,
    title: 'Menos Estresse para o Pet',
    description:
      'Sem transporte, sem sala de espera, sem contato com outros animais. Seu pet é atendido no ambiente que conhece e se sente seguro.',
  },
  {
    icon: Activity,
    title: 'Diagnóstico Mais Preciso',
    description:
      'O comportamento natural do animal no seu ambiente facilita a identificação de problemas e hábitos relevantes.',
  },
  {
    icon: Clock,
    title: 'Praticidade para o Tutor',
    description:
      'Sem deslocamento, sem filas de espera. Horários flexíveis que se adaptam à sua rotina.',
  },
  {
    icon: ShieldCheck,
    title: 'Menor Risco de Contágio',
    description:
      'Seu pet não entra em contato com outros animais potencialmente doentes em ambientes hospitalares.',
  },
];

const limitacoes = [
  'Cirurgias de qualquer porte',
  'Emergências graves (convulsão, intoxicação, trauma)',
  'Procedimentos que exigem anestesia geral',
  'Exames de imagem complexos (raio-x, tomografia, ressonância)',
  'Internação e monitoramento intensivo',
];

const faqItems = [
  {
    question: 'Quais serviços estão disponíveis em domicílio?',
    answer:
      'Oferecemos consultas clínicas, vacinação, coleta de exames laboratoriais, aplicação de medicamentos e fluidoterapia, acompanhamento pós-operatório (curativos, remoção de pontos), cuidados preventivos (vermífugos, antipulgas, microchipagem) e corte de unhas.',
  },
  {
    question: 'Qual a área de cobertura do atendimento domiciliar?',
    answer:
      'Atendemos em Curitiba (todos os bairros), São José dos Pinhais e Pinhais (áreas urbanas). Para outras localidades da região metropolitana, entre em contato para verificar disponibilidade.',
  },
  {
    question: 'Como é feito o agendamento?',
    answer:
      'O agendamento pode ser feito via WhatsApp ou telefone. Basta informar o que seu pet precisa, sua localização e disponibilidade de horário. Confirmamos a visita e enviamos orientações de preparo.',
  },
  {
    question: 'O atendimento domiciliar custa mais caro?',
    answer:
      'O atendimento domiciliar tem um acréscimo referente ao deslocamento do profissional. Os valores dos procedimentos em si seguem a tabela da clínica. Entre em contato para um orçamento personalizado.',
  },
  {
    question: 'Meu pet é agressivo ou medroso, vocês atendem?',
    answer:
      'Sim! Nossos veterinários são experientes no manejo de animais com diferentes temperamentos. Em muitos casos, o atendimento domiciliar é a melhor opção para pets ansiosos, pois o ambiente familiar reduz significativamente o estresse.',
  },
  {
    question: 'Aceitam convênio no atendimento domiciliar?',
    answer:
      'A cobertura do convênio para atendimento domiciliar depende do plano contratado. Recomendamos verificar com sua operadora. Aceitamos Petlove, Petbee, Pet Veter e Dog Life. Entre em contato para mais detalhes.',
  },
];

export default function AtendimentoDomiciliarPageContent() {
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
              <BadgeCSM variant="yellow">Atendimento Veterinário Domiciliar</BadgeCSM>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-csm-gray-dark leading-tight">
                Cuidado Veterinário no{' '}
                <span className="text-csm-blue">Conforto da Sua Casa</span>
              </h1>
              <p className="text-lg text-csm-gray leading-relaxed">
                Nosso veterinário vai até você. Atendimento completo para seu
                pet sem estresse de transporte, sala de espera ou contato com
                outros animais. Cobertura em Curitiba, São José dos Pinhais e
                Pinhais.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={urls.whatsappWithMessage('Olá! Gostaria de agendar um atendimento veterinário domiciliar.')} data-track="whatsapp_click" data-track-location="hero" data-track-label="domiciliar">
                  <ButtonCSM variant="urgency" size="lg">
                    <FaWhatsapp className="w-5 h-5" />
                    SOLICITAR VISITA
                  </ButtonCSM>
                </a>
                <a href={urls.phoneCall} data-track="ligar_click" data-track-location="hero" data-track-label="domiciliar">
                  <ButtonCSM variant="secondary" size="lg">
                    <Phone className="w-5 h-5" />
                    {contact.phone.primary}
                  </ButtonCSM>
                </a>
              </div>
            </div>

            {/* Right - Stats */}
            <div className="space-y-4">
              <CardCSM variant="highlight">
                <CardCsmContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-csm-blue-light flex items-center justify-center shrink-0">
                      <MapPin className="w-7 h-7 text-csm-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-csm-gray-dark">Cobertura em 3 Cidades</h3>
                      <p className="text-sm text-csm-gray">Curitiba, SJP e Pinhais</p>
                    </div>
                  </div>
                </CardCsmContent>
              </CardCSM>

              <CardCSM variant="default">
                <CardCsmContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-csm-yellow-light flex items-center justify-center shrink-0">
                      <CalendarCheck className="w-7 h-7 text-csm-yellow-hover" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-csm-gray-dark">Agendamento Flexível</h3>
                      <p className="text-sm text-csm-gray">Horários que se adaptam à sua rotina</p>
                    </div>
                  </div>
                </CardCsmContent>
              </CardCSM>

              <CardCSM variant="default">
                <CardCsmContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-csm-blue-light flex items-center justify-center shrink-0">
                      <Stethoscope className="w-7 h-7 text-csm-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-csm-gray-dark">Veterinários Experientes</h3>
                      <p className="text-sm text-csm-gray">Equipe preparada para atendimento em casa</p>
                    </div>
                  </div>
                </CardCsmContent>
              </CardCSM>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVIÇOS DISPONÍVEIS ===== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BadgeCSM variant="blue" className="mb-4">
              Serviços em Domicílio
            </BadgeCSM>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-4">
              O que Podemos Fazer{' '}
              <span className="text-csm-blue">Na Sua Casa</span>
            </h2>
            <p className="text-lg text-csm-gray max-w-2xl mx-auto">
              Levamos a estrutura e a experiência da CSM até o conforto do seu lar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico) => (
              <CardCSM key={servico.title} variant="default">
                <CardCsmContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-csm-blue-light flex items-center justify-center mb-4">
                    <servico.icon className="w-6 h-6 text-csm-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-csm-gray-dark mb-2">
                    {servico.title}
                  </h3>
                  <p className="text-sm text-csm-gray leading-relaxed">
                    {servico.description}
                  </p>
                </CardCsmContent>
              </CardCSM>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMO FUNCIONA ===== */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-csm-blue-light/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BadgeCSM variant="blue" className="mb-4">
              Como Funciona
            </BadgeCSM>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-4">
              Agende em{' '}
              <span className="text-csm-blue">3 Passos Simples</span>
            </h2>
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

      {/* ===== ÁREA DE COBERTURA ===== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-6">
              <BadgeCSM variant="yellow">Área de Cobertura</BadgeCSM>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-csm-gray-dark">
                Atendemos em{' '}
                <span className="text-csm-blue">Curitiba e Região</span>
              </h2>
              <p className="text-lg text-csm-gray leading-relaxed">
                Nosso serviço de atendimento domiciliar cobre as principais
                cidades da região metropolitana de Curitiba.
              </p>

              <div className="space-y-3">
                {cobertura.map((item) => (
                  <div key={item.city} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-csm-blue flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-csm-gray-dark">{item.city}</span>
                      <span className="text-csm-gray"> — {item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-csm-gray">
                Mora em outra cidade da região metropolitana? Entre em contato
                para verificar disponibilidade.
              </p>

              <a href={urls.whatsappWithMessage('Olá! Gostaria de saber se vocês atendem no meu bairro/cidade.')} data-track="whatsapp_click" data-track-location="cobertura" data-track-label="domiciliar">
                <ButtonCSM variant="primary" size="md">
                  <FaWhatsapp className="w-4 h-4" />
                  CONSULTAR DISPONIBILIDADE
                </ButtonCSM>
              </a>
            </div>

            {/* Right */}
            <CardCSM variant="highlight">
              <CardCsmContent className="p-0 overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230417.67990988!2d-49.40766!3d-25.4372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce35b3a70d7a3%3A0xf9ba1c63a8438e9e!2sCuritiba%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Área de cobertura - Curitiba e Região"
                  className="w-full"
                />
              </CardCsmContent>
            </CardCSM>
          </div>
        </div>
      </section>

      {/* ===== VANTAGENS ===== */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-csm-blue-light/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BadgeCSM variant="blue" className="mb-4">
              Vantagens
            </BadgeCSM>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-4">
              Por que Escolher o{' '}
              <span className="text-csm-blue">Atendimento em Casa</span>
            </h2>
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

      {/* ===== QUANDO IR À CLÍNICA ===== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <CardCSM variant="highlight">
            <CardCsmContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-csm-yellow flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-csm-gray-dark" />
                </div>
                <h3 className="text-xl font-bold text-csm-gray-dark">
                  Quando o Atendimento Presencial é Necessário
                </h3>
              </div>

              <p className="text-csm-gray mb-4 leading-relaxed">
                Alguns procedimentos exigem a infraestrutura completa da clínica.
                Nestes casos, recomendamos o atendimento presencial:
              </p>

              <ul className="space-y-2 mb-6">
                {limitacoes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-csm-urgency shrink-0 mt-0.5" />
                    <span className="text-sm text-csm-gray-dark">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/emergencia" data-track="emergencia_click" data-track-location="limitacoes">
                  <ButtonCSM variant="urgency" size="sm">
                    <AlertTriangle className="w-4 h-4" />
                    EMERGÊNCIA 24H
                  </ButtonCSM>
                </Link>
                <a href={urls.phoneCall} data-track="ligar_click" data-track-location="limitacoes" data-track-label="domiciliar">
                  <ButtonCSM variant="secondary" size="sm">
                    <Phone className="w-4 h-4" />
                    LIGAR PARA A CLÍNICA
                  </ButtonCSM>
                </a>
              </div>
            </CardCsmContent>
          </CardCSM>
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
              <span className="text-csm-blue">Atendimento Domiciliar</span>
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
                Quer agendar uma{' '}
                <span className="text-csm-yellow">Visita Domiciliar</span>?
              </h2>
              <p className="text-lg text-white/80 mb-2">
                Entre em contato e agende o atendimento veterinário na sua casa.
                Rápido, prático e sem estresse para seu pet.
              </p>
              <p className="text-sm text-white/60">
                Também atendemos na clínica 24 horas, com estrutura completa
                para consultas, exames, cirurgias e internação.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a href={urls.whatsappWithMessage('Olá! Gostaria de agendar um atendimento veterinário domiciliar.')} data-track="whatsapp_click" data-track-location="cta-final" data-track-label="domiciliar">
                <ButtonCSM variant="whatsapp" size="lg">
                  <FaWhatsapp className="w-5 h-5" />
                  WHATSAPP
                </ButtonCSM>
              </a>
              <a href={urls.phoneCall} data-track="ligar_click" data-track-location="cta-final" data-track-label="domiciliar">
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
        </div>
      </section>
    </div>
  );
}
