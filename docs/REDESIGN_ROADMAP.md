# 🗺️ ROADMAP DE REDESIGN - HOME CSM
## Plano de Trabalho em Etapas Focadas e Minimalistas

**Objetivo**: Transformar a home de "carnavalesca" para "profissional" mantendo consistência total.  
**Referência**: `docs/REDESIGN_MASTER_PLAN.md` e `docs/csmvetclub_docs/`  
**Duração Total**: 4-6 semanas

---

## 📊 ANÁLISE DA HOME ATUAL

### Estrutura (8 Seções)
1. **HeroSection** - Banner principal com badges e CTAs
2. **StatsSection** - 4 cards de estatísticas
3. **ServicesSection** - 6 cards de serviços + aviso
4. **WhyChooseSection** - 4 diferenciais
5. **TeamSection** - 2 veterinários + features
6. **TestimonialsSection** - Carrossel de depoimentos
7. **InfoSection** - 6 cards informativos
8. **BlogSection** - 3 posts + newsletter

### Problemas Identificados por Seção

**HeroSection:**
- ❌ 4 badges coloridos (cyan, pink, orange, violet)
- ❌ 4 emojis (🐾🌙⭐💝)
- ❌ Gradiente colorido no background
- ❌ Botão verde (emerald) + azul

**StatsSection:**
- ❌ 4 ícones coloridos (red, pink, blue, amber)
- ❌ Gradiente no background dos cards
- ❌ Sombras coloridas (blue-900/10)

**ServicesSection:**
- ❌ 6 cores diferentes nos cards (red, blue, emerald, violet, cyan, orange)
- ❌ 6 emojis nos títulos (🚨🏥💉🛏️🔬🏠)
- ❌ 1 emoji no aviso (⚠️)
- ❌ Bordas coloridas por serviço

**WhyChooseSection:**
- ❌ 4 ícones coloridos (red, blue, emerald, violet)
- ❌ Badges verdes em features

**TeamSection:**
- ❌ Avatares coloridos (blue, emerald)
- ❌ Badges amarelos e azuis
- ❌ Emojis decorativos (🐾💖🐕🐱)

**TestimonialsSection:**
- ❌ Badges amarelos
- ❌ Estrelas amarelas
- ❌ Emojis nos pets (🐱🐕)

**InfoSection:**
- ❌ 6 cores diferentes (emerald, red, blue, violet, orange, cyan)
- ❌ 6 emojis nos títulos (🌿🚨💉🏥💰📖)

**BlogSection:**
- ❌ 3 cores de categoria (red, blue, violet)
- ❌ 3 emojis nas categorias (🚨💉👴)
- ❌ Emoji no newsletter (📧)

---

## 🎯 ESTRATÉGIA DE EXECUÇÃO

### Princípio: "Uma Seção por Vez, Completa e Testada"

**Regras:**
1. **Nunca trabalhar em múltiplas seções simultaneamente**
2. **Cada seção deve ser 100% finalizada antes da próxima**
3. **Testar visualmente após cada seção**
4. **Manter consistência com seções já redesenhadas**
5. **Seguir REDESIGN_MASTER_PLAN.md rigorosamente**

---

## 📅 FASE 1: FUNDAÇÃO (Semana 1)

### ETAPA 1.1: Criar Componentes Base
**Duração**: 2 dias  
**Foco**: Criar biblioteca de componentes reutilizáveis

#### Subfase 1.1.1: Botões Profissionais
**Arquivo**: `src/components/ui/button-csm.tsx`

**Criar 3 variantes:**
```tsx
// Primário (Azul)
bg-[#1E5AA8] hover:bg-[#164A8C]

// Secundário (Outline Azul)
border-2 border-[#1E5AA8] text-[#1E5AA8] hover:bg-[#E8F4F8]

// Urgência (Laranja - apenas quando necessário)
bg-[#E67E22] hover:bg-[#D35400]
```

**Checklist:**
- [ ] Criar componente ButtonCSM
- [ ] Implementar 3 variantes
- [ ] Adicionar props de tamanho (sm, md, lg)
- [ ] Remover sombras coloridas (usar apenas rgba(0,0,0,0.1))
- [ ] Testar responsividade
- [ ] Documentar uso

#### Subfase 1.1.2: Cards Profissionais
**Arquivo**: `src/components/ui/card-csm.tsx`

