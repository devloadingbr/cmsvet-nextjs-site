'use client';

import { useState } from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
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
    <div className={`min-h-[80vh] sm:min-h-screen ${currentTheme.bg} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 rounded-full bg-blue-600"></div>
        <div className="absolute top-32 right-4 sm:top-40 sm:right-32 w-12 h-12 sm:w-24 sm:h-24 rounded-full bg-amber-500"></div>
        <div className="absolute bottom-32 left-1/4 sm:left-1/3 w-20 h-20 sm:w-40 sm:h-40 rounded-full bg-blue-400"></div>
        <div className="absolute bottom-20 right-4 sm:right-20 w-14 h-14 sm:w-28 sm:h-28 rounded-full bg-amber-400"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh] sm:min-h-screen py-8 sm:py-16">
        <div className="text-center space-y-3 sm:space-y-6 lg:space-y-8 w-full">

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            <Badge className="flex items-center space-x-1 sm:space-x-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-0 rounded-full hover:scale-105 transition-transform duration-300 text-xs sm:text-sm font-semibold">
              <span className="text-sm sm:text-lg">🐾</span>
              <span>+{Math.floor(stats.petsCared / 1000)}k pets</span>
            </Badge>
            <Badge className="flex items-center space-x-1 sm:space-x-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-purple-500 to-pink-400 text-white border-0 rounded-full hover:scale-105 transition-transform duration-300 text-xs sm:text-sm font-semibold">
              <span className="text-sm sm:text-lg">🌙</span>
              <span className="hidden sm:inline">Plantão 24h</span>
              <span className="sm:hidden">24h</span>
            </Badge>
            <Badge className="flex items-center space-x-1 sm:space-x-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-amber-500 to-orange-400 text-white border-0 rounded-full hover:scale-105 transition-transform duration-300 text-xs sm:text-sm font-semibold">
              <span className="text-sm sm:text-lg">⭐</span>
              <span>{stats.rating} estrelas</span>
            </Badge>
            <Badge className="flex items-center space-x-1 sm:space-x-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-rose-500 to-pink-400 text-white border-0 rounded-full hover:scale-105 transition-transform duration-300 text-xs sm:text-sm font-semibold">
              <span className="text-sm sm:text-lg">💝</span>
              <span className="hidden sm:inline">Equipe especializada</span>
              <span className="sm:hidden">Especializada</span>
            </Badge>
          </div>

          {/* Main Headline */}
          <div className="space-y-2 sm:space-y-4 lg:space-y-6 max-w-4xl mx-auto">
            <h1 className={`text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold ${currentTheme.text} leading-tight`}>
              Seu Pet Precisa de Cuidado?
              <span className={`block ${currentTheme.accent} text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl mt-1 sm:mt-2`}>{clinic.name} 24&nbsp;Horas</span>
            </h1>
            <p className={`text-lg sm:text-xl md:text-2xl lg:text-2xl ${currentTheme.textSecondary} max-w-3xl mx-auto leading-relaxed px-2`}>
              {clinic.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-3 sm:gap-4 justify-center max-w-4xl mx-auto px-2">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-green-900/20 flex-1 max-w-xs cursor-pointer"
              onClick={() => window.open(urls.whatsappWithMessage(whatsappMessages.emergency), '_blank')}
            >
              <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
              WHATSAPP
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-900/20 flex-1 max-w-xs cursor-pointer"
              onClick={() => window.open(urls.phoneCall, '_self')}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              LIGAÇÃO
            </Button>
          </div>

          {/* AI Triage Button */}
          <div className="pt-1 sm:pt-4 max-w-2xl mx-auto px-2">
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-6 sm:px-6 sm:py-7 md:px-8 md:py-8 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-900/20 cursor-pointer"
            >
              🐕 TRIAGEM INTELIGENTE
            </Button>
            <p className={`text-xs sm:text-sm ${currentTheme.textSecondary} mt-2 sm:mt-3 text-center px-2`}>
              💕 Sistema carinhoso que ajuda a entender como seu pet está se sentindo
            </p>
          </div>



        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
          <path
            d="M0,50 C300,100 500,0 800,50 C1000,80 1100,20 1200,50 L1200,120 L0,120 Z"
            className={isDarkMode ? 'fill-slate-800/50' : 'fill-white/50'}
          />
        </svg>
      </div>
    </div>
  );
}