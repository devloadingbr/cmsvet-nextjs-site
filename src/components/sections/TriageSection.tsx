'use client';

import { Brain, Zap, Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function TriageSection() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: 'Avaliação Rápida',
      description: 'Receba uma análise inicial baseada em IA sobre os sintomas do seu pet em minutos.'
    },
    {
      icon: <Brain className="w-6 h-6 text-green-500" />,
      title: 'Especializado para Pets',
      description: 'Sistema treinado especificamente para identificar sintomas em cães e gatos.'
    },
    {
      icon: <Target className="w-6 h-6 text-purple-500" />,
      title: 'Orientação Precisa',
      description: 'Receba recomendações sobre a urgência e os próximos passos para o cuidado do seu pet.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-amber-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-blue-400"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-amber-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Triagem Digital <span className="text-blue-600">Inteligente</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Utilize nossa triagem com Inteligência Artificial para entender melhor os sintomas do seu pet e obter orientações iniciais sobre a condição de saúde dele.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-12 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-900/20 mx-auto"
          >
            <Brain className="w-6 h-6" />
            INICIAR TRIAGEM COM IA
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-white/90 backdrop-blur-sm border-blue-100 shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Triage Demo */}
        <div className="mt-16">
          {/* Interactive Demo - Full Width */}
          <Card className="bg-white/90 backdrop-blur-sm border-blue-100 shadow-xl shadow-blue-900/10 max-w-2xl mx-auto">
            <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-amber-500 rounded-full mx-auto flex items-center justify-center mb-4">
                <Brain className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Triagem Digital Inteligente
              </h3>
              <p className="text-slate-600 text-sm">
                Utilize nossa triagem com IA para avaliar os sintomas
              </p>
            </div>

            {/* Mock Symptoms */}
            <div className="space-y-3 mb-6">
              {[
                { icon: '🤢', text: 'Vômito', selected: true },
                { icon: '😴', text: 'Muito fraco', selected: false },
                { icon: '🔥', text: 'Febre', selected: true },
                { icon: '💔', text: 'Dor', selected: false }
              ].map((symptom, index) => (
                <button
                  key={index}
                  className={`w-full p-3 rounded-lg border-2 transition-all duration-200 flex items-center space-x-3 ${
                    symptom.selected 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-slate-200 hover:border-amber-400 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-2xl">{symptom.icon}</span>
                  <span className="text-slate-900 font-medium">{symptom.text}</span>
                </button>
              ))}
            </div>

            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-6 font-semibold transition-all duration-300 hover:scale-105"
            >
              🤖 INICIAR TRIAGEM COM IA
            </Button>

            <p className="text-xs text-slate-500 text-center mt-4">
              ⚠️ Esta avaliação não substitui consulta veterinária
            </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}