'use client';

import { useState } from 'react';
import { Phone, MessageCircle, Clock, Users, Heart, Ambulance, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
      color: 'bg-red-500',
      borderColor: 'border-red-500',
      textColor: 'text-red-600',
      symptoms: [
        { name: 'Convulsões ativas', icon: '⚡' },
        { name: 'Dificuldade respiratória', icon: '💨' },
        { name: 'Sangramento intenso', icon: '🩸' },
        { name: 'Trauma grave (atropelamento)', icon: '🚗' },
        { name: 'Ingestão de venenos', icon: '☠️' }
      ]
    },
    {
      level: 'URGENTE',
      description: 'Situações que exigem atendimento veterinário nas próximas horas',
      color: 'bg-orange-500',
      borderColor: 'border-orange-500',
      textColor: 'text-orange-600',
      symptoms: [
        { name: 'Vômitos persistentes', icon: '🤢' },
        { name: 'Diarreia com sangue', icon: '💩' },
        { name: 'Dificuldade para urinar', icon: '🚽' },
        { name: 'Feridas abertas', icon: '🩹' },
        { name: 'Inchaço repentino', icon: '🫧' }
      ]
    },
    {
      level: 'ATENÇÃO',
      description: 'Situações que exigem monitoramento próximo e consulta breve',
      color: 'bg-yellow-500',
      borderColor: 'border-yellow-500',
      textColor: 'text-yellow-600',
      symptoms: [
        { name: 'Mudança de comportamento', icon: '😔' },
        { name: 'Perda de apetite por 24h', icon: '🍽️' },
        { name: 'Claudicação/mancar leve', icon: '🦵' },
        { name: 'Coceira excessiva', icon: '🐕' },
        { name: 'Secreções anormais', icon: '💧' }
      ]
    }
  ];

  const firstAidProtocols = [
    {
      title: 'Sangramento',
      icon: '🩸',
      color: 'bg-red-500',
      steps: [
        'Aplique pressão direta com pano limpo',
        'Eleve a área se possível',
        'Não use torniquete sem orientação médica',
        'Mantenha o animal aquecido e calmo'
      ]
    },
    {
      title: 'Dificuldade Respiratória',
      icon: '💨',
      color: 'bg-blue-500',
      steps: [
        'Mantenha vias aéreas desobstruídas',
        'Posicione o animal para facilitar respiração',
        'Evite estresse e movimentos bruscos',
        'Transporte em posição semi-sentada'
      ]
    },
    {
      title: 'Intoxicação',
      icon: '☠️',
      color: 'bg-purple-500',
      steps: [
        'Identifique o tóxico se possível',
        'NÃO induza vômito sem orientação veterinária',
        'Leve a embalagem da substância ao veterinário',
        'Transporte com cuidado evitando agitação'
      ]
    },
    {
      title: 'Trauma',
      icon: '🚗',
      color: 'bg-orange-500',
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
      icon: '📞',
      color: 'bg-blue-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200'
    },
    { 
      step: 2, 
      title: 'Chegada e Triagem', 
      description: 'Ao chegar à clínica, seu pet será imediatamente avaliado',
      detail: 'Nossa equipe de triagem prioriza casos críticos e encaminha diretamente para o atendimento',
      time: '2-5 min',
      icon: '🏥',
      color: 'bg-emerald-500',
      bgGradient: 'from-emerald-50 to-green-50',
      borderColor: 'border-emerald-200'
    },
    { 
      step: 3, 
      title: 'Estabilização', 
      description: 'Nossa equipe médica trabalha rapidamente para estabilizar seu pet',
      detail: 'Controlamos os sintomas mais urgentes e realizamos exames preliminares',
      time: '5-15 min',
      icon: '⚕️',
      color: 'bg-red-500',
      bgGradient: 'from-red-50 to-rose-50',
      borderColor: 'border-red-200'
    },
    { 
      step: 4, 
      title: 'Diagnóstico e Plano', 
      description: 'Após a estabilização inicial, realizamos exames mais detalhados',
      detail: 'Determinamos a causa do problema e apresentamos um plano de tratamento claro',
      time: '15-30 min',
      icon: '🔬',
      color: 'bg-purple-500',
      bgGradient: 'from-purple-50 to-violet-50',
      borderColor: 'border-purple-200'
    },
    { 
      step: 5, 
      title: 'Tratamento e Acompanhamento', 
      description: 'Iniciamos o tratamento específico e monitoramos constantemente',
      detail: 'Você receberá atualizações frequentes sobre o estado de saúde do seu pet',
      time: '30+ min',
      icon: '💝',
      color: 'bg-amber-500',
      bgGradient: 'from-amber-50 to-yellow-50',
      borderColor: 'border-amber-200'
    },
  ];

  const whatToBring = [
    { icon: '📝', item: 'Carteira de vacinação', description: 'Se possível, traga o histórico' },
    { icon: '💳', item: 'Documento e forma de pagamento', description: 'RG e cartão ou dinheiro' },
    { icon: '🧥', item: 'Cobertor ou toalha', description: 'Para conforto do seu pet' },
    { icon: '📱', item: 'Telefone carregado', description: 'Para contato durante o atendimento' },
  ];

  const whatToExpect = [
    { icon: '🩺', item: 'Triagem imediata', description: 'Avaliação rápida da condição' },
    { icon: '🔍', item: 'Exame clínico completo', description: 'Diagnóstico preciso da situação' },
    { icon: '📊', item: 'Plano de tratamento', description: 'Explicação clara das ações' },
    { icon: '📞', item: 'Acompanhamento', description: 'Orientações para casa' },
  ];

  const testimonials = [
    { id: 1, name: 'Ana Silva', pet: 'Rex (Golden)', text: 'Chegamos às 3h da manhã com o Rex passando mal. A equipe foi incrível, salvaram nosso bebê!' },
    { id: 2, name: 'Carlos Mendes', pet: 'Mia (Siamês)', text: 'A Mia teve uma reação alérgica grave. O atendimento 24h salvou a vida dela. Recomendo muito!' },
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
      <div className="min-h-[80vh] sm:min-h-screen relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh] sm:min-h-screen py-12 sm:py-16">
          <div className="text-center space-y-6 sm:space-y-8 lg:space-y-12 w-full">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            <Badge className="flex items-center space-x-1 sm:space-x-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-red-500 text-white border-0 rounded-full hover:scale-105 transition-transform duration-300 text-xs sm:text-sm font-semibold">
              <span className="text-sm sm:text-lg">🚨</span>
              <span>Emergência 24h</span>
            </Badge>
            <Badge className="flex items-center space-x-1 sm:space-x-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-violet-500 text-white border-0 rounded-full hover:scale-105 transition-transform duration-300 text-xs sm:text-sm font-semibold">
              <span className="text-sm sm:text-lg">🏥</span>
              <span>Plantão Ativo</span>
            </Badge>
            <Badge className="flex items-center space-x-1 sm:space-x-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-orange-500 text-white border-0 rounded-full hover:scale-105 transition-transform duration-300 text-xs sm:text-sm font-semibold">
              <span className="text-sm sm:text-lg">⚡</span>
              <span>Resposta Rápida</span>
            </Badge>
            <Badge className="flex items-center space-x-1 sm:space-x-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-cyan-500 text-white border-0 rounded-full hover:scale-105 transition-transform duration-300 text-xs sm:text-sm font-semibold">
              <span className="text-sm sm:text-lg">🩺</span>
              <span>Especialistas</span>
            </Badge>
          </div>
          
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600">
            <Ambulance className="w-8 h-8" />
          </div>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight">
              <span className="text-red-600">Emergência Veterinária</span>
              <span className="block text-amber-500 text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl mt-1 sm:mt-2">Atendimento 24 Horas</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
              Para situações que não podem esperar, nossa equipe especializada está pronta para cuidar do seu pet com dedicação e carinho.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-row gap-4 sm:gap-6 justify-center max-w-4xl mx-auto px-2">
            <Button 
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-emerald-900/20 flex-1 max-w-xs cursor-pointer"
              onClick={() => window.open(`https://wa.me/${contact.phone.whatsapp}`, '_blank')}
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              WHATSAPP
            </Button>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-900/20 flex-1 max-w-xs cursor-pointer"
              onClick={() => window.location.href = `tel:${contact.phone.primary}`}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              LIGAÇÃO
            </Button>
          </div>

          {/* AI Triage Button - removido */}
        </div>
      </div>

      {/* Indicadores de Serviço */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center group hover:transform hover:scale-105 transition-all duration-300 bg-gradient-to-br from-slate-50 to-blue-50 border-blue-100 shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Clock className="w-8 h-8 text-blue-500" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                  24h
                </div>
                <div className="text-lg font-semibold text-blue-600 mb-1">
                  Emergência
                </div>
                <div className="text-sm text-slate-600">
                  Plantão veterinário ativo
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:transform hover:scale-105 transition-all duration-300 bg-gradient-to-br from-slate-50 to-rose-50 border-rose-100 shadow-lg shadow-rose-900/10 hover:shadow-xl hover:shadow-rose-900/20">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Users className="w-8 h-8 text-rose-500" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                  15+
                </div>
                <div className="text-lg font-semibold text-rose-600 mb-1">
                  Veterinários
                </div>
                <div className="text-sm text-slate-600">
                  Equipe especializada
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:transform hover:scale-105 transition-all duration-300 bg-gradient-to-br from-slate-50 to-green-50 border-green-100 shadow-lg shadow-green-900/10 hover:shadow-xl hover:shadow-green-900/20">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Heart className="w-8 h-8 text-green-500" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                  10k+
                </div>
                <div className="text-lg font-semibold text-green-600 mb-1">
                  Emergências
                </div>
                <div className="text-sm text-slate-600">
                  Atendimentos realizados
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Avaliação Rápida - Identifique a Urgência */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              🎯 <span className="text-blue-600">Avaliação Rápida - Identifique a Urgência</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Avalie os sintomas do seu pet para entender a gravidade e tomar as ações adequadas<br />
              <span className="text-lg">Em caso de dúvida, sempre procure atendimento veterinário</span>
            </p>
          </div>
          
          {/* Botão Triagem Rápida - removido */}
          
          {/* Emergency Levels Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {emergencyLevels.map((level, index) => (
              <Card key={index} className={`bg-gradient-to-br from-slate-50 to-white ${level.borderColor} border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                <CardContent className="p-6">
                  {/* Level Header */}
                  <div className="text-center mb-6">
                    <Badge className={`${level.color} text-white border-0 text-lg px-4 py-2 font-bold`}>
                      {level.level}
                    </Badge>
                    <p className={`text-sm ${level.textColor} font-semibold mt-3`}>
                      {level.description}
                    </p>
                  </div>
                  
                  {/* Symptoms List */}
                  <div className="space-y-3">
                    {level.symptoms.map((symptom, symptomIndex) => (
                      <div key={symptomIndex} className="flex items-center space-x-3">
                        <span className="text-xl">{symptom.icon}</span>
                        <span className="text-sm text-slate-700 font-medium">{symptom.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Protocolos de Primeiros Socorros */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              🚑 <span className="text-red-600">Protocolos de Primeiros Socorros</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ações que podem salvar a vida do seu pet até chegar ao atendimento veterinário<br />
              <span className="text-lg font-semibold text-red-600">⚠️ Sempre ligue para nossa emergência durante estes procedimentos</span>
            </p>
          </div>
          
          {/* Emergency Contact Banner */}
          <div className="bg-red-600 text-white rounded-2xl p-6 text-center mb-16">
            <h3 className="text-xl font-bold mb-2">📞 LIGUE DURANTE O PROCEDIMENTO</h3>
            <p className="text-red-100 mb-4">Nossa equipe orientará você pelo telefone</p>
            <Button 
              size="lg"
              className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl cursor-pointer"
              onClick={() => window.location.href = `tel:${contact.phone.primary}`}
            >
              <Phone className="w-5 h-5 mr-2" />
              {contact.phone.primary}
            </Button>
          </div>
          
          {/* Protocols Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {firstAidProtocols.map((protocol, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-50 to-white border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  {/* Protocol Header */}
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${protocol.color} rounded-xl flex items-center justify-center text-2xl mr-4`}>
                      {protocol.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{protocol.title}</h3>
                  </div>
                  
                  {/* Steps List */}
                  <div className="space-y-3">
                    {protocol.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {stepIndex + 1}
                        </div>
                        <span className="text-slate-700 leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Atendimento */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              🔄 <span className="text-blue-600">Como Funciona o Atendimento de Emergência</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Nosso atendimento de emergência segue um protocolo estruturado para garantir a melhor e mais rápida assistência<br />
              <span className="text-lg">Transparência total em cada etapa do processo</span>
            </p>
          </div>
          
          {/* Trust Indicator */}
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-2xl p-6 text-center mb-16">
            <h3 className="text-2xl font-bold mb-2">🚑 Protocolo Estruturado de Emergência</h3>
            <p className="text-blue-100">
              Equipe médica completa • Equipamentos de última geração • Monitoramento 24h
            </p>
          </div>
          
          {/* Process Timeline */}
          <div className="space-y-8 mb-12">
            {emergencyProcess.map((step, index) => (
              <div key={step.step} className="flex items-start">
                {/* Step Card */}
                <Card className={`flex-1 bg-gradient-to-br ${step.bgGradient} ${step.borderColor} border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  <CardContent className="p-6">
                    {/* Step Header */}
                    <div className="flex items-center mb-4">
                      <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-3xl mr-6 shadow-lg`}>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                          <Badge className={`${step.color} text-white border-0 font-semibold px-3 py-1`}>
                            {step.time}
                          </Badge>
                        </div>
                        <p className="text-slate-700 font-medium">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Step Detail */}
                    <div className="bg-white/80 rounded-xl p-4 border border-slate-200">
                      <p className="text-slate-600 leading-relaxed">{step.detail}</p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Step Number */}
                <div className="flex flex-col items-center ml-6">
                  <div className={`w-10 h-10 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {step.step}
                  </div>
                  {index < emergencyProcess.length - 1 && (
                    <div className="w-0.5 h-16 bg-slate-300 mt-4"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Process Summary */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-blue-200 border-2 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              ⏱️ Tempo Médio Total: 45-60 minutos
            </h3>
            <p className="text-slate-600 text-lg mb-4">
              Desde a chegada até a estabilização completa do seu pet
            </p>
            <div className="flex justify-center space-x-8 text-sm text-slate-500">
              <div>• Veterinário presente 24h</div>
              <div>• Equipamentos prontos</div>
              <div>• Atualizações constantes</div>
            </div>
          </div>
        </div>
      </section>

      {/* O que Levar e O que Esperar */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              🎒 <span className="text-blue-600">Prepare-se para o Atendimento</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Informações importantes para agilizar seu atendimento<br />
              <span className="text-lg">Organize-se antes de vir à clínica</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* O que Levar */}
            <div className="bg-gradient-to-br from-slate-50 to-rose-50 border-rose-100 shadow-lg shadow-rose-900/10 hover:shadow-xl hover:shadow-rose-900/20 rounded-2xl p-6 transition-all duration-300">
              <h3 className="text-xl font-bold text-rose-600 mb-6 text-center">O que Levar para a Clínica</h3>
              <div className="space-y-4">
                {whatToBring.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.item}</h4>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* O que Esperar */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-blue-100 shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 rounded-2xl p-6 transition-all duration-300">
              <h3 className="text-xl font-bold text-blue-600 mb-6 text-center">O que Esperar Durante o Atendimento</h3>
              <div className="space-y-4">
                {whatToExpect.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.item}</h4>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              ⭐ <span className="text-amber-500">Histórias de Sucesso</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              O que nossos clientes dizem sobre nosso atendimento de emergência<br />
              <span className="text-lg">Depoimentos reais de tutores satisfeitos</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => {
              const avatarColors = ['bg-blue-100 text-blue-600', 'bg-rose-100 text-rose-600'];
              return (
                <Card key={testimonial.id} className="bg-gradient-to-br from-slate-50 to-blue-50 border-blue-100 shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300">
                  <CardContent className="pt-6">
                    <p className="text-slate-700 italic mb-4">{`"${testimonial.text}"`}</p>
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full ${avatarColors[index]} flex items-center justify-center font-bold mr-3`}>
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{testimonial.name}</p>
                        <p className="text-sm text-slate-600">{testimonial.pet}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mapa e Localização */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              🗺️ <span className="text-blue-600">Nossa Localização</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Encontre-nos facilmente e venha com seu pet em caso de emergência<br />
              <span className="text-lg">Acesso fácil e estacionamento disponível</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Mapa */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-blue-100 shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 rounded-2xl p-6 transition-all duration-300">
              <div className="w-full h-64 rounded-xl overflow-hidden mb-4 relative">
                <iframe
                  src="https://maps.google.com/maps?q=Rua%20Julio%20Wischral%2C%201099%2C%20Uberaba%2C%20Curitiba%2C%20PR%2C%20Brasil&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Localização CSM Clínica Veterinária"
                ></iframe>
                
                {/* Overlay for emergency info */}
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                  🚨 EMERGÊNCIA 24H
                </div>
              </div>
              
              {/* Address Details */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-white/80 rounded-lg border border-blue-200">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Rua Julio Wischral, 1099</p>
                    <p className="text-sm text-slate-600">Uberaba, Curitiba/PR</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">🅿️</span>
                    <span className="text-slate-600">Estacionamento</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-500">⏰</span>
                    <span className="text-slate-600">15-20 min centro</span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <Button 
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all duration-300 cursor-pointer"
                    onClick={() => window.open('https://maps.google.com/?q=Rua+Julio+Wischral,+1099,+Uberaba,+Curitiba,+PR', '_blank')}
                  >
                    🗺️ Ver no Maps
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-all duration-300 cursor-pointer"
                    onClick={() => window.open('https://waze.com/ul?q=Rua+Julio+Wischral,+1099,+Curitiba,+PR', '_blank')}
                  >
                    🚗 Abrir no Waze
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Informações de Acesso */}
            <div className="bg-gradient-to-br from-slate-50 to-rose-50 border-rose-100 shadow-lg shadow-rose-900/10 hover:shadow-xl hover:shadow-rose-900/20 rounded-2xl p-6 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Informações de Acesso</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                    🏥
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Entrada Principal</h4>
                    <p className="text-sm text-slate-600">Sinalizada para emergências</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm">
                    🅿️
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Estacionamento</h4>
                    <p className="text-sm text-slate-600">Vagas próximas à entrada</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                    ⏰
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Horário</h4>
                    <p className="text-sm text-slate-600">24 horas, todos os dias</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              ❓ <span className="text-blue-600">Perguntas Frequentes</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre nosso atendimento de emergência<br />
              <span className="text-lg">Respostas para as principais questões dos tutores</span>
            </p>
          </div>
          
          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto mb-12">
            {emergencyFAQs.map((faq, index) => (
              <Card key={index} className="mb-4 bg-gradient-to-br from-slate-50 to-white border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
        
      {/* Contatos Finais */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 text-white rounded-2xl p-6 sm:p-8 text-center shadow-xl shadow-red-900/20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Precisa de Atendimento Imediato?</h2>
            <p className="text-lg sm:text-xl text-red-100 mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar você e seu pet 24 horas por dia
            </p>
            <div className="flex flex-row gap-4 sm:gap-6 justify-center max-w-4xl mx-auto px-2">
              <Button 
                size="lg"
                className="bg-white text-red-600 hover:bg-red-50 px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-red-900/20 flex-1 max-w-xs cursor-pointer"
                onClick={() => window.location.href = `tel:${contact.phone.primary}`}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                LIGAÇÃO
              </Button>
              <Button 
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-emerald-900/20 flex-1 max-w-xs cursor-pointer"
                onClick={() => window.open(`https://wa.me/${contact.phone.whatsapp}`, '_blank')}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                WHATSAPP
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}