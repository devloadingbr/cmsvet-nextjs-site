'use client';

import { CreditCard, Smartphone, Calendar } from 'lucide-react';
import { BadgeCSM } from '@/components/ui/badge-csm';
import { CardCSM, CardCsmContent } from '@/components/ui/card-csm';

export default function ConveniosSectionTest() {
  const planos = [
    'Porto Seguro Pet',
    'Petlove',
    'Prudent Pet',
    'Sanivet',
    'Vet Smart',
    'Pets Best'
  ];

  const pagamentos = [
    {
      icon: <CreditCard className="w-6 h-6 text-csm-blue" />,
      title: 'Cartões',
      description: 'Crédito e Débito'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-csm-blue" />,
      title: 'PIX',
      description: 'Pagamento instantâneo'
    },
    {
      icon: <Calendar className="w-6 h-6 text-csm-blue" />,
      title: 'Parcelamento',
      description: 'Até 6x sem juros'
    }
  ];

  return (
    <section id="convenios" className="fullpage-section relative bg-gray-50 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <BadgeCSM variant="yellow" className="mb-4 text-base">
            Facilidades
          </BadgeCSM>
          <h2 className="text-4xl lg:text-6xl font-bold text-csm-gray-dark mb-6">
            Aceitamos <span className="text-csm-blue">Planos de Saúde Pet</span>
          </h2>
          <p className="text-xl text-csm-gray max-w-3xl mx-auto">
            Trabalhamos com os principais planos e oferecemos diversas formas de pagamento
          </p>
        </div>

        {/* Planos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          {planos.map((plano, index) => (
            <CardCSM key={index} variant="default">
              <CardCsmContent className="p-4 text-center">
                <div className="h-16 flex items-center justify-center">
                  <span className="font-bold text-csm-gray-dark">{plano}</span>
                </div>
              </CardCsmContent>
            </CardCSM>
          ))}
        </div>

        {/* Formas de Pagamento */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-csm-gray-dark text-center mb-8">
            Formas de Pagamento
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pagamentos.map((pagamento, index) => (
              <CardCSM key={index} variant="default">
                <CardCsmContent className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    {pagamento.icon}
                  </div>
                  <h4 className="font-bold text-csm-gray-dark mb-1">
                    {pagamento.title}
                  </h4>
                  <p className="text-sm text-csm-gray">
                    {pagamento.description}
                  </p>
                </CardCsmContent>
              </CardCSM>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
