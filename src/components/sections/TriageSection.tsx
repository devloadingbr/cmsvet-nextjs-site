/**
 * Nova seção de triagem com IA para a homepage
 */

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useShowPromotionalCard, useStartInlineTriagem, useExitInlineTriagem } from '@/stores/triagem-store';
import { TriagemWizard } from '@/components/triagem/TriagemWizard';

export default function TriageSection() {
  const showPromotionalCard = useShowPromotionalCard();
  const startInlineTriagem = useStartInlineTriagem();
  const exitInlineTriagem = useExitInlineTriagem();

  const features = [
    {
      icon: '🤖',
      title: 'IA Veterinária',
      description: 'Análise inteligente dos sintomas do seu pet'
    },
    {
      icon: '⚡',
      title: 'Resultado Imediato',
      description: 'Orientações personalizadas em minutos'
    },
    {
      icon: '🩺',
      title: 'Triagem Profissional',
      description: 'Baseado em conhecimento veterinário especializado'
    },
    {
      icon: '💬',
      title: 'Chat Interativo',
      description: 'Tire dúvidas específicas sobre seu pet'
    }
  ];

  const symptoms = [
    { emoji: '💨', name: 'Respiração difícil' },
    { emoji: '🤢', name: 'Vômito' },
    { emoji: '🩸', name: 'Sangramento' },
    { emoji: '😴', name: 'Muito fraco' },
    { emoji: '🚫', name: 'Não come' },
    { emoji: '💔', name: 'Sinais de dor' },
    { emoji: '🧠', name: 'Confuso' },
    { emoji: '⚡', name: 'Convulsão' }
  ];

  return (
    <section className="py-20 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="text-lg">🚀</span>
            <span>NOVO: Sistema de Triagem com IA</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            🤖 Triagem Veterinária <span className="text-blue-600">Inteligente</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Não sabe se é emergência? Nossa IA veterinária analisa os sintomas do seu pet 
            e te orienta sobre o melhor cuidado a tomar.
          </p>
        </div>

        {/* Main CTA Card - Toggle entre Promocional e Triagem */}
        <div className="mb-16">
          <AnimatePresence mode="wait">
            {showPromotionalCard ? (
              <motion.div
                key="promotional"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-blue-600 border-0 text-white overflow-hidden relative">
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 text-6xl opacity-20">🐾</div>
                  <div className="absolute bottom-4 left-4 text-4xl opacity-20">💡</div>
                  
                  <CardContent className="p-8 lg:p-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                            Seu Pet Não Está Bem?
                          </h3>
                          <p className="text-xl text-blue-100 leading-relaxed">
                            Em apenas 3 minutos, nossa IA analisa os sintomas e te dá orientações 
                            personalizadas sobre urgência e cuidados necessários.
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-blue-100">45 sintomas catalogados para análise precisa</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-blue-100">Chat com IA para tirar dúvidas específicas</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-blue-100">Orientações personalizadas por idade e espécie</span>
                          </div>
                        </div>
                        
                        <Button 
                          size="lg" 
                          onClick={startInlineTriagem}
                          className="bg-amber-500 hover:bg-amber-600 text-blue-900 px-8 py-6 text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl cursor-pointer"
                        >
                          🐾 Iniciar Triagem Grátis
                        </Button>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-center">
                            Sintomas Mais Comuns Analisados:
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {symptoms.map((symptom, index) => (
                              <div 
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-white/20 transition-all"
                              >
                                <div className="text-2xl mb-1">{symptom.emoji}</div>
                                <div className="text-sm text-blue-100">{symptom.name}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key="triagem"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <TriagemWizard 
                  mode="inline"
                  onExit={exitInlineTriagem}
                  onComplete={() => {
                    console.log('Triagem inline completed');
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105"
            >
              <CardHeader className="text-center pb-3">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg font-bold text-slate-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
}