'use client';

import { CheckCircle, Star, ArrowRight } from 'lucide-react';
import { ButtonCSM } from '@/components/ui/button-csm';
import { CardCSM, CardCsmContent, CardCsmHeader, CardCsmTitle } from '@/components/ui/card-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';

export default function ClubSectionTest() {
  const plans = [
    {
      name: 'Basic',
      price: 'R$ 99',
      period: '/mês',
      description: 'Ideal para tutores que buscam cuidados preventivos',
      benefits: [
        '1 Consulta mensal incluída',
        '20% desconto em exames',
        '15% desconto em vacinas',
        'Atendimento prioritário',
        'Lembretes de vacinação'
      ],
      highlight: false
    },
    {
      name: 'Premium',
      price: 'R$ 179',
      period: '/mês',
      description: 'Mais completo para pets que precisam de acompanhamento',
      benefits: [
        '2 Consultas mensais incluídas',
        '30% desconto em exames',
        '25% desconto em vacinas',
        '20% desconto em cirurgias',
        'Atendimento prioritário 24h',
        'Telemedicina incluída',
        '1 Banho e tosa por mês'
      ],
      highlight: true
    },
    {
      name: 'VIP',
      price: 'R$ 299',
      period: '/mês',
      description: 'Cuidado completo e exclusivo para seu pet',
      benefits: [
        'Consultas ilimitadas',
        '50% desconto em exames',
        '40% desconto em vacinas',
        '30% desconto em cirurgias',
        'Prioridade máxima 24h',
        'Telemedicina ilimitada',
        '2 Banhos e tosas por mês',
        'Check-up semestral gratuito',
        'Atendimento domiciliar incluído'
      ],
      highlight: false
    }
  ];

  return (
    <section id="club" className="fullpage-section relative bg-csm-yellow-light flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <BadgeCSM variant="yellow" className="mb-4 text-base">
            Plano de Assinatura
          </BadgeCSM>
          <h2 className="text-4xl lg:text-6xl font-bold text-csm-gray-dark mb-6">
            CSMVet <span className="text-csm-blue">Club</span>
          </h2>
          <p className="text-xl text-csm-gray max-w-3xl mx-auto">
            Cuidado contínuo com economia e benefícios exclusivos para seu pet
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <CardCSM 
              key={index}
              variant={plan.highlight ? 'highlight' : 'default'}
              className={`relative transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl ${plan.highlight ? 'md:scale-105 shadow-2xl' : ''}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <BadgeCSM variant="yellow" className="text-sm px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Mais Popular
                  </BadgeCSM>
                </div>
              )}

              <CardCsmHeader className="text-center pb-6 border-b border-csm-blue-light">
                <CardCsmTitle className="text-2xl font-bold text-csm-gray-dark mb-2">
                  {plan.name}
                </CardCsmTitle>
                <div className="mb-3">
                  <span className="text-4xl font-bold text-csm-blue">{plan.price}</span>
                  <span className="text-csm-gray">{plan.period}</span>
                </div>
                <p className="text-sm text-csm-gray">
                  {plan.description}
                </p>
              </CardCsmHeader>

              <CardCsmContent className="pt-6">
                <ul className="space-y-3 mb-6">
                  {plan.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-2 text-csm-gray-dark">
                      <CheckCircle className="w-5 h-5 text-csm-blue flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <ButtonCSM 
                  variant={plan.highlight ? 'primary' : 'secondary'}
                  className="w-full"
                  size="lg"
                >
                  Quero Fazer Parte
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
