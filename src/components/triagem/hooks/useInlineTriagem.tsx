/**
 * Hook principal para controle da triagem inline
 */

'use client';

import { useMemo, useCallback } from 'react';
import { 
  useTriagemStore,
  useInlineMode,
  useShowPromotionalCard,
  useStartInlineTriagem,
  useExitInlineTriagem,
  useCurrentStep,
  useCurrentSession,
  useTriagemLoading,
  useTriagemError
} from '@/stores/triagem-store';
import { TriagemStep, Pet } from '@/lib/triagem/types';
import { PetDataInput, SymptomsInput } from '@/lib/triagem/schemas';
import { toast } from 'sonner';

export const useInlineTriagem = () => {
  const isInlineMode = useInlineMode();
  const showPromotionalCard = useShowPromotionalCard();
  const startInlineTriagem = useStartInlineTriagem();
  const exitInlineTriagem = useExitInlineTriagem();
  const currentStep = useCurrentStep();
  const currentSession = useCurrentSession();
  const isLoading = useTriagemLoading();
  const error = useTriagemError();
  
  const store = useTriagemStore();

  // Estado computado
  const canProceed = useMemo(() => {
    if (!currentSession) return false;
    
    switch (currentStep) {
      case 'pet_data':
        return store.canProceedToSymptoms();
      case 'symptoms':
        return store.canProceedToAnalysis();
      case 'analysis':
        return !!currentSession.analysis;
      case 'chat':
        return true;
      default:
        return false;
    }
  }, [currentStep, currentSession, store]);

  const progress = useMemo(() => {
    const steps: TriagemStep[] = ['pet_data', 'symptoms', 'analysis', 'chat'];
    const currentIndex = steps.indexOf(currentStep);
    return Math.round(((currentIndex + 1) / steps.length) * 100);
  }, [currentStep]);

  // Ações com feedback visual
  const handleStartTriagem = useCallback(() => {
    try {
      startInlineTriagem();
      toast.success('Triagem iniciada! Vamos cuidar do seu pet.', {
        description: 'Preencha os dados básicos para começar',
        duration: 3000,
      });
    } catch {
      toast.error('Erro ao iniciar triagem', {
        description: 'Tente novamente em alguns instantes',
      });
    }
  }, [startInlineTriagem]);

  const handleExitTriagem = useCallback(() => {
    const hasData = currentSession && (
      currentSession.pet.name || 
      currentSession.selectedSymptoms.length > 0
    );

    if (hasData) {
      toast('Dados salvos automaticamente', {
        description: 'Você pode retomar a triagem a qualquer momento',
        action: {
          label: 'Continuar',
          onClick: () => startInlineTriagem(),
        },
      });
    }

    exitInlineTriagem();
  }, [exitInlineTriagem, currentSession, startInlineTriagem]);

  const handleStepSubmit = useCallback(async (data: unknown) => {
    try {
      store.setLoading(true);
      
      switch (currentStep) {
        case 'pet_data':
          const petData = data as PetDataInput;
          store.setPetData(petData as Pet);
          store.nextStep();
          toast.success('Dados do pet salvos!', {
            description: 'Agora selecione os sintomas observados',
          });
          break;
          
        case 'symptoms':
          const symptomsData = data as SymptomsInput;
          // Limpar sintomas atuais
          currentSession?.selectedSymptoms.forEach(id => store.removeSymptom(id));
          // Adicionar novos sintomas
          symptomsData.selectedSymptoms.forEach(id => store.addSymptom(id));
          if (symptomsData.extraInfo) {
            store.setExtraInfo(symptomsData.extraInfo);
          }
          store.nextStep();
          toast.success('Sintomas registrados!', {
            description: 'Iniciando análise inteligente...',
          });
          break;
      }
    } catch (err) {
      toast.error('Erro ao processar dados', {
        description: 'Verifique as informações e tente novamente',
      });
      console.error('Erro no submit do step:', err);
    } finally {
      store.setLoading(false);
    }
  }, [currentStep, currentSession, store]);

  const handleGoToStep = useCallback((step: TriagemStep) => {
    store.goToStep(step);
  }, [store]);

  const handlePreviousStep = useCallback(() => {
    store.previousStep();
  }, [store]);

  const handleNextStep = useCallback(() => {
    if (canProceed) {
      store.nextStep();
    }
  }, [canProceed, store]);

  // Reset com confirmação
  const handleReset = useCallback(() => {
    toast('Deseja resetar a triagem?', {
      description: 'Todos os dados serão perdidos',
      action: {
        label: 'Confirmar',
        onClick: () => {
          store.clearSession();
          store.exitInlineTriagem();
          toast.success('Triagem resetada');
        },
      },
    });
  }, [store]);

  // Dados do pet formatados para exibição
  const petDisplayData = useMemo(() => {
    if (!currentSession?.pet) return null;
    
    const { name, age, species, breed, weight } = currentSession.pet;
    const speciesMap = { dog: 'Cão', cat: 'Gato', other: 'Outro' };
    
    return {
      name,
      age: age ? `${age} ${age === 1 ? 'ano' : 'anos'}` : '',
      species: speciesMap[species] || species,
      breed: breed || '',
      weight: weight ? `${weight}kg` : '',
    };
  }, [currentSession?.pet]);

  // Sintomas selecionados com nomes
  const selectedSymptomsData = useMemo(() => {
    if (!currentSession?.selectedSymptoms?.length) return [];
    
    // Aqui você pode buscar os dados completos dos sintomas
    // Por enquanto retorna os IDs
    return currentSession.selectedSymptoms;
  }, [currentSession?.selectedSymptoms]);

  return {
    // Estado
    isInlineMode,
    showPromotionalCard,
    currentStep,
    currentSession,
    isLoading,
    error,
    canProceed,
    progress,
    
    // Dados formatados
    petDisplayData,
    selectedSymptomsData,
    
    // Ações
    startTriagem: handleStartTriagem,
    exitTriagem: handleExitTriagem,
    submitStep: handleStepSubmit,
    goToStep: handleGoToStep,
    previousStep: handlePreviousStep,
    nextStep: handleNextStep,
    reset: handleReset,
    
    // Validações
    canGoBack: currentStep !== 'pet_data',
    canGoNext: canProceed,
    isFirstStep: currentStep === 'pet_data',
    isLastStep: currentStep === 'chat',
  };
};