**Criar 2 variantes:**
```tsx
// Card Padrão
bg-white border border-[#E8F4F8] rounded-lg shadow-sm

// Card Destaque
bg-white border-2 border-[#1E5AA8] rounded-lg shadow-md
```

**Checklist:**
- [ ] Criar componente CardCSM
- [ ] Implementar 2 variantes
- [ ] Remover gradientes
- [ ] Sombras apenas cinza
- [ ] Hover sutil (translateY(-4px))
- [ ] Testar responsividade
- [ ] Documentar uso

#### Subfase 1.1.3: Badges Profissionais
**Arquivo**: `src/components/ui/badge-csm.tsx`

**Criar 3 variantes:**
```tsx
// Azul (padrão)
bg-[#1E5AA8] text-white

// Amarelo (destaque)
bg-[#F2B749] text-[#2C3E50]

// Cinza (secundário)
bg-[#7F8C8D] text-white
```

**Checklist:**
- [ ] Criar componente BadgeCSM
- [ ] Implementar 3 variantes
- [ ] Remover cores proibidas (pink, violet, cyan, orange)
- [ ] Border-radius: 16px (não full)
- [ ] Testar responsividade
- [ ] Documentar uso

### ETAPA 1.2: Criar Utilitários de Cor
**Duração**: 1 dia  
**Foco**: Centralizar paleta de cores

#### Subfase 1.2.1: Arquivo de Cores
**Arquivo**: `src/lib/colors-csm.ts`

```typescript
export const colorsCsm = {
  // Primárias
  azul: {
    primary: '#1E5AA8',
    hover: '#164A8C',
    light: '#E8F4F8',
  },
  amarelo: {
    primary: '#F2B749',
    hover: '#E6A835',
    light: '#FFF9E6',
  },
  // Neutras
  cinza: {
    neutro: '#7F8C8D',
    escuro: '#2C3E50',
    claro: '#F7FAFC',
  },
  // Funcionais (uso específico)
  laranja: {
    urgencia: '#E67E22',
    hover: '#D35400',
  },
  verde: {
    sucesso: '#27AE60',
  },
  // Proibidas (documentação)
  PROIBIDO: {
    rosa: '#EC4899',      // NUNCA USAR
    roxo: '#8B5CF6',      // NUNCA USAR
    ciano: '#06B6D4',     // NUNCA USAR
    laranjaDecoratvo: '#F97316', // NUNCA USAR
  }
};
```

**Checklist:**
- [ ] Criar arquivo colors-csm.ts
- [ ] Documentar cada cor
- [ ] Adicionar comentários de uso
- [ ] Exportar constantes
- [ ] Testar importação

---

## 📅 FASE 2: REDESIGN SEÇÃO POR SEÇÃO (Semanas 2-4)

### ETAPA 2.1: HeroSection (Prioridade Máxima)
**Duração**: 3 dias  
**Arquivo**: `src/components/sections/HeroSection.tsx`

#### Subfase 2.1.1: Remover Badges Coloridos
**Foco**: Simplificar trust signals

**ANTES:**
```tsx
4 badges coloridos: cyan, pink, orange, violet
4 emojis: 🐾🌙⭐💝
```

**DEPOIS:**
```tsx
2 badges apenas:
- Badge azul: "+15k pets atendidos"
- Badge amarelo: "Plantão 24h"
Sem emojis
```

**Checklist:**
- [ ] Remover badges cyan e violet
- [ ] Converter pink → azul
- [ ] Converter orange → amarelo
- [ ] Remover TODOS os emojis
- [ ] Usar BadgeCSM componente
- [ ] Testar visualmente

#### Subfase 2.1.2: Simplificar Background
**Foco**: Remover gradiente colorido

**ANTES:**
```tsx
bg-gradient-to-br from-rose-50 via-blue-50 to-amber-50
```

**DEPOIS:**
```tsx
bg-white
```

**Checklist:**
- [ ] Remover gradiente
- [ ] Background branco puro
- [ ] Testar contraste de texto
- [ ] Verificar legibilidade

#### Subfase 2.1.3: Redesign de CTAs
**Foco**: Botões profissionais

**ANTES:**
```tsx
Botão verde (emerald) + Botão azul
```

**DEPOIS:**
```tsx
Botão azul primário + Botão azul outline
```

