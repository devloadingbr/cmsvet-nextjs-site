'use client';

import { AlertTriangle, Scissors, Shield, Home, Stethoscope, Camera, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ServicesSection() {
  const services = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: '🚨 Urgência',
      subtitle: 'Consulta de Urgência e Emergência',
      description: 'Para situações que não podem esperar: dificuldades respiratórias, vômitos, acidentes. Avaliação imediata do estado do seu pet.',
      cta: 'Como Funciona',
      color: 'red',
      bgColor: 'bg-white',
      borderColor: 'border-red-500'
    },
    {
      icon: <Scissors className="w-8 h-8 text-blue-500" />,
      title: '🏥 Cirurgias',
      subtitle: 'Cirurgias Ortopédicas e Gerais',
      description: 'Procedimentos necessários para recuperação da saúde. Centro cirúrgico equipado com tecnologia moderna para maior segurança.',
      cta: 'Saiba Mais',
      color: 'blue',
      bgColor: 'bg-white',
      borderColor: 'border-blue-500'
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-500" />,
      title: '💉 Prevenção',
      subtitle: 'Vacinas e Exames para o Seu Pet',
      description: 'Proteção contra doenças graves como cinomose, parvovirose e raiva. Exames preventivos para detectar problemas antes que se tornem sérios.',
      cta: 'Ver Vacinas',
      color: 'emerald',
      bgColor: 'bg-white',
      borderColor: 'border-emerald-500'
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-violet-500" />,
      title: '🛏️ Internação',
      subtitle: 'Tratamento Constante e de Emergência',
      description: 'Para pets que precisam de cuidados intensivos. Monitoramento profissional durante recuperação. Internação separada para cães e gatos.',
      cta: 'Entender Processo',
      color: 'violet',
      bgColor: 'bg-white',
      borderColor: 'border-violet-500'
    },
    {
      icon: <Camera className="w-8 h-8 text-cyan-500" />,
      title: '🔬 Diagnóstico',
      subtitle: 'Exames de Imagem para o Seu Melhor Amigo',
      description: 'Diagnósticos precisos que ajudam a identificar problemas internos que não são visíveis externamente. Fundamentais para tratamento correto.',
      cta: 'Tipos de Exames',
      color: 'cyan',
      bgColor: 'bg-white',
      borderColor: 'border-cyan-500'
    },
    {
      icon: <Home className="w-8 h-8 text-orange-500" />,
      title: '🏠 Domiciliar',
      subtitle: 'Atendimento Domiciliar para o Conforto do Seu Pet',
      description: 'Para pets que ficam estressados fora de casa ou em situações onde o deslocamento é difícil. Cuidado veterinário no ambiente familiar.',
      cta: 'Solicitar Visita',
      color: 'orange',
      bgColor: 'bg-white',
      borderColor: 'border-orange-500'
    }
  ];

  return (
    <section className="py-20 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            🩺 <span className="text-blue-600">Serviços Especializados</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Cuidados Especializados Para Cada Necessidade<br />
            <span className="text-lg">Serviços completos com a melhor equipe veterinária e tecnologia avançada</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`${service.bgColor} ${service.borderColor} border-2 hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105`}
            >
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {service.icon}
                </div>
                
                <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                  {service.title}
                </CardTitle>
                
                <Badge variant="secondary" className="w-fit">
                  {service.subtitle}
                </Badge>
              </CardHeader>
              
              <CardContent>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <Button 
                  className={`w-full bg-${service.color}-600 hover:bg-${service.color}-700 transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer`}
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Notice */}
        <Card className="bg-white border-2 border-amber-500 text-center">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚠️</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Observação Importante
            </h3>
            <p className="text-slate-700 max-w-3xl mx-auto">
              Alguns serviços, como ultrassonografia e radiografia, estão sujeitos à agenda de profissionais terceirizados. 
              A CSM é 24 Horas para internamento e atendimento de urgência e emergência.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}