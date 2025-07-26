/**
 * Schemas Zod para validação das etapas da triagem
 */

import { z } from 'zod';

// Schema para dados do pet
export const PetDataSchema = z.object({
  name: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(50, 'Nome deve ter no máximo 50 caracteres')
    .regex(/^[A-Za-zÀ-ÿ\s\-']+$/, 'Nome deve conter apenas letras, espaços, hífens e apostrofes'),
  
  age: z
    .number()
    .min(0, 'Idade deve ser um número positivo')
    .max(30, 'Idade deve ser menor que 30 anos')
    .refine((val) => val >= 0, 'Idade deve ser um número positivo'),
  
  species: z.enum(['dog', 'cat', 'other']),
  
  breed: z
    .string()
    .max(50, 'Raça deve ter no máximo 50 caracteres')
    .optional(),
  
  weight: z
    .number()
    .min(0.1, 'Peso deve ser maior que 0.1kg')
    .max(100, 'Peso deve ser menor que 100kg')
    .optional()
});

// Schema para seleção de sintomas
export const SymptomsSchema = z.object({
  selectedSymptoms: z
    .array(z.string())
    .min(1, 'Selecione pelo menos um sintoma')
    .max(10, 'Selecione no máximo 10 sintomas'),
  
  extraInfo: z
    .string()
    .max(500, 'Informações adicionais devem ter no máximo 500 caracteres')
    .optional()
});

// Schema para informações extras
export const ExtraInfoSchema = z.object({
  duration: z.enum(['hours', 'days', 'weeks', 'months'] as const).optional(),
  severity: z.enum(['mild', 'moderate', 'severe'] as const).optional(),
  frequency: z.enum(['once', 'occasional', 'frequent', 'constant'] as const).optional(),
  additionalInfo: z
    .string()
    .max(1000, 'Informações adicionais devem ter no máximo 1000 caracteres')
    .optional()
});

// Schema para mensagem de chat
export const ChatMessageSchema = z.object({
  message: z
    .string()
    .min(1, 'Digite uma mensagem')
    .max(300, 'Mensagem deve ter no máximo 300 caracteres'),
  
  sessionId: z.string().uuid('ID de sessão inválido')
});

// Schema combinado para toda a triagem
export const CompleteTriagemSchema = z.object({
  pet: PetDataSchema,
  symptoms: SymptomsSchema,
  extraInfo: ExtraInfoSchema.optional()
});

// Tipos derivados dos schemas
export type PetDataInput = z.infer<typeof PetDataSchema>;
export type SymptomsInput = z.infer<typeof SymptomsSchema>;
export type ExtraInfoInput = z.infer<typeof ExtraInfoSchema>;
export type ChatMessageInput = z.infer<typeof ChatMessageSchema>;
export type CompleteTriagemInput = z.infer<typeof CompleteTriagemSchema>;

// Função para validar step específico
export const validateTriagemStep = (step: 'pet_data' | 'symptoms' | 'extra_info', data: unknown) => {
  try {
    switch (step) {
      case 'pet_data':
        PetDataSchema.parse(data);
        break;
      case 'symptoms':
        SymptomsSchema.parse(data);
        break;
      case 'extra_info':
        ExtraInfoSchema.parse(data);
        break;
    }
    return { success: true, errors: [] };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.issues.map((err) => err.message)
      };
    }
    return {
      success: false,
      errors: ['Erro de validação desconhecido']
    };
  }
};

// Constantes para mensagens de erro customizadas
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'Este campo é obrigatório',
  INVALID_EMAIL: 'Email inválido',
  MIN_LENGTH: (min: number) => `Deve ter pelo menos ${min} caracteres`,
  MAX_LENGTH: (max: number) => `Deve ter no máximo ${max} caracteres`,
  INVALID_AGE: 'Idade deve ser um número entre 0 e 30',
  INVALID_WEIGHT: 'Peso deve ser um número entre 0.1 e 100kg',
  NO_SYMPTOMS: 'Selecione pelo menos um sintoma',
  TOO_MANY_SYMPTOMS: 'Selecione no máximo 10 sintomas',
  INVALID_SPECIES: 'Selecione uma espécie válida'
} as const;