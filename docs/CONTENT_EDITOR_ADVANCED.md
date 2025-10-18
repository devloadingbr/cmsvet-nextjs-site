# ⚡ Content Editor Advanced - Edita Código-Fonte Diretamente

Sistema avançado de edição de conteúdo que **MODIFICA os arquivos `.tsx` reais** no disco.

## ⚠️ ATENÇÃO

**Esta versão SALVA ALTERAÇÕES DIRETAMENTE NO CÓDIGO-FONTE!**

- ✅ Modifica arquivos `.tsx` reais
- ✅ Alterações são permanentes
- ✅ Funciona apenas em localhost + desenvolvimento
- ⚠️ **Use com cuidado!**

---

## 🚀 Como Funciona

### 1. Edição no Navegador
- Clique em qualquer texto da página
- Edite no painel lateral
- Veja preview em tempo real

### 2. Busca no Código
- Sistema escaneia arquivos em `src/components/`
- Encontra a linha exata onde o texto está
- Identifica o arquivo `.tsx` correto

### 3. Salva no Disco
- Substitui o texto antigo pelo novo
- Modifica o arquivo real
- Recarrega a página automaticamente

---

## 🎯 Início Rápido

### 1. Inicie o servidor
```bash
npm run dev
```

### 2. Abra no navegador
```
http://localhost:3000
```

### 3. Ative o editor
- Pressione `Ctrl + E` (ou `Cmd + E`)
- OU clique no botão **"✏️ EDITOR"** na lateral direita

### 4. Edite e salve
1. Clique em um texto
2. Edite no painel
3. Clique "✓ Aplicar Preview"
4. Clique "💾 Salvar no Código-Fonte"
5. Aguarde confirmação
6. Página recarrega automaticamente

---

## 🎨 Interface

```
┌─────────────────────────────────────────┐
│ ✏️ Content Editor         [×]           │
│ Advanced Mode                           │
│ ⚠️ ATENÇÃO: Alterações modificam código│ ← Aviso
├─────────────────────────────────────────┤
│                                         │
│ 📍 Hero Section • heading               │
│                                         │
│ Texto Original:                         │
│ ┌───────────────────────────────────┐   │
│ │ Cuidado Veterinário               │   │
│ └───────────────────────────────────┘   │
│                                         │
│ Novo Texto:                             │
│ ┌───────────────────────────────────┐   │
│ │ Cuidado Veterinário Profissional │   │ ← Editável
│ └───────────────────────────────────┘   │
│                                         │
│ [✓ Aplicar Preview]  [✕]               │
│                                         │
│ 💡 Dica: Clique em "Aplicar" para ver  │
│ a mudança. Depois salve no código.      │
│                                         │
├─────────────────────────────────────────┤
│ [💾 Salvar no Código-Fonte]            │ ← Salva no disco
│ ✓ Preview aplicado! Clique em "Salvar" │
└─────────────────────────────────────────┘
```

---

## 🔧 Arquitetura Técnica

### Frontend (Browser)
```
content-editor-advanced.ts
├── Escaneia elementos editáveis
├── Cria interface de edição
├── Aplica preview em tempo real
└── Chama APIs para salvar
```

### Backend (API Routes)
```
/api/content-editor/scan
├── Escaneia arquivos .tsx recursivamente
├── Busca texto no código-fonte
└── Retorna localização exata

/api/content-editor/save
├── Valida permissões
├── Lê arquivo atual
├── Substitui texto
└── Salva no disco
```

---

## 📦 Fluxo Completo

```
1. Usuário clica em texto
   ↓
2. Editor mostra painel de edição
   ↓
3. Usuário edita e clica "Aplicar Preview"
   ↓
4. DOM é atualizado (preview)
   ↓
5. Usuário clica "Salvar no Código-Fonte"
   ↓
6. Frontend chama /api/content-editor/scan
   ↓
7. API encontra arquivo e linha
   ↓
8. Frontend chama /api/content-editor/save
   ↓
9. API modifica arquivo .tsx
   ↓
10. Página recarrega automaticamente
```

---

## 🔒 Segurança

### Validações Implementadas

1. **Ambiente**
   ```typescript
   if (process.env.NODE_ENV !== 'development') {
     return 403; // Forbidden
   }
   ```

2. **Hostname**
   ```typescript
   if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
     return; // Não ativa
   }
   ```

3. **Diretório**
   ```typescript
   if (!filePath.includes('src/components')) {
     return 403; // Apenas components/
   }
   ```

4. **Conflitos**
   ```typescript
   if (!currentContent.includes(oldContent)) {
     return 409; // Conflict
   }
   ```

---

## ⚙️ Configuração

### Arquivos Criados

