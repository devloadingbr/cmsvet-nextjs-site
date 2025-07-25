# 🚀 Guia de Deploy - CSM Clínica Veterinária

## 📋 Processo Completo de Deploy

### 1. **CRIAR REPOSITÓRIO NO GITHUB**

```bash
# 1. Crie um novo repositório no GitHub chamado: cmsvet-nextjs-site
# 2. Execute os comandos abaixo no terminal:

git remote add origin https://github.com/SEU_USUARIO/cmsvet-nextjs-site.git
git branch -M main
git push -u origin main
```

### 2. **CONFIGURAR VERCEL** (Site: vercel.com)

#### 2.1 - Criar Projeto na Vercel
1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em "Add New" → "Project"
3. Conecte com GitHub e selecione `cmsvet-nextjs-site`
4. Configure:
   - **Framework**: Next.js (detectado automaticamente)
   - **Root Directory**: deixe vazio
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

#### 2.2 - Configurar Variáveis de Ambiente na Vercel
No painel da Vercel, vá em: **Settings** → **Environment Variables**

```bash
# VARIÁVEIS PÚBLICAS (podem ser vistas no front-end)
NEXT_PUBLIC_CLINIC_NAME = "CSM Clínica Veterinária"
NEXT_PUBLIC_PHONE_PRIMARY = "(41) 3077-0023"
NEXT_PUBLIC_WHATSAPP = "554130770023"
NEXT_PUBLIC_ADDRESS_FULL = "Rua Julio Wischral, 1099 - Uberaba, Curitiba/PR"
NEXT_PUBLIC_STATS_PETS_CARED = "15000"
NEXT_PUBLIC_STATS_YEARS_EXPERIENCE = "7"

# VARIÁVEIS PRIVADAS (servidor apenas)
OPENAI_API_KEY = "sk-sua-chave-openai-aqui"
```

#### 2.3 - Obter IDs da Vercel
Execute no terminal do projeto:
```bash
# Instale a CLI da Vercel
npm i -g vercel

# Faça login
vercel login

# Conecte o projeto
vercel link

# Obtenha os IDs (anote estes valores!)
vercel env ls
```

### 3. **CONFIGURAR SECRETS NO GITHUB**

Vá no seu repositório GitHub → **Settings** → **Secrets and variables** → **Actions**

Clique em "New repository secret" e adicione:

```bash
# SECRETS DA VERCEL (obtidos no passo anterior)
VERCEL_TOKEN = "token-da-vercel"
VERCEL_ORG_ID = "seu-org-id"
VERCEL_PROJECT_ID = "seu-project-id"

# VARIÁVEIS DA APLICAÇÃO
NEXT_PUBLIC_CLINIC_NAME = "CSM Clínica Veterinária"
NEXT_PUBLIC_PHONE_PRIMARY = "(41) 3077-0023"
NEXT_PUBLIC_WHATSAPP = "554130770023"
NEXT_PUBLIC_ADDRESS_FULL = "Rua Julio Wischral, 1099 - Uberaba, Curitiba/PR"
OPENAI_API_KEY = "sk-sua-chave-openai-aqui"
```

### 4. **COMO OBTER O TOKEN DA VERCEL**

1. Acesse [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Clique em "Create Token"
3. Nome: "GitHub Actions Deploy"
4. Escopo: "Full Account"
5. Copie o token gerado

### 5. **TESTANDO O DEPLOY**

Depois de configurar tudo:

```bash
# Faça uma mudança no código
git add .
git commit -m "test: trigger deploy"
git push origin main

# Vá no GitHub → Actions para ver o workflow rodando
# Vá na Vercel para ver o deploy acontecendo
```

## 🔄 **Fluxo Automático**

Depois de configurado:

1. **Push para `main`** → Deploy automático para produção
2. **Pull Request** → Deploy de preview automático
3. **Dependabot** → PRs automáticos para atualizações
4. **Security** → Verificações semanais de segurança

## 🆘 **Troubleshooting**

### Erro: "Build failed"
- Verifique as variáveis de ambiente na Vercel
- Execute `npm run build` localmente para testar

### Erro: "Deployment failed"
- Verifique os secrets no GitHub
- Confirme que o VERCEL_TOKEN está correto

### Erro: "API route not working"
- Verifique se OPENAI_API_KEY está configurado
- Teste a API localmente primeiro

## 📞 **Suporte**

Se algo der errado:
1. Verifique os logs no GitHub Actions
2. Verifique os logs na Vercel
3. Teste localmente com `npm run dev`

---

**🎉 Após configurar tudo, seu site estará online automaticamente!**