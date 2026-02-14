'use client';

import { useState } from 'react';
import { FlaskConical, Scan, Heart, Clock, Phone, ChevronDown, ChevronUp, CheckCircle, Stethoscope, FileText, CalendarCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { ButtonCSM } from '@/components/ui/button-csm';
import { CardCSM, CardCsmContent } from '@/components/ui/card-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';
import { contact } from '@/lib/env';

export default function ExamesPageContent() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const labCategories = [
    'Hematologia (Hemograma Completo)',
    'Bioquímica (Função Renal, Hepática, Glicemia)',
    'Hormônios (T4, TSH, Cortisol)',
    'Parasitologia de Fezes',
    'Imunologia (FIV/FeLV, Cinomose, Parvovirose)',
    'Urinálise Completa',
    'Toxicologia',
    'Biologia Molecular (PCR)',
    'Microbiologia (Cultura e Antibiograma)',
    'Citologia e Histopatologia',
    'Sorologia',
    'Perfil Pré-Cirúrgico',
  ];

  const imagingExams = [
    {
      title: 'Ultrassom',
      icon: Scan,
      description: 'Exame de imagem não invasivo para avaliação de estruturas internas',
      types: ['Ultrassom Abdominal', 'Ultrassom Obstétrico', 'Ultrassom de Partes Moles'],
      detail: 'Realizado no local por médico veterinário especialista em diagnóstico por imagem',
    },
    {
      title: 'Radiografia Digital',
      icon: FileText,
      description: 'Imagens de alta resolução para avaliação óssea e torácica',
      types: ['Radiografia Torácica', 'Radiografia Óssea', 'Radiografia Abdominal'],
      detail: 'Equipamento digital com resultados imediatos e alta definição',
    },
    {
      title: 'Ecocardiograma',
      icon: Heart,
      description: 'Avaliação completa da função cardíaca do seu pet',
      types: ['Ecocardiograma com Doppler', 'Eletrocardiograma (ECG)'],
      detail: 'Realizado por cardiologista veterinário especializado',
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Agendamento',
      description: 'Entre em contato pelo WhatsApp ou telefone para agendar o exame do seu pet',
      detail: 'Nossa equipe orienta sobre preparos necessários como jejum ou suspensão de medicamentos',
      icon: CalendarCheck,
      color: 'bg-csm-blue',
      borderColor: 'border-csm-blue',
    },
    {
      step: 2,
      title: 'Coleta ou Realização',
      description: 'Todos os exames são coletados ou realizados aqui na clínica',
      detail: 'Amostras laboratoriais são enviadas ao Bionostic. Exames de imagem são realizados no local por especialistas',
      icon: Stethoscope,
      color: 'bg-csm-yellow',
      borderColor: 'border-csm-yellow',
    },
    {
      step: 3,
      title: 'Resultados Rápidos',
      description: 'Resultados em até 24 horas para a maioria dos exames',
      detail: 'Exames de imagem têm laudo no mesmo dia. Laboratoriais em até 24h, com opção de urgência',
      icon: Clock,
      color: 'bg-csm-blue',
      borderColor: 'border-csm-blue',
    },
    {
      step: 4,
      title: 'Laudo e Orientação',
      description: 'O veterinário analisa os resultados e orienta o tratamento adequado',
      detail: 'Você recebe o laudo completo e uma explicação clara sobre a condição de saúde do seu pet',
      icon: FileText,
      color: 'bg-csm-yellow',
      borderColor: 'border-csm-yellow',
    },
  ];

  const faqs = [
    {
      question: 'Meu pet precisa estar em jejum para exames de sangue?',
      answer: 'Sim, para a maioria dos exames bioquímicos recomendamos jejum alimentar de 8 a 12 horas. Água pode ser oferecida normalmente. Nossa equipe informa o preparo específico no momento do agendamento.',
    },
    {
      question: 'Quanto tempo demora para sair o resultado?',
      answer: 'A maioria dos exames laboratoriais tem resultado em até 24 horas. Exames de imagem (ultrassom, radiografia, ecocardiograma) têm laudo no mesmo dia. Alguns exames específicos como cultura e antibiograma podem levar de 3 a 7 dias.',
    },
    {
      question: 'Preciso agendar os exames com antecedência?',
      answer: 'Para exames laboratoriais (coleta de sangue, urina, fezes), o agendamento pode ser feito para o mesmo dia, dependendo da disponibilidade. Exames de imagem como ultrassom e ecocardiograma precisam de agendamento prévio, pois dependem da agenda dos médicos especialistas.',
    },
    {
      question: 'Os exames de imagem são realizados na clínica?',
      answer: 'Sim, todos os exames de imagem (ultrassom, radiografia e ecocardiograma) são realizados aqui na clínica por médicos veterinários especialistas em diagnóstico por imagem e cardiologia.',
    },
    {
      question: 'Vocês fazem exames de emergência?',
      answer: 'Sim, em situações de emergência realizamos exames laboratoriais e de imagem com prioridade. Hemograma e bioquímicos de urgência podem ter resultados em poucas horas.',
    },
    {
      question: 'Como recebo os resultados dos exames?',
      answer: 'Os resultados são enviados por e-mail ou WhatsApp, conforme sua preferência. Também ficam disponíveis para retirada na clínica. O veterinário responsável entra em contato para discutir os resultados e orientar o tratamento.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-white to-csm-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[65vh] py-12 sm:py-16">
          <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 w-full">
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
              <BadgeCSM variant="blue" className="flex items-center gap-2">
                <FlaskConical className="w-4 h-4" />
                Laboratoriais
              </BadgeCSM>
              <BadgeCSM variant="yellow" className="flex items-center gap-2">
                <Scan className="w-4 h-4" />
                Imagem
              </BadgeCSM>
              <BadgeCSM variant="blue" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Resultados em 24h
              </BadgeCSM>
              <BadgeCSM variant="gray" className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4" />
                Especialistas
              </BadgeCSM>
            </div>

            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-csm-blue-light text-csm-blue">
              <FlaskConical className="w-8 h-8" />
            </div>

            <div className="space-y-4 sm:space-y-6 lg:space-y-8 max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight">
                <span className="text-csm-blue">Exames Veterinarios</span>
                <span className="block text-csm-gray-dark text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl mt-1 sm:mt-2">Diagnostico Preciso</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-csm-gray max-w-3xl mx-auto leading-relaxed px-2">
                Parceria com os melhores laboratorios e medicos especialistas em imagem para cuidar da saude do seu pet com excelencia.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-4 sm:gap-6 justify-center max-w-4xl mx-auto px-2">
              <ButtonCSM
                variant="whatsapp"
                size="lg"
                className="flex-1 max-w-xs"
                onClick={() => window.open(`https://wa.me/${contact.phone.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de agendar um exame para meu pet.')}`, '_blank')}
              >
                <FaWhatsapp className="w-5 h-5" />
                AGENDAR EXAME
              </ButtonCSM>
              <ButtonCSM
                variant="primary"
                size="lg"
                className="flex-1 max-w-xs"
                onClick={() => window.location.href = `tel:${contact.phone.primary}`}
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
                  <Clock className="w-8 h-8 text-csm-blue" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-2">
                  24h
                </div>
                <div className="text-lg font-semibold text-csm-blue mb-1">
                  Resultados
                </div>
                <div className="text-sm text-csm-gray">
                  Para a maioria dos exames
                </div>
              </CardCsmContent>
            </CardCSM>

            <CardCSM variant="default" className="text-center">
              <CardCsmContent className="p-6">
                <div className="flex justify-center mb-4">
                  <FlaskConical className="w-8 h-8 text-csm-yellow" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-2">
                  Bionostic
                </div>
                <div className="text-lg font-semibold text-csm-yellow mb-1">
                  Parceiro Laboratorial
                </div>
                <div className="text-sm text-csm-gray">
                  Melhor laboratorio veterinario de Curitiba
                </div>
              </CardCsmContent>
            </CardCSM>

            <CardCSM variant="default" className="text-center">
              <CardCsmContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Stethoscope className="w-8 h-8 text-csm-blue" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-2">
                  Especialistas
                </div>
                <div className="text-lg font-semibold text-csm-blue mb-1">
                  Medicos de Imagem
                </div>
                <div className="text-sm text-csm-gray">
                  Ultrassom, Raio-X e Ecocardiograma
                </div>
              </CardCsmContent>
            </CardCSM>
          </div>
        </div>
      </section>

      {/* Exames Laboratoriais - Parceria Bionostic */}
      <section className="py-20 bg-gradient-to-b from-white to-csm-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <BadgeCSM variant="blue" className="mb-4">Laboratoriais</BadgeCSM>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-csm-gray-dark">Exames </span>
              <span className="text-csm-blue">Laboratoriais Completos</span>
            </h2>
            <p className="text-lg text-csm-gray max-w-2xl mx-auto">
              Parceria com o Bionostic, referencia em diagnostico veterinario ha mais de 20 anos em Curitiba
            </p>
          </div>

          {/* Bionostic Highlight Card */}
          <CardCSM variant="highlight" className="p-8 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-csm-blue rounded-lg flex items-center justify-center">
                  <FlaskConical className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="text-center md:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-csm-gray-dark">Laboratorio Bionostic</h3>
                  <BadgeCSM variant="yellow">Parceiro Oficial</BadgeCSM>
                </div>
                <p className="text-csm-gray leading-relaxed">
                  Centro de Diagnosticos Veterinarios com mais de 20 anos de experiencia, eleito melhor laboratorio veterinario de Curitiba em 2024. Equipamentos calibrados e estrutura totalmente voltada aos animais. A coleta e realizada aqui na clinica e as amostras sao processadas pelo Bionostic com agilidade e precisao.
                </p>
              </div>
            </div>
          </CardCSM>

          {/* Lab Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {labCategories.map((category, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white border border-csm-blue-light rounded-lg p-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-csm-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-csm-gray-dark font-medium text-sm">{category}</span>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-csm-blue-light text-csm-blue px-4 py-2 rounded-lg">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Coleta realizada no local, sem necessidade de deslocamento</span>
            </div>
          </div>
        </div>
      </section>

      {/* Exames de Imagem */}
      <section className="py-20 bg-gradient-to-b from-white to-csm-blue-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <BadgeCSM variant="yellow" className="mb-6">Diagnostico por Imagem</BadgeCSM>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-csm-gray-dark">Exames de </span>
              <span className="text-csm-blue">Imagem</span>
            </h2>
            <p className="text-xl text-csm-gray max-w-3xl mx-auto">
              Medicos veterinarios especialistas em diagnostico por imagem, com exames realizados no local
            </p>
          </div>

          {/* Imaging Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {imagingExams.map((exam, index) => {
              const Icon = exam.icon;
              return (
                <CardCSM key={index} variant="default" className="hover:shadow-lg transition-all duration-300">
                  <CardCsmContent className="p-6">
                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 bg-csm-blue rounded-lg flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-csm-gray-dark mb-3 text-center">
                      {exam.title}
                    </h3>

                    {/* Description */}
                    <p className="text-csm-gray text-sm mb-4 text-center leading-relaxed">
                      {exam.description}
                    </p>

                    {/* Types */}
                    <div className="space-y-2 mb-4">
                      {exam.types.map((type, typeIndex) => (
                        <div key={typeIndex} className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-csm-blue-light rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-csm-blue" />
                          </div>
                          <span className="text-sm text-csm-gray-dark">{type}</span>
                        </div>
                      ))}
                    </div>

                    {/* Detail */}
                    <div className="bg-csm-blue-light/30 rounded-lg p-3 border border-csm-blue-light">
                      <p className="text-xs text-csm-gray leading-relaxed">{exam.detail}</p>
                    </div>
                  </CardCsmContent>
                </CardCSM>
              );
            })}
          </div>

          {/* Specialist Note */}
          <div className="text-center mt-12">
            <CardCSM variant="highlight" className="inline-block p-6 max-w-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-csm-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-6 h-6 text-csm-gray-dark" />
                </div>
                <p className="text-csm-gray-dark text-left">
                  <strong>Todos os exames de imagem</strong> sao realizados por medicos veterinarios especialistas, garantindo laudos precisos e confiáveis.
                </p>
              </div>
            </CardCSM>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <BadgeCSM variant="blue" className="mb-6">Processo</BadgeCSM>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-csm-gray-dark">Como Funciona o </span>
              <span className="text-csm-blue">Agendamento de Exames</span>
            </h2>
            <p className="text-xl text-csm-gray max-w-3xl mx-auto">
              Processo simples e rapido, do agendamento ao resultado
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-6 max-w-4xl mx-auto mb-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="flex items-start gap-6">
                  {/* Step Number */}
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
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

          {/* Summary */}
          <CardCSM variant="highlight" className="p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-csm-gray-dark mb-4">
              Resultados em ate 24 horas
            </h3>
            <p className="text-csm-gray text-lg mb-4">
              Para a maioria dos exames laboratoriais e de imagem
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-csm-gray">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-csm-blue" />
                Coleta no local
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-csm-blue" />
                Especialistas dedicados
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-csm-blue" />
                Laudo completo
              </div>
            </div>
          </CardCSM>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-white to-csm-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <BadgeCSM variant="yellow" className="mb-4">Duvidas Frequentes</BadgeCSM>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-csm-gray-dark">Perguntas </span>
              <span className="text-csm-blue">Frequentes</span>
            </h2>
            <p className="text-lg text-csm-gray max-w-2xl mx-auto">
              Tire suas duvidas sobre os exames veterinarios
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
              Agende o Exame do Seu Pet
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Entre em contato e nossa equipe ira orientar sobre o melhor exame para o seu pet, preparos necessarios e horarios disponiveis.
            </p>
            <div className="flex flex-row gap-4 sm:gap-6 justify-center max-w-lg mx-auto">
              <ButtonCSM
                variant="whatsapp"
                size="lg"
                className="flex-1"
                onClick={() => window.open(`https://wa.me/${contact.phone.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de agendar um exame para meu pet.')}`, '_blank')}
              >
                <FaWhatsapp className="w-5 h-5" />
                WHATSAPP
              </ButtonCSM>
              <ButtonCSM
                variant="secondary"
                size="lg"
                className="flex-1 bg-white text-csm-blue hover:bg-white/90 border-0"
                onClick={() => window.location.href = `tel:${contact.phone.primary}`}
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
