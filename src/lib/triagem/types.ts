/**
 * Types e interfaces para o sistema de triagem veterinária
 */

// Tipos básicos
export type PetSpecies = 'dog' | 'cat' | 'other';
export type UrgencyLevel = 'emergency' | 'today' | 'this_week' | 'monitor';
export type SymptomCategory = 'respiratory' | 'digestive' | 'neurological' | 'physical' | 'behavioral' | 'skin' | 'eyes' | 'movement';
export type TriagemStep = 'pet_data' | 'symptoms' | 'analysis' | 'chat';

// Interface do Pet
export interface Pet {
  name: string;
  age: number;
  species: PetSpecies;
  breed?: string;
  weight?: number;
}

// Interface do Sintoma
export interface Symptom {
  id: string;
  name: string;
  emoji: string;
  category: SymptomCategory;
  urgencyLevel: UrgencyLevel;
  description: string;
  keywords: string[];
  isBasic: boolean; // Se é um dos 12 sintomas básicos
}

// Interface da Análise da IA
export interface AIAnalysis {
  urgencyLevel: number; // 1-10
  urgencyText: UrgencyLevel;
  diagnosis: string;
  symptomCorrelation?: string; // Nova: correlação dos sintomas
  possibleConditions?: string[]; // Nova: possíveis condições
  immediateActions: string[];
  whenToSeekHelp: string;
  cta: {
    type: 'emergency' | 'appointment' | 'monitor';
    text: string;
    action: string;
    urgency: boolean;
  };
  redFlags?: string[]; // Nova: sinais de alarme
  estimatedTime?: string;
  disclaimer: string;
}

// Interface da Mensagem do Chat
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  petContext?: {
    name: string;
    age: number;
    species: PetSpecies;
  };
}

// Interface da Sessão de Triagem
export interface TriagemSession {
  id: string;
  pet: Pet;
  selectedSymptoms: string[];
  extraInfo?: string;
  analysis?: AIAnalysis;
  chatHistory: ChatMessage[];
  questionsRemaining: number;
  createdAt: Date;
  completedAt?: Date;
  currentStep: TriagemStep;
}

// Interface dos dados enviados para IA
export interface TriagemDataForAI {
  pet: Pet;
  symptoms: Symptom[];
  extraInfo?: string;
  timestamp: string;
}

// Interface da resposta da API de análise
export interface AnalysisResponse {
  success: boolean;
  analysis?: AIAnalysis;
  error?: string;
  sessionId: string;
}

// Interface da resposta da API de chat
export interface ChatResponse {
  success: boolean;
  message?: string;
  questionsRemaining: number;
  error?: string;
  shouldEndChat?: boolean;
}

// Interface do contexto da triagem
export interface TriagemContext {
  session: TriagemSession | null;
  isLoading: boolean;
  error: string | null;
  currentStep: TriagemStep;
  
  // Actions
  setPet: (pet: Pet) => void;
  addSymptom: (symptomId: string) => void;
  removeSymptom: (symptomId: string) => void;
  setExtraInfo: (info: string) => void;
  startAnalysis: () => Promise<void>;
  sendChatMessage: (message: string) => Promise<void>;
  nextStep: () => void;
  previousStep: () => void;
  reset: () => void;
}

// Interface para configurações da triagem
export interface TriagemConfig {
  maxChatQuestions: number;
  aiModel: string;
  enableChat: boolean;
  emergencyThreshold: number;
  sessionTimeout: number; // em minutos
}

// Interface para estatísticas da triagem
export interface TriagemStats {
  totalSessions: number;
  completedSessions: number;
  emergencyCases: number;
  mostCommonSymptoms: Array<{
    symptomId: string;
    count: number;
  }>;
  averageUrgencyLevel: number;
  chatUsageRate: number;
}

// Interface para validação
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings?: string[];
}

// Interface para histórico
export interface TriagemHistory {
  sessionId: string;
  petName: string;
  date: Date;
  urgencyLevel: UrgencyLevel;
  mainSymptoms: string[];
  outcome: 'completed' | 'abandoned' | 'emergency_redirect';
}

// Enum para ações do CTA
export enum CTAAction {
  EMERGENCY_WHATSAPP = 'emergency_whatsapp',
  EMERGENCY_CALL = 'emergency_call',
  SCHEDULE_APPOINTMENT = 'schedule_appointment',
  MONITOR_AT_HOME = 'monitor_at_home',
  VISIT_CLINIC = 'visit_clinic'
}

// Interface para notificações
export interface TriagemNotification {
  id: string;
  type: 'info' | 'warning' | 'error' | 'success';
  title: string;
  message: string;
  action?: {
    text: string;
    onClick: () => void;
  };
  autoHide?: boolean;
  duration?: number;
}