# 🚀 Content Editor - Guia Rápido

## ⚡ Início Rápido (30 segundos)

### 1. Inicie o servidor
```bash
npm run dev
```

### 2. Abra no navegador
```
http://localhost:3000
```

### 3. Ative o editor
- Pressione `Ctrl + E` (ou `Cmd + E` no Mac)
- OU clique no botão **"✏️ EDITOR"** na lateral direita

### 4. Edite qualquer texto
1. Passe o mouse sobre textos (aparece borda azul)
2. Clique no texto
3. Edite no painel lateral
4. Clique "✓ Aplicar"

### 5. Salve as alterações
- Clique em **"💾 Salvar Alterações"**
- Arquivo JSON será baixado automaticamente

---

## 🎯 O que você pode editar?

✅ Títulos (h1, h2, h3...)  
✅ Parágrafos  
✅ Badges  
✅ Textos de botões  
✅ Itens de lista  

❌ Imagens  
❌ Ícones  
❌ Estilos CSS  

---

## 🎨 Recursos Principais

| Recurso | Atalho/Ação |
|---------|-------------|
| Abrir/Fechar Editor | `Ctrl + E` ou `Cmd + E` |
| Identificar Editável | Passar mouse (borda azul) |
| Editar Elemento | Clicar no elemento |
| Aplicar Mudança | Botão "✓ Aplicar" |
| Salvar Tudo | Botão "💾 Salvar" |
| Resetar Tudo | Botão "↺" |

---

## 📱 Interface

```
┌─────────────────────────────────────┐
│ ✏️ Content Editor    [×]            │ ← Header
├─────────────────────────────────────┤
│                                     │
│ 📍 Hero Section • heading           │ ← Localização
│                                     │
│ Texto Original:                     │
│ ┌─────────────────────────────────┐ │
│ │ Cuidado Veterinário             │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Editar Texto:                       │
│ ┌─────────────────────────────────┐ │
│ │ Cuidado Veterinário             │ │ ← Campo editável
│ │ Profissional                    │ │
│ └─────────────────────────────────┘ │
│                                     │
│ [✓ Aplicar]  [✕]                   │
│                                     │
├─────────────────────────────────────┤
│ [💾 Salvar Alterações]  [↺]        │ ← Footer
└─────────────────────────────────────┘
```

---

## 💾 Formato do JSON Exportado

```json
{
  "h1-0": {
    "section": "Hero Section",
    "type": "heading",
    "original": "Texto Original",
    "updated": "Texto Atualizado"
  }
}
```

---

## 🔥 Dicas Profissionais

1. **Teste Rápido de Títulos**: Experimente diferentes versões sem editar código
2. **Revisão com Cliente**: Compartilhe tela e edite em tempo real
3. **Documentação**: Exporte JSON para registrar todas as mudanças
4. **Backup Automático**: Alterações ficam salvas no localStorage

---

## ⚠️ Importante

- ✅ Funciona **APENAS** em localhost
- ✅ Funciona **APENAS** em modo desenvolvimento
- ❌ **NUNCA** ativa em produção
- ❌ Não modifica arquivos do código-fonte (apenas exporta JSON)

---

## 🐛 Problemas?

**Editor não aparece?**
- Verifique se está em `http://localhost:3000`
- Verifique se rodou `npm run dev`

**Elemento não editável?**
- Recarregue a página
- Verifique se o texto tem menos de 500 caracteres

**Alterações não salvam?**
- Clique em "✓ Aplicar" antes de salvar
- Verifique permissões de download

---

## 📚 Documentação Completa

Ver: `docs/CONTENT_EDITOR.md`

---

**Pronto para editar! 🎨**