**Checklist:**
- [ ] Converter emerald → azul primário
- [ ] Segundo botão → outline azul
- [ ] Usar ButtonCSM componente
- [ ] Remover sombras coloridas
- [ ] Testar hover states
- [ ] Verificar responsividade

#### Subfase 2.1.4: Ajustar Tipografia
**Foco**: Cores profissionais

**ANTES:**
```tsx
text-blue-600 (título)
text-amber-500 (subtítulo)
```

**DEPOIS:**
```tsx
text-[#1E5AA8] (título)
text-[#F2B749] (subtítulo - manter)
```

**Checklist:**
- [ ] Ajustar cor do título
- [ ] Manter amarelo no subtítulo (ok)
- [ ] Verificar contraste
- [ ] Testar em mobile

**✅ CHECKPOINT: HeroSection 100% Redesenhado**
- [ ] Teste visual completo
- [ ] Screenshot antes/depois
- [ ] Aprovação de stakeholder
- [ ] Commit isolado: "feat: redesign HeroSection"

---

### ETAPA 2.2: StatsSection
**Duração**: 2 dias  
**Arquivo**: `src/components/sections/StatsSection.tsx`

#### Subfase 2.2.1: Unificar Cores dos Ícones
**Foco**: Ícones monocromáticos

**ANTES:**
```tsx
text-red-500 (Clock)
text-pink-500 (Heart)
text-blue-500 (Users)
text-amber-500 (Star)
```

**DEPOIS:**
```tsx
text-[#1E5AA8] (todos os ícones)
```

**Checklist:**
- [ ] Converter todos ícones para azul CSM
- [ ] Remover cores individuais
- [ ] Testar visualmente
- [ ] Verificar hierarquia

#### Subfase 2.2.2: Simplificar Background dos Cards
**Foco**: Remover gradiente

**ANTES:**
```tsx
bg-gradient-to-br from-slate-50 to-blue-50
shadow-blue-900/10
```

**DEPOIS:**
```tsx
bg-white
border border-[#E8F4F8]
shadow-sm (cinza)
```

**Checklist:**
- [ ] Remover gradiente
- [ ] Adicionar borda sutil
- [ ] Sombra cinza apenas
- [ ] Usar CardCSM componente
- [ ] Testar hover

#### Subfase 2.2.3: Ajustar Tipografia
**Foco**: Cores consistentes

**ANTES:**
```tsx
text-blue-600 (label)
```

**DEPOIS:**
```tsx
text-[#1E5AA8] (label)
```

**Checklist:**
- [ ] Ajustar cor do label
- [ ] Verificar contraste
- [ ] Testar legibilidade

**✅ CHECKPOINT: StatsSection 100% Redesenhado**
- [ ] Teste visual completo
- [ ] Screenshot antes/depois
- [ ] Commit isolado: "feat: redesign StatsSection"

---

### ETAPA 2.3: ServicesSection (Mais Complexa)
**Duração**: 4 dias  
**Arquivo**: `src/components/sections/ServicesSection.tsx`

#### Subfase 2.3.1: Remover Emojis dos Títulos
**Foco**: Títulos profissionais

**ANTES:**
```tsx
'🚨 Urgência'
'🏥 Cirurgias'
'💉 Prevenção'
'🛏️ Internação'
'🔬 Diagnóstico'
'🏠 Domiciliar'
```

**DEPOIS:**
```tsx
'Urgência'
'Cirurgias'
'Prevenção'
'Internação'
'Diagnóstico'
'Domiciliar'
```

**Checklist:**
- [ ] Remover TODOS os emojis dos títulos
- [ ] Ajustar espaçamento
- [ ] Verificar alinhamento

#### Subfase 2.3.2: Unificar Cores dos Ícones
**Foco**: Ícones azul apenas

**ANTES:**
```tsx
text-red-500 (AlertTriangle)
text-blue-500 (Scissors)
text-emerald-500 (Shield)
text-violet-500 (Stethoscope)
text-cyan-500 (Camera)
text-orange-500 (Home)
```

**DEPOIS:**
```tsx
text-[#1E5AA8] (TODOS)
```

**Checklist:**
- [ ] Converter todos ícones para azul CSM
- [ ] Remover cores individuais
- [ ] Testar visualmente
- [ ] Manter hierarquia por posição, não cor

