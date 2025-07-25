'use client';

import { useState } from 'react';
import { Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { clinic, stats } from '@/lib/env';

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
    <div className={`min-h-screen ${currentTheme.bg} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-blue-600"></div>
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-amber-500"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 rounded-full bg-blue-400"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 rounded-full bg-amber-400"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-8">

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            <Badge className="flex items-center space-x-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-0 rounded-full hover:scale-105 transition-transform duration-300 text-sm font-semibold">
              <span className="text-lg">🐾</span>
              <span>+{Math.floor(stats.petsCared / 1000)}k pets</span>
            </Badge>
            <Badge className="flex items-center space-x-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-400 text-white border-0 rounded-full hover:scale-105 transition-transform duration-300 text-sm font-semibold">
              <span className="text-lg">🌙</span>
              <span>Plantão 24h</span>
            </Badge>
            <Badge className="flex items-center space-x-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-400 text-white border-0 rounded-full hover:scale-105 transition-transform duration-300 text-sm font-semibold">
              <span className="text-lg">⭐</span>
              <span>{stats.rating} estrelas</span>
            </Badge>
            <Badge className="flex items-center space-x-1.5 px-3 py-1.5 bg-gradient-to-r from-rose-500 to-pink-400 text-white border-0 rounded-full hover:scale-105 transition-transform duration-300 text-sm font-semibold">
              <span className="text-lg">💝</span>
              <span>Equipe especializada</span>
            </Badge>
          </div>

          {/* Main Headline */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className={`text-4xl lg:text-6xl font-bold ${currentTheme.text} leading-tight`}>
              Seu Pet Precisa de Cuidado?
              <span className={`block ${currentTheme.accent} whitespace-nowrap`}>{clinic.name} 24&nbsp;Horas</span>
            </h2>
            <p className={`text-xl lg:text-2xl ${currentTheme.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
              {clinic.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-rose-900/20"
            >
              <Phone className="w-5 h-5" />
              🐾 EMERGÊNCIA WHATSAPP
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-900/20"
            >
              <Calendar className="w-5 h-5" />
              💖 AGENDAR CONSULTA
            </Button>
          </div>

          {/* AI Triage Button */}
          <div className="pt-4 max-w-2xl mx-auto">
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-900/20"
            >
              🐕 TRIAGEM INTELIGENTE - CUIDE DO SEU PET
            </Button>
            <p className={`text-sm ${currentTheme.textSecondary} mt-3 text-center`}>
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