'use client';

import { Quote, Star } from 'lucide-react';
import { CardCSM, CardCsmContent } from '@/components/ui/card-csm';
import { ButtonCSM } from '@/components/ui/button-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { stats } from '@/lib/env';

export default function TestimonialsSection() {

  const testimonials = [
    {
      id: 'KD',
      name: 'Kaoana Deuchmann dos Santos',
      role: 'Tutor de Mimi',
      petIcon: '',
      petName: 'Mimi',
      review: 'Todas as médicas veterinárias que atenderam nossa gatinha foram incríveis! Fizeram uma investigação detalhada e trouxeram todas as soluções. Parabéns!',
      rating: 5
    },
    {
      id: 'IN',
      name: 'Isis Nogueira',
      role: 'Tutor de Bella',
      petIcon: '',
      petName: 'Bella',
      review: 'Levei minha cachorrinha porque tinha ingerido chocolate. Deram todo o suporte necessário e cuidaram bem dela. Agora ela está bem!',
      rating: 5
    },
    {
      id: 'JM',
      name: 'Jessé Mafiolete Pereira',
      role: 'Tutor de Félix',
      petIcon: '',
      petName: 'Félix',
      review: 'Nosso gatinho órfão estava muito mal. A equipe foi super prestativa e encontrou uma forma de atendê-lo. Hoje ele está grande e forte!',
      rating: 5
    },
    {
      id: 'SC',
      name: 'Sara Coutinho',
      role: 'Tutor de Thor',
      petIcon: '',
      petName: 'Thor',
      review: 'O atendimento foi impecável! A Dra. Thayana e sua equipe foram muito atenciosas e ajudaram a controlar a dor do meu cachorro.',
      rating: 5
    },
    {
      id: 'AP',
      name: 'Aline Pena Rodrigues',
      role: 'Tutor de Buddy',
      petIcon: '',
      petName: 'Buddy',
      review: 'Meu filho foi diagnosticado com parvovirose. Graças ao profissionalismo da equipe, ele está melhor e se recuperando em casa.',
      rating: 5
    },
    {
      id: 'CL',
      name: 'Carol Lima',
      role: 'Tutor de Luna e Mel',
      petIcon: '',
      petName: 'Luna e Mel',
      review: 'Castrei minhas duas fêmeas na CSM. Atendimento incrível desde o WhatsApp até a saída delas. Preço acessível e muito amor pelos pets.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 relative bg-gradient-to-b from-white to-csm-blue-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <BadgeCSM variant="blue" className="mb-4">
            Depoimentos
          </BadgeCSM>
          <h2 className="text-4xl lg:text-5xl font-bold text-csm-gray-dark mb-6">
            Mais de {stats.petsCared.toLocaleString()} Pets Já <span className="text-csm-blue">Confiaram</span> em Nós
          </h2>
          <p className="text-xl text-csm-gray max-w-3xl mx-auto">
            Histórias reais de tutores que confiaram na nossa equipe para cuidar dos seus pets
          </p>
        </div>

        {/* Testimonials Grid - Mostra 3 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <CardCSM key={index} variant="default" className="h-full">
              <CardCsmContent className="p-6 flex flex-col h-full">
                
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12 bg-csm-blue flex-shrink-0">
                    <AvatarFallback className="text-white font-bold bg-transparent">
                      {testimonial.id}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-csm-gray-dark truncate">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-csm-gray">
                      {testimonial.role}
                    </p>
                  </div>
                  <BadgeCSM variant="yellow" className="flex-shrink-0">
                    {testimonial.petName}
                  </BadgeCSM>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-csm-yellow text-csm-yellow" />
                  ))}
                </div>

                {/* Review */}
                <div className="relative flex-1">
                  <Quote className="w-6 h-6 text-csm-blue-light absolute -top-1 -left-1 opacity-50" />
                  <p className="text-csm-gray leading-relaxed pl-5">
                    &ldquo;{testimonial.review}&rdquo;
                  </p>
                </div>

              </CardCsmContent>
            </CardCSM>
          ))}
        </div>

        {/* Stats Row com Badges Flutuantes */}
        <div className="relative max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <CardCSM variant="default" className="text-center">
              <CardCsmContent className="p-6">
                <div className="text-3xl font-bold text-csm-blue mb-2">
                  {stats.petsCared.toLocaleString()}+
                </div>
                <p className="text-sm text-csm-gray">Pets Atendidos</p>
              </CardCsmContent>
            </CardCSM>

            {/* Card 2 - Destaque */}
            <CardCSM variant="highlight" className="text-center relative">
              <CardCsmContent className="p-6">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-csm-yellow text-csm-yellow" />
                  ))}
                </div>
                <div className="text-3xl font-bold text-csm-gray-dark mb-2">
                  4.9/5
                </div>
                <p className="text-sm text-csm-gray-dark">Avaliação Média</p>
              </CardCsmContent>
            </CardCSM>

            {/* Card 3 */}
            <CardCSM variant="default" className="text-center">
              <CardCsmContent className="p-6">
                <div className="text-3xl font-bold text-csm-blue mb-2">
                  100%
                </div>
                <p className="text-sm text-csm-gray">Dedicação</p>
              </CardCsmContent>
            </CardCSM>

          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <ButtonCSM 
            variant="primary"
            size="lg"
          >
            Ver Todos os Depoimentos
          </ButtonCSM>
        </div>

      </div>
    </section>
  );
}