#### Subfase 2.3.3: Unificar Bordas dos Cards
**Foco**: Bordas consistentes

**ANTES:**
```tsx
border-red-500
border-blue-500
border-emerald-500
border-violet-500
border-cyan-500
border-orange-500
```

**DEPOIS:**
```tsx
border-[#E8F4F8] (todos)
```

**Checklist:**
- [ ] Remover bordas coloridas
- [ ] Aplicar borda cinza-azul clara
- [ ] Usar CardCSM componente
- [ ] Testar hover

#### Subfase 2.3.4: Simplificar Botões
**Foco**: Botão único azul

**ANTES:**
```tsx
bg-${service.color}-600 (6 cores diferentes)
```

**DEPOIS:**
```tsx
bg-[#1E5AA8] (todos)
```

**Checklist:**
- [ ] Remover cores dinâmicas
- [ ] Aplicar azul CSM em todos
- [ ] Usar ButtonCSM componente
- [ ] Testar hover states

#### Subfase 2.3.5: Redesign do Aviso
**Foco**: Card de aviso profissional

**ANTES:**
```tsx
border-amber-500
bg-amber-500 (ícone)
emoji ⚠️
```

**DEPOIS:**
```tsx
border-[#F2B749]
bg-[#F2B749] (ícone)
ícone AlertTriangle (lucide-react)
```

**Checklist:**
- [ ] Manter amarelo (ok para aviso)
- [ ] Remover emoji
- [ ] Usar ícone lucide-react
- [ ] Testar visualmente

**✅ CHECKPOINT: ServicesSection 100% Redesenhado**
- [ ] Teste visual completo
- [ ] Screenshot antes/depois
- [ ] Commit isolado: "feat: redesign ServicesSection"

---

### ETAPA 2.4: WhyChooseSection
**Duração**: 2 dias  
**Arquivo**: `src/components/sections/WhyChooseSection.tsx`

#### Subfase 2.4.1: Unificar Cores dos Ícones
**ANTES:**
```tsx
text-red-500, text-blue-500, text-emerald-500, text-violet-500
```

**DEPOIS:**
```tsx
text-[#1E5AA8] (todos)
```

**Checklist:**
- [ ] Converter todos ícones para azul CSM
- [ ] Testar visualmente

#### Subfase 2.4.2: Simplificar Badges
**ANTES:**
```tsx
bg-emerald-600 (features)
```

**DEPOIS:**
```tsx
bg-[#1E5AA8] (features)
```

**Checklist:**
- [ ] Converter verde → azul
- [ ] Usar BadgeCSM componente
- [ ] Testar contraste

**✅ CHECKPOINT: WhyChooseSection 100% Redesenhado**
- [ ] Teste visual completo
- [ ] Commit isolado: "feat: redesign WhyChooseSection"

---

### ETAPA 2.5: TeamSection
**Duração**: 2 dias  
**Arquivo**: `src/components/sections/TeamSection.tsx`

#### Subfase 2.5.1: Simplificar Avatares
**ANTES:**
```tsx
bg-blue-600, bg-emerald-600
```

**DEPOIS:**
```tsx
bg-[#1E5AA8] (ambos)
```

**Checklist:**
- [ ] Unificar cor dos avatares
- [ ] Testar visualmente

#### Subfase 2.5.2: Unificar Badges
**ANTES:**
```tsx
bg-amber-500 (experiência)
bg-blue-600 (especialidades)
```

**DEPOIS:**
```tsx
bg-[#F2B749] (experiência)
bg-[#1E5AA8] (especialidades)
```

**Checklist:**
- [ ] Manter amarelo para destaque
- [ ] Azul para especialidades
- [ ] Usar BadgeCSM componente

#### Subfase 2.5.3: Remover Emojis Decorativos
**ANTES:**
```tsx
🐾💖🐕🐱 (decorativos)
```

**DEPOIS:**
```tsx
(remover todos)
```

**Checklist:**
- [ ] Remover emojis decorativos
- [ ] Manter layout limpo

**✅ CHECKPOINT: TeamSection 100% Redesenhado**
- [ ] Teste visual completo
- [ ] Commit isolado: "feat: redesign TeamSection"

---

### ETAPA 2.6: TestimonialsSection
**Duração**: 2 dias  
**Arquivo**: `src/components/sections/TestimonialsSection.tsx`

