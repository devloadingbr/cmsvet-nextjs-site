'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { CardCSM, CardCsmContent } from '@/components/ui/card-csm';
import { ButtonCSM } from '@/components/ui/button-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { stats } from '@/lib/env';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-csm-gray-dark mb-6">
            Mais de {stats.petsCared.toLocaleString()} Pets Já <span className="text-csm-blue">Confiaram</span> em Nós
          </h2>
          <p className="text-xl text-csm-gray max-w-3xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre o cuidado que oferecemos aos seus companheiros de quatro patas
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <CardCSM variant="default" className="mb-8">
            <CardCsmContent className="p-8">
              <div className="flex items-start space-x-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <Avatar className="w-16 h-16 bg-csm-blue">
                    <AvatarFallback className="text-white font-bold text-lg bg-transparent">
                      {testimonials[currentIndex].id}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-csm-gray-dark">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-csm-gray">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                  
                  {/* Pet Badge */}
                  <BadgeCSM variant="yellow">
                    {testimonials[currentIndex].petName}
                  </BadgeCSM>
                </div>

                {/* Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-csm-yellow text-csm-yellow" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-csm-blue-light absolute -top-2 -left-2" />
                  <p className="text-csm-gray-dark leading-relaxed text-lg pl-6">
                    &ldquo;{testimonials[currentIndex].review}&rdquo;
                  </p>
                </div>
              </div>
            </div>
            </CardCsmContent>
          </CardCSM>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4">
            <ButtonCSM
              onClick={prevTestimonial}
              variant="secondary"
              className="w-12 h-12 rounded-full cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </ButtonCSM>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentIndex
                      ? 'bg-csm-blue w-8'
                      : 'bg-csm-gray-light hover:bg-csm-gray'
                  }`}
                />
              ))}
            </div>

            <ButtonCSM
              onClick={nextTestimonial}
              variant="secondary"
              className="w-12 h-12 rounded-full cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </ButtonCSM>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <ButtonCSM 
            variant="primary"
            size="lg"
          >
            Ver Mais Casos de Sucesso
          </ButtonCSM>
        </div>
      </div>
    </section>
  );
}