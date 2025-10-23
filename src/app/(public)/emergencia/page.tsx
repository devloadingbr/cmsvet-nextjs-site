'use client';

import { useState } from 'react';
import { Phone, MessageCircle, Clock, Users, Heart, Ambulance, ChevronDown, ChevronUp, AlertTriangle, Activity, Shield } from 'lucide-react';
import { ButtonCSM } from '@/components/ui/button-csm';
import { CardCSM, CardCsmContent } from '@/components/ui/card-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';
import { contact } from '@/lib/env';

export default function EmergenciaPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  const emergencyLevels = [
    {
      level: 'CRÍTICO',
      description: 'Situações que exigem atendimento veterinário IMEDIATO',
      badgeVariant: 'blue' as const,
      badgeColor: 'bg-csm-urgency',
      iconBg: 'bg-csm-urgency',
      borderColor: 'border-csm-urgency/30',
      icon: AlertTriangle,
      symptoms: [
        'Convulsões ativas',
        'Dificuldade respiratória',
        'Sangramento intenso',
        'Trauma grave (atropelamento)',
        'Ingestão de venenos'
      ]
    },
    {
      level: 'URGENTE',
      description: 'Situações que exigem atendimento veterinário nas próximas horas',
      badgeVariant: 'yellow' as const,
      badgeColor: 'bg-csm-yellow',
      iconBg: 'bg-csm-yellow',
      borderColor: 'border-csm-yellow/30',
      icon: Activity,
      symptoms: [
        'Vômitos persistentes',
        'Diarreia com sangue',
        'Dificuldade para urinar',
        'Feridas abertas',
        'Inchaço repentino'
      ]
    },
    {
      level: 'ATENÇÃO',
      description: 'Situações que exigem monitoramento próximo e consulta breve',
      badgeVariant: 'blue' as const,
      badgeColor: 'bg-csm-blue',
      iconBg: 'bg-csm-blue',
      borderColor: 'border-csm-blue/30',
      icon: Shield,
      symptoms: [
        'Mudança de comportamento',
        'Perda de apetite por 24h',
        'Claudicação/mancar leve',
        'Coceira excessiva',
        'Secreções anormais'
      ]
    }
  ];

  const firstAidProtocols = [
    {
      title: 'Sangramento',
      icon: Heart,
      color: 'bg-csm-urgency',
      steps: [
        'Aplique pressão direta com pano limpo',
        'Eleve a área se possível',
        'Não use torniquete sem orientação médica',
        'Mantenha o animal aquecido e calmo'
      ]
    },
    {
      title: 'Dificuldade Respiratória',
      icon: Activity,
      color: 'bg-csm-blue',
      steps: [
        'Mantenha vias aéreas desobstruídas',
        'Posicione o animal para facilitar respiração',
        'Evite estresse e movimentos bruscos',
        'Transporte em posição semi-sentada'
      ]
    },
    {
      title: 'Intoxicação',
      icon: AlertTriangle,
      color: 'bg-csm-yellow',
      steps: [
        'Identifique o tóxico se possível',
        'NÃO induza vômito sem orientação veterinária',
        'Leve a embalagem da substância ao veterinário',
        'Transporte com cuidado evitando agitação'
      ]
    },
    {
      title: 'Trauma',
      icon: Shield,
      color: 'bg-csm-urgency',
      steps: [
        'Imobilize o animal usando uma superfície firme',
        'Não tente realinhar ossos ou membros',
        'Controle sangramento conforme protocolo',
        'Transporte com mínima movimentação'
      ]
    }
  ];

  const emergencyProcess = [
    { 
      step: 1, 
      title: 'Contato Inicial', 
      description: 'Entre em contato conosco imediatamente pelo telefone ou chat online',
      detail: 'Nossa equipe fará uma avaliação inicial e dará instruções para você seguir enquanto se dirige à clínica',
      time: '0-2 min',
      icon: Phone,
      color: 'bg-csm-blue',
      borderColor: 'border-csm-blue'
    },
    { 
      step: 2, 
      title: 'Chegada e Triagem', 
      description: 'Ao chegar à clínica, seu pet será imediatamente avaliado',
      detail: 'Nossa equipe de triagem prioriza casos críticos e encaminha diretamente para o atendimento',
      time: '2-5 min',
      icon: Ambulance,
      color: 'bg-csm-yellow',
      borderColor: 'border-csm-yellow'
    },
    { 
      step: 3, 
      title: 'Estabilização', 
      description: 'Nossa equipe médica trabalha rapidamente para estabilizar seu pet',
      detail: 'Controlamos os sintomas mais urgentes e realizamos exames preliminares',
      time: '5-15 min',
      icon: Activity,
      color: 'bg-csm-urgency',
      borderColor: 'border-csm-urgency'
    },
    { 
      step: 4, 
      title: 'Diagnóstico e Plano', 
      description: 'Após a estabilização inicial, realizamos exames mais detalhados',
      detail: 'Determinamos a causa do problema e apresentamos um plano de tratamento claro',
      time: '15-30 min',
      icon: Shield,
      color: 'bg-csm-blue',
      borderColor: 'border-csm-blue'
    },
    { 
      step: 5, 
      title: 'Tratamento e Acompanhamento', 
      description: 'Iniciamos o tratamento específico e monitoramos constantemente',
      detail: 'Você receberá atualizações frequentes sobre o estado de saúde do seu pet',
      time: '30+ min',
      icon: Heart,
      color: 'bg-csm-yellow',
      borderColor: 'border-csm-yellow'
    },
  ];

  const whatToBring = [
    { item: 'Carteira de vacinação', description: 'Se possível, traga o histórico' },
    { item: 'Documento e forma de pagamento', description: 'RG e cartão ou dinheiro' },
    { item: 'Cobertor ou toalha', description: 'Para conforto do seu pet' },
    { item: 'Telefone carregado', description: 'Para contato durante o atendimento' },
  ];

  const whatToExpect = [
    { item: 'Triagem imediata', description: 'Avaliação rápida da condição' },
    { item: 'Exame clínico completo', description: 'Diagnóstico preciso da situação' },
    { item: 'Plano de tratamento', description: 'Explicação clara das ações' },
    { item: 'Acompanhamento', description: 'Orientações para casa' },
  ];

  const testimonials = [
    {
      id: 1,
      urgencyLevel: 'CRÍTICO',
      urgencyColor: 'bg-csm-urgency',
      urgencyBorder: 'border-csm-urgency/20',
      petName: 'Rex',
      petType: '🐕',
      petBreed: 'Golden Retriever',
      emergency: 'Intoxicação alimentar',
      arrivalTime: '03:00',
      treatmentTime: '45 min',
      outcome: 'Recuperação completa',
      tutorName: 'Ana Silva',
      tutorLocation: 'Curitiba, PR',
      rating: 5,
      date: 'Há 2 meses',
      testimonial: 'Chegamos às 3h da manhã com o Rex passando mal após ingerir chocolate. A equipe foi incrível, agiram rapidamente e salvaram nosso bebê! O veterinário de plantão explicou cada passo do tratamento e nos manteve informados o tempo todo. Gratidão eterna!'
    },
    {
      id: 2,
      urgencyLevel: 'URGENTE',
      urgencyColor: 'bg-csm-yellow',
      urgencyBorder: 'border-csm-yellow/20',
      petName: 'Mia',
      petType: '🐱',
      petBreed: 'Siamês',
      emergency: 'Reação alérgica',
      arrivalTime: '22:30',
      treatmentTime: '30 min',
      outcome: 'Estabilizada com sucesso',
      tutorName: 'Carlos Mendes',
      tutorLocation: 'Curitiba, PR',
      rating: 5,
      date: 'Há 1 mês',
      testimonial: 'A Mia teve uma reação alérgica grave após vacinação. O atendimento 24h foi essencial - chegamos em 15 minutos e a equipe já estava preparada. A Dra. Juliana foi extremamente atenciosa e profissional. Recomendo muito!'
    },
    {
      id: 3,
      urgencyLevel: 'ATENÇÃO',
      urgencyColor: 'bg-csm-blue',
      urgencyBorder: 'border-csm-blue/20',
      petName: 'Luna',
      petType: '🐕',
      petBreed: 'Labrador',
      emergency: 'Ferimento na pata',
      arrivalTime: '18:45',
      treatmentTime: '25 min',
      outcome: 'Tratada e medicada',
      tutorName: 'Mariana Costa',
      tutorLocation: 'Curitiba, PR',
      rating: 5,
      date: 'Há 3 semanas',
      testimonial: 'A Luna cortou a pata durante o passeio. Mesmo não sendo uma emergência crítica, fomos atendidos rapidamente. A equipe foi muito cuidadosa e explicou todos os cuidados pós-tratamento. Excelente atendimento!'
    }
  ];

  const emergencyFAQs = [
    {
      question: "O que é considerado uma emergência veterinária?",
      answer: "Emergências veterinárias incluem situações que colocam em risco a vida do pet, como dificuldade respiratória, convulsões, sangramento intenso, trauma por atropelamento, ingestão de tóxicos, bloqueio urinário, entre outros. Se você observar qualquer alteração súbita e grave no comportamento ou condição física do seu pet, considere uma emergência."
    },
    {
      question: "Quanto custa um atendimento de emergência?",
      answer: "Os custos variam conforme a complexidade do caso. Atendimentos críticos têm prioridade e nossa equipe sempre informa os valores antes de iniciar procedimentos. Aceitamos diversas formas de pagamento e parcelamento para facilitar o cuidado do seu pet."
    },
    {
      question: "Vocês atendem todos os tipos de animais?",
      answer: "Atendemos cães e gatos de todos os portes e idades. Nossa equipe possui experiência em emergências para diferentes espécies domésticas. Para casos específicos de animais exóticos, orientamos sobre clinicas especializadas."
    },
    {
      question: "Preciso marcar hora para emergências?",
      answer: "NÃO! Em situações de emergência, venha diretamente à clínica ou ligue antes para orientações. Nosso atendimento funciona 24h por ordem de gravidade - casos críticos têm prioridade absoluta sobre consultas agendadas."
    },
    {
      question: "Posso ficar junto com meu pet durante o atendimento?",
      answer: "Sim, na medida do possível. Em casos críticos, pedimos para aguardar na recepção durante procedimentos de estabilização, mas você receberá atualizações constantes. Após a estabilização, encorajamos a presença do tutor para conforto do animal."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-white to-csm-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[75vh] py-12 sm:py-16">
          <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 w-full">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            <BadgeCSM variant="blue" className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Emergência 24h
            </BadgeCSM>
            <BadgeCSM variant="yellow" className="flex items-center gap-2">
              <Ambulance className="w-4 h-4" />
              Plantão Ativo
            </BadgeCSM>
            <BadgeCSM variant="blue" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Resposta Rápida
            </BadgeCSM>
            <BadgeCSM variant="gray" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Especialistas
            </BadgeCSM>
          </div>
          
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-csm-blue-light text-csm-blue">
            <Ambulance className="w-8 h-8" />
          </div>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight">
              <span className="text-csm-urgency">Emergência Veterinária</span>
              <span className="block text-csm-gray-dark text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl mt-1 sm:mt-2">Atendimento 24 Horas</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-csm-gray max-w-3xl mx-auto leading-relaxed px-2">
              Para situações que não podem esperar, nossa equipe especializada está pronta para cuidar do seu pet com dedicação e carinho.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-row gap-4 sm:gap-6 justify-center max-w-4xl mx-auto px-2">
            <ButtonCSM 
              variant="urgency"
              size="lg" 
              className="flex-1 max-w-xs"
              onClick={() => window.open(`https://wa.me/${contact.phone.whatsapp}`, '_blank')}
            >
              <MessageCircle className="w-5 h-5" />
              WHATSAPP
            </ButtonCSM>
            <ButtonCSM 
              variant="primary"
              size="lg" 
              className="flex-1 max-w-xs"
              onClick={() => window.location.href = `tel:${contact.phone.primary}`}
            >
              <Phone className="w-5 h-5" />
              LIGAÇÃO
            </ButtonCSM>
          </div>

          {/* AI Triage Button - removido */}
        </div>
      </div>

      {/* Indicadores de Serviço */}
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
                  Emergência
                </div>
                <div className="text-sm text-csm-gray">
                  Plantão veterinário ativo
                </div>
              </CardCsmContent>
            </CardCSM>
            
            <CardCSM variant="default" className="text-center">
              <CardCsmContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Users className="w-8 h-8 text-csm-yellow" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-2">
                  15+
                </div>
                <div className="text-lg font-semibold text-csm-yellow mb-1">
                  Veterinários
                </div>
                <div className="text-sm text-csm-gray">
                  Equipe especializada
                </div>
              </CardCsmContent>
            </CardCSM>
            
            <CardCSM variant="default" className="text-center">
              <CardCsmContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Heart className="w-8 h-8 text-csm-blue" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-2">
                  10k+
                </div>
                <div className="text-lg font-semibold text-csm-blue mb-1">
                  Emergências
                </div>
                <div className="text-sm text-csm-gray">
                  Atendimentos realizados
                </div>
              </CardCsmContent>
            </CardCSM>
          </div>
        </div>
      </section>

      {/* Avaliação Rápida - Identifique a Urgência */}
      <section className="py-20 bg-gradient-to-b from-white to-csm-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <BadgeCSM variant="blue" className="mb-4">Avaliação de Urgência</BadgeCSM>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-csm-gray-dark">Identifique o </span>
              <span className="text-csm-blue">Nível de Urgência</span>
            </h2>
            <p className="text-lg text-csm-gray max-w-2xl mx-auto mb-3">
              Avalie os sintomas do seu pet para entender a gravidade e tomar as ações adequadas
            </p>
            <div className="inline-flex items-center gap-2 bg-csm-urgency/10 text-csm-urgency px-4 py-2 rounded-lg">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-semibold">Em caso de dúvida, sempre procure atendimento veterinário</span>
            </div>
          </div>
          
          {/* Emergency Levels Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {emergencyLevels.map((level, index) => {
              const Icon = level.icon;
              return (
                <CardCSM key={index} variant="default" className={`${level.borderColor} border-2 hover:shadow-lg transition-all duration-300`}>
                  <CardCsmContent className="p-6">
                    {/* Level Header */}
                    <div className="mb-6">
                      {/* Badge + Icon Row */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`${level.badgeColor} text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide`}>
                          {level.level}
                        </div>
                        <div className={`w-10 h-10 ${level.iconBg} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-csm-gray-dark font-medium leading-relaxed">
                        {level.description}
                      </p>
                    </div>
                    
                    {/* Symptoms List */}
                    <div className="space-y-2.5">
                      <div className="text-xs font-semibold text-csm-gray uppercase tracking-wide mb-3">
                        Sintomas:
                      </div>
                      {level.symptoms.map((symptom, symptomIndex) => (
                        <div key={symptomIndex} className="flex items-start space-x-2.5">
                          <div className={`w-5 h-5 ${level.iconBg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                          <span className="text-sm text-csm-gray-dark leading-snug">{symptom}</span>
                        </div>
                      ))}
                    </div>
                  </CardCsmContent>
                </CardCSM>
              );
            })}
          </div>
          
          {/* CTA Bottom */}
          <div className="text-center mt-8">
            <p className="text-sm text-csm-gray">
              Nosso atendimento 24h está preparado para todos os níveis de urgência
            </p>
          </div>
        </div>
      </section>

      {/* Protocolos de Primeiros Socorros */}
      <section className="py-20 bg-gradient-to-b from-white to-csm-blue-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <BadgeCSM variant="blue" className="mb-6">Primeiros Socorros</BadgeCSM>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-csm-gray-dark">Protocolos de </span>
              <span className="text-csm-urgency">Emergência</span>
            </h2>
            <p className="text-xl text-csm-gray max-w-3xl mx-auto">
              Ações que podem salvar a vida do seu pet até chegar ao atendimento veterinário
            </p>
            <p className="text-lg font-semibold text-csm-urgency mt-2">
              Sempre ligue para nossa emergência durante estes procedimentos
            </p>
          </div>
          
          {/* Emergency Contact Banner */}
          <div className="bg-csm-urgency text-white rounded-lg p-6 text-center mb-16">
            <h3 className="text-xl font-bold mb-2">LIGUE DURANTE O PROCEDIMENTO</h3>
            <p className="text-white/90 mb-4">Nossa equipe orientará você pelo telefone</p>
            <ButtonCSM 
              variant="secondary"
              size="lg"
              className="bg-white text-csm-urgency hover:bg-white/90 border-0"
              onClick={() => window.location.href = `tel:${contact.phone.primary}`}
            >
              <Phone className="w-5 h-5" />
              {contact.phone.primary}
            </ButtonCSM>
          </div>
          
          {/* Protocols Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {firstAidProtocols.map((protocol, index) => {
              const Icon = protocol.icon;
              return (
                <CardCSM key={index} variant="default">
                  <CardCsmContent className="p-6">
                    {/* Protocol Header */}
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 ${protocol.color} rounded-lg flex items-center justify-center mr-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-csm-gray-dark">{protocol.title}</h3>
                    </div>
                    
                    {/* Steps List */}
                    <div className="space-y-3">
                      {protocol.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-csm-blue-light text-csm-blue rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                            {stepIndex + 1}
                          </div>
                          <span className="text-csm-gray leading-relaxed">{step}</span>
                        </div>
                      ))}
                    </div>
                  </CardCsmContent>
                </CardCSM>
              );
            })}
          </div>
        </div>
      </section>

      {/* Processo de Atendimento */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <BadgeCSM variant="yellow" className="mb-6">Processo de Atendimento</BadgeCSM>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-csm-gray-dark">Como Funciona o </span>
              <span className="text-csm-blue">Atendimento de Emergência</span>
            </h2>
            <p className="text-xl text-csm-gray max-w-3xl mx-auto">
              Nosso atendimento de emergência segue um protocolo estruturado para garantir a melhor e mais rápida assistência
            </p>
          </div>
          
          {/* Trust Indicator */}
          <div className="bg-csm-blue text-white rounded-lg p-6 text-center mb-16">
            <h3 className="text-2xl font-bold mb-2">Protocolo Estruturado de Emergência</h3>
            <p className="text-white/90">
              Equipe médica completa • Equipamentos de última geração • Monitoramento 24h
            </p>
          </div>
          
          {/* Process Timeline */}
          <div className="space-y-8 mb-12">
            {emergencyProcess.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="flex items-start">
                  {/* Step Card */}
                  <CardCSM variant="default" className={`flex-1 ${step.borderColor} border-2`}>
                    <CardCsmContent className="p-6">
                      {/* Step Header */}
                      <div className="flex items-center mb-4">
                        <div className={`w-16 h-16 ${step.color} rounded-lg flex items-center justify-center mr-6`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-csm-gray-dark">{step.title}</h3>
                            <BadgeCSM variant="gray" className="font-semibold">
                              {step.time}
                            </BadgeCSM>
                          </div>
                          <p className="text-csm-gray font-medium">{step.description}</p>
                        </div>
                      </div>
                      
                      {/* Step Detail */}
                      <div className="bg-csm-blue-light/30 rounded-lg p-4 border border-csm-blue-light">
                        <p className="text-csm-gray leading-relaxed">{step.detail}</p>
                      </div>
                    </CardCsmContent>
                  </CardCSM>
                  
                  {/* Step Number */}
                  <div className="flex flex-col items-center ml-6">
                    <div className={`w-10 h-10 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                      {step.step}
                    </div>
                    {index < emergencyProcess.length - 1 && (
                      <div className="w-0.5 h-16 bg-csm-gray-light mt-4"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Process Summary */}
          <CardCSM variant="highlight" className="p-8 text-center">
            <h3 className="text-2xl font-bold text-csm-gray-dark mb-4">
              Tempo Médio Total: 45-60 minutos
            </h3>
            <p className="text-csm-gray text-lg mb-4">
              Desde a chegada até a estabilização completa do seu pet
            </p>
            <div className="flex justify-center gap-8 text-sm text-csm-gray">
              <div>• Veterinário presente 24h</div>
              <div>• Equipamentos prontos</div>
              <div>• Atualizações constantes</div>
            </div>
          </CardCSM>
        </div>
      </section>

      {/* O que Levar e O que Esperar */}
      <section className="py-20 bg-gradient-to-b from-white to-csm-blue-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <BadgeCSM variant="blue" className="mb-6">Preparação</BadgeCSM>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-csm-gray-dark">Prepare-se para o </span>
              <span className="text-csm-blue">Atendimento</span>
            </h2>
            <p className="text-xl text-csm-gray max-w-3xl mx-auto">
              Informações importantes para agilizar seu atendimento
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* O que Levar */}
            <CardCSM variant="default">
              <CardCsmContent className="p-6">
                <h3 className="text-xl font-bold text-csm-yellow mb-6 text-center">O que Levar para a Clínica</h3>
                <div className="space-y-4">
                  {whatToBring.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-csm-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-csm-gray-dark">{item.item}</h4>
                        <p className="text-sm text-csm-gray">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardCsmContent>
            </CardCSM>
            
            {/* O que Esperar */}
            <CardCSM variant="default">
              <CardCsmContent className="p-6">
                <h3 className="text-xl font-bold text-csm-blue mb-6 text-center">O que Esperar Durante o Atendimento</h3>
                <div className="space-y-4">
                  {whatToExpect.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-csm-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-csm-gray-dark">{item.item}</h4>
                        <p className="text-sm text-csm-gray">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardCsmContent>
            </CardCSM>
          </div>
        </div>
      </section>

      {/* Histórias de Sucesso - Casos Reais */}
      <section className="py-20 bg-gradient-to-b from-white to-csm-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <BadgeCSM variant="yellow" className="mb-4">Histórias Reais</BadgeCSM>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-csm-gray-dark">Vidas Salvas em </span>
              <span className="text-csm-blue">Momentos Críticos</span>
            </h2>
            <p className="text-lg text-csm-gray max-w-2xl mx-auto">
              Casos reais de emergências atendidas 24h pela nossa equipe
            </p>
          </div>
          
          {/* Cases Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => {
              return (
                <CardCSM 
                  key={testimonial.id} 
                  variant="default" 
                  className={`${testimonial.urgencyBorder} border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <CardCsmContent className="p-6">
                    {/* Header: Badge + Pet Info */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className={`${testimonial.urgencyColor} text-white px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wide`}>
                          {testimonial.urgencyLevel}
                        </div>
                        <div className="text-2xl">{testimonial.petType}</div>
                      </div>
                      
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-csm-gray-dark mb-1">
                          {testimonial.petName}
                        </h3>
                        <p className="text-sm text-csm-gray">{testimonial.petBreed}</p>
                      </div>
                      
                      {/* Emergency Info */}
                      <div className="bg-csm-blue-light/30 rounded-lg p-3 mb-4">
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <span className="text-csm-gray font-medium">Emergência:</span>
                            <p className="text-csm-gray-dark font-semibold">{testimonial.emergency}</p>
                          </div>
                          <div>
                            <span className="text-csm-gray font-medium">Chegada:</span>
                            <p className="text-csm-gray-dark font-semibold">{testimonial.arrivalTime}</p>
                          </div>
                          <div>
                            <span className="text-csm-gray font-medium">Tratamento:</span>
                            <p className="text-csm-gray-dark font-semibold">{testimonial.treatmentTime}</p>
                          </div>
                          <div>
                            <span className="text-csm-gray font-medium">Resultado:</span>
                            <p className="text-csm-blue font-semibold">{testimonial.outcome}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Testimonial */}
                    <div className="mb-4">
                      <p className="text-sm text-csm-gray-dark leading-relaxed italic">
                        &ldquo;{testimonial.testimonial}&rdquo;
                      </p>
                    </div>
                    
                    {/* Footer: Tutor + Rating */}
                    <div className="pt-4 border-t border-csm-blue-light">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-csm-blue-light text-csm-blue flex items-center justify-center font-bold text-sm">
                            {testimonial.tutorName.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-csm-gray-dark">{testimonial.tutorName}</p>
                            <p className="text-xs text-csm-gray">{testimonial.tutorLocation}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Rating + Date */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-csm-yellow text-sm">★</span>
                          ))}
                        </div>
                        <span className="text-xs text-csm-gray">{testimonial.date}</span>
                      </div>
                    </div>
                  </CardCsmContent>
                </CardCSM>
              );
            })}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-10">
            <p className="text-sm text-csm-gray mb-4">
              Mais de 10.000 emergências atendidas com sucesso
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-csm-yellow text-lg">★</span>
                ))}
              </div>
              <span className="text-sm font-semibold text-csm-gray-dark">4.9/5.0</span>
              <span className="text-sm text-csm-gray">(500+ avaliações)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa e Localização */}
      <section className="py-20 bg-gradient-to-b from-white to-csm-blue-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <BadgeCSM variant="blue" className="mb-6">Localização</BadgeCSM>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-csm-gray-dark">Nossa </span>
              <span className="text-csm-blue">Localização</span>
            </h2>
            <p className="text-xl text-csm-gray max-w-3xl mx-auto">
              Encontre-nos facilmente e venha com seu pet em caso de emergência
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Mapa */}
            <CardCSM variant="default">
              <CardCsmContent className="p-6">
                <div className="w-full h-64 rounded-lg overflow-hidden mb-4 relative">
                  <iframe
                    src="https://maps.google.com/maps?q=Rua%20Julio%20Wischral%2C%201099%2C%20Uberaba%2C%20Curitiba%2C%20PR%2C%20Brasil&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="Localização CSM Clínica Veterinária"
                  ></iframe>
                  
                  {/* Overlay for emergency info */}
                  <div className="absolute top-4 left-4 bg-csm-urgency text-white px-3 py-2 rounded-lg text-sm font-semibold">
                    EMERGÊNCIA 24H
                  </div>
                </div>
                
                {/* Address Details */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-csm-blue-light/30 rounded-lg border border-csm-blue-light">
                    <div className="w-8 h-8 bg-csm-blue rounded-full flex items-center justify-center">
                      <Ambulance className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-csm-gray-dark">Rua Julio Wischral, 1099</p>
                      <p className="text-sm text-csm-gray">Uberaba, Curitiba/PR</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-csm-blue" />
                      <span className="text-csm-gray">Estacionamento</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-csm-blue" />
                      <span className="text-csm-gray">15-20 min centro</span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <ButtonCSM 
                      variant="primary"
                      size="sm"
                      onClick={() => window.open('https://maps.google.com/?q=Rua+Julio+Wischral,+1099,+Uberaba,+Curitiba,+PR', '_blank')}
                    >
                      Ver no Maps
                    </ButtonCSM>
                    <ButtonCSM 
                      variant="secondary"
                      size="sm"
                      onClick={() => window.open('https://waze.com/ul?q=Rua+Julio+Wischral,+1099,+Curitiba,+PR', '_blank')}
                    >
                      Abrir no Waze
                    </ButtonCSM>
                  </div>
                </div>
              </CardCsmContent>
            </CardCSM>
            
            {/* Informações de Acesso */}
            <CardCSM variant="default">
              <CardCsmContent className="p-6">
                <h3 className="text-xl font-bold text-csm-gray-dark mb-4">Informações de Acesso</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-csm-blue-light text-csm-blue flex items-center justify-center">
                      <Ambulance className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-csm-gray-dark">Entrada Principal</h4>
                      <p className="text-sm text-csm-gray">Sinalizada para emergências</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-csm-yellow/20 text-csm-yellow flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-csm-gray-dark">Estacionamento</h4>
                      <p className="text-sm text-csm-gray">Vagas próximas à entrada</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-csm-blue-light text-csm-blue flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-csm-gray-dark">Horário</h4>
                      <p className="text-sm text-csm-gray">24 horas, todos os dias</p>
                    </div>
                  </div>
                </div>
              </CardCsmContent>
            </CardCSM>
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <BadgeCSM variant="yellow" className="mb-6">FAQ</BadgeCSM>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-csm-gray-dark">Perguntas </span>
              <span className="text-csm-blue">Frequentes</span>
            </h2>
            <p className="text-xl text-csm-gray max-w-3xl mx-auto">
              Tire suas dúvidas sobre nosso atendimento de emergência
            </p>
          </div>
          
          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto mb-12">
            {emergencyFAQs.map((faq, index) => (
              <CardCSM key={index} variant="default" className="mb-4">
                <CardCsmContent className="p-0">
                  <button
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-csm-blue-light/20 transition-colors duration-200"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold text-csm-gray-dark pr-4">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-csm-blue flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-csm-blue flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-csm-gray leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardCsmContent>
              </CardCSM>
            ))}
          </div>
        </div>
      </section>
        
      {/* Contatos Finais */}
      <section className="py-20 bg-gradient-to-b from-white to-csm-blue-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-csm-urgency text-white rounded-lg p-6 sm:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Precisa de Atendimento Imediato?</h2>
            <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar você e seu pet 24 horas por dia
            </p>
            <div className="flex flex-row gap-4 sm:gap-6 justify-center max-w-4xl mx-auto px-2">
              <ButtonCSM 
                variant="secondary"
                size="lg"
                className="bg-white text-csm-urgency hover:bg-white/90 border-0 flex-1 max-w-xs"
                onClick={() => window.location.href = `tel:${contact.phone.primary}`}
              >
                <Phone className="w-5 h-5" />
                LIGAÇÃO
              </ButtonCSM>
              <ButtonCSM 
                variant="urgency"
                size="lg"
                className="flex-1 max-w-xs"
                onClick={() => window.open(`https://wa.me/${contact.phone.whatsapp}`, '_blank')}
              >
                <MessageCircle className="w-5 h-5" />
                WHATSAPP
              </ButtonCSM>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}