#### Subfase 2.6.1: Simplificar Avatares
**ANTES:**
```tsx
bg-blue-600
```

**DEPOIS:**
```tsx
bg-[#1E5AA8]
```

**Checklist:**
- [ ] Manter azul CSM
- [ ] Verificar contraste

#### Subfase 2.6.2: Manter Estrelas Amarelas
**ANTES:**
```tsx
text-amber-400 (estrelas)
```

**DEPOIS:**
```tsx
text-[#F2B749] (estrelas - ok manter)
```

**Checklist:**
- [ ] Ajustar para amarelo CSM
- [ ] Testar visualmente

#### Subfase 2.6.3: Simplificar Badges
**ANTES:**
```tsx
bg-amber-500 (pet badge)
```

**DEPOIS:**
```tsx
bg-[#F2B749] (pet badge - ok manter)
```

**Checklist:**
- [ ] Ajustar para amarelo CSM
- [ ] Remover emojis de pets se houver

**✅ CHECKPOINT: TestimonialsSection 100% Redesenhado**
- [ ] Teste visual completo
- [ ] Commit isolado: "feat: redesign TestimonialsSection"

---

### ETAPA 2.7: InfoSection
**Duração**: 3 dias  
**Arquivo**: `src/components/sections/InfoSection.tsx`

#### Subfase 2.7.1: Remover Emojis dos Títulos
**ANTES:**
```tsx
'🌿 Segurança'
'🚨 Emergência'
'💉 Prevenção'
'🏥 Estrutura'
'💰 Transparência'
'📖 Conteúdo'
```

**DEPOIS:**
```tsx
'Segurança'
'Emergência'
'Prevenção'
'Estrutura'
'Transparência'
'Conteúdo'
```

**Checklist:**
- [ ] Remover TODOS os emojis
- [ ] Ajustar espaçamento

#### Subfase 2.7.2: Unificar Cores dos Ícones
**ANTES:**
```tsx
text-emerald-500, text-red-500, text-blue-600, 
text-violet-500, text-orange-500, text-cyan-500
```

**DEPOIS:**
```tsx
text-[#1E5AA8] (todos)
```

**Checklist:**
- [ ] Converter todos para azul CSM
- [ ] Testar visualmente

#### Subfase 2.7.3: Unificar Bordas e Botões
**ANTES:**
```tsx
border-emerald-500, border-red-500, etc.
bg-emerald-600, bg-red-600, etc. (botões)
```

**DEPOIS:**
```tsx
border-[#E8F4F8] (todos)
bg-[#1E5AA8] (todos os botões)
```

**Checklist:**
- [ ] Remover bordas coloridas
- [ ] Unificar botões
- [ ] Usar componentes CSM

**✅ CHECKPOINT: InfoSection 100% Redesenhado**
- [ ] Teste visual completo
- [ ] Commit isolado: "feat: redesign InfoSection"

---

### ETAPA 2.8: BlogSection
**Duração**: 2 dias  
**Arquivo**: `src/components/sections/BlogSection.tsx`

#### Subfase 2.8.1: Remover Emojis das Categorias
**ANTES:**
```tsx
'🚨 Emergência'
'💉 Vacinas'
'👴 Pets Idosos'
```

**DEPOIS:**
```tsx
'Emergência'
'Vacinas'
'Pets Idosos'
```

**Checklist:**
- [ ] Remover emojis
- [ ] Ajustar espaçamento

#### Subfase 2.8.2: Unificar Cores das Categorias
**ANTES:**
```tsx
bg-red-600, bg-blue-600, bg-violet-600
```

**DEPOIS:**
```tsx
bg-[#1E5AA8] (todas)
```

**Checklist:**
- [ ] Converter todas para azul CSM
- [ ] Usar BadgeCSM componente

#### Subfase 2.8.3: Simplificar Newsletter
**ANTES:**
```tsx
emoji 📧
```

**DEPOIS:**
```tsx
ícone Mail (lucide-react)
```

**Checklist:**
- [ ] Remover emoji
- [ ] Usar ícone profissional

**✅ CHECKPOINT: BlogSection 100% Redesenhado**
- [ ] Teste visual completo
- [ ] Commit isolado: "feat: redesign BlogSection"

---

## 📅 FASE 3: REFINAMENTO E TESTES (Semana 5)

