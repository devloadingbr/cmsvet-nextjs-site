# 🎯 Roadmap: Sistema de Data IDs Automáticos

## 📋 Visão Geral

Sistema inteligente que adiciona automaticamente `data-content-id` em elementos editáveis para identificação precisa e persistente, eliminando a necessidade de busca por texto no código-fonte.

---

## 🔴 Problema Atual

### Como funciona hoje:
```typescript
// 1. Pega o texto
const text = "Cuidado Veterinário";

// 2. Busca no código-fonte
grep -r "Cuidado Veterinário" src/components/

// 3. Encontra arquivo
src/components/HeroSection.tsx:28

// 4. Substitui texto
oldContent.replace("Cuidado Veterinário", "Novo Texto")
```

### Problemas:
- ❌ Texto duplicado = substitui errado
- ❌ Texto com quebra de linha = não encontra
- ❌ Texto com formatação = não encontra
- ❌ Muito lento (escaneia todos arquivos)
- ❌ Frágil (qualquer mudança quebra)
- ❌ Não funciona com componentes dinâmicos

---

## ✅ Solução: Data IDs Automáticos

### Conceito Central
Quando o editor escaneia a página, ele **adiciona automaticamente** um atributo `data-content-id` em cada elemento editável. Esse ID é único e serve como "endereço permanente" do elemento.

---

## 🔄 Como Funciona

### 1. Página Original (sem IDs)
```html
<section class="hero">
  <h1>Cuidado Veterinário</h1>
  <p>Atendimento 24 horas</p>
  <button>Agendar Consulta</button>
</section>
```

### 2. Editor Escaneia e Adiciona IDs (no DOM)
```html
<!-- DOM após escaneamento (apenas no navegador) -->
<section class="hero">
  <h1 data-content-id="hero-h1-cuidado-veterinario">
    Cuidado Veterinário
  </h1>
  <p data-content-id="hero-p-atendimento-24-horas">
    Atendimento 24 horas
  </p>
  <button data-content-id="hero-button-agendar-consulta">
    Agendar Consulta
  </button>
</section>
```

**IMPORTANTE:** IDs existem **APENAS no DOM do navegador** inicialmente, não no código-fonte.

### 3. Após Primeira Edição (persistido no código)
```tsx
// src/components/sections/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="hero">
      {/* ✨ ID foi adicionado automaticamente */}
      <h1 data-content-id="hero-h1-cuidado-veterinario">
        Cuidado Veterinário Profissional
      </h1>
      
      <p data-content-id="hero-p-atendimento-24-horas">
        Atendimento 24 horas por dia
      </p>
      
      <button data-content-id="hero-button-agendar-consulta">
        Agendar Consulta
      </button>
    </section>
  );
}
```

---

## 🏗️ Implementação Técnica

### Geração de ID

```typescript
private generateContentId(element: HTMLElement): string {
  // 1. Identifica a seção
  const section = this.findSectionName(element);
  // Exemplo: "hero", "services", "about"
  
  // 2. Pega a tag
  const tag = element.tagName.toLowerCase();
  // Exemplo: "h1", "p", "button"
  
  // 3. Pega parte do texto (primeiras palavras)
  const text = element.textContent?.trim() || '';
  const textSlug = this.slugify(text.substring(0, 30));
  // Exemplo: "cuidado-veterinario"
  
  // 4. Combina tudo
  const baseId = `${section}-${tag}-${textSlug}`;
  // Exemplo: "hero-h1-cuidado-veterinario"
  
  // 5. Garante unicidade
  return this.ensureUniqueId(baseId);
}
```

### Funções Auxiliares

```typescript
// Encontra nome da seção
private findSectionName(element: HTMLElement): string {
  let current = element.parentElement;
  
  while (current) {
    if (current.tagName === 'SECTION') {
      // Tenta pegar do className
      const classes = current.className.split(' ');
      if (classes.length > 0) {
        return this.slugify(classes[0]);
      }
      
      // Tenta pegar do id
      if (current.id) {
        return this.slugify(current.id);
      }
      
      // Tenta pegar do heading dentro
      const heading = current.querySelector('h2, h3');
      if (heading) {
        return this.slugify(heading.textContent?.substring(0, 20) || '');
      }
    }
    
    current = current.parentElement;
  }
  
  return 'content'; // fallback
}

// Transforma texto em slug
private slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9]+/g, '-')     // Substitui não-alfanuméricos por -
    .replace(/^-+|-+$/g, '');        // Remove - do início/fim
}

// Garante que ID é único
private ensureUniqueId(baseId: string): string {
  let id = baseId;
  let counter = 1;
  
  // Se já existe, adiciona número
  while (document.querySelector(`[data-content-id="${id}"]`)) {
    id = `${baseId}-${counter}`;
    counter++;
  }
  
  return id;
}
```

### Escaneamento com IDs