```
src/
├── lib/
│   ├── content-editor.ts              # Versão básica (JSON)
│   └── content-editor-advanced.ts     # Versão avançada (salva código)
├── components/
│   └── dev/
│       └── ContentEditorProvider.tsx  # Provider React
└── app/
    └── api/
        └── content-editor/
            ├── scan/
            │   └── route.ts           # API de busca
            └── save/
                └── route.ts           # API de salvamento
```

### Integração no Layout

```tsx
// src/app/layout.tsx
import ContentEditorProvider from "@/components/dev/ContentEditorProvider";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <ContentEditorProvider /> {/* Ativa o editor */}
      </body>
    </html>
  );
}
```

---

## 🎯 O que Pode Editar

### ✅ Suportado
- Títulos (h1, h2, h3, h4, h5, h6)
- Parágrafos
- Badges
- Textos de botões
- Itens de lista
- Textos em JSX

### ❌ Não Suportado
- Imagens
- Ícones
- Estilos CSS
- Atributos HTML
- Código JavaScript
- Componentes complexos

---

## 💡 Casos de Uso

### 1. Correções Rápidas
Cliente encontra erro de digitação → Corrige na hora

### 2. Testes A/B
Testa diferentes versões de títulos rapidamente

### 3. Revisão de Conteúdo
Cliente revisa e aprova alterações em tempo real

### 4. Prototipagem
Experimenta diferentes textos sem editar código

---

## 🐛 Troubleshooting

### Editor não aparece
- ✅ Verifique se está em `localhost:3000`
- ✅ Verifique se rodou `npm run dev`
- ✅ Abra console e procure por "Content Editor Advanced ativado"

### Botão "Salvar" desabilitado
- ✅ Clique em "✓ Aplicar Preview" primeiro
- ✅ Faça pelo menos uma alteração

### Erro ao salvar
- ✅ Verifique permissões de escrita
- ✅ Verifique se arquivo não foi modificado externamente
- ✅ Veja console do navegador e terminal

### Texto não encontrado no código
- ✅ Recarregue a página
- ✅ Verifique se texto tem menos de 500 caracteres
- ✅ Verifique se texto está em `src/components/`

---

## ⚠️ Avisos Importantes

1. **Backup**: Sempre tenha backup antes de usar
2. **Git**: Commit antes de fazer alterações
3. **Testes**: Teste em ambiente de desenvolvimento
4. **Revisão**: Revise alterações antes de commitar
5. **Produção**: NUNCA ativa em produção

---

## 🔄 Workflow Recomendado

```bash
# 1. Commit estado atual
git add .
git commit -m "backup antes de editar conteúdo"

# 2. Inicie o editor
npm run dev

# 3. Edite conteúdo no navegador

# 4. Verifique alterações
git diff

# 5. Se OK, commit
git add .
git commit -m "atualiza conteúdo via editor"

# 6. Se não OK, reverta
git restore .
```

---

## 📊 Comparação de Versões

| Recurso | Básica | Advanced |
|---------|--------|----------|
| Edição no navegador | ✅ | ✅ |
| Preview em tempo real | ✅ | ✅ |
| Exporta JSON | ✅ | ❌ |
| Salva no código | ❌ | ✅ |
| Modifica arquivos | ❌ | ✅ |
| Requer aplicação manual | ✅ | ❌ |
| Risco de perda | Baixo | Médio |

---

## 📚 APIs Disponíveis

### GET /api/content-editor/scan

Busca texto no código-fonte.

**Query Params:**
- `text` (string): Texto a buscar

**Response:**
```json
{
  "success": true,
  "results": [
    {
      "id": "HeroSection.tsx-27",
      "text": "Cuidado Veterinário",
      "filePath": "src/components/sections/HeroSection.tsx",
      "lineNumber": 28,
      "context": "...",
      "type": "jsx-text"
    }
  ],
  "count": 1
}
```

### POST /api/content-editor/save

Salva alteração no arquivo.

**Body:**
```json
{
  "filePath": "src/components/sections/HeroSection.tsx",
  "oldContent": "Cuidado Veterinário",
  "newContent": "Cuidado Veterinário Profissional"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Arquivo atualizado com sucesso",
  "filePath": "src/components/sections/HeroSection.tsx"
}
```

---

## 🎓 Dicas Profissionais

1. **Sempre faça backup**: `git commit` antes de editar
2. **Teste em pequenas doses**: Edite 1-2 textos por vez
3. **Revise no git**: Use `git diff` para ver mudanças
4. **Use preview**: Sempre aplique preview antes de salvar
5. **Recarregue se necessário**: Ctrl+Shift+R para limpar cache

---

## 🚀 Próximos Passos

Após dominar o editor:

1. Explore edição de múltiplos elementos
2. Use para revisões com clientes
3. Documente alterações importantes
4. Crie workflow personalizado

---

**Desenvolvido para máxima produtividade em desenvolvimento** ⚡

**USE COM RESPONSABILIDADE!** 🔒
