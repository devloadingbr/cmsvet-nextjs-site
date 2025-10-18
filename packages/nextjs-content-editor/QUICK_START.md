# ⚡ Quick Start - 5 Minutos

## 🚀 Instalação Rápida

### 1. Copie o pacote para seu projeto

```bash
cp -r /caminho/do/cmsvet/packages/nextjs-content-editor ./packages/
```

### 2. Instale

```bash
# Adicione ao package.json
npm install ./packages/nextjs-content-editor

# OU use o script automático
chmod +x packages/nextjs-content-editor/install.sh
./packages/nextjs-content-editor/install.sh
```

### 3. Adicione ao Layout

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

### 4. Crie as APIs

```tsx
// app/api/content-editor/scan/route.ts
export { GET } from '@devloadingbr/nextjs-content-editor/api/scan';

// app/api/content-editor/save/route.ts
export { POST } from '@devloadingbr/nextjs-content-editor/api/save';
```

### 5. Use!

```bash
npm run dev
```

Abra `http://localhost:3000` e pressione `Ctrl + E`

---

## 🎯 Uso Básico

1. **Abrir Editor**: `Ctrl + E` (ou `Cmd + E`)
2. **Clicar em texto**: Qualquer título, parágrafo, badge, botão
3. **Editar**: Digite o novo texto
4. **Preview**: Clique "✓ Aplicar Preview"
5. **Salvar**: Clique "💾 Salvar no Código-Fonte"
6. **Pronto**: Página recarrega com alteração permanente!

---

## ⚙️ Customização

```tsx
<ContentEditorProvider 
  config={{
    primaryColor: '#1E5AA8',
    accentColor: '#F2B749',
    componentsDir: 'src/components',
    debug: false
  }}
/>
```

---

## ⚠️ Importante

**Sempre faça backup antes de usar:**

```bash
git add .
git commit -m "backup antes de editar"
```

**Revise alterações:**

```bash
git diff
```

**Reverta se necessário:**

```bash
git restore .
```

---

## 📚 Mais Informações

- **README completo**: `README.md`
- **Guia de instalação**: `INSTALL.md`
- **Documentação avançada**: Ver projeto original

---

**Pronto em 5 minutos!** 🎉
