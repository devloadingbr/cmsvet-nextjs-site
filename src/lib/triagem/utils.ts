/**
 * Utilitários para o sistema de triagem
 */

import { Pet, Symptom, UrgencyLevel, TriagemSession, ValidationResult } from './types';
import { VALIDATION_PATTERNS, LIMITS, URGENCY_LEVELS } from './constants';
import { getSymptomById } from './symptoms-data';

/**
 * Valida dados do pet
 */
export function validatePetData(pet: Partial<Pet>): ValidationResult {
  const errors: string[] = [];

  // Validação do nome
  if (!pet.name || pet.name.trim().length === 0) {
    errors.push('Nome do pet é obrigatório');
  } else if (pet.name.length < LIMITS.PET_NAME_MIN_LENGTH) {
    errors.push(`Nome deve ter pelo menos ${LIMITS.PET_NAME_MIN_LENGTH} caracteres`);
  } else if (pet.name.length > LIMITS.PET_NAME_MAX_LENGTH) {
    errors.push(`Nome deve ter no máximo ${LIMITS.PET_NAME_MAX_LENGTH} caracteres`);
  } else if (!VALIDATION_PATTERNS.PET_NAME.test(pet.name)) {
    errors.push('Nome deve conter apenas letras e espaços');
  }

  // Validação da idade
  if (!pet.age && pet.age !== 0) {
    errors.push('Idade do pet é obrigatória');
  } else if (pet.age < LIMITS.PET_AGE_MIN) {
    errors.push('Idade não pode ser negativa');
  } else if (pet.age > LIMITS.PET_AGE_MAX) {
    errors.push(`Idade não pode ser maior que ${LIMITS.PET_AGE_MAX} anos`);
  }

  // Validação da espécie
  if (!pet.species) {
    errors.push('Espécie do pet é obrigatória');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Valida sintomas selecionados
 */
export function validateSymptoms(symptomIds: string[]): ValidationResult {
  const errors: string[] = [];

  if (symptomIds.length === 0) {
    errors.push('Selecione pelo menos um sintoma');
  }

  if (symptomIds.length > LIMITS.MAX_SYMPTOMS_SELECTION) {
    errors.push(`Máximo de ${LIMITS.MAX_SYMPTOMS_SELECTION} sintomas podem ser selecionados`);
  }

  // Verifica se todos os IDs de sintomas são válidos
  const invalidSymptoms = symptomIds.filter(id => !getSymptomById(id));
  if (invalidSymptoms.length > 0) {
    errors.push(`Sintomas inválidos: ${invalidSymptoms.join(', ')}`);
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Valida informações extras
 */
export function validateExtraInfo(extraInfo: string): ValidationResult {
  const errors: string[] = [];

  if (extraInfo && extraInfo.length > LIMITS.EXTRA_INFO_MAX_LENGTH) {
    errors.push(`Informações extras devem ter no máximo ${LIMITS.EXTRA_INFO_MAX_LENGTH} caracteres`);
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Valida mensagem do chat
 */
export function validateChatMessage(message: string): ValidationResult {
  const errors: string[] = [];

  if (!message || message.trim().length === 0) {
    errors.push('Mensagem não pode estar vazia');
  }

  if (message.length > LIMITS.CHAT_MESSAGE_MAX_LENGTH) {
    errors.push(`Mensagem deve ter no máximo ${LIMITS.CHAT_MESSAGE_MAX_LENGTH} caracteres`);
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Calcula nível de urgência baseado nos sintomas selecionados
 */
export function calculateUrgencyFromSymptoms(symptomIds: string[]): UrgencyLevel {
  const symptoms = symptomIds.map(id => getSymptomById(id)).filter(Boolean) as Symptom[];
  
  // Se tem algum sintoma de emergência
  if (symptoms.some(s => s.urgencyLevel === URGENCY_LEVELS.EMERGENCY)) {
    return URGENCY_LEVELS.EMERGENCY;
  }
  
  // Se tem algum sintoma para ver hoje
  if (symptoms.some(s => s.urgencyLevel === URGENCY_LEVELS.TODAY)) {
    return URGENCY_LEVELS.TODAY;
  }
  
  // Se tem algum sintoma para esta semana
  if (symptoms.some(s => s.urgencyLevel === URGENCY_LEVELS.THIS_WEEK)) {
    return URGENCY_LEVELS.THIS_WEEK;
  }
  
  // Senão, monitorar
  return URGENCY_LEVELS.MONITOR;
}

/**
 * Formata idade do pet para exibição
 */
export function formatPetAge(age: number): string {
  if (age === 0) return 'Recém-nascido';
  if (age < 1) return `${Math.round(age * 12)} meses`;
  if (age === 1) return '1 ano';
  return `${age} anos`;
}

/**
 * Gera ID único para sessões
 */
export function generateSessionId(): string {
  return `triagem_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Gera ID único para mensagens de chat
 */
export function generateChatMessageId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Verifica se uma sessão expirou
 */
export function isSessionExpired(session: TriagemSession, timeoutMinutes: number = 30): boolean {
  const now = new Date();
  const sessionTime = new Date(session.createdAt);
  const diffMinutes = (now.getTime() - sessionTime.getTime()) / (1000 * 60);
  
  return diffMinutes > timeoutMinutes;
}

/**
 * Sanitiza texto de entrada do usuário
 */
export function sanitizeUserInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove caracteres HTML básicos
    .substring(0, 1000); // Limita tamanho
}

/**
 * Formata sintomas para exibição
 */
export function formatSymptomsForDisplay(symptomIds: string[]): string {
  const symptoms = symptomIds.map(id => getSymptomById(id)).filter(Boolean) as Symptom[];
  
  if (symptoms.length === 0) return 'Nenhum sintoma selecionado';
  if (symptoms.length === 1) return symptoms[0].name;
  if (symptoms.length === 2) return `${symptoms[0].name} e ${symptoms[1].name}`;
  
  const lastSymptom = symptoms[symptoms.length - 1];
  const firstSymptoms = symptoms.slice(0, -1).map(s => s.name).join(', ');
  
  return `${firstSymptoms} e ${lastSymptom.name}`;
}

/**
 * Verifica se há sintomas de emergência selecionados
 */
export function hasEmergencySymptoms(symptomIds: string[]): boolean {
  const symptoms = symptomIds.map(id => getSymptomById(id)).filter(Boolean) as Symptom[];
  return symptoms.some(s => s.urgencyLevel === URGENCY_LEVELS.EMERGENCY);
}

/**
 * Constrói mensagem para WhatsApp baseada na triagem
 */
export function buildWhatsAppMessage(
  pet: Pet,
  symptoms: string[],
  urgencyLevel: UrgencyLevel,
  isEmergency: boolean = false
): string {
  const symptomsText = formatSymptomsForDisplay(symptoms);
  const petInfo = `${pet.name} (${formatPetAge(pet.age)}, ${
    pet.species === 'dog' ? 'cão' : pet.species === 'cat' ? 'gato' : 'outro'
  })`;

  if (isEmergency) {
    return `🚨 EMERGÊNCIA VETERINÁRIA

Pet: ${petInfo}
Sintomas: ${symptomsText}

Preciso de atendimento URGENTE! Triagem realizada pelo site da CSM.`;
  }

  return `📋 Triagem Veterinária - CSM

Pet: ${petInfo}
Sintomas: ${symptomsText}

Gostaria de agendar uma consulta com base na triagem realizada no site.`;
}

/**
 * Converte nível numérico para texto
 */
export function convertNumericUrgencyToText(level: number): UrgencyLevel {
  if (level >= 8) return URGENCY_LEVELS.EMERGENCY;
  if (level >= 6) return URGENCY_LEVELS.TODAY;
  if (level >= 3) return URGENCY_LEVELS.THIS_WEEK;
  return URGENCY_LEVELS.MONITOR;
}

/**
 * Obtém cor CSS baseada no nível de urgência
 */
export function getUrgencyColor(urgencyLevel: UrgencyLevel): string {
  switch (urgencyLevel) {
    case URGENCY_LEVELS.EMERGENCY:
      return 'red';
    case URGENCY_LEVELS.TODAY:
      return 'orange';
    case URGENCY_LEVELS.THIS_WEEK:
      return 'yellow';
    case URGENCY_LEVELS.MONITOR:
      return 'blue';
    default:
      return 'gray';
  }
}

/**
 * Formata timestamp para exibição
 */
export function formatTimestamp(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
}

/**
 * Debounce function para inputs
 */
export function debounce<T extends (...args: never[]) => unknown>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

/**
 * Verifica se é mobile
 */
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
}

/**
 * Copia texto para clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator === 'undefined' || !navigator.clipboard) {
    return false;
  }
  
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
}