'use client';

import { AlertTriangle, Scissors, Shield, Home, Stethoscope, Camera, ArrowRight } from 'lucide-react';
import { ButtonCSM } from '@/components/ui/button-csm';
import { CardCSM, CardCsmContent, CardCsmHeader, CardCsmTitle } from '@/components/ui/card-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';

export default function ServicesSection() {
  const services = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-csm-blue" />,
      title: 'Urgência',
      subtitle: 'Consulta de Urgência e Emergência',
      description: 'Para situações que não podem esperar: dificuldades respiratórias, vômitos, acidentes. Avaliação imediata do estado do seu pet.',
      cta: 'Como Funciona'
    },
    {
      icon: <Scissors className="w-8 h-8 text-csm-blue" />,
      title: 'Cirurgias',
      subtitle: 'Cirurgias Ortopédicas e Gerais',
      description: 'Procedimentos necessários para recuperação da saúde. Centro cirúrgico equipado com tecnologia moderna para maior segurança.',
      cta: 'Saiba Mais'
    },
    {
      icon: <Shield className="w-8 h-8 text-csm-blue" />,
      title: 'Prevenção',
      subtitle: 'Vacinas e Exames para o Seu Pet',
      description: 'Proteção contra doenças graves como cinomose, parvovirose e raiva. Exames preventivos para detectar problemas antes que se tornem sérios.',
      cta: 'Ver Vacinas'
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-csm-blue" />,
      title: 'Internação',
      subtitle: 'Tratamento Constante e de Emergência',
      description: 'Para pets que precisam de cuidados intensivos. Monitoramento profissional durante recuperação. Internação separada para cães e gatos.',
      cta: 'Entender Processo'
    },
    {
      icon: <Camera className="w-8 h-8 text-csm-blue" />,
      title: 'Diagnóstico',
      subtitle: 'Exames de Imagem para o Seu Melhor Amigo',
      description: 'Diagnósticos precisos que ajudam a identificar problemas internos que não são visíveis externamente. Fundamentais para tratamento correto.',
      cta: 'Tipos de Exames'
    },
    {
      icon: <Home className="w-8 h-8 text-csm-blue" />,
      title: 'Domiciliar',
      subtitle: 'Atendimento Domiciliar para o Conforto do Seu Pet',
      description: 'Para pets que ficam estressados fora de casa ou em situações onde o deslocamento é difícil. Cuidado veterinário no ambiente familiar.',
      cta: 'Solicitar Visita'
    }
  ];

  return (
    <section className="py-20 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-csm-gray-dark mb-6">
            <span className="text-csm-blue">Serviços Especializados</span>
          </h2>
          <p className="text-xl text-csm-gray max-w-3xl mx-auto">
            Cuidados Especializados Para Cada Necessidade<br />
            <span className="text-lg">Serviços completos com a melhor equipe veterinária e tecnologia avançada</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                
                <BadgeCSM variant="gray" className="w-fit">
                  {service.subtitle}
                </BadgeCSM>
              </CardCsmHeader>
              
              <CardCsmContent>
                <p className="text-csm-gray leading-relaxed mb-6">
                  {service.description}
                </p>

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

        {/* Important Notice */}
        <CardCSM variant="highlight" className="text-center">
          <CardCsmContent className="p-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-csm-yellow rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-csm-gray-dark" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-csm-gray-dark mb-4">
              Observação Importante
            </h3>
            <p className="text-csm-gray max-w-3xl mx-auto">
              Alguns serviços, como ultrassonografia e radiografia, estão sujeitos à agenda de profissionais terceirizados. 
              A CSM é 24 Horas para internamento e atendimento de urgência e emergência.
            </p>
          </CardCsmContent>
        </CardCSM>
      </div>
    </section>
  );
}