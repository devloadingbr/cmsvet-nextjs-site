# 📦 Guia de Instalação - Next.js Content Editor

## 🎯 Instalação em Outros Projetos

### Método 1: Copiar Pasta (Recomendado para uso pessoal)

#### 1. Copie a pasta completa

```bash
# Do projeto atual
cp -r packages/nextjs-content-editor /caminho/do/seu/projeto/packages/

# OU crie um repositório Git separado
cd packages/nextjs-content-editor
git init
git add .
git commit -m "Initial commit"
```

#### 2. No seu projeto Next.js, instale como dependência local

```json
// package.json do seu projeto
{
  "dependencies": {
    "@devloadingbr/nextjs-content-editor": "file:./packages/nextjs-content-editor"
  }
}
```

```bash
npm install
```

#### 3. Adicione o Provider

```tsx
// app/layout.tsx
import { ContentEditorProvider } from '@devloadingbr/nextjs-content-editor';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <ContentEditorProvider />
      </body>
    </html>
  );
}
```

#### 4. Crie as API Routes

```tsx
// app/api/content-editor/scan/route.ts
export { GET } from '@devloadingbr/nextjs-content-editor/api/scan';
```

```tsx
// app/api/content-editor/save/route.ts
export { POST } from '@devloadingbr/nextjs-content-editor/api/save';
```

#### 5. Pronto! 🎉

```bash
npm run dev
# Abra http://localhost:3000
# Pressione Ctrl + E
```

---

### Método 2: Git Submodule (Para múltiplos projetos)

#### 1. Crie um repositório Git para o editor

```bash
cd packages/nextjs-content-editor
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/nextjs-content-editor.git
git push -u origin main
```

#### 2. Em cada projeto, adicione como submodule

```bash
cd /caminho/do/seu/projeto
git submodule add https://github.com/seu-usuario/nextjs-content-editor.git packages/nextjs-content-editor
```

#### 3. Instale e use (mesmo processo do Método 1, passos 2-5)

---

### Método 3: NPM Package (Para distribuição pública)

#### 1. Prepare o pacote

```bash
cd packages/nextjs-content-editor
npm run build
```

#### 2. Publique no NPM

```bash
npm login
npm publish --access public
```

#### 3. Instale em qualquer projeto

```bash
npm install @devloadingbr/nextjs-content-editor
```

---

## 🔧 Estrutura de Arquivos Necessária

Seu projeto precisa ter esta estrutura:

```
seu-projeto/
├── app/
│   ├── layout.tsx                          # Adicione o Provider aqui
│   └── api/
│       └── content-editor/
│           ├── scan/
│           │   └── route.ts                # API de busca
│           └── save/
│               └── route.ts                # API de salvamento
├── src/
│   └── components/                         # Seus componentes editáveis
└── package.json
```

---

## ✅ Checklist de Instalação

- [ ] Copiar/instalar o pacote
- [ ] Adicionar no `package.json`
- [ ] Rodar `npm install`
- [ ] Adicionar `<ContentEditorProvider />` no layout
- [ ] Criar API route `/api/content-editor/scan/route.ts`
- [ ] Criar API route `/api/content-editor/save/route.ts`
- [ ] Rodar `npm run dev`
- [ ] Testar com `Ctrl + E`

---

## 🎨 Customização

### Cores Personalizadas

```tsx
<ContentEditorProvider 
  config={{
    primaryColor: '#YOUR_COLOR',
    accentColor: '#YOUR_ACCENT'
  }}
/>
```

### Diretório Customizado

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
    customSelectors: [
      'h1', 'h2', 'h3',
      '.custom-class',
      '[data-editable]'
    ]
  }}
/>
```

---

## 🐛 Troubleshooting

### Editor não aparece

✅ Verifique se está em `localhost`
✅ Verifique se está em modo dev (`npm run dev`)
✅ Abra o console e procure por erros

### Erro ao salvar

✅ Verifique se as API routes foram criadas
✅ Verifique permissões de escrita
✅ Veja logs no terminal

### Texto não encontrado

✅ Verifique se o texto está em `src/components/`
✅ Recarregue a página
✅ Verifique se o texto tem menos de 500 caracteres

---

## 📞 Suporte

- Issues: https://github.com/devloadingbr/nextjs-content-editor/issues
- Email: suporte@devloading.br

---

**Pronto para usar em todos os seus projetos Next.js!** 🚀
