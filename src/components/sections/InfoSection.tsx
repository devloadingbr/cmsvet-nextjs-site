'use client';

import { Leaf, AlertTriangle, Shield, Building, DollarSign, BookOpen, ArrowRight, Download, Calculator, Camera } from 'lucide-react';

export default function InfoSection() {
  const infoCards = [
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: '🌿 Segurança',
      subtitle: 'Plantas Tóxicas para Pets',
      description: 'Lista completa de plantas perigosas. Saiba quais evitar em casa e no jardim para proteger seu pet.',
      cta: 'Ver Lista Completa',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      ctaColor: 'bg-green-600 hover:bg-green-700'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: '🚨 Emergência',
      subtitle: 'Primeiros Socorros',
      description: 'Guia completo de emergência. O que fazer antes de chegar na clínica em situações críticas.',
      cta: 'Baixar Guia',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      ctaColor: 'bg-red-600 hover:bg-red-700'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: '💉 Prevenção',
      subtitle: 'Calendário de Vacinas',
      description: 'Cronograma personalizado. Digite a idade e receba o plano completo de vacinação.',
      cta: 'Calcular Vacinas',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      ctaColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: <Building className="w-8 h-8 text-purple-500" />,
      title: '🏥 Estrutura',
      subtitle: 'Nossa Estrutura',
      description: 'Tour virtual da clínica. Conheça nossos equipamentos e instalações modernas.',
      cta: 'Fazer Tour',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      ctaColor: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-amber-500" />,
      title: '💰 Transparência',
      subtitle: 'Preços Transparentes',
      description: 'Tabela completa de valores. Sem surpresas. Parcelamos em até 6x sem juros.',
      cta: 'Ver Preços',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      ctaColor: 'bg-amber-600 hover:bg-amber-700'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-indigo-500" />,
      title: '📖 Conteúdo',
      subtitle: 'Blog Veterinário',
      description: 'Dicas e cuidados diários. Conteúdo atualizado por nossa equipe especializada.',
      cta: 'Ler Artigos',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      ctaColor: 'bg-indigo-600 hover:bg-indigo-700'
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-blue-400"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-amber-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            💡 <span className="text-blue-600">Informações Essenciais</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Informações Que Podem Salvar Vidas<br />
            <span className="text-lg">Conteúdo essencial para cuidar melhor do seu pet com informações atualizadas e confiáveis</span>
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoCards.map((card, index) => (
            <div 
              key={index}
              className={`${card.bgColor} ${card.borderColor} border-2 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105`}
            >
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {card.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {card.title}
                </h3>
                
                <h4 className="text-lg font-semibold text-slate-700 mb-4">
                  {card.subtitle}
                </h4>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  {card.description}
                </p>

                <button className={`w-full ${card.ctaColor} text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105`}>
                  <span>{card.cta}</span>
                  {index === 1 ? (
                    <Download className="w-4 h-4" />
                  ) : index === 2 ? (
                    <Calculator className="w-4 h-4" />
                  ) : index === 3 ? (
                    <Camera className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Seu Pet Merece o Melhor Cuidado!
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Não espere! Entre em contato agora e garante a saúde e felicidade do seu melhor amigo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
              <span>🚨 EMERGÊNCIA (41) 9999-9999</span>
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
              <span>📱 WhatsApp (41) 8888-8888</span>
            </button>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
              <span>📅 Agendar Online</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}