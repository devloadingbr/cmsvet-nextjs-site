'use client';

import { useState } from 'react';
import { Syringe, Shield, ShieldCheck, Clock, Phone, ChevronDown, ChevronUp, CheckCircle, Stethoscope, CalendarCheck, Heart, AlertTriangle, Dog, Cat } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { ButtonCSM } from '@/components/ui/button-csm';
import { CardCSM, CardCsmContent } from '@/components/ui/card-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';
import { contact } from '@/lib/env';

const vacinasCaes = [
  {
    nome: 'Recombitek® C8',
    apelido: 'V10',
    laboratorio: 'Boehringer Ingelheim',
    descricao: 'Vírus recombinante contra cinomose; adenovirus tipo 2 vivo atenuado; parainfluenza vivo atenuado; parvovírus vivo atenuado; Leptospira canicola inativada; Leptospira icterohaemorrhagiae inativada, Leptospira grippotyphosa inativada e Leptospira pomona inativada.',
    protege: ['Cinomose', 'Adenovirus tipo 2', 'Parainfluenza', 'Parvovirose', 'Leptospirose (4 sorovares)'],
  },
  {
    nome: 'NOBIVAC® RAIVA',
    apelido: 'Raiva',
    laboratorio: 'MSD',
    descricao: 'Vacina contra raiva. Obrigatória por lei para cães e gatos.',
    protege: ['Raiva'],
  },
  {
    nome: 'GiardiaVax®',
    apelido: 'Giardia',
    laboratorio: 'Zoetis',
    descricao: 'Vacina contra Giardia, parasita intestinal comum em cães.',
    protege: ['Giardia'],
  },
  {
    nome: 'Recombitek® Oral Bordetella',
    apelido: 'Gripe Canina',
    laboratorio: 'Boehringer Ingelheim',
    descricao: 'Vacina oral contra Tosse dos Canis (Bordetella bronchiseptica).',
    protege: ['Tosse dos Canis (Bordetella)'],
  },
  {
    nome: 'Vanguard B Oral',
    apelido: 'Gripe Canina',
    laboratorio: 'Zoetis',
    descricao: 'Vacina oral contra Tosse dos Canis (Bordetella bronchiseptica).',
    protege: ['Tosse dos Canis (Bordetella)'],
  },
];

const vacinasGatos = [
  {
    nome: 'PUREVAX® RCPCH+FeLV',
    apelido: 'V5',
    laboratorio: 'Boehringer Ingelheim',
    descricao: 'Vacina múltipla contra rinotraqueíte viral felina, calicivirose, clamidiose, panleucopenia e leucemia felina.',
    protege: ['Rinotraqueíte', 'Calicivirose', 'Clamidiose', 'Panleucopenia', 'Leucemia Felina (FeLV)'],
  },
  {
    nome: 'NOBIVAC® FELINE 1-HCPCH',
    apelido: 'V4',
    laboratorio: 'MSD',
    descricao: 'Vacina contra Rinotraqueíte, Calicivirose, Panleucopenia Felinas e Chlamydia psittaci – Vírus Vivo Atenuado e Clamídia.',
    protege: ['Rinotraqueíte', 'Calicivirose', 'Panleucopenia', 'Chlamydia psittaci'],
  },
  {
    nome: 'NOBIVAC® RAIVA',
    apelido: 'Raiva',
    laboratorio: 'MSD',
    descricao: 'Vacina contra raiva. Obrigatória por lei para cães e gatos.',
    protege: ['Raiva'],
  },
];

const protocoloSteps = [
  {
    step: 1,
    title: 'Consulta',
    description: 'Agende uma consulta para avaliação do seu pet antes da vacinação',
    detail: 'O veterinário avalia o histórico de saúde, idade e estilo de vida do pet para definir o protocolo ideal',
    icon: CalendarCheck,
    color: 'bg-csm-blue',
    borderColor: 'border-csm-blue',
  },
  {
    step: 2,
    title: 'Avaliação Clínica',
    description: 'Exame físico completo antes da aplicação',
    detail: 'Temperatura, auscultação, palpação e avaliação geral para garantir que o pet está apto a receber a vacina',
    icon: Stethoscope,
    color: 'bg-csm-yellow',
    borderColor: 'border-csm-yellow',
  },
  {
    step: 3,
    title: 'Aplicação',
    description: 'Vacina aplicada com segurança e acompanhamento',
    detail: 'Aplicação realizada por veterinário com monitoramento pós-vacinal para reações adversas',
    icon: Syringe,
    color: 'bg-csm-blue',
    borderColor: 'border-csm-blue',
  },
  {
    step: 4,
    title: 'Reforço e Acompanhamento',
    description: 'Agendamento dos reforços conforme protocolo',
    detail: 'Você recebe o calendário completo de reforços e lembretes para manter a proteção do seu pet em dia',
    icon: Shield,
    color: 'bg-csm-yellow',
    borderColor: 'border-csm-yellow',
  },
];

