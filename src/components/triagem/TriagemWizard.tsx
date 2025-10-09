/**
 * Sistema de triagem veterinária
 * Versão simplificada - apenas modo standalone
 */

'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProgressBar } from './shared/ProgressBar';
import { StepPetData } from './steps/StepPetData';
import { StepSymptoms } from './steps/StepSymptoms';
import { StepAnalysis } from './steps/StepAnalysis';
import { StepChat } from './steps/StepChat';
import { useTriagemStore } from '@/stores/triagem-store';
import { generateChatMessageId } from '@/lib/triagem/utils';
import { ChatMessage, Pet, AIAnalysis } from '@/lib/triagem/types';
import { cn } from '@/lib/utils';

interface TriagemWizardProps {
  onComplete?: () => void;
  className?: string;
}

export function TriagemWizard({ 
  onComplete,
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

  // Inicializar sessão se não existir
  useEffect(() => {
    if (!currentSession) {
      initializeSession();
    }
    cleanupExpiredSessions();
  }, [currentSession, initializeSession, cleanupExpiredSessions]);

  // Loading state
  if (!currentSession) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20">
        <div className="text-6xl mb-4">🐾</div>
        <p className="text-gray-600">Inicializando triagem...</p>
      </div>
    );
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

  // Renderização standalone
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
