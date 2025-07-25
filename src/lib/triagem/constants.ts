/**
 * Constantes para o sistema de triagem veterinária
 */

import { SymptomCategory, UrgencyLevel, TriagemConfig } from './types';

// Categorias de sintomas
export const SYMPTOM_CATEGORIES = {
  RESPIRATORY: 'respiratory' as SymptomCategory,
  DIGESTIVE: 'digestive' as SymptomCategory,
  NEUROLOGICAL: 'neurological' as SymptomCategory,
  PHYSICAL: 'physical' as SymptomCategory,
  BEHAVIORAL: 'behavioral' as SymptomCategory,
  SKIN: 'skin' as SymptomCategory,
  EYES: 'eyes' as SymptomCategory,
  MOVEMENT: 'movement' as SymptomCategory,
} as const;

// Níveis de urgência
export const URGENCY_LEVELS = {
  EMERGENCY: 'emergency' as UrgencyLevel,
  TODAY: 'today' as UrgencyLevel,
  THIS_WEEK: 'this_week' as UrgencyLevel,
  MONITOR: 'monitor' as UrgencyLevel,
} as const;

// Configuração padrão da triagem
export const DEFAULT_TRIAGEM_CONFIG: TriagemConfig = {
  maxChatQuestions: 5,
  aiModel: 'gpt-4',
  enableChat: true,
  emergencyThreshold: 8,
  sessionTimeout: 30, // 30 minutos
};

// Cores por categoria de sintoma
export const CATEGORY_COLORS = {
  respiratory: {
    bg: 'bg-white',
    border: 'border-blue-500',
    text: 'text-blue-700',
    badge: 'bg-blue-600',
  },
  digestive: {
    bg: 'bg-white',
    border: 'border-emerald-500',
    text: 'text-emerald-700',
    badge: 'bg-emerald-600',
  },
  neurological: {
    bg: 'bg-white',
    border: 'border-violet-500',
    text: 'text-violet-700',
    badge: 'bg-violet-600',
  },
  physical: {
    bg: 'bg-white',
    border: 'border-red-500',
    text: 'text-red-700',
    badge: 'bg-red-600',
  },
  behavioral: {
    bg: 'bg-white',
    border: 'border-orange-500',
    text: 'text-orange-700',
    badge: 'bg-orange-600',
  },
  skin: {
    bg: 'bg-white',
    border: 'border-pink-500',
    text: 'text-pink-700',
    badge: 'bg-pink-600',
  },
  eyes: {
    bg: 'bg-white',
    border: 'border-cyan-500',
    text: 'text-cyan-700',
    badge: 'bg-cyan-600',
  },
  movement: {
    bg: 'bg-white',
    border: 'border-indigo-500',
    text: 'text-indigo-700',
    badge: 'bg-indigo-600',
  },
} as const;

// Cores por nível de urgência
export const URGENCY_COLORS = {
  emergency: {
    bg: 'bg-red-600',
    border: 'border-red-600',
    text: 'text-white',
    icon: 'text-red-600',
  },
  today: {
    bg: 'bg-orange-500',
    border: 'border-orange-500',
    text: 'text-white',
    icon: 'text-orange-600',
  },
  this_week: {
    bg: 'bg-amber-500',
    border: 'border-amber-500',
    text: 'text-white',
    icon: 'text-amber-600',
  },
  monitor: {
    bg: 'bg-blue-600',
    border: 'border-blue-600',
    text: 'text-white',
    icon: 'text-blue-600',
  },
} as const;

// Labels dos níveis de urgência
export const URGENCY_LABELS = {
  emergency: 'Emergência Imediata',
  today: 'Ver Hoje',
  this_week: 'Agendar Esta Semana',
  monitor: 'Observar e Monitorar',
} as const;

