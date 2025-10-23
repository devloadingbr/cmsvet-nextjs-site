# Especificações Técnicas - Site CSM Veterinária

**Data:** 18 de Outubro de 2025  
**Versão:** 1.0 Final

---

## 📋 Índice

1. [Visão Geral do Projeto](#visão-geral)
2. [Decisões de Design e UX](#decisões-de-design)
3. [Estrutura Completa das Seções](#estrutura-das-seções)
4. [Elementos Fixos e Flutuantes](#elementos-fixos)
5. [Implementação do Scroll](#implementação-scroll)
6. [Código CSS Base](#código-css)
7. [Código JavaScript Mínimo](#código-javascript)
8. [Sistema de Modais](#sistema-modais)
9. [Responsividade](#responsividade)
10. [Próximos Passos](#próximos-passos)

---

## 1. Visão Geral do Projeto {#visão-geral}

### Objetivo
Criar landing page para clínica veterinária CSM com foco em:
- Conversão imediata (emergências 24h)
- Apresentação clara de serviços
- Comunicação limpa e direcionada
- Controle da narrativa através de scroll por seções

### Tecnologias Decididas
- **HTML5 Semântico**
- **CSS3 Nativo** (CSS Scroll Snap)
- **JavaScript Mínimo** (navegação + animações)
- **Abordagem:** Design Responsivo (single site)

---

## 2. Decisões de Design e UX {#decisões-de-design}

### Estratégia de Scroll
**Escolha Final: Opção B - CSS Scroll Snap + JS Mínimo**

#### Por que essa abordagem?
- CSS Scroll Snap faz o trabalho pesado (performance nativa do browser)
- JS apenas para features específicas que CSS não resolve
- Balanceamento perfeito entre controle e flexibilidade
- Melhor performance que bibliotecas pesadas (fullPage.js)

#### Comportamento por Dispositivo
- **Desktop:** `scroll-snap-type: y mandatory` (experiência controlada)
- **Mobile:** `scroll-snap-type: y proximity` (mais natural)

### Sistema de Informação
- **Modais** para detalhes de serviços (evita sobrecarga visual)
- **Fullpage scroll** para narrativa sequencial
- **Múltiplos pontos de contato** estrategicamente posicionados

---

## 3. Estrutura Completa das Seções {#estrutura-das-seções}

### Seção 1: Hero Section
**ID:** `#hero`  
**Objetivo:** Captura imediata de atenção + conversão de emergências

**Elementos:**
- Logo CSM
- Título principal: "Atendimento 24 Horas - Urgência e Emergência"
- Subtítulo de valor
- Telefone/WhatsApp 24h (destaque máximo)
- Endereço resumido
- **CTAs:**
  - Botão primário: "Emergência 24h" (link para WhatsApp ou tel:)
  - Botão secundário: "Agendar Consulta" (scroll para CTA final)

**Altura:** 100vh  
**Background:** Imagem hero com overlay ou gradiente  
**Animação de entrada:** Fade in + slide up

---

### Seção 2: CSMVet Club
**ID:** `#club`  
**Objetivo:** Apresentar assinatura para retenção/receita recorrente

**Elementos:**
- Título: "CSMVet Club"
- Subtítulo: Proposta de valor
- Cards com 2-3 planos (Basic, Premium, VIP)
- Benefícios em bullets
- Preços destacados
- CTA: "Quero Fazer Parte"

**Altura:** 100vh  
**Layout sugerido:** Cards lado a lado (desktop) / empilhados (mobile)

---

### Seção 3: Consultas
**ID:** `#consultas`  
**Objetivo:** Mostrar amplitude de especialidades

**Elementos:**
- Título: "Consultas Especializadas"
- Descrição breve (1-2 linhas)
- Grid de cards/botões:
  - Clínica Geral
  - Pediatria
  - Geriatria
  - Dermatologia
  - Cardiologia
  - Ortopedia
  - Oftalmologia
  - Odontologia
  - Nutrição
- **Cada card abre modal** com detalhes

**Altura:** 100vh  
**Layout:** Grid 3x3 (desktop) / 2 colunas (mobile)

---

### Seção 4: Vacinas
**ID:** `#vacinas`  
**Objetivo:** Educar sobre importância + mostrar opções

**Elementos:**
- Título: "Vacinação Completa"
- Texto sobre importância da vacinação
- Botões para modais:
  - Vacinas para Cães (modal com lista V8, V10, antirrábica, etc.)
  - Vacinas para Gatos (modal com lista)
  - Calendário de Vacinação (modal)
  - Vacinas Importadas (modal)

**Altura:** 100vh  
**Visual:** Ícones grandes + botões chamativos

---

### Seção 5: Exames
**ID:** `#exames`  
**Objetivo:** Demonstrar capacidade diagnóstica

**Elementos:**
- Título: "Exames Completos"
- Descrição da estrutura laboratorial
- **Dois grandes botões:**
  1. **Exames Laboratoriais** (modal)
     - Hemograma
     - Bioquímico
     - Urinálise
     - Parasitológico
     - Etc.
  2. **Exames de Imagem** (modal)
     - Raio-X Digital
     - Ultrassom
     - Ecocardiograma
     - Eletrocardiograma

**Altura:** 100vh  
**Layout:** Split 50/50 com dois cards grandes

---

### Seção 6: Internamento
**ID:** `#internamento`  
**Objetivo:** Transmitir segurança e estrutura

**Elementos:**
- Título: "Internamento e UTI"
- Descrição da estrutura
- Bullets ou cards com:
  - UTI Veterinária equipada
  - Monitoramento 24h
  - Equipe dedicada
  - Isolamento para casos contagiosos
  - Câmeras para acompanhamento dos tutores
- Foto da UTI (se disponível)

**Altura:** 100vh

---

### Seção 7: Cirurgias
**ID:** `#cirurgias`  
**Objetivo:** Demonstrar capacidade cirúrgica

**Elementos:**
- Título: "Centro Cirúrgico Completo"
- Descrição do centro cirúrgico
- Grid de tipos de cirurgia (botões para modais):
  - Castração
  - Ortopédicas
  - Oncológicas
  - Odontológicas
  - Cirurgias de Emergência
  - Procedimentos Minimamente Invasivos
- Diferenciais:
  - Anestesista dedicado
  - Equipamentos modernos
  - Pós-operatório completo

**Altura:** 100vh

---

### Seção 8: Nossos Diferenciais
**ID:** `#diferenciais`  
**Objetivo:** Construir confiança e autoridade

**Elementos:**
- Título: "Por que Escolher a CSM?"
- Grid de diferenciais (ícones + texto):
  - 🏥 Atendimento 24 horas
  - 👨‍⚕️ Equipe especializada
  - 🔬 Equipamentos de última geração
  - ❤️ Atendimento humanizado
  - 📍 Localização privilegiada
  - ⭐ X anos de experiência
  - 🚑 Ambulância veterinária
  - 🏠 Atendimento domiciliar

**Altura:** 100vh  
**Layout:** Grid 2x4 ou 3x3

---

### Seção 9: Nossa Equipe
**ID:** `#equipe`  
**Objetivo:** Gerar confiança através das credenciais

**Elementos:**
- Título: "Conheça Nossos Veterinários"
- Subtítulo motivacional
- Cards da equipe:
  - Foto profissional
  - Nome completo
  - CRMV
  - Especialização
  - Breve bio (2-3 linhas)
- Foto da equipe completa (opcional, no final)

**Altura:** 100vh ou auto (se muitos veterinários)  
**Layout:** Grid 3-4 colunas (desktop) / 1-2 colunas (mobile)

---

### Seção 10: Depoimentos
**ID:** `#depoimentos`  
**Objetivo:** Prova social

**Elementos:**
- Título: "O que Nossos Clientes Dizem"
- Carrossel de depoimentos:
  - Texto do depoimento
  - Nome do tutor
  - Nome do pet
  - Foto do pet (se permitido)
  - Avaliação em estrelas
- Integração com Google Reviews (se possível)
- Total de avaliações + nota média

**Altura:** 100vh  
**Tipo:** Carrossel automático ou manual

---

### Seção 11: Convênios e Planos Aceitos
**ID:** `#convenios`  
**Objetivo:** Remover objeção de preço antes do CTA final

**Elementos:**
- Título: "Aceitamos Planos de Saúde Pet"
- Grid de logos dos planos aceitos:
  - Porto Seguro Pet
  - Petlove
  - Prudent Pet
  - Etc.
- Formas de pagamento:
  - Cartões de crédito/débito
  - PIX
  - Parcelamento em X vezes
- CTA secundário: "Consulte seu Plano"

**Altura:** 100vh  
**Layout:** Logos em grid + info de pagamento abaixo

---

### Seção 12: CTA Final - Agende Agora
**ID:** `#cta`  
**Objetivo:** Conversão final com todas as informações de contato

**Elementos:**
- Título forte: "Seu Pet Merece o Melhor Cuidado"
- Subtítulo de urgência (opcional): "Atendimento 24h, 7 dias por semana"

**Dados de contato completos:**
- ☎️ Telefone/WhatsApp 24h (GRANDE DESTAQUE)
- 📍 Endereço completo
- 📧 E-mail
- 🕐 Horário: 24 horas
- 🗺️ Mapa interativo (Google Maps embed)

**CTAs:**
- Botão verde: "WhatsApp Agora"
- Botão azul: "Ligar Agora"

**Altura:** 100vh  
**Layout:** Split - Informações à esquerda / Mapa à direita

---

### Seção 13: Footer
**ID:** `#footer`  
**Objetivo:** Informações legais + navegação + SEO

**Elementos:**

**Coluna 1: Logo e Contato**
- Logo CSM
- Telefone 24h (reforço)
- E-mail
- Endereço completo

**Coluna 2: Navegação Rápida**
- Links âncora para seções:
  - Serviços
  - CSMVet Club
  - Convênios
  - Nossa Equipe
  - Contato

**Coluna 3: Conteúdo**
- **Blog/Dicas** (link para /blog - SEO)
- Perguntas Frequentes (se tiver)

**Coluna 4: Redes Sociais**
- Instagram
- Facebook
- YouTube (se tiver)

**Linha inferior:**
- CNPJ
- Política de Privacidade
- Termos de Uso
- Copyright © 2025 CSM Veterinária - Todos os direitos reservados

**Altura:** Auto (não precisa ser 100vh)

---

## 4. Elementos Fixos e Flutuantes {#elementos-fixos}

### Header Sticky (Topo)
**Sempre visível ao scrollar**

```html
<header class="header-sticky">
  <div class="container">
    <img src="logo.svg" alt="CSM Veterinária">
    <nav class="desktop-nav">
      <!-- Links de navegação -->
    </nav>
    <div class="header-contact">
      <Phone /> <a href="tel:+5541999999999">(41) 99999-9999</a>
    </div>
    <button class="mobile-menu-toggle">☰</button>
  </div>
</header>
```

**Specs:**
- Altura: 70-80px
- Background: branco com sombra leve
- Sticky position: top 0
- Z-index: 1000

---

### Botão WhatsApp Flutuante (Canto Inferior Direito)
**Sempre visível, acompanha scroll**

```html
<a href="https://wa.me/5541999999999" class="whatsapp-float" target="_blank">
  <svg><!-- Ícone WhatsApp --></svg>
</a>
```

**Specs:**
- Posição: `position: fixed; bottom: 20px; right: 20px;`
- Tamanho: 60x60px (desktop) / 50x50px (mobile)
- Z-index: 9999
- Cor: #25D366 (verde WhatsApp oficial)
- Animação: pulso suave
- Mobile: ajustar para não cobrir conteúdo importante

---

### Navegação por Pontos Laterais (Opcional)
**Indicadores visuais de seção ativa**

```html
<nav class="section-dots">
  <button data-section="0" class="active"></button>
  <button data-section="1"></button>
  <!-- ... -->
</nav>
```

**Specs:**
- Posição: `position: fixed; right: 30px; top: 50%; transform: translateY(-50%);`
- Apenas desktop (ocultar em mobile)
- Z-index: 999
- Ponto ativo muda de cor

---

## 5. Implementação do Scroll {#implementação-scroll}

### CSS Scroll Snap - Base

```css
/* Container principal */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Altura do header */
}

/* Desktop - Snap obrigatório */
@media (min-width: 768px) {
  html {
    scroll-snap-type: y mandatory;
  }
  
  section {
    height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: normal; /* Permite scroll rápido */
  }
}

/* Mobile - Snap suave */
@media (max-width: 767px) {
  html {
    scroll-snap-type: y proximity;
  }
  
  section {
    min-height: 100vh; /* Permite conteúdo maior */
    scroll-snap-align: start;
  }
  
  /* Footer não precisa ser 100vh */
  #footer {
    min-height: auto;
  }
}

/* Animação de entrada */
section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

section.section-visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 6. Código CSS Base {#código-css}

### Reset e Variáveis

```css
/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Variáveis CSS */
:root {
  /* Cores principais - Design System CSM Vet */
  --primary-color: #1E5AA8; /* Azul CSM */
  --secondary-color: #F2B749; /* Amarelo CSM */
  --emergency-red: #dc2626; /* Vermelho apenas para emergências */
  --success-green: #10b981; /* Verde apenas para sucesso */
  --dark: #1f2937;
  --light: #f9fafb;
  --gray-light: #e5e7eb;
  --gray-medium: #6b7280;
  
  /* Tipografia */
  --font-main: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-heading: 'Poppins', sans-serif;
  
  /* Espaçamentos */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  --spacing-xl: 6rem;
  
  /* Sombras */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  
  /* Bordas */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;
}

body {
  font-family: var(--font-main);
  color: var(--dark);
  line-height: 1.6;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.2;
}
```

### Componentes Reutilizáveis

```css
/* Container padrão */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

/* Botões */
.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  font-size: 1rem;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background: #164a8f;
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: var(--secondary-color);
  color: var(--dark);
  font-weight: 600;
}

.btn-secondary:hover {
  background: #d9a03d;
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-emergency {
  background: var(--emergency-red);
  color: white;
}

.btn-emergency:hover {
  background: #b91c1c;
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

/* Cards */
.card {
  background: white;
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

/* Grid responsivo */
.grid {
  display: grid;
  gap: var(--spacing-md);
}

.grid-2 {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.grid-4 {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

### Header Sticky

```css
.header-sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: var(--shadow-sm);
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
}

.header-sticky .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-sticky img {
  height: 50px;
}

.desktop-nav {
  display: flex;
  gap: var(--spacing-md);
}

.desktop-nav a {
  color: var(--dark);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.desktop-nav a:hover {
  color: var(--primary-color);
}

.header-contact {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  font-weight: 600;
}

.header-contact a {
  color: inherit;
  text-decoration: none;
}

/* Mobile */
.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: block;
  }
  
  .header-contact {
    font-size: 0.9rem;
  }
}
```

### WhatsApp Flutuante

```css
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  z-index: 9999;
  transition: all 0.3s ease;
  animation: pulse 2s infinite;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
}

.whatsapp-float svg {
  width: 35px;
  height: 35px;
  fill: white;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  }
  50% {
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.8);
  }
}

@media (max-width: 768px) {
  .whatsapp-float {
    width: 50px;
    height: 50px;
    bottom: 15px;
    right: 15px;
  }
  
  .whatsapp-float svg {
    width: 28px;
    height: 28px;
  }
}
```

---

## 7. Código JavaScript Mínimo {#código-javascript}

### Detecção de Seção Ativa (Intersection Observer)

```javascript
// Detectar seção ativa e animar entrada
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navDots = document.querySelectorAll('.section-dots button');
  
  const observerOptions = {
    root: null,
    threshold: 0.5, // 50% da seção visível
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Adicionar classe de animação
        entry.target.classList.add('section-visible');
        
        // Atualizar navegação por pontos
        const index = Array.from(sections).indexOf(entry.target);
        navDots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
        });
        
        // Analytics (opcional)
        // gtag('event', 'section_view', { section_name: entry.target.id });
      }
    });
  }, observerOptions);
  
  sections.forEach(section => observer.observe(section));
});
```

### Navegação por Pontos Laterais

```javascript
// Navegação clicável nos pontos laterais
document.querySelectorAll('.section-dots button').forEach(button => {
  button.addEventListener('click', () => {
    const sectionIndex = button.dataset.section;
    const sections = document.querySelectorAll('section');
    const targetSection = sections[sectionIndex];
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
```

### Scroll Suave para Links Âncora

```javascript
// Navegação suave para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
```

### Header que Esconde ao Scrollar para Baixo (Opcional)

```javascript
// Header que esconde ao rolar para baixo, aparece ao rolar para cima
let lastScroll = 0;
const header = document.querySelector('.header-sticky');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    header.classList.remove('scroll-up');
    return;
  }
  
  if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
    // Scrollando para baixo - esconde
    header.classList.remove('scroll-up');
    header.classList.add('scroll-down');
  } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
    // Scrollando para cima - mostra
    header.classList.remove('scroll-down');
    header.classList.add('scroll-up');
  }
  
  lastScroll = currentScroll;
});
```

CSS correspondente:
```css
.header-sticky.scroll-down {
  transform: translateY(-100%);
}

.header-sticky.scroll-up {
  transform: translateY(0);
}
```

---

## 8. Sistema de Modais {#sistema-modais}

### HTML Base do Modal

```html
<!-- Modal genérico -->
<div class="modal" id="modal-consulta-geral">
  <div class="modal-overlay"></div>
  <div class="modal-content">
    <button class="modal-close">&times;</button>
    <h2>Consulta Clínica Geral</h2>
    <div class="modal-body">
      <p>Conteúdo detalhado sobre o serviço...</p>
      <ul>
        <li>Avaliação completa do pet</li>
        <li>Histórico médico</li>
        <li>Orientações preventivas</li>
      </ul>
    </div>
    <div class="modal-footer">
      <a href="#cta" class="btn btn-primary">Agendar Agora</a>
    </div>
  </div>
</div>
```

### CSS do Modal

```css
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  align-items: center;
  justify-content: center;
}

.modal.active {
  display: flex;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
}

.modal-content {
  position: relative;
  background: white;
  border-radius: var(--radius-lg);
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  padding: var(--spacing-lg);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--dark);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s;
}

.modal-close:hover {
  background: var(--light);
}

.modal-body {
  margin: var(--spacing-md) 0;
}

.modal-footer {
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid #e5e7eb;
  text-align: center;
}
```

### JavaScript do Modal

```javascript
// Abrir modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Previne scroll do body
  }
}

// Fechar modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restaura scroll
  }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Botões que abrem modais
  document.querySelectorAll('[data-modal]').forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.dataset.modal;
      openModal(modalId);
    });
  });
  
  // Botões de fechar
  document.querySelectorAll('.modal-close').forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      if (modal) {
        closeModal(modal.id);
      }
    });
  });
  
  // Fechar ao clicar no overlay
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', () => {
      const modal = overlay.closest('.modal');
      if (modal) {
        closeModal(modal.id);
      }
    });
  });
  
  // Fechar com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.active').forEach(modal => {
        closeModal(modal.id);
      });
    }
  });
});
```

### Exemplo de Uso no HTML

```html
<!-- Botão que abre modal -->
<button class="card" data-modal="modal-consulta-geral">
  <h3>Clínica Geral</h3>
  <p>Atendimento completo para seu pet</p>
</button>

<!-- Modal correspondente -->
<div class="modal" id="modal-consulta-geral">
  <!-- conteúdo do modal -->
</div>
```

---

## 9. Responsividade {#responsividade}

### Breakpoints Recomendados

```css
/* Mobile First Approach */

/* Extra Small - Smartphones em retrato */
/* Base styles (sem media query) */

/* Small - Smartphones em paisagem */
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

/* Medium - Tablets */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
  
  html {
    scroll-snap-type: y mandatory;
  }
}

/* Large - Desktops pequenos */
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

/* Extra Large - Desktops grandes */
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

/* XXL - Monitores wide */
@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}
```

### Ajustes Mobile Específicos

```css
@media (max-width: 767px) {
  /* Textos maiores para legibilidade */
  h1 { font-size: 2rem; }
  h2 { font-size: 1.5rem; }
  h3 { font-size: 1.25rem; }
  
  /* Espaçamentos reduzidos */
  section {
    padding: var(--spacing-md) var(--spacing-sm);
  }
  
  /* Grids em coluna única */
  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr;
  }
  
  /* Botões full-width */
  .btn {
    width: 100%;
    text-align: center;
  }
  
  /* Hero ajustado */
  .hero h1 {
    font-size: 1.75rem;
  }
  
  .hero-ctas {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
}
```

### Touch-friendly

```css
/* Áreas de toque maiores para mobile */
@media (max-width: 767px) {
  button,
  .btn,
  a.card {
    min-height: 44px; /* Recomendação Apple/Google */
    min-width: 44px;
  }
  
  /* Espaçamento entre elementos clicáveis */
  .btn + .btn {
    margin-top: var(--spacing-sm);
  }
}
```

---

## 10. Próximos Passos {#próximos-passos}

### Fase 1: Setup Inicial
- [ ] Criar estrutura de pastas do projeto
- [ ] Configurar HTML semântico base
- [ ] Implementar CSS reset e variáveis
- [ ] Adicionar fontes (Google Fonts: Inter + Poppins)

### Fase 2: Layout Base
- [ ] Header sticky
- [ ] WhatsApp flutuante
- [ ] Estrutura das 13 seções
- [ ] Footer completo
- [ ] CSS Scroll Snap

### Fase 3: Conteúdo
- [ ] Textos de cada seção (copywriting)
- [ ] Imagens otimizadas (WebP format)
- [ ] Logos dos convênios
- [ ] Fotos da equipe
- [ ] Depoimentos reais

### Fase 4: Funcionalidades
- [ ] Sistema de modais
- [ ] Navegação por pontos laterais
- [ ] Intersection Observer para animações
- [ ] Links âncora funcionais

### Fase 5: Otimização
- [ ] Performance (Lighthouse score >90)
- [ ] SEO on-page
  - Meta tags
  - Schema.org (LocalBusiness)
  - Open Graph
  - Sitemap
- [ ] Acessibilidade (WCAG AA)
- [ ] Lazy loading de imagens

### Fase 6: Integrações
- [ ] Google Maps embed
- [ ] Google Analytics / Tag Manager
- [ ] Pixel do Facebook (se tiver ads)
- [ ] WhatsApp Business API
- [ ] Formulários (se adicionar)

### Fase 7: Testes
- [ ] Testes em múltiplos browsers
- [ ] Testes mobile (iOS/Android)
- [ ] Testes de velocidade
- [ ] Revisão de conteúdo
- [ ] Testes de conversão (CTAs)

### Fase 8: Deploy
- [ ] Configurar domínio
- [ ] Certificado SSL
- [ ] Deploy em servidor/hosting
- [ ] Configurar redirects (www vs non-www)
- [ ] Google Search Console
- [ ] Google My Business

---

## 📝 Notas Importantes

### Performance
- Usar imagens WebP (fallback JPG)
- Lazy loading em imagens abaixo da dobra
- Minificar CSS/JS antes do deploy
- CDN para assets estáticos (se possível)

### SEO
- Título da página: "CSM Veterinária | Atendimento 24h em [Cidade]"
- Meta description única e persuasiva
- Alt text em todas as imagens
- Heading hierarchy correta (H1 > H2 > H3)
- Schema markup para LocalBusiness

### Acessibilidade
- Contraste de cores WCAG AA
- Navegação por teclado funcional
- ARIA labels em elementos interativos
- Skip links para navegação
- Textos alternativos descritivos

### Conversão
- CTAs visíveis e claros
- Múltiplos pontos de contato
- Senso de urgência (24h)
- Prova social (depoimentos)
- Remoção de objeções (convênios, preço)

---

## 🎨 Recursos Recomendados

### Imagens Stock (se necessário)
- Unsplash.com
- Pexels.com
- Freepik.com (veterinária)

### Ícones
- Lucide Icons (https://lucide.dev)
- Heroicons (https://heroicons.com)
- Font Awesome (free version)

### Fontes
- Google Fonts: Inter + Poppins
- Alternativas: Montserrat, Raleway, Open Sans

### Cores do Design System CSM Vet
- **Azul CSM (Principal):** #1E5AA8
- **Amarelo CSM (Secundário):** #F2B749
- **Vermelho Emergência:** #dc2626 (usar apenas para CTAs de emergência 24h)
- **Verde Sucesso:** #10b981 (usar apenas para confirmações/sucesso)
- **Cinza Texto:** #1f2937
- **Background Claro:** #f9fafb
- **Cinza Claro:** #e5e7eb
- **Cinza Médio:** #6b7280

**Importante:** Seguir estética "papel impresso" minimalista. Evitar excesso de cores simultâneas.

---

**Documento preparado por:** Assistente Claude  
**Para:** Desenvolvimento Site CSM Veterinária  
**Versão:** 1.0 Final  
**Data:** 18 de Outubro de 2025