### ETAPA 3.1: Auditoria Visual Completa
**Duração**: 2 dias

**Checklist:**
- [ ] Verificar consistência de cores em todas as seções
- [ ] Confirmar remoção de TODOS os emojis decorativos
- [ ] Validar uso correto de componentes CSM
- [ ] Testar responsividade em mobile/tablet/desktop
- [ ] Verificar contraste WCAG AA
- [ ] Testar hover states
- [ ] Validar espaçamentos (8px base)

### ETAPA 3.2: Testes de Performance
**Duração**: 1 dia

**Checklist:**
- [ ] Lighthouse score
- [ ] Core Web Vitals
- [ ] Tempo de carregamento
- [ ] Otimização de imagens (se houver)

### ETAPA 3.3: Documentação
**Duração**: 1 dia

**Checklist:**
- [ ] Atualizar README com mudanças
- [ ] Documentar componentes CSM
- [ ] Screenshots antes/depois
- [ ] Guia de uso para desenvolvedores

---

## 📅 FASE 4: DEPLOY E MONITORAMENTO (Semana 6)

### ETAPA 4.1: Preparação para Deploy
**Duração**: 1 dia

**Checklist:**
- [ ] Build de produção
- [ ] Testes em staging
- [ ] Aprovação final de stakeholders
- [ ] Backup do código anterior

### ETAPA 4.2: Deploy
**Duração**: 1 dia

**Checklist:**
- [ ] Deploy para produção
- [ ] Monitoramento de erros
- [ ] Testes em produção
- [ ] Rollback plan pronto

### ETAPA 4.3: Monitoramento Pós-Deploy
**Duração**: 3 dias

**Checklist:**
- [ ] Analytics de comportamento
- [ ] Feedback de usuários
- [ ] Ajustes finos se necessário
- [ ] Documentação de lições aprendidas

---

## 🎯 MÉTRICAS DE SUCESSO

### Quantitativas
- [ ] **0 emojis decorativos** na home
- [ ] **2 cores primárias** (azul + amarelo) + neutros
- [ ] **0 cores proibidas** (rosa, roxo, ciano, laranja decorativo)
- [ ] **100% componentes** usando CSM design system
- [ ] **WCAG AA** contraste em todos os textos
- [ ] **<3s** tempo de carregamento

### Qualitativas
- [ ] Tom **profissional médico** transmitido
- [ ] **Consistência visual** total
- [ ] **Hierarquia clara** de informação
- [ ] **Legibilidade** melhorada
- [ ] **Confiança** aumentada

---

## 📝 REGRAS DE OURO

### Durante o Redesign

1. **NUNCA pule etapas** - Cada subfase deve ser concluída
2. **SEMPRE teste** antes de passar para próxima seção
3. **SEMPRE commit** após cada seção completa
4. **NUNCA use cores proibidas** - Nem "só dessa vez"
5. **SEMPRE consulte** REDESIGN_MASTER_PLAN.md em caso de dúvida
6. **NUNCA adicione emojis** - Nem "só um"
7. **SEMPRE use componentes CSM** - Não crie variações
8. **SEMPRE mantenha** consistência com seções já redesenhadas

### Quando em Dúvida

1. Consultar `docs/REDESIGN_MASTER_PLAN.md`
2. Consultar `docs/csmvetclub_docs/design_system_csm.md`
3. Verificar `docs/csmvetclub_docs/design_system_showcase.html`
4. Perguntar: "Isso parece profissional em papel impresso?"
5. Se ainda em dúvida: **escolha a opção mais minimalista**

---

## 🚀 COMEÇAR AGORA

### Primeira Ação
```bash
# 1. Criar branch de trabalho
git checkout -b redesign/home-professional

# 2. Começar pela Fase 1, Etapa 1.1, Subfase 1.1.1
# Criar: src/components/ui/button-csm.tsx

# 3. Seguir roadmap linha por linha
```

### Ordem de Execução
1. ✅ Fase 1: Fundação (componentes base)
2. ✅ Fase 2: Redesign seção por seção (ordem sequencial)
3. ✅ Fase 3: Refinamento e testes
4. ✅ Fase 4: Deploy e monitoramento

---

**Última atualização**: Janeiro 2025  
**Status**: Pronto para execução  
**Próxima ação**: Fase 1, Etapa 1.1, Subfase 1.1.1