// Labels das categorias
export const CATEGORY_LABELS = {
  respiratory: 'Respiração & Energia',
  digestive: 'Sistema Digestivo',
  neurological: 'Comportamento & Neurológico',
  physical: 'Ferimentos & Dor',
  behavioral: 'Comportamento',
  skin: 'Pele & Pelo',
  eyes: 'Olhos & Rosto',
  movement: 'Movimento & Mobilidade',
} as const;

// Ícones das categorias
export const CATEGORY_ICONS = {
  respiratory: '🫁',
  digestive: '🤢',
  neurological: '🧠',
  physical: '🩸',
  behavioral: '😵‍💫',
  skin: '🍖',
  eyes: '👁️',
  movement: '🦴',
} as const;

// Espécies de pets
export const PET_SPECIES = {
  DOG: 'dog',
  CAT: 'cat',
  OTHER: 'other',
} as const;

// Labels das espécies
export const SPECIES_LABELS = {
  dog: 'Cão',
  cat: 'Gato',
  other: 'Outro',
} as const;

// Ícones das espécies
export const SPECIES_ICONS = {
  dog: '🐕',
  cat: '🐱',
  other: '🐰',
} as const;

// Passos da triagem
export const TRIAGEM_STEPS = {
  PET_DATA: 'pet_data',
  SYMPTOMS: 'symptoms',
  ANALYSIS: 'analysis',
  CHAT: 'chat',
} as const;

// Labels dos passos
export const STEP_LABELS = {
  pet_data: 'Dados do Pet',
  symptoms: 'Sintomas',
  analysis: 'Análise',
  chat: 'Chat',
} as const;

// Mensagens padrão
export const DEFAULT_MESSAGES = {
  LOADING_ANALYSIS: 'Analisando sintomas com nossa IA veterinária...',
  ANALYSIS_ERROR: 'Erro ao analisar sintomas. Tente novamente.',
  CHAT_ERROR: 'Erro ao enviar mensagem. Tente novamente.',
  SESSION_EXPIRED: 'Sua sessão expirou. Reinicie a triagem.',
  NO_SYMPTOMS: 'Selecione pelo menos um sintoma para continuar.',
  EMERGENCY_ALERT: 'Situação de emergência detectada! Procure ajuda imediatamente.',
} as const;

// Regex para validação
export const VALIDATION_PATTERNS = {
  PET_NAME: /^[a-zA-ZÀ-ÿ\s]{2,30}$/,
  PET_AGE: /^\d+$/,
} as const;

// Limites
export const LIMITS = {
  PET_NAME_MAX_LENGTH: 30,
  PET_NAME_MIN_LENGTH: 2,
  PET_AGE_MAX: 30,
  PET_AGE_MIN: 0,
  EXTRA_INFO_MAX_LENGTH: 500,
  CHAT_MESSAGE_MAX_LENGTH: 300,
  MAX_SYMPTOMS_SELECTION: 10,
} as const;

// URLs de ação
export const ACTION_URLS = {
  EMERGENCY_WHATSAPP: (message: string) => 
    `https://wa.me/554130770023?text=${encodeURIComponent(message)}`,
  EMERGENCY_CALL: 'tel:+554130770023',
  APPOINTMENT_WHATSAPP: (message: string) => 
    `https://wa.me/554130770023?text=${encodeURIComponent(message)}`,
} as const;

// Prompts para IA
export const AI_PROMPTS = {
  ANALYSIS_SYSTEM: `Você é um assistente veterinário especializado da CSM Clínica Veterinária em Curitiba.
    Analise os dados do pet e sintomas fornecidos e responda em formato JSON estruturado.
    Seja empático, prático e sempre indique quando procurar ajuda profissional.
    Nunca substitua consulta veterinária, apenas oriente sobre urgência e primeiros cuidados.`,
    
  CHAT_SYSTEM: `Você é um veterinário da CSM Clínica Veterinária respondendo dúvidas específicas sobre um pet.
    Seja direto, empático e prático. Mantenha o contexto da consulta inicial.
    Se a situação se agravar, sempre recomende procurar a clínica imediatamente.`,
} as const;