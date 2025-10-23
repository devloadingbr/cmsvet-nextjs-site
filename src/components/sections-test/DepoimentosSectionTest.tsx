'use client';

import { Star } from 'lucide-react';
import { CardCSM, CardCsmContent } from '@/components/ui/card-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { stats } from '@/lib/env';

export default function DepoimentosSectionTest() {
  const testimonials = [
    {
      id: 'KD',
      name: 'Kaoana Deuchmann',
      petName: 'Mimi',
      review: 'Todas as médicas veterinárias que atenderam nossa gatinha foram incríveis! Fizeram uma investigação detalhada.',
      rating: 5
    },
    {
      id: 'IN',
      name: 'Isis Nogueira',
      petName: 'Bella',
      review: 'Levei minha cachorrinha porque tinha ingerido chocolate. Deram todo o suporte necessário.',
      rating: 5
    },
    {
      id: 'JM',
      name: 'Jessé Mafiolete',
      petName: 'Félix',
      review: 'Nosso gatinho órfão estava muito mal. A equipe foi super prestativa. Hoje ele está grande e forte!',
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="fullpage-section bg-csm-yellow-light flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <BadgeCSM variant="blue" className="mb-4">
            Depoimentos
          </BadgeCSM>
          <h2 className="text-4xl lg:text-6xl font-bold text-csm-gray-dark mb-6">
            Mais de {stats.petsCared.toLocaleString()} Pets Já <span className="text-csm-blue">Confiaram</span> em Nós
          </h2>
          <p className="text-xl text-csm-gray max-w-3xl mx-auto">
            Histórias reais de tutores que confiaram na nossa equipe
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <CardCSM key={index} variant="default">
              <CardCsmContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12 bg-csm-blue flex-shrink-0">
                    <AvatarFallback className="text-white font-bold bg-transparent text-sm">
                      {testimonial.id}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-csm-gray-dark text-sm truncate">
                      {testimonial.name}
                    </h3>
                    <BadgeCSM variant="yellow" className="text-xs mt-1">
                      {testimonial.petName}
                    </BadgeCSM>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-csm-yellow text-csm-yellow" />
                  ))}
                </div>

                <p className="text-sm text-csm-gray leading-relaxed">
                  &ldquo;{testimonial.review}&rdquo;
                </p>
              </CardCsmContent>
            </CardCSM>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          <CardCSM variant="default">
            <CardCsmContent className="p-4 text-center">
              <div className="text-2xl font-bold text-csm-blue mb-1">
                {stats.petsCared.toLocaleString()}+
              </div>
              <p className="text-xs text-csm-gray">Pets Atendidos</p>
            </CardCsmContent>
          </CardCSM>

          <CardCSM variant="highlight">
            <CardCsmContent className="p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-csm-yellow text-csm-yellow" />
                ))}
              </div>
              <div className="text-2xl font-bold text-csm-gray-dark mb-1">4.9/5</div>
              <p className="text-xs text-csm-gray-dark">Avaliação</p>
            </CardCsmContent>
          </CardCSM>

          <CardCSM variant="default">
            <CardCsmContent className="p-4 text-center">
              <div className="text-2xl font-bold text-csm-blue mb-1">100%</div>
              <p className="text-xs text-csm-gray">Dedicação</p>
            </CardCsmContent>
          </CardCSM>
        </div>

      </div>
    </section>
  );
}
