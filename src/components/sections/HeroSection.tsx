'use client';

import { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { clinic, stats, urls, whatsappMessages } from '@/lib/env';

export default function HeroSection() {
  const [isDarkMode] = useState(false);

  const theme = {
    light: {
      bg: 'bg-gradient-to-br from-rose-50 via-blue-50 to-amber-50',
      cardBg: 'bg-white/95 backdrop-blur-sm',
      text: 'text-slate-900',
      textSecondary: 'text-slate-600',
      emergency: 'bg-rose-600 hover:bg-rose-700',
      primary: 'bg-blue-600 hover:bg-blue-700',
      accent: 'text-rose-600',
      border: 'border-rose-100',
      shadow: 'shadow-xl shadow-rose-900/10'
    },
    dark: {
      bg: 'bg-gradient-to-br from-slate-900 via-blue-900 to-rose-900',
      cardBg: 'bg-slate-800/90 backdrop-blur-sm',
      text: 'text-white',
      textSecondary: 'text-slate-300',
      emergency: 'bg-rose-600 hover:bg-rose-500',
      primary: 'bg-blue-500 hover:bg-blue-400',
      accent: 'text-rose-400',
      border: 'border-slate-700',
      shadow: 'shadow-xl shadow-black/20'
    }
  };

  const currentTheme = isDarkMode ? theme.dark : theme.light;

  return (
    <div className="min-h-[80vh] sm:min-h-screen relative">
      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh] sm:min-h-screen py-12 sm:py-16">
        <div className="text-center space-y-6 sm:space-y-8 lg:space-y-12 w-full">

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            <Badge className="flex items-center space-x-1 sm:space-x-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-cyan-500 text-white border-0 rounded-full hover:scale-105 transition-transform duration-300 text-xs sm:text-sm font-semibold">
              <span className="text-sm sm:text-lg">🐾</span>
              <span>+{Math.floor(stats.petsCared / 1000)}k pets</span>
            </Badge>
            <Badge className="flex items-center space-x-1 sm:space-x-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-pink-500 text-white border-0 rounded-full hover:scale-105 transition-transform duration-300 text-xs sm:text-sm font-semibold">
              <span className="text-sm sm:text-lg">🌙</span>
              <span className="hidden sm:inline">Plantão 24h</span>
              <span className="sm:hidden">24h</span>
            </Badge>
            <Badge className="flex items-center space-x-1 sm:space-x-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-orange-500 text-white border-0 rounded-full hover:scale-105 transition-transform duration-300 text-xs sm:text-sm font-semibold">
              <span className="text-sm sm:text-lg">⭐</span>
              <span>{stats.rating} estrelas</span>
            </Badge>
            <Badge className="flex items-center space-x-1 sm:space-x-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-violet-500 text-white border-0 rounded-full hover:scale-105 transition-transform duration-300 text-xs sm:text-sm font-semibold">
              <span className="text-sm sm:text-lg">💝</span>
              <span className="hidden sm:inline">Equipe especializada</span>
              <span className="sm:hidden">Especializada</span>
            </Badge>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight">
              <span className="text-blue-600">Seu Pet Precisa de Cuidado?</span>
              <span className="block text-amber-500 text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl mt-1 sm:mt-2">{clinic.name} 24&nbsp;Horas</span>
            </h1>
            <p className={`text-lg sm:text-xl md:text-2xl lg:text-2xl ${currentTheme.textSecondary} max-w-3xl mx-auto leading-relaxed px-2`}>
              {clinic.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-4 sm:gap-6 justify-center max-w-4xl mx-auto px-2">
            <Button 
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-emerald-900/20 flex-1 max-w-xs cursor-pointer"
              onClick={() => window.open(urls.whatsappWithMessage(whatsappMessages.emergency), '_blank')}
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              WHATSAPP
            </Button>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-900/20 flex-1 max-w-xs cursor-pointer"
              onClick={() => window.open(urls.phoneCall, '_self')}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              LIGAÇÃO
            </Button>
          </div>

          {/* AI Triage Button - removido */}



        </div>
      </div>

    </div>
  );
}