```typescript
private scanEditableContent() {
  const allElements = document.querySelectorAll('*');
  
  allElements.forEach((element) => {
    const htmlElement = element as HTMLElement;
    
    // Ignora elementos do editor
    if (this.isEditorElement(htmlElement)) return;
    
    // Pega texto editável
    const text = this.getEditableText(htmlElement);
    if (!text || text.length === 0) return;
    
    // ✨ GERA E ADICIONA ID AUTOMATICAMENTE
    const contentId = this.generateContentId(htmlElement);
    htmlElement.setAttribute('data-content-id', contentId);
    
    // Salva no mapa
    this.editableElements.set(contentId, {
      id: contentId,
      element: htmlElement,
      originalText: text,
      currentText: text,
      selector: this.generateSelector(htmlElement),
      filePath: this.guessFilePath(htmlElement),
    });
  });
}
```

---

## 💾 Sistema de Salvamento

### Frontend: Envia com Content ID

```typescript
async saveToSourceCode() {
  const changes = [];
  
  this.editableElements.forEach((content) => {
    if (content.currentText !== content.originalText) {
      changes.push({
        // ✨ USA O DATA-ID COMO IDENTIFICADOR
        contentId: content.id, // "hero-h1-cuidado-veterinario"
        
        // Informações adicionais para fallback
        selector: this.generateSelector(content.element),
        filePath: this.guessFilePath(content.element),
        
        // Contexto para validação
        parentSelector: this.getParentSelector(content.element),
        siblingText: this.getSiblingText(content.element),
        
        // Conteúdo
        originalText: content.originalText,
        newText: content.currentText,
        originalHash: this.hashText(content.originalText)
      });
    }
  });
  
  // Envia para API
  const response = await fetch('/api/content-editor/save-smart', {
    method: 'POST',
    body: JSON.stringify({ changes })
  });
}
```

### Backend: Busca Inteligente

```typescript
// app/api/content-editor/save-smart/route.ts
export async function POST(request: NextRequest) {
  const { changes } = await request.json();
  
  for (const change of changes) {
    // 1. Tenta encontrar por data-id no código
    let result = await findByDataId(change.contentId, change.filePath);
    
    // 2. Se não encontrou, tenta por contexto
    if (!result.found) {
      result = await findByContext(
        change.selector,
        change.parentSelector,
        change.filePath
      );
    }
    
    // 3. Valida com hash
    if (result.found && hashText(result.text) === change.originalHash) {
      // Substitui o texto
      await replaceTextInFile(
        result.filePath,
        result.lineNumber,
        change.originalText,
        change.newText
      );
      
      // Adiciona data-content-id no código (se não existir)
      await addDataIdToCode(
        result.filePath,
        result.lineNumber,
        change.contentId
      );
    } else {
      return conflict(change);
    }
  }
  
  return NextResponse.json({ success: true });
}
```

### Busca por Data ID

