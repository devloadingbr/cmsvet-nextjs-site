# ✏️ Content Editor - Editor Low-Code de Conteúdo

Sistema de edição de conteúdo diretamente no navegador, ativo apenas em **localhost** durante desenvolvimento.

## 🎯 Funcionalidades

- ✅ **Edição Inline**: Clique em qualquer texto para editar
- ✅ **Preview em Tempo Real**: Veja as alterações instantaneamente
- ✅ **Exportação JSON**: Salva alterações em arquivo JSON
- ✅ **Indicadores Visuais**: Elementos editáveis destacados ao passar o mouse
- ✅ **Atalho de Teclado**: `Ctrl/Cmd + E` para abrir/fechar
- ✅ **Seguro**: Ativa apenas em localhost + modo desenvolvimento

## 🚀 Como Usar

### 1. Iniciar o Servidor de Desenvolvimento

```bash
npm run dev
```

### 2. Acessar via Localhost

Abra o navegador em `http://localhost:3000`

### 3. Ativar o Editor

- **Botão Lateral**: Clique no botão "✏️ EDITOR" na lateral direita
- **Atalho**: Pressione `Ctrl + E` (Windows/Linux) ou `Cmd + E` (Mac)

### 4. Editar Conteúdo

1. **Passe o mouse** sobre qualquer texto editável (títulos, parágrafos, badges, botões)
2. Elementos editáveis terão uma **borda azul tracejada**
3. **Clique** no elemento para abrir o editor
4. **Edite** o texto no painel lateral
5. Clique em **"✓ Aplicar"** para ver a mudança em tempo real

### 5. Salvar Alterações

- Clique em **"💾 Salvar Alterações"** no rodapé do painel
- Um arquivo JSON será baixado automaticamente
- As alterações também são salvas no `localStorage`

### 6. Resetar Alterações

- Clique no botão **"↺"** para desfazer todas as alterações
- Confirme a ação no alerta

## 📋 Elementos Editáveis

O editor detecta automaticamente:

- **Títulos**: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
- **Parágrafos**: `p` (exceto dentro de botões)
- **Badges**: Elementos com classe `badge`
- **Botões**: Textos dentro de `button span`
- **Listas**: Itens `li`

## 📦 Formato do JSON Exportado

```json
{
  "h1-0": {
    "section": "Hero Section",
    "type": "heading",
    "original": "Cuidado Veterinário",
    "updated": "Cuidado Veterinário Especializado"
  },
  "p-5": {
    "section": "Serviços",
    "type": "paragraph",
    "original": "Atendimento 24 horas",
    "updated": "Atendimento 24 horas por dia, 7 dias por semana"
  }
}
```

## 🎨 Interface do Editor

### Painel Lateral
- **Header**: Título e botão de fechar
- **Área de Edição**: 
  - Localização do elemento (seção + tipo)
  - Texto original (somente leitura)
  - Campo de edição (textarea)
  - Botões Aplicar/Cancelar
- **Footer**: Botões Salvar e Resetar

### Botão Toggle
- Posicionado na lateral direita da tela
- Sempre visível
- Abre/fecha o painel com animação suave

## ⚙️ Configuração Técnica

### Arquivos Criados

```
src/
├── lib/
│   └── content-editor.ts          # Lógica principal do editor
└── components/
    └── dev/
        └── ContentEditorProvider.tsx  # Provider React
```

### Integração no Layout

```tsx
// src/app/layout.tsx
import ContentEditorProvider from "@/components/dev/ContentEditorProvider";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {/* ... conteúdo ... */}
        <ContentEditorProvider />
      </body>
    </html>
  );
}
```

## 🔒 Segurança

O editor **NUNCA** será ativado em produção:

1. ✅ Verifica se hostname é `localhost` ou `127.0.0.1`
2. ✅ Verifica se `NODE_ENV === 'development'`
3. ✅ Não afeta o build de produção
4. ✅ Não adiciona código ao bundle de produção

## 🎯 Casos de Uso

### 1. Ajuste Rápido de Textos
Teste diferentes versões de títulos e CTAs sem editar código.

### 2. Revisão de Conteúdo
Cliente pode revisar e sugerir alterações diretamente no navegador.

### 3. Testes A/B
Compare diferentes versões de textos rapidamente.

### 4. Documentação
Exporte JSON com todas as alterações para documentar mudanças.

## 🚫 Limitações

- ❌ Não edita imagens ou ícones
- ❌ Não altera estilos CSS
- ❌ Não modifica estrutura HTML
- ❌ Não persiste alterações no código-fonte (apenas exporta JSON)
- ❌ Textos muito longos (>500 caracteres) não são detectados

## 🔄 Workflow Recomendado

1. **Editar** conteúdo no navegador
2. **Exportar** JSON com alterações
3. **Revisar** alterações com a equipe
4. **Aplicar** manualmente no código-fonte
5. **Commitar** alterações aprovadas

## 💡 Dicas

- Use `Ctrl/Cmd + E` para abrir/fechar rapidamente
- Elementos com fundo amarelo indicam alterações não salvas
- O localStorage preserva alterações entre reloads
- Teste em diferentes breakpoints (mobile/desktop)

## 🐛 Troubleshooting

### Editor não aparece
- ✅ Verifique se está em `localhost`
- ✅ Verifique se está em modo desenvolvimento (`npm run dev`)
- ✅ Abra o console e procure por "🎨 Content Editor ativado"

### Elemento não é editável
- ✅ Verifique se o texto tem menos de 500 caracteres
- ✅ Verifique se não está dentro de um elemento excluído
- ✅ Recarregue a página para re-escanear elementos

### Alterações não salvam
- ✅ Clique em "✓ Aplicar" antes de salvar
- ✅ Verifique permissões de download do navegador
- ✅ Verifique o localStorage do navegador

## 📚 Recursos Adicionais

- [Documentação Next.js](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

---

**Desenvolvido para facilitar a edição de conteúdo durante o desenvolvimento** 🚀
