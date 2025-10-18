# 🎨 Next.js Content Editor

Editor visual de conteúdo que salva alterações **diretamente no código-fonte** do seu projeto Next.js.

⚠️ **ATENÇÃO**: Esta ferramenta modifica arquivos `.tsx`/`.jsx` reais. Use apenas em desenvolvimento!

## 🚀 Instalação

### Opção 1: NPM (quando publicado)
```bash
npm install @devloadingbr/nextjs-content-editor
```

### Opção 2: Copiar para seu projeto

1. Copie a pasta `packages/nextjs-content-editor` para seu projeto
2. Instale como dependência local:

```bash
# No seu package.json
{
  "dependencies": {
    "@devloadingbr/nextjs-content-editor": "file:./packages/nextjs-content-editor"
  }
}
```

```bash
npm install
```

## 📦 Setup Rápido

### 1. Adicione o Provider no Layout

```tsx
// app/layout.tsx
import { ContentEditorProvider } from '@devloadingbr/nextjs-content-editor';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <ContentEditorProvider />
      </body>
    </html>
  );
}
```

### 2. Crie as API Routes

```tsx
// app/api/content-editor/scan/route.ts
export { GET } from '@devloadingbr/nextjs-content-editor/api/scan';

// app/api/content-editor/save/route.ts
export { POST } from '@devloadingbr/nextjs-content-editor/api/save';
```

### 3. Inicie o servidor

```bash
npm run dev
```

### 4. Use o Editor

- Abra `http://localhost:3000`
- Pressione `Ctrl + E` (ou `Cmd + E`)
- Clique em qualquer texto para editar
- Salve diretamente no código!

## 🎯 Como Funciona

```
1. Clique em texto → Abre editor
2. Edite → Preview em tempo real
3. Salve → Busca no código-fonte
4. Modifica arquivo .tsx
5. Recarrega página
6. ✅ Alteração permanente!
```

## ⚙️ Configuração (Opcional)

```tsx
// app/layout.tsx
import { ContentEditorProvider } from '@devloadingbr/nextjs-content-editor';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <ContentEditorProvider 
          config={{
            componentsDir: 'src/components',  // Padrão
            primaryColor: '#1E5AA8',           // Cor do editor
            accentColor: '#F2B749',            // Cor de destaque
            debug: false                       // Modo debug
          }}
        />
      </body>
    </html>
  );
}
```

## 🔒 Segurança

✅ Ativa **APENAS** em:
- `localhost` ou `127.0.0.1`
- `NODE_ENV === 'development'`

✅ Restrições:
- Edita apenas arquivos em `src/components/`
- Valida permissões
- Detecta conflitos

❌ **NUNCA** ativa em produção!

## 📋 O que Pode Editar

✅ **Suportado**:
- Títulos (h1, h2, h3, h4, h5, h6)
- Parágrafos
- Badges
- Textos de botões
- Itens de lista

❌ **Não Suportado**:
- Imagens
- Ícones
- Estilos CSS
- Código JavaScript

## 🎨 Interface

- Painel lateral moderno
- Preview em tempo real
- Status de salvamento
- Feedback visual
- Atalho de teclado (`Ctrl/Cmd + E`)

## ⚠️ Avisos Importantes

1. **Sempre faça backup antes de usar**:
   ```bash
   git add .
   git commit -m "backup antes de editar"
   ```

2. **Revise alterações**:
   ```bash
   git diff
   ```

3. **Reverta se necessário**:
   ```bash
   git restore .
   ```

## 🔄 Workflow Recomendado

```bash
# 1. Backup
git commit -am "backup"

# 2. Edite no navegador
# (use o editor visual)

# 3. Revise
git diff

# 4. Commit ou reverta
git commit -am "atualiza conteúdo"
# OU
git restore .
```

## 📚 API

### Componentes

```tsx
import { ContentEditorProvider } from '@devloadingbr/nextjs-content-editor';

<ContentEditorProvider config={...} />
```

### Tipos

```tsx
import type { 
  EditableContent, 
  EditorConfig,
  ScanResult,
  SaveRequest,
  SaveResponse
} from '@devloadingbr/nextjs-content-editor';
```

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
npm install

# Build
npm run build

# Watch mode
npm run dev
```

## 📄 Licença

MIT

## 👨‍💻 Autor

**DevLoading.br**

## 🤝 Contribuindo

Contribuições são bem-vindas! Abra uma issue ou PR.

## 🐛 Problemas?

Abra uma issue em: https://github.com/devloadingbr/nextjs-content-editor/issues

---

**USE COM RESPONSABILIDADE - MODIFICA CÓDIGO REAL!** 🔒
