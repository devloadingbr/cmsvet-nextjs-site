'use client';

import { Leaf, AlertTriangle, Shield, Building, DollarSign, BookOpen, ArrowRight, Download, Calculator, Camera, Phone, MessageCircle } from 'lucide-react';
import { ButtonCSM } from '@/components/ui/button-csm';
import { urls, whatsappMessages } from '@/lib/env';

export default function InfoSection() {
  const infoCards = [
    {
      icon: <Leaf className="w-8 h-8 text-csm-blue" />,
      title: 'Segurança',
      subtitle: 'Plantas Tóxicas para Pets',
      description: 'Lista completa de plantas perigosas. Saiba quais evitar em casa e no jardim para proteger seu pet.',
      cta: 'Ver Lista Completa',
      bgColor: 'bg-white',
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-csm-blue" />,
      title: 'Emergência',
      subtitle: 'Primeiros Socorros',
      description: 'Guia completo de emergência. O que fazer antes de chegar na clínica em situações críticas.',
      cta: 'Baixar Guia',
      bgColor: 'bg-white',
    },
    {
      icon: <Shield className="w-8 h-8 text-csm-blue" />,
      title: 'Prevenção',
      subtitle: 'Calendário de Vacinas',
      description: 'Cronograma personalizado. Digite a idade e receba o plano completo de vacinação.',
      cta: 'Calcular Vacinas',
      bgColor: 'bg-white',
    },
    {
      icon: <Building className="w-8 h-8 text-csm-blue" />,
      title: 'Estrutura',
      subtitle: 'Nossa Estrutura',
      description: 'Tour virtual da clínica. Conheça nossos equipamentos e instalações modernas.',
      cta: 'Fazer Tour',
      bgColor: 'bg-white',
    },
    {
      icon: <DollarSign className="w-8 h-8 text-csm-blue" />,
      title: 'Transparência',
      subtitle: 'Preços Transparentes',
      description: 'Tabela completa de valores. Sem surpresas. Parcelamos em até 6x sem juros.',
      cta: 'Ver Preços',
      bgColor: 'bg-white',
    },
    {
      icon: <BookOpen className="w-8 h-8 text-csm-blue" />,
      title: 'Conteúdo',
      subtitle: 'Blog Veterinário',
      description: 'Dicas e cuidados diários. Conteúdo atualizado por nossa equipe especializada.',
      cta: 'Ler Artigos',
      bgColor: 'bg-white',
    }
  ];

  return (
    <section className="py-20 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-csm-gray-dark mb-6">
            <span className="text-csm-blue">Informações Essenciais</span>
          </h2>
          <p className="text-xl text-csm-gray max-w-3xl mx-auto">
            Informações Que Podem Salvar Vidas<br />
            <span className="text-lg">Conteúdo essencial para cuidar melhor do seu pet com informações atualizadas e confiáveis</span>
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoCards.map((card, index) => (
            <div 
              key={index}
              className="bg-white border border-csm-blue-light rounded-lg p-8 hover:shadow-lg hover:border-csm-blue transition-all duration-300"
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-6 mx-auto">
                  {card.icon}
                </div>
                
                <h3 className="text-xl font-bold text-csm-gray-dark mb-2">
                  {card.title}
                </h3>
                
                <h4 className="text-lg font-semibold text-csm-blue mb-4">
                  {card.subtitle}
                </h4>
                
                <p className="text-csm-gray leading-relaxed mb-6">
                  {card.description}
                </p>

                <ButtonCSM variant="primary" className="w-full">
                  {card.cta}
                  {index === 1 ? (
                    <Download className="w-4 h-4" />
                  ) : index === 2 ? (
                    <Calculator className="w-4 h-4" />
                  ) : index === 3 ? (
                    <Camera className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </ButtonCSM>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Section - Redesign Moderno */}
        <div className="mt-20 bg-gradient-to-br from-csm-blue-light/10 to-white rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Content */}
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-4">
                Seu Pet Merece o <span className="text-csm-blue">Melhor Cuidado</span>
              </h3>
              <p className="text-lg text-csm-gray leading-relaxed">
                Entre em contato agora e garanta a saúde e felicidade do seu melhor amigo. Nossa equipe está pronta para atender.
              </p>
            </div>

            {/* Right Content - CTAs */}
            <div className="flex flex-col gap-4">
              <ButtonCSM 
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => window.open(urls.whatsappWithMessage(whatsappMessages.emergency), '_blank')}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </ButtonCSM>
              <ButtonCSM 
                variant="secondary"
                size="lg"
                className="w-full"
                onClick={() => window.open(urls.phoneCall, '_self')}
              >
                <Phone className="w-5 h-5" />
                Ligar Agora
              </ButtonCSM>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}