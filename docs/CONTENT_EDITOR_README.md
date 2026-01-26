# 📚 Content Editor - Índice da Documentação

Sistema de edição visual que **salva alterações diretamente no código-fonte** do projeto.

---

## 🚀 Início Rápido

**Quer começar a usar agora?**

1. Execute: `npm run dev`
2. Abra: http://localhost:3000
3. Pressione: `Ctrl + E` (ou `Cmd + E`)
4. Clique em qualquer texto e edite!

📖 **Guia completo**: [CONTENT_EDITOR_QUICK_START.md](./CONTENT_EDITOR_QUICK_START.md)

---

## 📖 Documentação Disponível

### Para Usuários

| Documento | Descrição | Quando Usar |
|-----------|-----------|-------------|
| **[CONTENT_EDITOR_QUICK_START.md](./CONTENT_EDITOR_QUICK_START.md)** | Guia rápido (30 segundos) | Primeira vez usando o editor |
| **[CONTENT_EDITOR_ADVANCED.md](./CONTENT_EDITOR_ADVANCED.md)** | Documentação completa | Entender arquitetura e detalhes técnicos |

### Para Desenvolvedores

| Documento | Descrição |
|-----------|-----------|
| **[../packages/nextjs-content-editor/README.md](../packages/nextjs-content-editor/README.md)** | README do pacote NPM |
| **[../packages/nextjs-content-editor/INSTALL.md](../packages/nextjs-content-editor/INSTALL.md)** | Como instalar em outros projetos |
| **[COMO_USAR_EM_OUTROS_PROJETOS.md](./COMO_USAR_EM_OUTROS_PROJETOS.md)** | Reutilizar o editor |

---

## 🎯 Como Funciona (Resumo)

```
┌──────────────────────────────────────────────┐
│  1. NAVEGADOR                                │
│  - Clica em texto                            │
│  - Edita no painel lateral                   │
│  - Preview em tempo real                     │
└──────────────────────────────────────────────┘
                    ↓
┌──────────────────────────────────────────────┐
│  2. API BACKEND                              │
│  - Escaneia arquivos .tsx                    │
│  - Encontra texto no código                  │
│  - Valida permissões                         │
└──────────────────────────────────────────────┘
                    ↓
┌──────────────────────────────────────────────┐
│  3. CÓDIGO-FONTE (.tsx)                      │
│  - Substitui texto antigo → novo             │
│  - Salva arquivo permanentemente             │
│  - Next.js recarrega automaticamente         │
└──────────────────────────────────────────────┘
```

---

## ✅ O Que Pode Editar

- ✅ Títulos (h1, h2, h3, h4, h5, h6)
- ✅ Parágrafos
- ✅ Badges
- ✅ Textos de botões
- ✅ Itens de lista

## ❌ O Que NÃO Pode Editar

- ❌ Imagens
- ❌ Ícones
- ❌ Estilos CSS
- ❌ Código JavaScript

---

## 🔒 Segurança

**O editor NUNCA funciona em produção:**

- ✅ Apenas `localhost` ou `127.0.0.1`
- ✅ Apenas `NODE_ENV === 'development'`
- ✅ Apenas arquivos em `src/components/`
- ✅ Detecta conflitos de edição

---

## 💡 Casos de Uso

### 1. Testes A/B de Títulos
Teste diferentes versões de headlines sem editar código.

### 2. Revisão com Cliente
Compartilhe tela e edite em tempo real durante reuniões.

### 3. Correções Rápidas
Ajuste typos e erros sem abrir editor de código.

### 4. Experimentação
Teste diferentes abordagens de copywriting rapidamente.

---

## ⚠️ Importante

### Sempre faça backup antes de editar:

```bash
git add .
git commit -m "backup antes de editar conteúdo"
```

### Revise alterações após editar:

```bash
git diff
```

### Reverta se necessário:

```bash
git restore .
```

---

## 🐛 Problemas Comuns

### Editor não aparece?
- Verifique se está em `localhost`
- Verifique se rodou `npm run dev`
- Abra console: deve aparecer "🎨 Content Editor Advanced ativado"

### Elemento não é editável?
- Recarregue a página
- Verifique se texto tem menos de 500 caracteres
- Veja se não está em elemento excluído

### Salvamento falha?
- Clique "✓ Aplicar Preview" antes de salvar
- Verifique se arquivo não foi modificado externamente
- Veja console do navegador para erros

---

## 📚 Arquitetura Técnica

### Arquivos Principais

```
src/
├── lib/
│   └── content-editor-advanced.ts    # Lógica principal (688 linhas)
├── components/
│   └── dev/
│       └── ContentEditorProvider.tsx # Provider React
└── app/
    ├── layout.tsx                    # Inclui <ContentEditorProvider />
    └── api/content-editor/
        ├── scan/route.ts             # API: Escaneia arquivos
        └── save/route.ts             # API: Salva alterações
```

---

## 🔄 Workflow Recomendado

1. **Backup**: `git commit -am "backup"`
2. **Edite**: Use o editor visual
3. **Revise**: `git diff`
4. **Decida**:
   - Gostou? `git commit -am "atualiza textos"`
   - Não gostou? `git restore .`

---

## 📞 Suporte

Dúvidas ou problemas?

1. Leia [CONTENT_EDITOR_ADVANCED.md](./CONTENT_EDITOR_ADVANCED.md)
2. Verifique a seção "🐛 Troubleshooting"
3. Veja console do navegador (F12)

---

**Versão Ativa:** Advanced Mode (salva no código)
**Última Atualização:** Janeiro 2026