```typescript
async function findByDataId(
  contentId: string,
  filePath: string
): Promise<SearchResult> {
  
  // 1. Lê o arquivo
  const content = await fs.readFile(filePath, 'utf-8');
  
  // 2. Procura por data-content-id existente
  const regex = new RegExp(`data-content-id=["']${contentId}["']`);
  const match = content.match(regex);
  
  if (match) {
    // ✅ Encontrou! Retorna localização
    return {
      found: true,
      filePath,
      lineNumber: getLineNumber(content, match.index),
      text: extractTextFromLine(content, match.index),
      hasDataId: true
    };
  }
  
  // 3. Se não encontrou, tenta inferir pela estrutura do ID
  // "hero-h1-cuidado-veterinario" -> busca h1 na seção hero
  const parts = contentId.split('-');
  const section = parts[0];  // "hero"
  const tag = parts[1];      // "h1"
  
  // Busca padrão: <h1>...texto...</h1> dentro de section hero
  return await findByStructure(content, section, tag);
}
```

### Adiciona ID no Código

```typescript
async function addDataIdToCode(
  filePath: string,
  lineNumber: number,
  contentId: string
) {
  const content = await fs.readFile(filePath, 'utf-8');
  const lines = content.split('\n');
  
  // Pega a linha do elemento
  let line = lines[lineNumber];
  
  // Adiciona data-content-id se não existir
  if (!line.includes('data-content-id')) {
    // Exemplo: <h1> vira <h1 data-content-id="hero-h1-cuidado-veterinario">
    line = line.replace(
      /<(\w+)(\s|>)/,
      `<$1 data-content-id="${contentId}"$2`
    );
    
    lines[lineNumber] = line;
    
    // Salva arquivo
    await fs.writeFile(filePath, lines.join('\n'), 'utf-8');
  }
}
```

---

## 🔄 Fluxo Completo

```
┌─────────────────────────────────────────────┐
│ 1. Página Carrega                           │
│    HTML sem data-content-id                 │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│ 2. Editor Escaneia                          │
│    - Encontra elementos editáveis           │
│    - Gera IDs únicos                        │
│    - Adiciona data-content-id no DOM        │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│ 3. Usuário Clica em Texto                  │
│    - Identifica pelo data-content-id        │
│    - Abre editor                            │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│ 4. Usuário Edita e Salva                   │
│    - Envia contentId + novo texto           │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│ 5. API Busca no Código                     │
│    - Procura por data-content-id            │
│    - Se não achar, usa estrutura do ID      │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│ 6. API Modifica Código                     │
│    - Substitui texto                        │
│    - Adiciona data-content-id (1ª vez)      │
│    - Salva arquivo                          │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│ 7. Próximas Edições                        │
│    - Usa data-content-id para busca rápida │
│    - Muito mais preciso e rápido!          │
└─────────────────────────────────────────────┘
```

---

## ✨ Vantagens

1. **Precisão**: ID único garante elemento correto
2. **Velocidade**: Busca direta, não precisa escanear tudo
3. **Robustez**: Funciona mesmo se texto mudar
4. **Progressivo**: Primeira vez usa inferência, depois usa ID
5. **Não-intrusivo**: IDs só aparecem após primeira edição
6. **Rastreável**: Fácil ver histórico de edições
7. **Funciona com duplicatas**: IDs únicos mesmo com texto igual
8. **Independente de estrutura**: Não quebra se HTML mudar

---

## 🎯 Plano de Implementação

### Fase 1: Geração de IDs (1-2 dias)
- [ ] Implementar `generateContentId()`
- [ ] Implementar `findSectionName()`
- [ ] Implementar `slugify()`
- [ ] Implementar `ensureUniqueId()`
- [ ] Adicionar IDs no DOM durante scan
- [ ] Testar geração de IDs

### Fase 2: Salvamento com IDs (2-3 dias)
- [ ] Modificar `saveToSourceCode()` para enviar contentId
- [ ] Criar API `/api/content-editor/save-smart`
- [ ] Implementar `findByDataId()`
- [ ] Implementar `findByStructure()` (fallback)
- [ ] Implementar `addDataIdToCode()`
- [ ] Testar salvamento

### Fase 3: Validação e Contexto (1-2 dias)
- [ ] Adicionar hash de validação
- [ ] Implementar detecção de conflitos
- [ ] Adicionar contexto (parent, sibling)
- [ ] Melhorar mensagens de erro
- [ ] Testar edge cases

### Fase 4: Otimizações (1 dia)
- [ ] Cache de IDs gerados
- [ ] Otimizar busca em arquivos grandes
- [ ] Adicionar logging detalhado
- [ ] Documentar API

---

## 🤔 Perguntas Frequentes

### Q: Os IDs poluem o código?
**A:** Minimamente. São apenas atributos HTML, como `className` ou `id`. E só aparecem em elementos editados.

### Q: E se eu deletar o data-content-id do código?
**A:** Na próxima edição, o sistema regenera baseado na estrutura.

### Q: Funciona com componentes dinâmicos?
**A:** Sim! O ID é gerado no DOM renderizado, não importa como foi gerado.

### Q: E se dois elementos tiverem texto igual?
**A:** O `ensureUniqueId()` adiciona sufixo numérico: `-1`, `-2`, etc.

### Q: Funciona com SSR/SSG?
**A:** Sim! IDs são adicionados no cliente, não afeta renderização do servidor.

### Q: E se o componente for refatorado?
**A:** Se mantiver o data-content-id, continua funcionando. Se remover, regenera na próxima edição.

---

## 📊 Comparação: Antes vs Depois

| Aspecto | Busca por Texto (Atual) | Data IDs (Novo) |
|---------|-------------------------|-----------------|
| **Precisão** | ⭐ Baixa | ⭐⭐⭐⭐⭐ Alta |
| **Velocidade** | ⭐⭐ Lenta | ⭐⭐⭐⭐⭐ Rápida |
| **Robustez** | ⭐ Frágil | ⭐⭐⭐⭐⭐ Robusta |
| **Duplicatas** | ❌ Problema | ✅ Resolve |
| **Formatação** | ❌ Quebra | ✅ Funciona |
| **Manutenção** | ❌ Difícil | ✅ Fácil |

---

## 💡 Exemplo Real

### Antes (código original)
```tsx
<h1>Cuidado Veterinário</h1>
```

### Depois da 1ª edição
```tsx
<h1 data-content-id="hero-h1-cuidado-veterinario">
  Cuidado Veterinário Profissional
</h1>
```

### Próximas edições
API busca diretamente por `data-content-id="hero-h1-cuidado-veterinario"` - **instantâneo e preciso!**

---

## 🚀 Próximos Passos

1. Implementar Fase 1 (geração de IDs)
2. Testar em ambiente de desenvolvimento
3. Implementar Fase 2 (salvamento)
4. Validar com casos reais
5. Otimizar e documentar
6. Deploy em produção

---

**Status:** 📋 Planejado  
**Prioridade:** 🔥 Alta  
**Complexidade:** ⭐⭐⭐ Média  
**Impacto:** 🚀 Muito Alto