const importanciaItems = [
  {
    icon: ShieldCheck,
    title: 'Prevenção de Doenças Graves',
    description: 'Vacinas protegem contra doenças potencialmente fatais como cinomose, parvovirose e raiva.',
    badge: 'Essencial',
    badgeVariant: 'blue' as const,
  },
  {
    icon: AlertTriangle,
    title: 'Obrigatório por Lei',
    description: 'A vacina antirrábica é obrigatória por lei para cães e gatos em todo o território nacional.',
    badge: 'Legal',
    badgeVariant: 'yellow' as const,
  },
  {
    icon: Heart,
    title: 'Proteção Coletiva',
    description: 'Ao vacinar seu pet, você contribui para a imunidade coletiva, protegendo outros animais da comunidade.',
    badge: 'Comunidade',
    badgeVariant: 'blue' as const,
  },
  {
    icon: Clock,
    title: 'Economia a Longo Prazo',
    description: 'Prevenir doenças com vacinas custa muito menos do que tratar infecções graves e internações.',
    badge: 'Economia',
    badgeVariant: 'yellow' as const,
  },
];

const faqs = [
  {
    question: 'Quando começar a vacinar filhotes?',
    answer: 'Filhotes de cães devem iniciar o protocolo vacinal a partir de 6 a 8 semanas de vida, com reforços a cada 3-4 semanas até completar o esquema. Filhotes de gatos iniciam entre 8 e 9 semanas. O veterinário define o protocolo ideal na primeira consulta.',
  },
  {
    question: 'A vacina pode causar efeitos colaterais?',
    answer: 'Efeitos leves como sonolência, leve inchaço no local da aplicação e redução do apetite podem ocorrer nas primeiras 24-48 horas e são normais. Reações graves são raras. O pet é monitorado após a aplicação e orientamos sobre sinais de alerta.',
  },
  {
    question: 'Meu pet adulto nunca foi vacinado, pode vacinar agora?',
    answer: 'Sim, pets adultos que nunca foram vacinados podem e devem iniciar o protocolo vacinal. O veterinário fará uma avaliação clínica e definirá o esquema adequado, que geralmente inclui duas doses iniciais com intervalo de 3-4 semanas e reforços anuais.',
  },
  {
    question: 'Qual o intervalo entre as doses de vacina?',
    answer: 'Para filhotes, o intervalo entre doses é de 21 a 30 dias. Para adultos em primovacinação, o intervalo é de 3 a 4 semanas entre as doses. Após o protocolo inicial completo, os reforços são anuais para a maioria das vacinas.',
  },
  {
    question: 'Precisa de consulta antes de vacinar?',
    answer: 'Sim, a consulta prévia é fundamental. O veterinário realiza exame físico para verificar se o pet está saudável e apto a receber a vacina. Animais doentes, com febre ou parasitados não devem ser vacinados até a recuperação.',
  },
  {
    question: 'A vacina antirrábica é obrigatória?',
    answer: 'Sim, a vacina antirrábica é obrigatória por lei em todo o Brasil para cães e gatos. A primeira dose deve ser aplicada a partir dos 4 meses de idade, com reforço anual. Além de proteger seu pet, a vacinação contra raiva é uma questão de saúde pública.',
  },
];

function VaccineCard({ vacina, index }: { vacina: typeof vacinasCaes[0]; index: number }) {
  return (
    <CardCSM variant="default" className="hover:shadow-lg transition-all duration-300 h-full">
      <CardCsmContent className="p-6">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <BadgeCSM variant="yellow">{vacina.apelido}</BadgeCSM>
          <BadgeCSM variant="gray">{vacina.laboratorio}</BadgeCSM>
        </div>

        {/* Icon + Name */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-csm-blue rounded-lg flex items-center justify-center flex-shrink-0">
            <Syringe className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-csm-gray-dark leading-tight">
              {vacina.nome}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-csm-gray text-sm mb-4 leading-relaxed">
          {vacina.descricao}
        </p>

        {/* Protege contra */}
        <div className="space-y-2">
          <span className="text-xs font-semibold text-csm-blue uppercase tracking-wide">Protege contra:</span>
          {vacina.protege.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-5 h-5 bg-csm-blue-light rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-3 h-3 text-csm-blue" />
              </div>
              <span className="text-sm text-csm-gray-dark">{item}</span>
            </div>
          ))}
        </div>
      </CardCsmContent>
    </CardCSM>
  );
}

