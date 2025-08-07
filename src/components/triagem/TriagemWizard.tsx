/**
 * Sistema unificado de triagem veterinária
 * Suporta modo standalone (página) e inline (seção)
 */

'use client';

import { useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ProgressBar } from './shared/ProgressBar';
import { StepPetData } from './steps/StepPetData';
import { StepSymptoms } from './steps/StepSymptoms';
import { StepAnalysis } from './steps/StepAnalysis';
import { StepChat } from './steps/StepChat';
import { useTriagemStore } from '@/stores/triagem-store';
import { generateChatMessageId } from '@/lib/triagem/utils';
import { ChatMessage, Pet, AIAnalysis } from '@/lib/triagem/types';
import { cn } from '@/lib/utils';

type TriagemMode = 'standalone' | 'inline';

interface TriagemWizardProps {
  mode?: TriagemMode;
  onComplete?: () => void;
  onExit?: () => void;
  className?: string;
}

export function TriagemWizard({ 
  mode = 'standalone', 
  onComplete, 
  onExit,
  className 
}: TriagemWizardProps) {
  const {
    currentSession,
    currentStep,
    initializeSession,
    setPetData,
    addSymptom,
    removeSymptom,
    setExtraInfo,
    setAnalysis,
    addChatMessage,
    nextStep,
    previousStep,
    saveSession,
    cleanupExpiredSessions,
  } = useTriagemStore();

  const selectedSymptoms = currentSession?.selectedSymptoms || [];
  
  const isInline = mode === 'inline';
  
  // Progresso calculado
  const progress = useMemo(() => {
    const steps = ['pet_data', 'symptoms', 'analysis', 'chat'];
    const currentIndex = steps.indexOf(currentStep);
    return Math.round(((currentIndex + 1) / steps.length) * 100);
  }, [currentStep]);

  // Inicializar sessão se não existir
  useEffect(() => {
    if (!currentSession) {
      initializeSession();
    }
    cleanupExpiredSessions();
  }, [currentSession, initializeSession, cleanupExpiredSessions]);

  // Loading state
  if (!currentSession) {
    const LoadingContent = (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">🐾</div>
        <p className="text-gray-600">Inicializando triagem...</p>
      </div>
    );

    if (isInline) {
      return (
        <Card className="bg-white border-2 border-blue-200">
          <CardContent className="p-8">
            {LoadingContent}
          </CardContent>
        </Card>
      );
    }
    
    return <div className="max-w-4xl mx-auto">{LoadingContent}</div>;
  }

  const handlePetDataSubmit = (pet: Pet) => {
    setPetData(pet);
    nextStep();
  };

  const handleSymptomsSubmit = (symptoms: string[], extraInfo: string) => {
    // Limpar sintomas atuais e adicionar novos
    selectedSymptoms.forEach(symptomId => removeSymptom(symptomId));
    symptoms.forEach(symptomId => addSymptom(symptomId));
    
    setExtraInfo(extraInfo);
    nextStep();
  };

  const handleAnalysisComplete = (analysis: AIAnalysis) => {
    setAnalysis(analysis);
  };

  const handleStartChat = () => {
    // Adicionar mensagem de boas-vindas do assistente
    const welcomeMessage: ChatMessage = {
      id: generateChatMessageId(),
      role: 'assistant',
      content: `Olá! Acabei de analisar ${currentSession.pet.name} e posso esclarecer dúvidas específicas sobre o caso. Você tem 5 perguntas disponíveis. Como posso ajudar?`,
      timestamp: new Date(),
    };
    
    addChatMessage(welcomeMessage);
    nextStep();
  };

  const handleChatFinish = () => {
    saveSession();
    if (onComplete) {
      onComplete();
    }
  };

  const handleExit = () => {
    if (onExit) {
      onExit();
    }
  };

  const canGoBack = currentStep !== 'pet_data';

  // Render step content
  const renderStep = () => {

    switch (currentStep) {
      case 'pet_data':
        return (
          <StepPetData
            initialData={currentSession.pet}
            onNext={handlePetDataSubmit}
          />
        );
      case 'symptoms':
        return (
          <StepSymptoms
            pet={currentSession.pet}
            initialSymptoms={selectedSymptoms}
            initialExtraInfo={currentSession.extraInfo}
            onNext={handleSymptomsSubmit}
            onBack={previousStep}
          />
        );
      case 'analysis':
        return (
          <StepAnalysis
            pet={currentSession.pet}
            symptomIds={selectedSymptoms}
            extraInfo={currentSession.extraInfo || ''}
            onAnalysisComplete={handleAnalysisComplete}
            onStartChat={handleStartChat}
            onBack={previousStep}
          />
        );
      case 'chat':
        return currentSession.analysis ? (
          <StepChat
            pet={currentSession.pet}
            symptomIds={selectedSymptoms}
            analysis={currentSession.analysis}
            initialMessages={currentSession.chatHistory}
            onFinish={handleChatFinish}
          />
        ) : null;
      default:
        return null;
    }
  };

  // Inline mode rendering
  if (isInline) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn("w-full", className)}
      >
        <Card className="bg-white border-2 border-blue-200 text-slate-900 overflow-hidden relative shadow-xl">
          {/* Decorative elements */}
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
              
              {onExit && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleExit}
                  className="text-slate-500 hover:bg-red-50 hover:text-red-600 h-10 w-10 border border-slate-200"
                >
                  <X className="h-5 w-5" />
                </Button>
              )}
            </div>

            {/* Progress bar inline */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-600">Progresso</span>
                <span className="text-sm text-slate-500">{progress}%</span>
              </div>
              <div className="w-full bg-blue-100 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Step content com animação */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="min-h-[400px] flex flex-col"
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  // Standalone mode rendering
  return (
    <div className={cn("min-h-screen py-8", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da triagem */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🩺 Triagem Veterinária Inteligente
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sistema de análise veterinária com IA para orientar sobre o cuidado do seu pet
          </p>
        </div>

        {/* Barra de progresso */}
        <div className="mb-12">
          <ProgressBar currentStep={currentStep} />
        </div>

        {/* Conteúdo das etapas com animação */}
        <div className="mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 border-t pt-8">
          <p>
            🤖 Sistema desenvolvido com IA para orientação inicial. 
            Não substitui consulta veterinária profissional.
          </p>
          <p className="mt-2">
            <strong>CSM Clínica Veterinária</strong> - Cuidando do seu pet há mais de 7 anos
          </p>
        </div>
      </div>
    </div>
  );
}

// Hook personalizado para usar com o wizard unificado
export function useTriagemWizard(mode: TriagemMode = 'standalone') {
  const store = useTriagemStore();
  
  return {
    ...store,
    mode,
    isInline: mode === 'inline',
    isStandalone: mode === 'standalone',
  };
}