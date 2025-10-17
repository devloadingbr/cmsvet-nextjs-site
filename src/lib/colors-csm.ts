/**
 * CORES CSM - DESIGN SYSTEM PROFISSIONAL
 * 
 * Paleta de cores oficial da CSM Clínica Veterinária
 * Baseado em: docs/REDESIGN_MASTER_PLAN.md
 * Referência: docs/csmvetclub_docs/design_system_csm.md
 */

export const colorsCsm = {
  /**
   * AZUL CSM - Confiança Médica
   * Uso: Títulos principais, CTAs primários, ícones, links
   */
  azul: {
    primary: '#1E5AA8',
    hover: '#164A8C',
    light: '#E8F4F8',
  },

  /**
   * AMARELO CSM - Cuidado e Calor
   * Uso: CTAs secundários, badges de destaque, acentos pontuais
   * ATENÇÃO: Não usar em textos (baixo contraste)
   */
  amarelo: {
    primary: '#F2B749',
    hover: '#E6A835',
    light: '#FFF9E6',
  },

  /**
   * CINZA - Hierarquia Textual
   * Uso: Textos, bordas, backgrounds alternados
   */
  cinza: {
    neutro: '#7F8C8D',
    escuro: '#2C3E50',
    claro: '#F7FAFC',
  },

  /**
   * LARANJA - Apenas Urgência/Conversão
   * Uso EXCLUSIVO: CTAs de urgência, badges "Popular"
   * PROIBIDO: Uso decorativo
   */
  laranja: {
    urgencia: '#E67E22',
    hover: '#D35400',
  },

  /**
   * VERDE - Apenas Sucesso
   * Uso EXCLUSIVO: Checkmarks, mensagens de sucesso, status positivo
   * PROIBIDO: Uso decorativo
   */
  verde: {
    sucesso: '#27AE60',
  },

  /**
   * BRANCO - Fundo Principal
   * Uso: Background principal (80% do site), cards, espaços em branco
   */
  branco: '#FFFFFF',
} as const;

/**
 * CORES PROIBIDAS
 * 
 * NUNCA usar estas cores no redesign:
 * - Rosa (#EC4899) - Removido completamente
 * - Roxo (#8B5CF6) - Removido completamente
 * - Ciano (#06B6D4) - Removido completamente
 * - Laranja decorativo (#F97316) - Apenas urgência permitida
 */
export const CORES_PROIBIDAS = {
  rosa: '#EC4899',      // ❌ NUNCA USAR
  roxo: '#8B5CF6',      // ❌ NUNCA USAR
  ciano: '#06B6D4',     // ❌ NUNCA USAR
  laranjaDecorativo: '#F97316', // ❌ NUNCA USAR
} as const;

/**
 * CLASSES TAILWIND RECOMENDADAS
 * 
 * Use estas classes para consistência:
 */
export const classesTailwind = {
  // Botões
  btnPrimary: 'bg-csm-blue hover:bg-csm-blue-hover text-white',
  btnSecondary: 'border-2 border-csm-blue text-csm-blue hover:bg-csm-blue-light',
  btnUrgency: 'bg-csm-orange hover:bg-csm-orange-hover text-white',

  // Textos
  textPrimary: 'text-csm-blue',
  textSecondary: 'text-csm-gray-dark',
  textMuted: 'text-csm-gray',

  // Backgrounds
  bgPrimary: 'bg-white',
  bgSecondary: 'bg-csm-gray-light',
  bgBlueLight: 'bg-csm-blue-light',

  // Bordas
  borderDefault: 'border-csm-blue-light',
  borderBlue: 'border-csm-blue',
  borderYellow: 'border-csm-yellow',
} as const;

/**
 * REGRA 60-30-10
 * 
 * Distribuição de cores por página:
 * - 60% Branco/Cinza Claro (backgrounds, espaços)
 * - 30% Azul CSM (elementos principais)
 * - 10% Amarelo CSM (acentos pontuais)
 */
export const REGRA_60_30_10 = {
  branco: '60%',
  azul: '30%',
  amarelo: '10%',
} as const;

/**
 * HELPER: Verificar se cor é permitida
 */
export function isCorPermitida(cor: string): boolean {
  const coresProibidas = Object.values(CORES_PROIBIDAS);
  return !coresProibidas.includes(cor.toUpperCase());
}

/**
 * HELPER: Obter classe Tailwind por tipo
 */
export function getClasseTailwind(
  tipo: 'btn-primary' | 'btn-secondary' | 'btn-urgency' | 'text-primary' | 'text-secondary' | 'bg-primary'
): string {
  const mapa = {
    'btn-primary': classesTailwind.btnPrimary,
    'btn-secondary': classesTailwind.btnSecondary,
    'btn-urgency': classesTailwind.btnUrgency,
    'text-primary': classesTailwind.textPrimary,
    'text-secondary': classesTailwind.textSecondary,
    'bg-primary': classesTailwind.bgPrimary,
  };
  
  return mapa[tipo];
}

/**
 * TIPOS TYPESCRIPT
 */
export type CoresCsm = typeof colorsCsm;
export type CoresProibidas = typeof CORES_PROIBIDAS;
export type ClassesTailwind = typeof classesTailwind;