export default function VacinacaoPageContent() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-white to-csm-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[65vh] py-12 sm:py-16">
          <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 w-full">
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
              <BadgeCSM variant="blue" className="flex items-center gap-2">
                <Dog className="w-4 h-4" />
                Cães
              </BadgeCSM>
              <BadgeCSM variant="yellow" className="flex items-center gap-2">
                <Cat className="w-4 h-4" />
                Gatos
              </BadgeCSM>
              <BadgeCSM variant="blue" className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Antirrábica
              </BadgeCSM>
              <BadgeCSM variant="gray" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Protocolo Completo
              </BadgeCSM>
            </div>

            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-csm-blue-light text-csm-blue">
              <Syringe className="w-8 h-8" />
            </div>

            <div className="space-y-4 sm:space-y-6 lg:space-y-8 max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight">
                <span className="text-csm-blue">Vacinação Veterinária</span>
                <span className="block text-csm-gray-dark text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl mt-1 sm:mt-2">Proteção Completa</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-csm-gray max-w-3xl mx-auto leading-relaxed px-2">
                Protocolo vacinal completo para cães e gatos com vacinas de referência mundial dos melhores laboratórios.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-4 sm:gap-6 justify-center max-w-4xl mx-auto px-2">
              <ButtonCSM
                variant="whatsapp"
                size="lg"
                className="flex-1 max-w-xs"
                onClick={() => window.open(`https://wa.me/${contact.phone.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de agendar a vacinação do meu pet.')}`, '_blank')}
                data-track="whatsapp_click"
                data-track-location="hero"
                data-track-label="vacinacao"
              >
                <FaWhatsapp className="w-5 h-5" />
                AGENDAR VACINA
              </ButtonCSM>
              <ButtonCSM
                variant="primary"
                size="lg"
                className="flex-1 max-w-xs"
                onClick={() => window.location.href = `tel:${contact.phone.primary}`}
                data-track="ligar_click"
                data-track-location="hero"
                data-track-label="vacinacao"
              >
                <Phone className="w-5 h-5" />
                LIGAR AGORA
              </ButtonCSM>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="pt-8 pb-16 bg-gradient-to-b from-white to-csm-blue-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CardCSM variant="default" className="text-center">
              <CardCsmContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Syringe className="w-8 h-8 text-csm-blue" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-2">
                  8
                </div>
                <div className="text-lg font-semibold text-csm-blue mb-1">
                  Vacinas
                </div>
                <div className="text-sm text-csm-gray">
                  Protocolo completo para cães e gatos
                </div>
              </CardCsmContent>
            </CardCSM>

            <CardCSM variant="default" className="text-center">
              <CardCsmContent className="p-6">
                <div className="flex justify-center mb-4">
                  <ShieldCheck className="w-8 h-8 text-csm-yellow" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-2">
                  3
                </div>
                <div className="text-lg font-semibold text-csm-yellow mb-1">
                  Laboratórios
                </div>
                <div className="text-sm text-csm-gray">
                  MSD, Boehringer Ingelheim e Zoetis
                </div>
              </CardCsmContent>
            </CardCSM>

            <CardCSM variant="default" className="text-center">
              <CardCsmContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Shield className="w-8 h-8 text-csm-blue" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-2">
                  100%
                </div>
                <div className="text-lg font-semibold text-csm-blue mb-1">
                  Protocolo Seguro
                </div>
                <div className="text-sm text-csm-gray">
                  Vacinas de referência mundial
                </div>
              </CardCsmContent>
            </CardCSM>
          </div>
        </div>
      </section>

      {/* Vacinas para Caes */}
      <section className="py-20 bg-gradient-to-b from-white to-csm-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <BadgeCSM variant="blue" className="mb-4 inline-flex items-center gap-2">
              <Dog className="w-4 h-4" />
              Cães
            </BadgeCSM>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-csm-gray-dark">Vacinas para </span>
              <span className="text-csm-blue">Cães</span>
            </h2>
            <p className="text-lg text-csm-gray max-w-2xl mx-auto">
              Protocolo vacinal completo para proteção do seu cão contra as principais doenças
            </p>
          </div>

          {/* Vaccine Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {vacinasCaes.map((vacina, index) => (
              <VaccineCard key={index} vacina={vacina} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Vacinas para Gatos */}
      <section className="py-20 bg-gradient-to-b from-white to-csm-blue-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <BadgeCSM variant="yellow" className="mb-4 inline-flex items-center gap-2">
              <Cat className="w-4 h-4" />
              Gatos
            </BadgeCSM>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-csm-gray-dark">Vacinas para </span>
              <span className="text-csm-blue">Gatos</span>
            </h2>
            <p className="text-lg text-csm-gray max-w-2xl mx-auto">
              Proteção completa para felinos com vacinas de última geração
            </p>
          </div>

          {/* Vaccine Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {vacinasGatos.map((vacina, index) => (
              <VaccineCard key={index} vacina={vacina} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Protocolo de Vacinacao */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <BadgeCSM variant="blue" className="mb-6">Protocolo</BadgeCSM>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-csm-gray-dark">Como Funciona a </span>
              <span className="text-csm-blue">Vacinação</span>
            </h2>
            <p className="text-xl text-csm-gray max-w-3xl mx-auto">
              Processo seguro e acompanhado por veterinário em todas as etapas
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-6 max-w-4xl mx-auto mb-12">
            {protocoloSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="flex items-start gap-6">
                  {/* Step Number */}
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                      {step.step}
                    </div>
                    {index < protocoloSteps.length - 1 && (
                      <div className="w-0.5 h-16 bg-csm-gray-light mt-2"></div>
                    )}
                  </div>

                  {/* Step Card */}
                  <CardCSM variant="default" className={`flex-1 ${step.borderColor} border-2`}>
                    <CardCsmContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className={`w-10 h-10 ${step.color} rounded-lg flex items-center justify-center mr-4`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-csm-gray-dark">{step.title}</h3>
                      </div>
                      <p className="text-csm-gray font-medium mb-2">{step.description}</p>
                      <div className="bg-csm-blue-light/30 rounded-lg p-3 border border-csm-blue-light">
                        <p className="text-sm text-csm-gray leading-relaxed">{step.detail}</p>
                      </div>
                    </CardCsmContent>
                  </CardCSM>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Por que Vacinar */}
      <section className="py-20 bg-gradient-to-b from-white to-csm-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <BadgeCSM variant="yellow" className="mb-4">Importância</BadgeCSM>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-csm-gray-dark">Por que </span>
              <span className="text-csm-blue">Vacinar?</span>
            </h2>
            <p className="text-lg text-csm-gray max-w-2xl mx-auto">
              A vacinação é a forma mais eficaz de proteger seu pet contra doenças graves
            </p>
          </div>

          {/* Grid 2x2 */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {importanciaItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <CardCSM key={index} variant="default" className="hover:shadow-lg transition-all duration-300">
                  <CardCsmContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-csm-blue rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-bold text-csm-gray-dark">{item.title}</h3>
                          <BadgeCSM variant={item.badgeVariant} className="text-[10px]">{item.badge}</BadgeCSM>
                        </div>
                        <p className="text-csm-gray text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardCsmContent>
                </CardCSM>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-white to-csm-blue-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <BadgeCSM variant="blue" className="mb-4">Dúvidas Frequentes</BadgeCSM>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-csm-gray-dark">Perguntas </span>
              <span className="text-csm-blue">Frequentes</span>
            </h2>
            <p className="text-lg text-csm-gray max-w-2xl mx-auto">
              Tire suas dúvidas sobre vacinação veterinária
            </p>
          </div>

          {/* FAQ Items */}
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <CardCSM key={index} variant="default" className="overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-csm-blue-light/10 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-csm-gray-dark pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-csm-blue" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-csm-gray" />
                    )}
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6 border-t border-csm-blue-light">
                    <p className="text-csm-gray leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                )}
              </CardCSM>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-csm-blue rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Agende a Vacinação do Seu Pet
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Entre em contato e nossa equipe irá orientar sobre o protocolo vacinal ideal para o seu pet, com vacinas de referência dos melhores laboratórios.
            </p>
            <div className="flex flex-row gap-4 sm:gap-6 justify-center max-w-lg mx-auto">
              <ButtonCSM
                variant="whatsapp"
                size="lg"
                className="flex-1"
                onClick={() => window.open(`https://wa.me/${contact.phone.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de agendar a vacinação do meu pet.')}`, '_blank')}
                data-track="whatsapp_click"
                data-track-location="cta-final"
                data-track-label="vacinacao"
              >
                <FaWhatsapp className="w-5 h-5" />
                WHATSAPP
              </ButtonCSM>
              <ButtonCSM
                variant="secondary"
                size="lg"
                className="flex-1 bg-white text-csm-blue hover:bg-white/90 border-0"
                onClick={() => window.location.href = `tel:${contact.phone.primary}`}
                data-track="ligar_click"
                data-track-location="cta-final"
                data-track-label="vacinacao"
              >
                <Phone className="w-5 h-5" />
                {contact.phone.primary}
              </ButtonCSM>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
