/**
 * Container principal da triagem inline
 * Substituição do card promocional da TriageSection
 */

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, X } from 'lucide-react';
import { useInlineTriagem } from '../hooks/useInlineTriagem';
import { InlineStepIndicator } from './InlineStepIndicator';
import { InlinePetDataStep } from './steps/InlinePetDataStep';
import { InlineSymptomsStep } from './steps/InlineSymptomsStep';
import { InlineAnalysisStep } from './steps/InlineAnalysisStep';
import { InlineChatStep } from './steps/InlineChatStep';

export function TriagemInlineCard() {
  const {
    currentStep,
    progress,
    canGoBack,
    exitTriagem,
    previousStep,
  } = useInlineTriagem();

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'pet_data':
        return <InlinePetDataStep />;
      case 'symptoms':
        return <InlineSymptomsStep />;
      case 'analysis':
        return <InlineAnalysisStep />;
      case 'chat':
        return <InlineChatStep />;
      default:
        return <InlinePetDataStep />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full"
    >
      <Card className="bg-white border-2 border-blue-200 text-slate-900 overflow-hidden relative shadow-xl">
        {/* Decorative elements - amarelo para dar destaque */}
        <div className="absolute top-4 right-4 text-6xl opacity-20 text-amber-500">🐾</div>
        <div className="absolute bottom-4 left-4 text-4xl opacity-20 text-blue-500">💡</div>
        
        <CardContent className="p-6 lg:p-8 relative z-10">
          {/* Header com controles */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              {canGoBack && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={previousStep}
                  className="text-blue-600 hover:bg-amber-50 h-10 w-10 border border-blue-200"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              )}
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-blue-600">
                  🩺 Triagem Veterinária
                </h3>
                <p className="text-slate-600 text-sm">
                  Análise inteligente dos sintomas do seu pet
                </p>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={exitTriagem}
              className="text-slate-500 hover:bg-red-50 hover:text-red-600 h-10 w-10 border border-slate-200"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Indicador de progresso */}
          <div className="mb-8">
            <InlineStepIndicator 
              currentStep={currentStep} 
              progress={progress}
            />
          </div>

          {/* Conteúdo do step atual com animações */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="min-h-[400px] flex flex-col"
            >
              {renderCurrentStep()}
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}