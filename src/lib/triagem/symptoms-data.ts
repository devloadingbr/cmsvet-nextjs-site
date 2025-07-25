/**
 * Base de dados completa dos sintomas para triagem veterinária
 * Baseado na documentação de sintomas expandidos
 */

import { Symptom } from './types';
import { SYMPTOM_CATEGORIES, URGENCY_LEVELS } from './constants';

export const SYMPTOMS_DATA: Symptom[] = [
  // ===============================
  // SINTOMAS BÁSICOS (12 principais)
  // ===============================
  
  // Respiração & Energia Básicos
  {
    id: 'breathing_difficulty',
    name: 'Respiração difícil',
    emoji: '💨',
    category: SYMPTOM_CATEGORIES.RESPIRATORY,
    urgencyLevel: URGENCY_LEVELS.EMERGENCY,
    description: 'Dificuldade para respirar, respiração ofegante ou irregular',
    keywords: ['respiração', 'ofegante', 'falta de ar', 'engasgando'],
    isBasic: true,
  },
  {
    id: 'very_weak',
    name: 'Muito fraco',
    emoji: '😴',
    category: SYMPTOM_CATEGORIES.PHYSICAL,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Pet muito fraco, sem energia, apático',
    keywords: ['fraco', 'sem energia', 'apático', 'prostrado'],
    isBasic: true,
  },
  
  // Sistema Digestivo Básicos
  {
    id: 'vomiting',
    name: 'Vômito',
    emoji: '🤢',
    category: SYMPTOM_CATEGORIES.DIGESTIVE,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Vômito frequente ou persistente',
    keywords: ['vômito', 'vomitando', 'enjoo', 'náusea'],
    isBasic: true,
  },
  {
    id: 'not_eating',
    name: 'Não come',
    emoji: '🚫',
    category: SYMPTOM_CATEGORIES.DIGESTIVE,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Recusa total ou parcial da comida',
    keywords: ['não come', 'sem apetite', 'recusa comida'],
    isBasic: true,
  },
  {
    id: 'not_drinking',
    name: 'Não bebe água',
    emoji: '💧',
    category: SYMPTOM_CATEGORIES.DIGESTIVE,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Não bebe água ou bebe muito pouco',
    keywords: ['não bebe', 'sem sede', 'desidratado'],
    isBasic: true,
  },
  {
    id: 'diarrhea',
    name: 'Diarreia',
    emoji: '🤮',
    category: SYMPTOM_CATEGORIES.DIGESTIVE,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Fezes líquidas ou muito moles',
    keywords: ['diarreia', 'cocô líquido', 'fezes moles'],
    isBasic: true,
  },
  
  // Físico Básicos
  {
    id: 'bleeding',
    name: 'Sangramento',
    emoji: '🩸',
    category: SYMPTOM_CATEGORIES.PHYSICAL,
    urgencyLevel: URGENCY_LEVELS.EMERGENCY,
    description: 'Qualquer tipo de sangramento visível',
    keywords: ['sangue', 'sangrando', 'hemorragia'],
    isBasic: true,
  },
  {
    id: 'cannot_walk',
    name: 'Não caminha',
    emoji: '🏃',
    category: SYMPTOM_CATEGORIES.MOVEMENT,
    urgencyLevel: URGENCY_LEVELS.EMERGENCY,
    description: 'Não consegue ou não quer caminhar',
    keywords: ['não anda', 'paralisia', 'não caminha'],
    isBasic: true,
  },
  {
    id: 'fever',
    name: 'Febre',
    emoji: '🔥',
    category: SYMPTOM_CATEGORIES.PHYSICAL,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Temperatura corporal elevada',
    keywords: ['febre', 'quente', 'temperatura'],
    isBasic: true,
  },
  {
    id: 'pain',
    name: 'Dor',
    emoji: '💔',
    category: SYMPTOM_CATEGORIES.PHYSICAL,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Sinais evidentes de dor ou desconforto',
    keywords: ['dor', 'dolorido', 'geme', 'chora'],
    isBasic: true,
  },
  
  // Neurológico Básicos
  {
    id: 'confused',
    name: 'Confuso',
    emoji: '🧠',
    category: SYMPTOM_CATEGORIES.NEUROLOGICAL,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Comportamento confuso, desorientado',
    keywords: ['confuso', 'desorientado', 'perdido'],
    isBasic: true,
  },
  {
    id: 'seizure',
    name: 'Convulsão',
    emoji: '⚡',
    category: SYMPTOM_CATEGORIES.NEUROLOGICAL,
    urgencyLevel: URGENCY_LEVELS.EMERGENCY,
    description: 'Episódio de convulsão ou tremores violentos',
    keywords: ['convulsão', 'ataque', 'tremores', 'espasmos'],
    isBasic: true,
  },

  // ===============================
  // SINTOMAS EXPANDIDOS (33 extras)
  // ===============================
  
  // Respiração & Energia Extras (5)
  {
    id: 'panting_at_rest',
    name: 'Ofegante mesmo parado',
    emoji: '😮‍💨',
    category: SYMPTOM_CATEGORIES.RESPIRATORY,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Respiração ofegante mesmo em repouso',
    keywords: ['ofegante', 'cansado', 'respiração rápida'],
    isBasic: false,
  },
  {
    id: 'coughing',
    name: 'Tosse',
    emoji: '🫁',
    category: SYMPTOM_CATEGORIES.RESPIRATORY,
    urgencyLevel: URGENCY_LEVELS.THIS_WEEK,
    description: 'Tosse seca ou com catarro',
    keywords: ['tosse', 'tossindo', 'pigarro'],
    isBasic: false,
  },
  {
    id: 'fainted',
    name: 'Desmaiou',
    emoji: '😵',
    category: SYMPTOM_CATEGORIES.NEUROLOGICAL,
    urgencyLevel: URGENCY_LEVELS.EMERGENCY,
    description: 'Perdeu consciência ou desmaiou',
    keywords: ['desmaiou', 'desacordou', 'perdeu consciência'],
    isBasic: false,
  },
  {
    id: 'sleeping_too_much',
    name: 'Dorme muito mais que normal',
    emoji: '💤',
    category: SYMPTOM_CATEGORIES.BEHAVIORAL,
    urgencyLevel: URGENCY_LEVELS.MONITOR,
    description: 'Dormindo excessivamente, mais que o habitual',
    keywords: ['dorme muito', 'sonolento', 'letárgico'],
    isBasic: false,
  },
  {
    id: 'restless',
    name: 'Não consegue ficar quieto',
    emoji: '⚡',
    category: SYMPTOM_CATEGORIES.BEHAVIORAL,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Muito inquieto, não consegue descansar',
    keywords: ['inquieto', 'agitado', 'não para'],
    isBasic: false,
  },

  // Alimentação & Necessidades Extras (8)
  {
    id: 'vomiting_blood',
    name: 'Vômito com sangue',
    emoji: '🩸',
    category: SYMPTOM_CATEGORIES.DIGESTIVE,
    urgencyLevel: URGENCY_LEVELS.EMERGENCY,
    description: 'Vômito contendo sangue ou material escuro',
    keywords: ['vômito sangue', 'vômito escuro', 'hematêmese'],
    isBasic: false,
  },
  {
    id: 'eating_drinking_excessively',
    name: 'Come ou bebe demais',
    emoji: '😋',
    category: SYMPTOM_CATEGORIES.DIGESTIVE,
    urgencyLevel: URGENCY_LEVELS.THIS_WEEK,
    description: 'Apetite ou sede excessivos',
    keywords: ['come muito', 'bebe muito', 'voraz'],
    isBasic: false,
  },
  {
    id: 'blood_in_stool',
    name: 'Sangue no cocô',
    emoji: '🩸',
    category: SYMPTOM_CATEGORIES.DIGESTIVE,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Presença de sangue nas fezes',
    keywords: ['sangue cocô', 'fezes sangue', 'melena'],
    isBasic: false,
  },
  {
    id: 'dark_stool',
    name: 'Cocô muito escuro',
    emoji: '🟤',
    category: SYMPTOM_CATEGORIES.DIGESTIVE,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Fezes muito escuras ou pretas',
    keywords: ['cocô preto', 'fezes escuras', 'melena'],
    isBasic: false,
  },
  {
    id: 'straining_defecate',
    name: 'Tenta fazer cocô mas não consegue',
    emoji: '🚽',
    category: SYMPTOM_CATEGORIES.DIGESTIVE,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Esforço para defecar sem sucesso',
    keywords: ['constipação', 'não consegue defecar', 'prisão ventre'],
    isBasic: false,
  },
  {
    id: 'straining_urinate',
    name: 'Tenta fazer xixi mas não consegue',
    emoji: '💦',
    category: SYMPTOM_CATEGORIES.DIGESTIVE,
    urgencyLevel: URGENCY_LEVELS.EMERGENCY,
    description: 'Esforço para urinar sem conseguir',
    keywords: ['não urina', 'retenção urina', 'obstrução'],
    isBasic: false,
  },
  {
    id: 'frequent_urination',
    name: 'Faz xixi várias vezes seguidas',
    emoji: '⚡',
    category: SYMPTOM_CATEGORIES.DIGESTIVE,
    urgencyLevel: URGENCY_LEVELS.THIS_WEEK,
    description: 'Urinação muito frequente',
    keywords: ['urina muito', 'xixi frequente', 'poliúria'],
    isBasic: false,
  },
  {
    id: 'blood_in_urine',
    name: 'Sangue no xixi',
    emoji: '🩸',
    category: SYMPTOM_CATEGORIES.DIGESTIVE,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Presença de sangue na urina',
    keywords: ['sangue urina', 'xixi sangue', 'hematúria'],
    isBasic: false,
  },

  // Comportamento Extras (8)
  {
    id: 'suddenly_aggressive',
    name: 'Agressivo (mudança súbita)',
    emoji: '😡',
    category: SYMPTOM_CATEGORIES.BEHAVIORAL,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Comportamento agressivo repentino',
    keywords: ['agressivo', 'bravo', 'ataca', 'morde'],
    isBasic: false,
  },
  {
    id: 'very_anxious',
    name: 'Muito ansioso/nervoso',
    emoji: '😨',
    category: SYMPTOM_CATEGORIES.BEHAVIORAL,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Ansiedade extrema ou nervosismo',
    keywords: ['ansioso', 'nervoso', 'estressado'],
    isBasic: false,
  },
  {
    id: 'crying_nonstop',
    name: 'Chorando/gemendo sem parar',
    emoji: '😢',
    category: SYMPTOM_CATEGORIES.BEHAVIORAL,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Vocalização constante de dor ou desconforto',
    keywords: ['chora', 'geme', 'lamenta', 'vocaliza'],
    isBasic: false,
  },
  {
    id: 'hiding',
    name: 'Se escondendo/isolando',
    emoji: '🫣',
    category: SYMPTOM_CATEGORIES.BEHAVIORAL,
    urgencyLevel: URGENCY_LEVELS.THIS_WEEK,
    description: 'Comportamento de isolamento ou se esconder',
    keywords: ['esconde', 'isolado', 'retraído'],
    isBasic: false,
  },
  {
    id: 'not_responding',
    name: 'Não responde quando chama',
    emoji: '🎯',
    category: SYMPTOM_CATEGORIES.NEUROLOGICAL,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Não responde aos chamados ou estímulos',
    keywords: ['não responde', 'ausente', 'alheio'],
    isBasic: false,
  },
  {
    id: 'losing_balance',
    name: 'Tropeça/perde equilíbrio',
    emoji: '💫',
    category: SYMPTOM_CATEGORIES.NEUROLOGICAL,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Perda de coordenação ou equilíbrio',
    keywords: ['tropeça', 'desequilíbrio', 'cambaleando'],
    isBasic: false,
  },
  {
    id: 'strange_stare',
    name: 'Olhar estranho/vazio',
    emoji: '👁️',
    category: SYMPTOM_CATEGORIES.NEUROLOGICAL,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Olhar fixo, vazio ou sem expressão',
    keywords: ['olhar vazio', 'olhar fixo', 'ausente'],
    isBasic: false,
  },
  {
    id: 'repetitive_movements',
    name: 'Faz movimentos repetitivos',
    emoji: '🔄',
    category: SYMPTOM_CATEGORIES.NEUROLOGICAL,
    urgencyLevel: URGENCY_LEVELS.THIS_WEEK,
    description: 'Comportamentos compulsivos ou repetitivos',
    keywords: ['repetitivo', 'compulsivo', 'estereotipia'],
    isBasic: false,
  },

  // Ferimentos & Dor Extras (6)
  {
    id: 'open_wound',
    name: 'Machucado/ferida aberta',
    emoji: '🔴',
    category: SYMPTOM_CATEGORIES.PHYSICAL,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Ferida aberta ou machucado visível',
    keywords: ['ferida', 'machucado', 'corte', 'lesão'],
    isBasic: false,
  },
  {
    id: 'cold_body',
    name: 'Corpo gelado ao toque',
    emoji: '🧊',
    category: SYMPTOM_CATEGORIES.PHYSICAL,
    urgencyLevel: URGENCY_LEVELS.EMERGENCY,
    description: 'Temperatura corporal muito baixa',
    keywords: ['gelado', 'frio', 'hipotermia'],
    isBasic: false,
  },
  {
    id: 'limping',
    name: 'Mancando/claudicando',
    emoji: '🦴',
    category: SYMPTOM_CATEGORIES.MOVEMENT,
    urgencyLevel: URGENCY_LEVELS.THIS_WEEK,
    description: 'Dificuldade para apoiar uma das patas',
    keywords: ['manca', 'claudica', 'pata dolorida'],
    isBasic: false,
  },
  {
    id: 'trembling',
    name: 'Tremendo sem parar',
    emoji: '🫨',
    category: SYMPTOM_CATEGORIES.PHYSICAL,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Tremores constantes ou incontroláveis',
    keywords: ['treme', 'tremor', 'tiritar'],
    isBasic: false,
  },
  {
    id: 'wont_let_touch',
    name: 'Não deixa ninguém tocar',
    emoji: '🤲',
    category: SYMPTOM_CATEGORIES.BEHAVIORAL,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Evita contato físico ou se afasta quando tocado',
    keywords: ['não deixa tocar', 'evita contato', 'sensível'],
    isBasic: false,
  },
  {
    id: 'curved_in_pain',
    name: 'Fica curvado de dor',
    emoji: '🔄',
    category: SYMPTOM_CATEGORIES.PHYSICAL,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Postura curvada indicando dor abdominal',
    keywords: ['curvado', 'posição dor', 'dor abdominal'],
    isBasic: false,
  },

  // Rosto & Cabeça (8)
  {
    id: 'red_eyes',
    name: 'Olhos vermelhos/irritados',
    emoji: '👁️',
    category: SYMPTOM_CATEGORIES.EYES,
    urgencyLevel: URGENCY_LEVELS.THIS_WEEK,
    description: 'Olhos vermelhos, irritados ou inflamados',
    keywords: ['olhos vermelhos', 'irritação', 'conjuntivite'],
    isBasic: false,
  },
  {
    id: 'eye_discharge',
    name: 'Remela/secreção nos olhos',
    emoji: '💧',
    category: SYMPTOM_CATEGORIES.EYES,
    urgencyLevel: URGENCY_LEVELS.THIS_WEEK,
    description: 'Secreção ou remela nos olhos',
    keywords: ['remela', 'secreção', 'pus olhos'],
    isBasic: false,
  },
  {
    id: 'swollen_eyes',
    name: 'Olhos inchados',
    emoji: '🫣',
    category: SYMPTOM_CATEGORIES.EYES,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Inchaço ao redor dos olhos',
    keywords: ['olhos inchados', 'edema', 'inchaço'],
    isBasic: false,
  },
  {
    id: 'dry_nose',
    name: 'Nariz seco/rachado',
    emoji: '👃',
    category: SYMPTOM_CATEGORIES.EYES,
    urgencyLevel: URGENCY_LEVELS.MONITOR,
    description: 'Nariz seco, rachado ou com crostas',
    keywords: ['nariz seco', 'rachado', 'ressecado'],
    isBasic: false,
  },
  {
    id: 'nasal_discharge',
    name: 'Corrimento no nariz',
    emoji: '💧',
    category: SYMPTOM_CATEGORIES.RESPIRATORY,
    urgencyLevel: URGENCY_LEVELS.THIS_WEEK,
    description: 'Secreção ou corrimento nasal',
    keywords: ['corrimento nasal', 'secreção nariz', 'catarro'],
    isBasic: false,
  },
  {
    id: 'nosebleed',
    name: 'Sangue no nariz',
    emoji: '🩸',
    category: SYMPTOM_CATEGORIES.PHYSICAL,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Sangramento nasal',
    keywords: ['sangue nariz', 'hemorragia nasal', 'epistaxe'],
    isBasic: false,
  },
  {
    id: 'head_shaking',
    name: 'Balança muito a cabeça',
    emoji: '👂',
    category: SYMPTOM_CATEGORIES.BEHAVIORAL,
    urgencyLevel: URGENCY_LEVELS.THIS_WEEK,
    description: 'Movimento excessivo da cabeça',
    keywords: ['balança cabeça', 'chacoalha', 'otite'],
    isBasic: false,
  },
  {
    id: 'ear_discharge',
    name: 'Líquido saindo do ouvido',
    emoji: '💧',
    category: SYMPTOM_CATEGORIES.EYES,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Secreção ou líquido saindo da orelha',
    keywords: ['secreção ouvido', 'otite', 'líquido orelha'],
    isBasic: false,
  },

  // Boca (7)
  {
    id: 'excessive_drooling',
    name: 'Baba muito/excessivo',
    emoji: '🤤',
    category: SYMPTOM_CATEGORIES.DIGESTIVE,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Salivação excessiva',
    keywords: ['baba muito', 'saliva', 'hipersalivação'],
    isBasic: false,
  },
  {
    id: 'difficulty_swallowing',
    name: 'Dificuldade para engolir',
    emoji: '🦷',
    category: SYMPTOM_CATEGORIES.DIGESTIVE,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Dificuldade ou dor ao engolir',
    keywords: ['não engole', 'disfagia', 'dor engolir'],
    isBasic: false,
  },
  {
    id: 'choking',
    name: 'Engasgando',
    emoji: '😵',
    category: SYMPTOM_CATEGORIES.RESPIRATORY,
    urgencyLevel: URGENCY_LEVELS.EMERGENCY,
    description: 'Sinais de engasgo ou obstrução',
    keywords: ['engasgo', 'engasgado', 'obstrução'],
    isBasic: false,
  },
  {
    id: 'pale_purple_tongue',
    name: 'Língua pálida/roxa',
    emoji: '👅',
    category: SYMPTOM_CATEGORIES.PHYSICAL,
    urgencyLevel: URGENCY_LEVELS.EMERGENCY,
    description: 'Cor anormal da língua',
    keywords: ['língua roxa', 'cianose', 'língua pálida'],
    isBasic: false,
  },
  {
    id: 'gum_discoloration',
    name: 'Gengiva branca ou muito vermelha',
    emoji: '🦷',
    category: SYMPTOM_CATEGORIES.PHYSICAL,
    urgencyLevel: URGENCY_LEVELS.TODAY,
    description: 'Cor anormal das gengivas',
    keywords: ['gengiva branca', 'gengiva vermelha', 'anemia'],
    isBasic: false,
  },
  {
    id: 'bad_breath',
    name: 'Bafo muito forte/diferente',
    emoji: '🤢',
    category: SYMPTOM_CATEGORIES.DIGESTIVE,
    urgencyLevel: URGENCY_LEVELS.THIS_WEEK,
    description: 'Halitose intensa ou odor anormal',
    keywords: ['bafo', 'halitose', 'mau hálito'],
    isBasic: false,
  },
  {
    id: 'foam_mouth',
    name: 'Espuma na boca',
    emoji: '💧',
    category: SYMPTOM_CATEGORIES.NEUROLOGICAL,
    urgencyLevel: URGENCY_LEVELS.EMERGENCY,
    description: 'Formação de espuma na boca',
    keywords: ['espuma boca', 'baba espumosa', 'convulsão'],
    isBasic: false,
  },
];

// Função para obter sintomas por categoria
export const getSymptomsByCategory = (category: string): Symptom[] => {
  return SYMPTOMS_DATA.filter(symptom => symptom.category === category);
};

// Função para obter sintomas básicos
export const getBasicSymptoms = (): Symptom[] => {
  return SYMPTOMS_DATA.filter(symptom => symptom.isBasic);
};

// Função para obter sintomas expandidos
export const getExpandedSymptoms = (): Symptom[] => {
  return SYMPTOMS_DATA.filter(symptom => !symptom.isBasic);
};

// Função para buscar sintomas
export const searchSymptoms = (query: string): Symptom[] => {
  const lowercaseQuery = query.toLowerCase();
  return SYMPTOMS_DATA.filter(symptom => 
    symptom.name.toLowerCase().includes(lowercaseQuery) ||
    symptom.description.toLowerCase().includes(lowercaseQuery) ||
    symptom.keywords.some(keyword => keyword.toLowerCase().includes(lowercaseQuery))
  );
};

// Função para obter sintoma por ID
export const getSymptomById = (id: string): Symptom | undefined => {
  return SYMPTOMS_DATA.find(symptom => symptom.id === id);
};