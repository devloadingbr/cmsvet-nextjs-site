/**
 * Store principal para gerenciamento de estado da triagem
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { 
  TriagemSession, 
  Pet, 
  AIAnalysis, 
  ChatMessage, 
  TriagemStep 
} from '@/lib/triagem/types';
import { 
  generateSessionId, 
  validatePetData,
  validateSymptoms,
  validateExtraInfo,
  isSessionExpired
} from '@/lib/triagem/utils';
import { DEFAULT_TRIAGEM_CONFIG } from '@/lib/triagem/constants';

interface TriagemState {
  // Estado atual
  currentSession: TriagemSession | null;
  currentStep: TriagemStep;
  isLoading: boolean;
  error: string | null;
  
  // Cache de sessões anteriores
  previousSessions: TriagemSession[];
  
  // Configurações
  config: typeof DEFAULT_TRIAGEM_CONFIG;
  
  // Actions principais
  initializeSession: () => void;
  setPetData: (pet: Pet) => void;
  addSymptom: (symptomId: string) => void;
  removeSymptom: (symptomId: string) => void;
  toggleSymptom: (symptomId: string) => void;
  setExtraInfo: (info: string) => void;
  setAnalysis: (analysis: AIAnalysis) => void;
  addChatMessage: (message: ChatMessage) => void;
  
  // Navigation
  goToStep: (step: TriagemStep) => void;
  nextStep: () => void;
  previousStep: () => void;
  
  // State management
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearSession: () => void;
  saveSession: () => void;
  restoreSession: (sessionId: string) => void;
  
  // Validation
  canProceedToSymptoms: () => boolean;
  canProceedToAnalysis: () => boolean;
  
  // Chat
  getRemainingQuestions: () => number;
  canSendChatMessage: () => boolean;
  
  // Cleanup
  cleanupExpiredSessions: () => void;
}

const STEP_ORDER: TriagemStep[] = ['pet_data', 'symptoms', 'analysis', 'chat'];

export const useTriagemStore = create<TriagemState>()(
  persist(
    (set, get) => ({
      // Estado inicial
      currentSession: null,
      currentStep: 'pet_data',
      isLoading: false,
      error: null,
      previousSessions: [],
      config: DEFAULT_TRIAGEM_CONFIG,

      // Inicializar nova sessão
      initializeSession: () => {
        const newSession: TriagemSession = {
          id: generateSessionId(),
          pet: {} as Pet,
          selectedSymptoms: [],
          extraInfo: '',
          chatHistory: [],
          questionsRemaining: DEFAULT_TRIAGEM_CONFIG.maxChatQuestions,
          createdAt: new Date(),
          currentStep: 'pet_data'
        };

        set({
          currentSession: newSession,
          currentStep: 'pet_data',
          error: null,
          isLoading: false
        });
      },

      // Definir dados do pet
      setPetData: (pet: Pet) => {
        const state = get();
        if (!state.currentSession) return;

        const validation = validatePetData(pet);
        if (!validation.isValid) {
          set({ error: validation.errors[0] });
          return;
        }

        set({
          currentSession: {
            ...state.currentSession,
            pet,
          },
          error: null
        });
      },

      // Adicionar sintoma
      addSymptom: (symptomId: string) => {
        const state = get();
        if (!state.currentSession) return;

        const symptoms = [...state.currentSession.selectedSymptoms];
        if (!symptoms.includes(symptomId)) {
          symptoms.push(symptomId);
        }

        const validation = validateSymptoms(symptoms);
        if (!validation.isValid) {
          set({ error: validation.errors[0] });
          return;
        }

        set({
          currentSession: {
            ...state.currentSession,
            selectedSymptoms: symptoms,
          },
          error: null
        });
      },

      // Remover sintoma
      removeSymptom: (symptomId: string) => {
        const state = get();
        if (!state.currentSession) return;

        set({
          currentSession: {
            ...state.currentSession,
            selectedSymptoms: state.currentSession.selectedSymptoms.filter(
              id => id !== symptomId
            ),
          },
          error: null
        });
      },

      // Toggle sintoma
      toggleSymptom: (symptomId: string) => {
        const state = get();
        if (!state.currentSession) return;

        const symptoms = state.currentSession.selectedSymptoms;
        if (symptoms.includes(symptomId)) {
          state.removeSymptom(symptomId);
        } else {
          state.addSymptom(symptomId);
        }
      },

      // Definir informações extras
      setExtraInfo: (info: string) => {
        const state = get();
        if (!state.currentSession) return;

        const validation = validateExtraInfo(info);
        if (!validation.isValid) {
          set({ error: validation.errors[0] });
          return;
        }

        set({
          currentSession: {
            ...state.currentSession,
            extraInfo: info,
          },
          error: null
        });
      },

      // Definir análise da IA
      setAnalysis: (analysis: AIAnalysis) => {
        const state = get();
        if (!state.currentSession) return;

        set({
          currentSession: {
            ...state.currentSession,
            analysis,
          }
        });
      },

      // Adicionar mensagem de chat
      addChatMessage: (message: ChatMessage) => {
        const state = get();
        if (!state.currentSession) return;

        const updatedSession = {
          ...state.currentSession,
          chatHistory: [...state.currentSession.chatHistory, message],
        };

        // Se é mensagem do usuário, decrementa perguntas restantes
        if (message.role === 'user') {
          updatedSession.questionsRemaining = Math.max(0, updatedSession.questionsRemaining - 1);
        }

        set({
          currentSession: updatedSession
        });
      },

      // Ir para etapa específica
      goToStep: (step: TriagemStep) => {
        set({ 
          currentStep: step,
          error: null 
        });
      },

      // Próxima etapa
      nextStep: () => {
        const state = get();
        const currentIndex = STEP_ORDER.indexOf(state.currentStep);
        
        if (currentIndex < STEP_ORDER.length - 1) {
          const nextStep = STEP_ORDER[currentIndex + 1];
          set({ 
            currentStep: nextStep,
            error: null 
          });
        }
      },

      // Etapa anterior
      previousStep: () => {
        const state = get();
        const currentIndex = STEP_ORDER.indexOf(state.currentStep);
        
        if (currentIndex > 0) {
          const prevStep = STEP_ORDER[currentIndex - 1];
          set({ 
            currentStep: prevStep,
            error: null 
          });
        }
      },

      // Definir loading
      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },

      // Definir erro
      setError: (error: string | null) => {
        set({ error });
      },

      // Limpar sessão atual
      clearSession: () => {
        set({
          currentSession: null,
          currentStep: 'pet_data',
          isLoading: false,
          error: null
        });
      },

      // Salvar sessão no histórico
      saveSession: () => {
        const state = get();
        if (!state.currentSession) return;

        const sessionToSave = {
          ...state.currentSession,
          completedAt: new Date()
        };

        const updatedSessions = [
          sessionToSave,
          ...state.previousSessions.slice(0, 9) // Manter apenas 10 sessões
        ];

        set({
          previousSessions: updatedSessions
        });
      },

      // Restaurar sessão anterior
      restoreSession: (sessionId: string) => {
        const state = get();
        const session = state.previousSessions.find(s => s.id === sessionId);
        
        if (session && !isSessionExpired(session)) {
          set({
            currentSession: session,
            currentStep: session.currentStep || 'pet_data',
            error: null
          });
        }
      },

      // Validações para navegação
      canProceedToSymptoms: () => {
        const state = get();
        if (!state.currentSession) return false;
        
        const validation = validatePetData(state.currentSession.pet);
        return validation.isValid;
      },

      canProceedToAnalysis: () => {
        const state = get();
        if (!state.currentSession) return false;
        
        const validation = validateSymptoms(state.currentSession.selectedSymptoms);
        return validation.isValid;
      },

      // Chat
      getRemainingQuestions: () => {
        const state = get();
        return state.currentSession?.questionsRemaining || 0;
      },

      canSendChatMessage: () => {
        const state = get();
        return (state.currentSession?.questionsRemaining || 0) > 0;
      },

      // Limpeza de sessões expiradas
      cleanupExpiredSessions: () => {
        const state = get();
        const validSessions = state.previousSessions.filter(
          session => !isSessionExpired(session, state.config.sessionTimeout)
        );

        if (validSessions.length !== state.previousSessions.length) {
          set({ previousSessions: validSessions });
        }
      },
    }),
    {
      name: 'triagem-storage',
      // Apenas persiste sessões anteriores e configurações
      partialize: (state) => ({
        previousSessions: state.previousSessions,
        config: state.config,
      }),
    }
  )
);

// Seletores úteis
export const useCurrentSession = () => useTriagemStore((state) => state.currentSession);
export const useCurrentStep = () => useTriagemStore((state) => state.currentStep);
export const useTriagemLoading = () => useTriagemStore((state) => state.isLoading);
export const useTriagemError = () => useTriagemStore((state) => state.error);
export const usePetData = () => useTriagemStore((state) => state.currentSession?.pet);
export const useSelectedSymptoms = () => useTriagemStore((state) => state.currentSession?.selectedSymptoms || []);
export const useAnalysis = () => useTriagemStore((state) => state.currentSession?.analysis);
export const useChatHistory = () => useTriagemStore((state) => state.currentSession?.chatHistory || []);
export const useRemainingQuestions = () => useTriagemStore((state) => state.getRemainingQuestions());