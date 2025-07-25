'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { stats } from '@/lib/env';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 'KD',
      name: 'Kaoana Deuchmann dos Santos',
      role: 'Tutor de Mimi',
      petIcon: '🐱',
      petName: 'Mimi',
      review: 'Todas as médicas veterinárias que atenderam nossa gatinha foram incríveis! Fizeram uma investigação detalhada e trouxeram todas as soluções. Parabéns!',
      rating: 5
    },
    {
      id: 'IN',
      name: 'Isis Nogueira',
      role: 'Tutor de Bella',
      petIcon: '🐕',
      petName: 'Bella',
      review: 'Levei minha cachorrinha porque tinha ingerido chocolate. Deram todo o suporte necessário e cuidaram bem dela. Agora ela está bem! ❤️',
      rating: 5
    },
    {
      id: 'JM',
      name: 'Jessé Mafiolete Pereira',
      role: 'Tutor de Félix',
      petIcon: '🐱',
      petName: 'Félix',
      review: 'Nosso gatinho órfão estava muito mal. A equipe foi super prestativa e encontrou uma forma de atendê-lo. Hoje ele está grande e forte!',
      rating: 5
    },
    {
      id: 'SC',
      name: 'Sara Coutinho',
      role: 'Tutor de Thor',
      petIcon: '🐕',
      petName: 'Thor',
      review: 'O atendimento foi impecável! A Dra. Thayana e sua equipe foram muito atenciosas e ajudaram a controlar a dor do meu cachorro.',
      rating: 5
    },
    {
      id: 'AP',
      name: 'Aline Pena Rodrigues',
      role: 'Tutor de Buddy',
      petIcon: '🐕',
      petName: 'Buddy',
      review: 'Meu filho foi diagnosticado com parvovirose. Graças ao profissionalismo da equipe, ele está melhor e se recuperando em casa.',
      rating: 5
    },
    {
      id: 'CL',
      name: 'Carol Lima',
      role: 'Tutor de Luna e Mel',
      petIcon: '🐕',
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
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-blue-400"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-amber-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Mais de {stats.petsCared.toLocaleString()} Pets Já <span className="text-blue-600">Confiaram</span> em Nós
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre o cuidado que oferecemos aos seus companheiros de quatro patas
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <Card className="bg-white/90 backdrop-blur-sm border-blue-100 shadow-xl shadow-blue-900/10 mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <Avatar className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600">
                    <AvatarFallback className="text-white font-bold text-lg bg-transparent">
                      {testimonials[currentIndex].id}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-slate-600">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                  
                  {/* Pet Badge */}
                  <Badge className="bg-amber-100 text-amber-700 border-amber-200">
                    <span className="text-lg mr-1">{testimonials[currentIndex].petIcon}</span>
                    🐾 {testimonials[currentIndex].petName}
                  </Badge>
                </div>

                {/* Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                  <p className="text-slate-700 leading-relaxed text-lg pl-6">
                    &ldquo;{testimonials[currentIndex].review}&rdquo;
                  </p>
                </div>
              </div>
            </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full shadow-lg hover:bg-blue-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full shadow-lg hover:bg-blue-50"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-900/20"
          >
            💬 Ver Mais Casos de Sucesso
          </Button>
        </div>
      </div>
    </section>
  );
}