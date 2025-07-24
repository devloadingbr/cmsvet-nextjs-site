import React, { useState } from 'react';
import { Heart, Phone, Calendar, MapPin, Star, CheckCircle, Clock, Shield } from 'lucide-react';

const CSMHeroSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = {
    light: {
      bg: 'bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50',
      cardBg: 'bg-white/90 backdrop-blur-sm',
      text: 'text-slate-900',
      textSecondary: 'text-slate-600',
      emergency: 'bg-red-600 hover:bg-red-700',
      primary: 'bg-blue-600 hover:bg-blue-700',
      accent: 'text-amber-600',
      border: 'border-slate-200',
      shadow: 'shadow-xl shadow-blue-900/10'
    },
    dark: {
      bg: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800',
      cardBg: 'bg-slate-800/90 backdrop-blur-sm',
      text: 'text-white',
      textSecondary: 'text-slate-300',
      emergency: 'bg-red-600 hover:bg-red-500',
      primary: 'bg-blue-500 hover:bg-blue-400',
      accent: 'text-amber-400',
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

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 z-50 p-3 rounded-full ${currentTheme.cardBg} ${currentTheme.border} border transition-all duration-300`}
      >
        {isDarkMode ? '🌙' : '☀️'}
      </button>

      {/* Emergency Banner */}
      <div className="relative z-10 bg-red-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-sm font-medium">
          <Clock className="w-4 h-4 mr-2 animate-pulse" />
          <span>🚨 PLANTÃO 24H ATIVO | EMERGÊNCIAS: (41) 3000-0000 | WhatsApp: (41) 99999-9999</span>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                  <div className="text-white text-2xl font-bold">+</div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>
              <div>
                <h1 className={`text-3xl font-bold ${currentTheme.text}`}>
                  <span className="text-blue-600">CSM</span>
                </h1>
                <p className={`text-sm ${currentTheme.textSecondary} uppercase tracking-wider`}>
                  Clínica Veterinária
                </p>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h2 className={`text-4xl lg:text-5xl font-bold ${currentTheme.text} leading-tight`}>
                Seu Pet Precisa de
                <span className={`block ${currentTheme.accent}`}>Cuidado Agora?</span>
              </h2>
              <p className={`text-xl ${currentTheme.textSecondary} max-w-xl`}>
                Atendimento 24 horas com equipe especializada. Há mais de 7 anos cuidando 
                da saúde dos pets de Curitiba com tecnologia e muito carinho.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className={`text-sm ${currentTheme.textSecondary}`}>+15.000 pets atendidos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-500" />
                <span className={`text-sm ${currentTheme.textSecondary}`}>Plantão 24h real</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-amber-500" />
                <span className={`text-sm ${currentTheme.textSecondary}`}>+4.8 estrelas Google</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span className={`text-sm ${currentTheme.textSecondary}`}>Equipe especializada</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className={`${currentTheme.emergency} text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${currentTheme.shadow}`}>
                <Phone className="w-5 h-5" />
                <span>EMERGÊNCIA AGORA</span>
              </button>
              <button className={`${currentTheme.primary} text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${currentTheme.shadow}`}>
                <Calendar className="w-5 h-5" />
                <span>AGENDAR CONSULTA</span>
              </button>
            </div>

            {/* Quick Access */}
            <div className="flex items-center space-x-6 pt-4">
              <button className={`flex items-center space-x-2 ${currentTheme.textSecondary} hover:${currentTheme.accent} transition-colors`}>
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Como Chegar</span>
              </button>
              <button className={`flex items-center space-x-2 ${currentTheme.textSecondary} hover:${currentTheme.accent} transition-colors`}>
                <Phone className="w-4 h-4" />
                <span className="text-sm">WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column - Visual/Card */}
          <div className="relative">
            {/* Emergency Assessment Card */}
            <div className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-2xl p-8 ${currentTheme.shadow}`}>
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-amber-500 rounded-full mx-auto flex items-center justify-center">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                
                <div>
                  <h3 className={`text-2xl font-bold ${currentTheme.text} mb-2`}>
                    Assistente Veterinário IA
                  </h3>
                  <p className={`${currentTheme.textSecondary}`}>
                    Avaliação instantânea dos sintomas do seu pet
                  </p>
                </div>

                {/* Mock Symptoms */}
                <div className="space-y-3">
                  {[
                    { icon: '🤢', text: 'Vômito', selected: true },
                    { icon: '😴', text: 'Muito fraco', selected: false },
                    { icon: '🔥', text: 'Febre', selected: true },
                    { icon: '💔', text: 'Dor', selected: false }
                  ].map((symptom, index) => (
                    <button
                      key={index}
                      className={`w-full p-3 rounded-lg border-2 transition-all duration-200 flex items-center space-x-3 ${
                        symptom.selected 
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                          : `${currentTheme.border} hover:border-amber-400`
                      }`}
                    >
                      <span className="text-2xl">{symptom.icon}</span>
                      <span className={`${currentTheme.text} font-medium`}>{symptom.text}</span>
                    </button>
                  ))}
                </div>

                <button className={`w-full ${currentTheme.primary} text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105`}>
                  🤖 Analisar com IA
                </button>

                <p className={`text-xs ${currentTheme.textSecondary} text-center`}>
                  ⚠️ Esta avaliação não substitui consulta veterinária
                </p>
              </div>
            </div>

            {/* Floating Stats */}
            <div className={`absolute -top-4 -left-4 ${currentTheme.cardBg} rounded-xl p-4 ${currentTheme.shadow}`}>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className={`text-sm font-semibold ${currentTheme.text}`}>Online Agora</span>
              </div>
            </div>

            <div className={`absolute -bottom-4 -right-4 ${currentTheme.cardBg} rounded-xl p-4 ${currentTheme.shadow}`}>
              <div className="text-center">
                <div className={`text-2xl font-bold ${currentTheme.accent}`}>24h</div>
                <div className={`text-xs ${currentTheme.textSecondary}`}>Plantão Ativo</div>
              </div>
            </div>
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
};

export default CSMHeroSection;