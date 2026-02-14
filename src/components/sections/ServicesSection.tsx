'use client';

import { AlertTriangle, Scissors, Shield, Home, Stethoscope, Camera, ArrowRight } from 'lucide-react';
import { ButtonCSM } from '@/components/ui/button-csm';
import { CardCSM, CardCsmContent, CardCsmHeader, CardCsmTitle } from '@/components/ui/card-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';

export default function ServicesSection() {
  const services = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-csm-blue" />,
      title: 'Urgência e Emergência',
      badge: '24 Horas',
      badgeVariant: 'yellow' as const,
      cta: 'Como Funciona'
    },
    {
      icon: <Scissors className="w-8 h-8 text-csm-blue" />,
      title: 'Cirurgias',
      cta: 'Saiba Mais'
    },
    {
      icon: <Shield className="w-8 h-8 text-csm-blue" />,
      title: 'Vacinas e Prevenção',
      badge: 'Essencial',
      badgeVariant: 'yellow' as const,
      cta: 'Ver Vacinas'
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-csm-blue" />,
      title: 'Internação',
      badge: 'Monitoramento 24h',
      badgeVariant: 'yellow' as const,
      cta: 'Entender Processo'
    },
    {
      icon: <Camera className="w-8 h-8 text-csm-blue" />,
      title: 'Exames e Diagnóstico',
      cta: 'Tipos de Exames'
    },
    {
      icon: <Home className="w-8 h-8 text-csm-blue" />,
      title: 'Atendimento Domiciliar',
      cta: 'Solicitar Visita'
    }
  ];

  return (
    <section className="py-20 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-csm-gray-dark mb-6">
            <span className="text-csm-blue">Nossos Serviços</span>
          </h2>
          <p className="text-xl text-csm-gray max-w-3xl mx-auto">
            Cuidado completo com equipe especializada e tecnologia avançada
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <CardCSM 
              key={index}
              variant="default"
            >
              <CardCsmHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-csm-blue-light rounded-lg mb-4">
                  {service.icon}
                </div>
                
                <CardCsmTitle className="text-xl font-bold text-csm-gray-dark mb-2">
                  {service.title}
                </CardCsmTitle>
                
                {service.badge && (
                  <BadgeCSM variant={service.badgeVariant || 'blue'} className="w-fit">
                    {service.badge}
                  </BadgeCSM>
                )}
              </CardCsmHeader>
              
              <CardCsmContent>
                <ButtonCSM 
                  variant="primary"
                  className="w-full"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </ButtonCSM>
              </CardCsmContent>
            </CardCSM>
          ))}
        </div>
      </div>
    </section>
  );
}