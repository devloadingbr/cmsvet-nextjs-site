# 🚀 Como Usar o Content Editor em Outros Projetos

## 📦 O Pacote Está Isolado!

O Content Editor foi extraído para um pacote independente em:

```
packages/nextjs-content-editor/
```

Você pode usar este pacote em **qualquer projeto Next.js**!

---

## 🎯 3 Formas de Instalar

### Opção 1: Copiar Pasta (Mais Simples)

```bash
# 1. Copie a pasta para seu novo projeto
cp -r packages/nextjs-content-editor /caminho/do/novo/projeto/packages/

# 2. No novo projeto, instale como dependência local
cd /caminho/do/novo/projeto
npm install ./packages/nextjs-content-editor
```

### Opção 2: Script Automático

```bash
# 1. Copie o pacote
cp -r packages/nextjs-content-editor /caminho/do/novo/projeto/packages/

# 2. Execute o instalador automático
cd /caminho/do/novo/projeto
chmod +x packages/nextjs-content-editor/install.sh
./packages/nextjs-content-editor/install.sh
```

O script faz tudo automaticamente:
- ✅ Adiciona ao `package.json`
- ✅ Instala dependências
- ✅ Cria API routes
- ✅ Atualiza o layout
- ✅ Pronto para usar!

### Opção 3: Git Submodule (Avançado)

```bash
# 1. Primeiro, crie um repositório Git para o pacote
cd packages/nextjs-content-editor
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/nextjs-content-editor.git
git push -u origin main

# 2. Em cada novo projeto, adicione como submodule
cd /caminho/do/novo/projeto
git submodule add https://github.com/seu-usuario/nextjs-content-editor.git packages/nextjs-content-editor
npm install ./packages/nextjs-content-editor
```

---

## 📋 Setup Manual (Passo a Passo)

Se preferir fazer manualmente:

### 1. Copie o Pacote

```bash
cp -r packages/nextjs-content-editor /seu/novo/projeto/packages/
```

### 2. Adicione ao package.json

```json
{
  "dependencies": {
    "@devloadingbr/nextjs-content-editor": "file:./packages/nextjs-content-editor"
  }
}
```

### 3. Instale

```bash
npm install
```

### 4. Adicione ao Layout

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

### 5. Crie as API Routes

```tsx
// app/api/content-editor/scan/route.ts
export { GET } from '@devloadingbr/nextjs-content-editor/api/scan';
```

```tsx
// app/api/content-editor/save/route.ts
export { POST } from '@devloadingbr/nextjs-content-editor/api/save';
```

### 6. Pronto!

```bash
npm run dev
# Abra http://localhost:3000
# Pressione Ctrl + E
```

---

## 🎨 Estrutura do Pacote

```
packages/nextjs-content-editor/
├── package.json              # Configuração do pacote
├── tsconfig.json             # TypeScript config
├── README.md                 # Documentação principal
├── INSTALL.md                # Guia de instalação
├── QUICK_START.md            # Início rápido
├── LICENSE                   # Licença MIT
├── install.sh                # Script de instalação automática
├── src/
│   ├── index.ts              # Exports principais
│   ├── types.ts              # Tipos TypeScript
│   ├── lib/
│   │   └── ContentEditorAdvanced.ts
│   ├── components/
│   │   └── ContentEditorProvider.tsx
│   └── api/
│       ├── scan/
│       │   └── route.ts
│       └── save/
│           └── route.ts
└── examples/
    ├── basic-setup.tsx
    └── custom-config.tsx
```

---

## 🔧 Customização

### Cores Personalizadas

```tsx
<ContentEditorProvider 
  config={{
    primaryColor: '#YOUR_COLOR',
    accentColor: '#YOUR_ACCENT'
  }}
/>
```

### Diretório Diferente

```tsx
<ContentEditorProvider 
  config={{
    componentsDir: 'app/components'  // Padrão: 'src/components'
  }}
/>
```

### Seletores Customizados

```tsx
<ContentEditorProvider 
  config={{
    customSelectors: ['h1', 'h2', '.custom-class']
  }}
/>
```

---

## 📦 Distribuição

### Opção 1: Repositório Git Privado

```bash
# 1. Crie repo no GitHub/GitLab
cd packages/nextjs-content-editor
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/nextjs-content-editor.git
git push -u origin main

# 2. Em cada projeto
npm install git+https://github.com/seu-usuario/nextjs-content-editor.git
```

### Opção 2: NPM Registry Privado

```bash
# 1. Configure registry privado
npm config set registry https://seu-registry.com

# 2. Publique
cd packages/nextjs-content-editor
npm publish

# 3. Em cada projeto
npm install @devloadingbr/nextjs-content-editor
```

### Opção 3: Monorepo (Recomendado para múltiplos projetos)

```
seu-workspace/
├── packages/
│   └── nextjs-content-editor/
├── projeto-1/
├── projeto-2/
└── projeto-3/
```

```json
// package.json (raiz)
{
  "workspaces": [
    "packages/*",
    "projeto-*"
  ]
}
```

---

## ✅ Checklist de Instalação

Use este checklist em cada novo projeto:

- [ ] Copiar/clonar o pacote
- [ ] Adicionar ao `package.json`
- [ ] Rodar `npm install`
- [ ] Adicionar `<ContentEditorProvider />` no layout
- [ ] Criar `/api/content-editor/scan/route.ts`
- [ ] Criar `/api/content-editor/save/route.ts`
- [ ] Testar com `npm run dev`
- [ ] Pressionar `Ctrl + E` para verificar

---

## 🎯 Projetos Compatíveis

✅ **Funciona em**:
- Next.js 14+
- Next.js 15+
- App Router
- TypeScript
- JavaScript

❌ **Não funciona em**:
- Pages Router (requer adaptação)
- Next.js < 14
- Outros frameworks (React, Vue, etc)

---

## 🐛 Troubleshooting

### "Module not found"

```bash
# Reinstale o pacote
rm -rf node_modules package-lock.json
npm install
```

### "API route not found"

Verifique se criou as rotas:
- `app/api/content-editor/scan/route.ts`
- `app/api/content-editor/save/route.ts`

### Editor não aparece

- ✅ Está em `localhost`?
- ✅ Está em modo dev (`npm run dev`)?
- ✅ Provider foi adicionado ao layout?

---

## 📚 Documentação Completa

Dentro do pacote:
- `README.md` - Documentação principal
- `INSTALL.md` - Guia de instalação detalhado
- `QUICK_START.md` - Início rápido
- `examples/` - Exemplos de uso

---

## 🎉 Pronto!

Agora você pode usar o Content Editor em **todos os seus projetos Next.js**!

### Comandos Rápidos

```bash
# Copiar para novo projeto
cp -r packages/nextjs-content-editor /novo/projeto/packages/

# Instalar
cd /novo/projeto
npm install ./packages/nextjs-content-editor

# Usar
npm run dev
# Ctrl + E
```

---

**Use em quantos projetos quiser!** 🚀

**Lembre-se**: Sempre faça backup antes de editar (`git commit`)
