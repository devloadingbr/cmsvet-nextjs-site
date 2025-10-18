#!/bin/bash

# 🎨 Next.js Content Editor - Script de Instalação Automática
# Instala o Content Editor em um projeto Next.js existente

set -e

echo "🎨 Next.js Content Editor - Instalação Automática"
echo "=================================================="
echo ""

# Verifica se está em um projeto Next.js
if [ ! -f "package.json" ]; then
    echo "❌ Erro: package.json não encontrado!"
    echo "Execute este script na raiz do seu projeto Next.js"
    exit 1
fi

if ! grep -q "next" package.json; then
    echo "⚠️  Aviso: Este não parece ser um projeto Next.js"
    read -p "Deseja continuar mesmo assim? (s/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Ss]$ ]]; then
        exit 1
    fi
fi

echo "✅ Projeto Next.js detectado"
echo ""

# Pergunta o caminho de origem do pacote
echo "📦 De onde você quer instalar o Content Editor?"
echo "1) Copiar de outro projeto local"
echo "2) Clonar do Git"
echo "3) Instalar do NPM (quando disponível)"
read -p "Escolha (1-3): " choice

case $choice in
    1)
        read -p "Caminho completo do pacote: " source_path
        if [ ! -d "$source_path" ]; then
            echo "❌ Erro: Diretório não encontrado: $source_path"
            exit 1
        fi
        
        echo "📋 Copiando pacote..."
        mkdir -p packages
        cp -r "$source_path" packages/nextjs-content-editor
        echo "✅ Pacote copiado"
        ;;
    2)
        read -p "URL do repositório Git: " git_url
        echo "📥 Clonando repositório..."
        mkdir -p packages
        git clone "$git_url" packages/nextjs-content-editor
        echo "✅ Repositório clonado"
        ;;
    3)
        echo "📥 Instalando do NPM..."
        npm install @devloadingbr/nextjs-content-editor
        echo "✅ Pacote instalado"
        ;;
    *)
        echo "❌ Opção inválida"
        exit 1
        ;;
esac

echo ""
echo "📝 Atualizando package.json..."

# Adiciona dependência ao package.json se for instalação local
if [ "$choice" != "3" ]; then
    # Backup do package.json
    cp package.json package.json.backup
    
    # Adiciona dependência usando Node.js
    node -e "
    const fs = require('fs');
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    pkg.dependencies = pkg.dependencies || {};
    pkg.dependencies['@devloadingbr/nextjs-content-editor'] = 'file:./packages/nextjs-content-editor';
    fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
    "
    
    echo "✅ package.json atualizado"
    echo ""
    echo "📦 Instalando dependências..."
    npm install
fi

echo ""
echo "📁 Criando estrutura de arquivos..."

# Cria diretório de API routes
mkdir -p app/api/content-editor/scan
mkdir -p app/api/content-editor/save

# Cria API route de scan
cat > app/api/content-editor/scan/route.ts << 'EOF'
/**
 * API Route: Content Editor - Scan
 * Busca textos no código-fonte
 */
export { GET } from '@devloadingbr/nextjs-content-editor/api/scan';
EOF

# Cria API route de save
cat > app/api/content-editor/save/route.ts << 'EOF'
/**
 * API Route: Content Editor - Save
 * Salva alterações no código-fonte
 */
export { POST } from '@devloadingbr/nextjs-content-editor/api/save';
EOF

echo "✅ API routes criadas"
echo ""

# Pergunta se quer adicionar ao layout automaticamente
read -p "Adicionar ContentEditorProvider ao layout automaticamente? (S/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Nn]$ ]]; then
    if [ -f "app/layout.tsx" ]; then
        echo "📝 Atualizando app/layout.tsx..."
        
        # Backup do layout
        cp app/layout.tsx app/layout.tsx.backup
        
        # Adiciona import (se não existir)
        if ! grep -q "ContentEditorProvider" app/layout.tsx; then
            # Adiciona import após os outros imports
            sed -i "/^import/a import { ContentEditorProvider } from '@devloadingbr/nextjs-content-editor';" app/layout.tsx
            
            # Adiciona componente antes do </body>
            sed -i 's|</body>|        <ContentEditorProvider />\n      </body>|' app/layout.tsx
            
            echo "✅ Layout atualizado"
        else
            echo "ℹ️  ContentEditorProvider já existe no layout"
        fi
    else
        echo "⚠️  app/layout.tsx não encontrado"
        echo "Adicione manualmente:"
        echo ""
        echo "import { ContentEditorProvider } from '@devloadingbr/nextjs-content-editor';"
        echo ""
        echo "<ContentEditorProvider />"
    fi
fi

echo ""
echo "🎉 Instalação concluída!"
echo ""
echo "📋 Próximos passos:"
echo "1. Execute: npm run dev"
echo "2. Abra: http://localhost:3000"
echo "3. Pressione: Ctrl + E (ou Cmd + E)"
echo ""
echo "📚 Documentação:"
echo "- README: packages/nextjs-content-editor/README.md"
echo "- Guia: packages/nextjs-content-editor/INSTALL.md"
echo ""
echo "⚠️  IMPORTANTE: Esta ferramenta modifica código-fonte!"
echo "Sempre faça backup antes de usar: git commit -am 'backup'"
echo ""
echo "✨ Bom uso!"
