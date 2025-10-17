# 🎨 CSM Clínica Veterinária - Design System da Homepage

**Versão:** 2.0  
**Data:** Janeiro 2025  
**Status:** ✅ Implementado  
**Filosofia:** Profissional, Sóbrio, Médico, Minimalista

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Paleta de Cores](#paleta-de-cores)
3. [Tipografia](#tipografia)
4. [Componentes Base](#componentes-base)
5. [Padrões de Layout](#padrões-de-layout)
6. [Seções da Homepage](#seções-da-homepage)
7. [Interações e Animações](#interações-e-animações)
8. [Responsividade](#responsividade)

---

## 🎯 Visão Geral

### Conceito de Design
**"Papel Impresso Médico"** - Design minimalista que remete à seriedade e profissionalismo de uma clínica médica.

### Princípios Fundamentais
1. **Sobriedade** - Sem excessos visuais
2. **Hierarquia Clara** - Informação organizada e escaneável
3. **Espaçamento Generoso** - Respiro visual entre elementos
4. **Profissionalismo Médico** - Transmite confiança e competência
5. **Minimalismo Funcional** - Cada elemento tem propósito

### Transformação Realizada
- ❌ **Antes:** Tom "carnavalesco" com 15+ cores, 35+ emojis
- ✅ **Depois:** Paleta restrita (4 cores), zero emojis decorativos

---

## 🎨 Paleta de Cores

### Cores Principais

#### Azul CSM (Primary)
```css
--csm-blue: #1E5AA8;
--csm-blue-hover: #174A8F;
--csm-blue-light: #E8F1FA;
```
**Uso:** Títulos, CTAs, ícones, badges, links

#### Amarelo CSM (Accent)
```css
--csm-yellow: #F2B749;
--csm-yellow-light: #FFF9E6;
```
**Uso:** Badges de destaque, elementos de ênfase

#### Cinzas (Neutrals)
```css
--csm-gray-dark: #2D3748;
--csm-gray: #718096;
--csm-gray-light: #E2E8F0;
```
**Uso:** Textos, descrições, bordas

#### Cores Funcionais
```css
--csm-urgency: #E67E22;        /* Emergências */
--csm-urgency-hover: #D35400;
--csm-success: #48BB78;         /* Sucesso */
```

### Gradientes
```css
/* Background sutil */
background: linear-gradient(to bottom, white, rgba(232, 241, 250, 0.2));

/* Diagonal para cards */
background: linear-gradient(to bottom right, rgba(232, 241, 250, 0.1), white);
```

---

## 📝 Tipografia

### Família de Fontes
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

### Hierarquia

**H1 - Títulos Principais**
```css
font-size: 3.5rem;  /* 56px desktop */
font-size: 2.5rem;  /* 40px mobile */
font-weight: 700;
line-height: 1.1;
color: var(--csm-gray-dark);
```

**H2 - Títulos Secundários**
```css
font-size: 2.5rem;  /* 40px desktop */
font-size: 2rem;    /* 32px mobile */
font-weight: 700;
line-height: 1.2;
```

**Body - Corpo de Texto**
```css
font-size: 1.125rem;  /* 18px large */
font-size: 1rem;      /* 16px normal */
font-weight: 400;
line-height: 1.6;
color: var(--csm-gray);
```

### Destaques em Títulos
```html
<h1>
  Texto Normal <span className="text-csm-blue">Texto Azul</span>
</h1>
```

---

## 🧩 Componentes Base

### ButtonCSM

**Primary (Azul)**
```tsx
<ButtonCSM variant="primary" size="lg">
  <Icon className="w-5 h-5" />
  Texto do Botão
</ButtonCSM>
```
```css
background: #1E5AA8;
color: white;
padding: 0.75rem 1.5rem;
border-radius: 0.5rem;
font-weight: 600;

hover {
  background: #174A8F;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(30, 90, 168, 0.3);
}
```

**Secondary (Outline)**
```tsx
<ButtonCSM variant="secondary" size="lg">
  Texto
</ButtonCSM>
```
```css
background: transparent;
color: #1E5AA8;
border: 2px solid #1E5AA8;

hover {
  background: #E8F1FA;
}
```

**Urgency (Laranja)**
```tsx
<ButtonCSM variant="urgency" size="lg">
  <FaWhatsapp />
  WHATSAPP
</ButtonCSM>
```
```css
background: #E67E22;
color: white;
```

### BadgeCSM

**Blue**
```tsx
<BadgeCSM variant="blue">Texto</BadgeCSM>
```
```css
background: #E8F1FA;
color: #1E5AA8;
padding: 0.25rem 0.75rem;
border-radius: 0.375rem;
font-size: 0.875rem;
font-weight: 600;
```

**Yellow**
```tsx
<BadgeCSM variant="yellow">Texto</BadgeCSM>
```
```css
background: #F2B749;
color: #2D3748;
```

### CardCSM

**Default**
```tsx
<CardCSM variant="default">
  <CardCsmContent className="p-6">
    Conteúdo
  </CardCsmContent>
</CardCSM>
```
```css
background: white;
border: 1px solid #E8F1FA;
border-radius: 0.75rem;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-color: #1E5AA8;
}
```

**Highlight**
```tsx
<CardCSM variant="highlight">
  Conteúdo
</CardCSM>
```
```css
border: 2px solid #1E5AA8;
box-shadow: 0 4px 12px rgba(30, 90, 168, 0.1);
```

---

## 📐 Padrões de Layout

### Layout 2 Colunas (40/60)

```tsx
<section className="py-20 bg-gradient-to-b from-white to-csm-blue-light/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left - 40% */}
      <div className="space-y-8">
        <BadgeCSM variant="blue">Contexto</BadgeCSM>
        <h2>Título Grande</h2>
        <p>Descrição</p>
        <div>Features</div>
        <ButtonCSM>CTA</ButtonCSM>
      </div>

      {/* Right - 60% */}
      <div className="relative lg:h-[400px]">
        <CardCSM>Visual Principal</CardCSM>
        
        {/* Badges Flutuantes */}
        <div className="absolute -top-6 -right-6 z-10">
          <CardCSM className="bg-csm-blue shadow-lg">
            Badge 1
          </CardCSM>
        </div>
        <div className="absolute -bottom-6 -left-6 z-10">
          <CardCSM className="bg-csm-yellow shadow-lg">
            Badge 2
          </CardCSM>
        </div>
      </div>

    </div>
  </div>
</section>
```

**Quando Usar:**
- Hero Section
- Stats Section  
- Team Section Bottom
- CTA Sections

### Grid de 3 Colunas

```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item) => (
    <CardCSM key={item.id} className="h-full">
      <CardCsmContent className="p-6">
        Conteúdo
      </CardCsmContent>
    </CardCSM>
  ))}
</div>
```

**Responsividade:**
- Mobile: 1 coluna
- Tablet: 2 colunas
- Desktop: 3 colunas

### Badges Flutuantes

```tsx
<div className="relative">
  <CardCSM>Conteúdo Principal</CardCSM>

  {/* Top-Right (Azul) */}
  <div className="absolute -top-6 -right-6 z-10">
    <CardCSM className="bg-csm-blue shadow-lg">
      <div className="p-4 text-center">
        <Icon className="w-6 h-6 text-white mx-auto mb-2" />
        <div className="text-2xl font-bold text-white">24h</div>
        <div className="text-xs text-white/80">Label</div>
      </div>
    </CardCSM>
  </div>

  {/* Bottom-Left (Amarelo) */}
  <div className="absolute -bottom-6 -left-6 z-10">
    <CardCSM className="bg-csm-yellow shadow-lg">
      <div className="p-4 text-center">
        <Icon className="w-6 h-6 text-csm-gray-dark mx-auto mb-2" />
        <div className="text-2xl font-bold text-csm-gray-dark">10+</div>
        <div className="text-xs text-csm-gray-dark">Anos</div>
      </div>
    </CardCSM>
  </div>
</div>
```

**Regras:**
- Top-Right: Azul (info primária)
- Bottom-Left: Amarelo (info secundária)
- Sempre com shadow-lg
- z-index: 10

---

## 📄 Seções da Homepage

### 1. HeroSection

**Layout:** 2 Colunas (40/60)

**Estrutura Visual:**
```
┌──────────────────────────────────────────────┐
│ [Badge: CSM Clínica Veterinária]            │
│                                              │
│ Cuidado Veterinário          ┌────────────┐│
│ Profissional 24 Horas        │            ││
│                               │  Imagem    ││
│ [Descrição]                   │    ou      ││
│                               │ Placeholder││
│ 📍 Uberaba | 10+ anos        │            ││
│                               │  [10+]     ││
│ [WHATSAPP] [TELEFONE]        │            ││
│                               │ [85%]      ││
│ ✓ Veterinário 24h            └────────────┘│
│ ✓ Centro Cirúrgico                         │
│ ✓ Atend. Domiciliar                        │
└──────────────────────────────────────────────┘
```

**Elementos:**
1. Badge amarelo: "CSM Clínica Veterinária"
2. Título: Cinza escuro + Azul
3. Stats: Localização + Anos
4. CTAs: WhatsApp (laranja) + Telefone (outline)
5. 3 Benefícios com checkmarks azuis
6. Card imagem + 2 badges flutuantes

---

### 2. StatsSection

**Layout:** 2 Colunas (40/60)

**Estrutura:**
```
┌──────────────────────────────────────────────┐
│ [Badge: Números que Falam]                   │
│                                              │
│ Resultados que Comprovam  ┌────────────────┐│
│ Nossa Excelência          │                ││
│                           │   98%          ││
│ [Descrição]               │   Satisfação   ││
│                           │                ││
│ ┌─────┐ ┌─────┐          │    [24h]       ││
│ │500+ │ │ 15+ │          │                ││
│ │Pets │ │Vets │          │  [10+ Anos]    ││
│ └─────┘ └─────┘          └────────────────┘│
└──────────────────────────────────────────────┘
```

**Elementos:**
1. Badge azul
2. Grid 2x2 pequeno
3. Card principal: "98%"
4. 2 badges flutuantes

---

### 3. ServicesSection

**Layout:** Grid 3 Colunas

**Card:**
```
┌──────────────────┐
│ [Ícone Azul]    │
│                  │
│ Título          │
│ [Badge Gray]    │
│ [Badge Yellow]  │
│                  │
│ Descrição...    │
│                  │
│ [CTA →]        │
└──────────────────┘
```

**6 Serviços:**
- Urgência (24 Horas)
- Cirurgias
- Prevenção (Essencial)
- Internação (24h)
- Diagnóstico
- Domiciliar

---

### 4. WhyChooseSection

**Layout:** Grid 2 Colunas

**4 Diferenciais:**
- Plantão 24h Real
- Equipe Especializada
- Estrutura Completa
- Localização Estratégica

**Badges:** Alternados (Amarelo, Azul, Amarelo)

---

### 5. TeamSection

**3 Partes:**

1. **Diretora Clínica (Destaque)**
   - Card highlight maior
   - Badge amarelo: Cargo
   - Badge azul: Experiência
   - 3 especialidades
   - Descrição completa

2. **Equipe de Plantão (Grid 3 colunas)**
   - 11 veterinários
   - Cards compactos
   - Avatar + Nome + Título

3. **Bottom (2 Colunas)**
   - Esquerda: Texto + Features + CTA
   - Direita: Card stats + badges flutuantes

---

### 6. TestimonialsSection

**Layout:** Grid 3 + Stats Row

**Estrutura:**
```
┌──────────────────────────────────────────────┐
│ [Badge: Depoimentos]                         │
│                                              │
│ Mais de 2000 Pets Já Confiaram             │
│                                              │
│ ┌─────┐ ┌─────┐ ┌─────┐                    │
│ │ [KD]│ │ [IN]│ │ [JM]│                    │
│ │ ⭐⭐⭐⭐⭐│ │ ⭐⭐⭐⭐⭐│ │ ⭐⭐⭐⭐⭐│                    │
│ │"..." │ │"..." │ │"..." │                    │
│ └─────┘ └─────┘ └─────┘                    │
│                                              │
│ ┌─────┐ ┌─────┐ ┌─────┐                    │
│ │2000+│ │4.9/5│ │100% │                    │
│ └─────┘ └─────┘ └─────┘                    │
└──────────────────────────────────────────────┘
```

---

### 7. InfoSection

**Layout:** Grid 3 Colunas + CTA 2 Colunas

**6 Cards:**
- Plantas Tóxicas
- Primeiros Socorros
- Calendário Vacinas
- Tour Virtual
- Preços Transparentes
- Blog

**CTA Final:** 2 colunas (Texto + Botões)

---

### 8. BlogSection

**Layout:** Grid 3 + Newsletter 2 Colunas

**3 Posts** com:
- Imagem placeholder
- Badges (Categoria + Destaque)
- Título + Excerpt
- Meta (Data, Tempo, Views)
- CTA "Ler mais"

**Newsletter:** 2 colunas (Texto + Form)

---

## 🎭 Interações e Animações

### Hover States

**Cards:**
```css
transition: all 0.3s ease;
hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border-color: #1E5AA8;
}
```

**Botões:**
```css
hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(30, 90, 168, 0.3);
}
```

### Transições

**Padrão:** 300ms ease-in-out

**Propriedades:**
- transform
- opacity
- box-shadow
- border-color
- background-color

---

## 📱 Responsividade

### Breakpoints
```css
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
```

### Adaptações

**Grid 3 Colunas:**
- Mobile: 1 coluna
- Tablet: 2 colunas
- Desktop: 3 colunas

**Layout 2 Colunas:**
- Mobile: Stack vertical
- Desktop: Lado a lado

**Tipografia:**
- H1: 2.5rem → 3.5rem
- H2: 2rem → 2.5rem
- Body: 1rem → 1.125rem

**Espaçamento:**
- Padding: py-12 → py-20
- Gap: gap-6 → gap-12

---

## 📊 Métricas

### Transformação
- **Cores:** 15+ → 4 principais
- **Emojis:** 35+ → 0
- **Componentes:** 3 base criados
- **Seções:** 8 redesenhadas
- **Código:** +1400 / -500 linhas

### Performance
- Zero emojis = Menos caracteres
- Componentes reutilizáveis
- CSS otimizado
- Imagens lazy load

---

## ✅ Checklist de Implementação

### Cores
- [ ] Azul #1E5AA8
- [ ] Amarelo #F2B749
- [ ] Cinzas definidos
- [ ] Laranja emergência
- [ ] Gradientes sutis

### Componentes
- [ ] ButtonCSM (3 variantes)
- [ ] BadgeCSM (3 variantes)
- [ ] CardCSM (2 variantes)

### Seções
- [ ] HeroSection (2 colunas)
- [ ] StatsSection (2 colunas)
- [ ] ServicesSection (grid 3)
- [ ] WhyChooseSection (grid 2)
- [ ] TeamSection (3 partes)
- [ ] TestimonialsSection (grid 3)
- [ ] InfoSection (grid 3)
- [ ] BlogSection (grid 3)

### Interações
- [ ] Hover cards
- [ ] Hover botões
- [ ] Transições 300ms
- [ ] Badges flutuantes

### Responsividade
- [ ] Mobile (< 768px)
- [ ] Tablet (768-1024px)
- [ ] Desktop (> 1024px)

---

**Documento criado por:** Cascade AI  
**Última atualização:** Janeiro 2025  
**Versão:** 2.0
