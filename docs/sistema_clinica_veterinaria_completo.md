# Sistema Completo de Gestão para Clínicas Veterinárias

## 🚀 Visão Geral do Sistema

Sistema web completo dividido em **3 áreas principais**, cada uma com propósito específico e público-alvo definido. Foco em funcionalidades essenciais para operação completa de uma clínica veterinária moderna, desenvolvido para atender desde pequenas clínicas até estabelecimentos de médio porte.

---

## 📋 Índice

1. [Estrutura Geral do Sistema](#estrutura-geral-do-sistema)
2. [MVP - Funcionalidades Principais](#mvp---funcionalidades-principais)
3. [Stack Tecnológica](#stack-tecnológica)
4. [Modelos de Banco de Dados](#modelos-de-banco-de-dados)
5. [Perfis de Usuário](#perfis-de-usuário)
6. [Fluxos de Trabalho](#fluxos-de-trabalho)
7. [Considerações de Implementação](#considerações-de-implementação)

---

## Estrutura Geral do Sistema

### 🌐 Site Público
O site institucional serve como vitrine digital da clínica, apresentando serviços, equipe e facilitando o primeiro contato com clientes. Inclui formulários de agendamento, informações de contato e área de login para o portal do cliente.

### 🏥 Área Administrativa  
Centro de controle completo da clínica, dividido em módulos específicos para cada tipo de usuário. Permite gestão de conteúdo do site, controle de agendamentos, prontuários eletrônicos e administração de recursos humanos.

### 👤 Portal do Cliente
Área restrita onde tutores acessam informações dos seus pets, incluindo histórico médico, exames, documentos e agendamento de consultas.

---

## MVP - Funcionalidades Principais

### 🌐 ÁREA 1: Site Público

#### 📱 **Páginas Principais**
- **🏠 Home** - Apresentação, serviços destaque, CTA agendamento
- **👥 Sobre** - História, missão, equipe veterinária
- **🏥 Serviços** - Consultas, cirurgias, exames, emergências
- **👨‍⚕️ Equipe** - Perfis dos veterinários, especialidades
- **📍 Contato** - Mapa, telefones, formulário, horários
- **📝 Blog** - Artigos sobre cuidados pet (opcional MVP)

#### 🎨 **Recursos de Design**
- **Responsivo completo** - Mobile-first design
- **Tema customizável** - Cores, logo, identidade visual
- **Animações sutis** - Scroll reveals, hover effects
- **Galeria de fotos** - Clínica, equipe, pacientes

#### 📊 **Funcionalidades**
- **Agendamento online** - Formulário integrado
- **WhatsApp direto** - Botão flutuante
- **Depoimentos** - Avaliações de clientes
- **SEO otimizado** - Meta tags, structured data

### 👤 ÁREA 2: Portal do Cliente

#### 🔐 **Autenticação**
- **Login/Registro** - E-mail + senha
- **Recuperação de senha** - Via e-mail
- **Perfil do tutor** - Dados pessoais, endereço

#### 🐾 **Gestão de Pets**
- **Meus Pets** - Lista com fotos, dados básicos
- **Cadastro de Pet** - Formulário completo
- **Histórico Médico** - Timeline de consultas
- **Carteira de Vacinação** - Digital com lembretes

#### 📅 **Agendamentos**
- **Agendar Consulta** - Calendário disponível
- **Meus Agendamentos** - Próximos e histórico
- **Reagendar/Cancelar** - Autoatendimento
- **Lembretes** - Notificações automáticas

#### 📄 **Documentos**
- **Exames** - Download de resultados
- **Receitas** - Prescrições médicas
- **Atestados** - Documentos oficiais
- **Relatórios** - Laudos especializados

#### 💬 **Comunicação**
- **Chat com Clínica** - Dúvidas e suporte
- **Notificações** - Resultados, lembretes
- **Avaliações** - Feedback pós-consulta

### 🏥 ÁREA 3: Painel Administrativo

#### 👥 **Gestão de Usuários**
- **Funcionários** - Cadastro, perfis, permissões
- **Clientes** - Base de tutores e pets
- **Níveis de Acesso** - Admin, veterinário, recepcionista

#### 📊 **Dashboard Principal**
- **Resumo do Dia** - Consultas, receita, estatísticas
- **Agenda Visual** - Calendário com status
- **Métricas Rápidas** - KPIs importantes
- **Ações Rápidas** - Shortcuts para tarefas

#### 📅 **Agendamentos**
- **Calendário Completo** - Visão mensal/semanal/diária
- **Gestão de Horários** - Disponibilidade veterinários
- **Lista de Espera** - Controle de cancelamentos
- **Relatórios** - Ocupação, no-show, receita

#### 🩺 **Atendimento Clínico**
- **Prontuário Eletrônico** - Histórico completo
- **Consultas** - Registro de atendimentos
- **Prescrições** - Receituário digital
- **Solicitação de Exames** - Pedidos e resultados

#### 📁 **Gestão de Documentos**
- **Upload de Exames** - Resultados para clientes
- **Geração de Atestados** - Templates personalizados
- **Organização** - Por pet, tipo, data
- **Compartilhamento** - Acesso controlado

### 🎨 Personalização da Clínica

#### 🖌️ **Identidade Visual**
- **Logo personalizado** - Upload e posicionamento
- **Cores da marca** - Paleta customizável
- **Tipografia** - Fontes da identidade
- **Favicon** - Ícone do navegador

#### 📝 **Conteúdo Editável**
- **Textos das páginas** - Editor visual simples
- **Informações básicas** - Nome, endereço, telefones
- **Serviços oferecidos** - Lista personalizada
- **Horários de funcionamento** - Configuração flexível

#### 📸 **Mídia**
- **Galeria de fotos** - Clínica, equipe, instalações
- **Vídeos institucionais** - Apresentação da clínica
- **Banners promocionais** - Campanhas sazonais

### 📊 Analytics e Marketing

#### 📈 **Métricas do Site**
- **Visitantes únicos** - Tráfego mensal
- **Páginas mais visitadas** - Comportamento do usuário
- **Conversões** - Agendamentos realizados
- **Origem do tráfego** - Canais de aquisição

#### 📱 **Marketing Digital**
- **SEO básico** - Meta tags, sitemap
- **Integração Google Analytics** - Tracking completo
- **Pixel do Facebook** - Campanhas pagas
- **WhatsApp Business** - Integração direta

#### 📊 **Relatórios Operacionais**
- **Ocupação da agenda** - Taxa de utilização
- **Receita por período** - Mensal, semanal
- **Clientes ativos** - Retenção e frequência
- **Serviços mais procurados** - Demanda por tipo

---

## Stack Tecnológica

### 🎯 Filosofia da Stack
Stack minimalista e moderna, focada em produtividade e performance. Cada biblioteca tem um propósito específico e essencial para o projeto. Zero dependências desnecessárias, máxima eficiência.

### 🔧 Stack Principal

#### ⚛️ **Frontend Framework**
- **Next.js 15** - Framework React com SSR, SSG e otimizações automáticas
- **React 19** - Biblioteca base para interfaces reativas
- **TypeScript** - Tipagem estática para maior segurança

#### 🎨 **UI e Styling**
- **Tailwind CSS v3** - Framework CSS utilitário para estilização rápida
- **shadcn/ui** - Componentes React pré-construídos e customizáveis
- **Lucide React** - Ícones modernos e consistentes
- **Magic UI** - Componentes animados e interativos premium

#### 🗄️ **Backend e Banco de Dados**
- **Supabase** - Backend-as-a-Service com PostgreSQL, auth e realtime
- **Supabase Auth** - Sistema de autenticação integrado
- **Supabase Storage** - Armazenamento de arquivos (exames, documentos)

#### 🔄 **Gerenciamento de Estado**
- **Zustand** - Estado global leve e simples
- **TanStack Query** - Cache e sincronização de dados do servidor
- **React Hook Form** - Formulários performáticos com validação

#### ✅ **Validação e Tipagem**
- **Zod** - Schema validation para TypeScript
- **@hookform/resolvers** - Integração Zod + React Hook Form

### 📦 Bibliotecas Essenciais

#### 🔐 **Autenticação e Segurança**
```bash
@supabase/supabase-js          # Cliente Supabase
@supabase/auth-helpers-nextjs  # Helpers de auth para Next.js
bcryptjs                       # Hash de senhas (backup)
```

#### 📊 **Manipulação de Dados**
```bash
@tanstack/react-query         # Server state management
@tanstack/react-table         # Tabelas avançadas
date-fns                      # Manipulação de datas
```

#### 📝 **Formulários e Validação**
```bash
react-hook-form               # Formulários performáticos
@hookform/resolvers           # Resolvers para validação
zod                          # Schema validation
```

#### 🎨 **UI/UX Avançado**
```bash
@radix-ui/react-*            # Primitivos UI (já vem com shadcn)
framer-motion                # Animações suaves
cmdk                         # Command palette
sonner                       # Notificações toast
```

#### 📱 **Responsividade e PWA**
```bash
next-pwa                     # Progressive Web App
@tailwindcss/forms          # Estilos de formulário
@tailwindcss/typography     # Tipografia rica
```

#### 🛠️ **Utilitários**
```bash
clsx                         # Conditional class names
tailwind-merge              # Merge classes do Tailwind
class-variance-authority    # Variantes de componentes
```

### 🏗️ Estrutura do Projeto

#### 📁 **Organização de Pastas**
```
src/
├── app/                    # App Router Next.js 15
│   ├── (auth)/            # Rotas de autenticação
│   ├── (dashboard)/       # Área administrativa
│   ├── (public)/          # Site público
│   └── api/               # API routes
├── components/            # Componentes reutilizáveis
│   ├── ui/                # shadcn/ui components
│   ├── forms/             # Formulários específicos
│   └── layout/            # Layout components
├── lib/                   # Configurações e utilitários
│   ├── supabase/          # Cliente e tipos Supabase
│   ├── validations/       # Schemas Zod
│   └── utils/             # Funções utilitárias
├── hooks/                 # Custom hooks
├── stores/                # Zustand stores
├── types/                 # Tipos TypeScript
└── styles/                # Estilos globais
```

#### 🔧 **Configurações Principais**

**package.json dependencies:**
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@supabase/supabase-js": "^2.39.0",
    "@supabase/auth-helpers-nextjs": "^0.8.0",
    "@tanstack/react-query": "^5.0.0",
    "@tanstack/react-table": "^8.0.0",
    "react-hook-form": "^7.48.0",
    "@hookform/resolvers": "^3.3.0",
    "zod": "^3.22.0",
    "zustand": "^4.4.0",
    "lucide-react": "^0.263.0",
    "framer-motion": "^10.16.0",
    "date-fns": "^2.30.0",
    "sonner": "^1.2.0",
    "cmdk": "^0.2.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0",
    "class-variance-authority": "^0.7.0"
  }
}
```

### 🗄️ Arquitetura Supabase

#### 📊 **Configuração do Banco**
```sql
-- Habilitando RLS (Row Level Security)
ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE pets ENABLE ROW LEVEL SECURITY;
ALTER TABLE agendamentos ENABLE ROW LEVEL SECURITY;
```

#### 🔐 **Políticas de Segurança**
- **Tutores:** Acesso apenas aos próprios pets
- **Veterinários:** Acesso aos pacientes atribuídos
- **Admins:** Acesso total controlado
- **Recepcionistas:** Acesso limitado a agendamentos

#### 📡 **Realtime Features**
- **Agendamentos:** Atualizações em tempo real
- **Notificações:** Sistema de mensagens instantâneas
- **Status:** Mudanças de status de consultas

---

## Modelos de Banco de Dados

### 🎯 Visão Geral da Arquitetura
O banco de dados foi projetado para ser robusto, escalável e eficiente, seguindo as melhores práticas de normalização. A estrutura suporta desde pequenas clínicas até estabelecimentos de médio porte, com relacionamentos bem definidos que garantem integridade e performance.

### 👥 Módulo de Usuários e Autenticação

#### 🔐 Tabela: `usuarios`
**Propósito:** Armazena credenciais e informações básicas de todos os usuários do sistema administrativo.

**Campos principais:**
- 🆔 `id` (UUID, PK) - Identificador único
- 📧 `email` (VARCHAR(255), UNIQUE) - Login do usuário  
- 🔒 `senha` (VARCHAR(255)) - Hash da senha
- 👤 `nome` (VARCHAR(255)) - Nome completo
- 📱 `telefone` (VARCHAR(20)) - Contato telefônico
- 🏷️ `tipo` (ENUM) - admin, veterinario, recepcionista, gestor
- ✅ `ativo` (BOOLEAN) - Status da conta
- 🕐 `ultimo_login` (TIMESTAMP) - Controle de acesso
- 📅 `criado_em` (TIMESTAMP) - Data de criação
- 🔄 `atualizado_em` (TIMESTAMP) - Última modificação

#### 🏠 Tabela: `tutores`
**Propósito:** Cadastro dos donos de animais com acesso ao portal do cliente.

**Campos principais:**
- 🆔 `id` (UUID, PK)
- 👤 `nome` (VARCHAR(255)) - Nome completo
- 📧 `email` (VARCHAR(255), UNIQUE) - Login e comunicação
- 📱 `telefone` (VARCHAR(20)) - Contato principal
- 📄 `cpf` (VARCHAR(14)) - Documento de identificação
- 🎂 `data_nascimento` (DATE) - Para relatórios demográficos
- 🏠 `endereco_completo` (TEXT) - Endereço formatado
- ✅ `ativo` (BOOLEAN) - Status da conta
- 📅 `criado_em` / `atualizado_em` (TIMESTAMP)

#### 👨‍⚕️ Tabela: `funcionarios`
**Propósito:** Dados específicos da equipe da clínica, complementando a tabela usuarios.

**Campos principais:**
- 🆔 `id` (UUID, PK)
- 🔗 `usuario_id` (UUID, FK → usuarios.id) - Referência ao login
- 🏥 `crmv` (VARCHAR(20)) - Registro veterinário
- 🎯 `especialidades` (JSON) - Array de especializações
- ⏰ `horario_trabalho` (JSON) - Disponibilidade semanal
- 📅 `data_admissao` (DATE) - Início na clínica
- 💰 `salario` (DECIMAL(10,2)) - Informação administrativa
- 📅 `criado_em` / `atualizado_em` (TIMESTAMP)

### 🐾 Módulo de Animais e Tutores

#### 🐕 Tabela: `pets`
**Propósito:** Cadastro completo dos animais atendidos na clínica.

**Campos principais:**
- 🆔 `id` (UUID, PK)
- 🏷️ `nome` (VARCHAR(100)) - Nome do animal
- 🦮 `especie` (ENUM) - cao, gato, passaro, roedor, reptil, outro
- 🐕‍🦺 `raca` (VARCHAR(100)) - Raça específica
- 🎂 `idade` (INT) - Idade em anos
- ⚖️ `peso` (DECIMAL(5,2)) - Peso atual em kg
- ⚧️ `sexo` (ENUM) - macho, femea
- ✂️ `castrado` (BOOLEAN) - Status reprodutivo
- 🔗 `tutor_id` (UUID, FK → tutores.id) - Dono responsável
- 💾 `microchip` (VARCHAR(50)) - Identificação eletrônica
- 📝 `observacoes` (TEXT) - Notas especiais sobre o animal
- 📸 `foto_url` (VARCHAR(500)) - Link da imagem
- ✅ `ativo` (BOOLEAN) - Se ainda é paciente
- 📅 `criado_em` / `atualizado_em` (TIMESTAMP)

### 📅 Módulo de Agendamentos e Consultas

#### 🗓️ Tabela: `agendamentos`
**Propósito:** Controla toda a agenda da clínica e disponibilidade dos veterinários.

**Campos principais:**
- 🆔 `id` (UUID, PK)
- ⏰ `data_hora` (TIMESTAMP) - Momento da consulta
- ⌛ `duracao` (INT) - Duração em minutos
- 🏥 `tipo_servico` (ENUM) - consulta, cirurgia, vacinacao, exame, emergencia, retorno
- 📊 `status` (ENUM) - agendado, em_andamento, concluido, cancelado, falta
- 🔗 `pet_id` (UUID, FK → pets.id) - Animal a ser atendido
- 🔗 `veterinario_id` (UUID, FK → funcionarios.id) - Profissional responsável
- 📝 `observacoes` (TEXT) - Notas do agendamento
- 💰 `valor` (DECIMAL(10,2)) - Preço do serviço
- 📅 `criado_em` / `atualizado_em` (TIMESTAMP)

#### 🩺 Tabela: `consultas`
**Propósito:** Registro detalhado de cada atendimento realizado.

**Campos principais:**
- 🆔 `id` (UUID, PK)
- 🔗 `agendamento_id` (UUID, FK → agendamentos.id) - Agendamento relacionado
- 📋 `anamnese` (TEXT) - História clínica detalhada
- 👁️ `exame_fisico` (TEXT) - Observações do exame físico
- 🎯 `diagnostico` (TEXT) - Conclusão diagnóstica
- 💊 `tratamento` (TEXT) - Conduta médica adotada
- 📝 `observacoes` (TEXT) - Notas adicionais
- 📅 `proximo_retorno` (DATE) - Sugestão de retorno
- ⚖️ `peso_consulta` (DECIMAL(5,2)) - Peso no momento
- 📅 `criado_em` / `atualizado_em` (TIMESTAMP)

### 🔬 Módulo de Exames e Documentos

#### 🧪 Tabela: `exames`
**Propósito:** Controle completo de exames solicitados e resultados.

**Campos principais:**
- 🆔 `id` (UUID, PK)
- 🔗 `consulta_id` (UUID, FK → consultas.id) - Consulta que originou
- 🏷️ `tipo_exame` (VARCHAR(255)) - Tipo de exame solicitado
- 📅 `data_solicitacao` (TIMESTAMP) - Quando foi pedido
- 📅 `data_realizacao` (TIMESTAMP) - Quando foi executado
- 📄 `resultado` (TEXT) - Laudo textual detalhado
- 📎 `arquivos` (JSON) - Array de URLs dos arquivos
- 🔗 `veterinario_solicitante` (UUID, FK → funcionarios.id) - Quem solicitou
- 🏥 `laboratorio` (VARCHAR(255)) - Local de realização
- 💰 `valor` (DECIMAL(10,2)) - Custo do exame
- 📊 `status` (ENUM) - solicitado, em_andamento, concluido, cancelado
- 📅 `criado_em` / `atualizado_em` (TIMESTAMP)

#### 💊 Tabela: `prescricoes`
**Propósito:** Registro de medicamentos e tratamentos prescritos.

**Campos principais:**
- 🆔 `id` (UUID, PK)
- 🔗 `consulta_id` (UUID, FK → consultas.id) - Consulta relacionada
- 💉 `medicamento` (VARCHAR(255)) - Nome do medicamento
- 📏 `dosagem` (VARCHAR(100)) - Quantidade por aplicação
- ⏰ `frequencia` (VARCHAR(100)) - Intervalo de administração
- 📅 `duracao` (VARCHAR(100)) - Tempo total de tratamento
- 📝 `observacoes` (TEXT) - Instruções especiais
- 📅 `data_inicio` (DATE) - Início do tratamento
- 📅 `data_fim` (DATE) - Fim previsto do tratamento
- ✅ `ativo` (BOOLEAN) - Se ainda está em uso
- 📅 `criado_em` / `atualizado_em` (TIMESTAMP)

#### 📄 Tabela: `documentos`
**Propósito:** Sistema de arquivos para documentos diversos da clínica.

**Campos principais:**
- 🆔 `id` (UUID, PK)
- 🏷️ `titulo` (VARCHAR(255)) - Nome do documento
- 📂 `tipo` (VARCHAR(100)) - atestado, laudo, carteira_vacinacao, receita
- 🔗 `pet_id` (UUID, FK → pets.id) - Animal relacionado
- 📎 `arquivo_url` (VARCHAR(500)) - URL do arquivo
- 📅 `data_emissao` (DATE) - Data de criação
- 🔗 `veterinario_id` (UUID, FK → funcionarios.id) - Quem emitiu
- 👁️ `publico` (BOOLEAN) - Se tutor pode visualizar
- 📝 `descricao` (TEXT) - Descrição adicional
- 📅 `criado_em` / `atualizado_em` (TIMESTAMP)

### 👨‍💼 Módulo de Recursos Humanos

#### 📋 Tabela: `escalas`
**Propósito:** Gerenciamento de turnos e horários da equipe.

**Campos principais:**
- 🆔 `id` (UUID, PK)
- 🔗 `funcionario_id` (UUID, FK → funcionarios.id) - Funcionário escalado
- 📅 `data_inicio` (TIMESTAMP) - Início do turno
- 📅 `data_fim` (TIMESTAMP) - Fim do turno
- 🌅 `tipo_turno` (ENUM) - manha, tarde, noite, plantao
- 📝 `observacoes` (TEXT) - Notas especiais
- 🔄 `substituto_id` (UUID, FK → funcionarios.id) - Em caso de ausência
- ✅ `ativo` (BOOLEAN) - Se a escala está válida
- 📅 `criado_em` / `atualizado_em` (TIMESTAMP)

#### 🎓 Tabela: `treinamentos`
**Propósito:** Catálogo de cursos e materiais educativos para a equipe.

**Campos principais:**
- 🆔 `id` (UUID, PK)
- 🏷️ `titulo` (VARCHAR(255)) - Nome do treinamento
- 📝 `descricao` (TEXT) - Descrição detalhada do conteúdo
- 📂 `categoria` (VARCHAR(100)) - Área de conhecimento
- ⏱️ `carga_horaria` (INT) - Duração total em horas
- 📚 `conteudo_url` (VARCHAR(500)) - Link para material
- 📊 `tipo_conteudo` (ENUM) - video, pdf, texto, link_externo
- ✅ `ativo` (BOOLEAN) - Se está disponível
- ⚠️ `obrigatorio` (BOOLEAN) - Se é mandatório para todos
- 📅 `data_validade` (DATE) - Prazo para conclusão
- 🔗 `criador_id` (UUID, FK → funcionarios.id) - Quem criou
- 📅 `criado_em` / `atualizado_em` (TIMESTAMP)

#### 📈 Tabela: `progresso_treinamentos`
**Propósito:** Acompanha o progresso individual dos funcionários nos treinamentos.

**Campos principais:**
- 🆔 `id` (UUID, PK)
- 🔗 `funcionario_id` (UUID, FK → funcionarios.id) - Quem está cursando
- 🔗 `treinamento_id` (UUID, FK → treinamentos.id) - Qual treinamento
- 📊 `status` (ENUM) - nao_iniciado, em_progresso, concluido, expirado
- 📅 `data_inicio` (TIMESTAMP) - Quando começou
- 📅 `data_conclusao` (TIMESTAMP) - Quando terminou
- 🎯 `nota` (DECIMAL(4,2)) - Nota final (0-100)
- 📊 `progresso` (INT) - Percentual completado (0-100)
- ⏱️ `tempo_estudado` (INT) - Minutos dedicados
- 📅 `criado_em` / `atualizado_em` (TIMESTAMP)

### 💬 Módulo de Comunicação

#### 📨 Tabela: `comunicacoes`
**Propósito:** Sistema interno de mensagens e comunicados.

**Campos principais:**
- 🆔 `id` (UUID, PK)
- 🏷️ `titulo` (VARCHAR(255)) - Assunto da mensagem
- 📝 `conteudo` (TEXT) - Corpo da mensagem
- 📂 `tipo` (ENUM) - chat, comunicado, notificacao
- 🔗 `remetente_id` (UUID, FK → funcionarios.id) - Quem enviou
- 🔗 `destinatario_id` (UUID, FK → funcionarios.id) - Para quem (individual)
- 🎯 `publico_alvo` (JSON) - Array de IDs (grupo)
- 👁️ `lida` (BOOLEAN) - Se foi visualizada
- 📅 `data_leitura` (TIMESTAMP) - Quando foi lida
- ⚠️ `prioridade` (ENUM) - baixa, normal, alta, urgente
- 📅 `criado_em` / `atualizado_em` (TIMESTAMP)

### 🌐 Módulo de Conteúdo Web

#### 📰 Tabela: `conteudo_site`
**Propósito:** Sistema de gerenciamento de conteúdo para o site público.

**Campos principais:**
- 🆔 `id` (UUID, PK)
- 🏷️ `pagina` (VARCHAR(100)) - home, sobre, servicos, contato
- 🔗 `secao` (VARCHAR(100)) - hero, about, services
- 🏷️ `titulo` (VARCHAR(255)) - Título da seção
- 📝 `conteudo` (TEXT) - Conteúdo HTML
- 📸 `imagens` (JSON) - Array de URLs de imagens
- 🎨 `configuracoes` (JSON) - Estilos e configurações
- ✅ `ativo` (BOOLEAN) - Se está sendo exibido
- 📊 `ordem` (INT) - Ordem de exibição
- 🔗 `editado_por` (UUID, FK → usuarios.id) - Último editor
- 📅 `criado_em` / `atualizado_em` (TIMESTAMP)

### 🔗 Relacionamentos Principais

#### 🌳 Hierarquia de Relacionamentos

**👥 Tutores → 🐾 Pets (1:N)**
- Um tutor pode ter múltiplos pets
- Cada pet pertence a apenas um tutor
- Relacionamento: `pets.tutor_id → tutores.id`

**🐾 Pets → 📅 Agendamentos (1:N)**
- Um pet pode ter múltiplos agendamentos
- Cada agendamento é para um pet específico
- Relacionamento: `agendamentos.pet_id → pets.id`

**👨‍⚕️ Veterinários → 📅 Agendamentos (1:N)**
- Um veterinário pode ter múltiplos agendamentos
- Cada agendamento tem um veterinário responsável
- Relacionamento: `agendamentos.veterinario_id → funcionarios.id`

**📅 Agendamentos → 🩺 Consultas (1:1)**
- Cada agendamento pode gerar uma consulta
- Cada consulta pertence a um agendamento
- Relacionamento: `consultas.agendamento_id → agendamentos.id`

**🩺 Consultas → 🧪 Exames (1:N)**
- Uma consulta pode gerar múltiplos exames
- Cada exame pertence a uma consulta
- Relacionamento: `exames.consulta_id → consultas.id`

**🩺 Consultas → 💊 Prescrições (1:N)**
- Uma consulta pode gerar múltiplas prescrições
- Cada prescrição pertence a uma consulta
- Relacionamento: `prescricoes.consulta_id → consultas.id`

#### 🔄 Relacionamentos de Gestão

**👨‍💼 Funcionários → 📋 Escalas (1:N)**
- Um funcionário pode ter múltiplas escalas
- Cada escala pertence a um funcionário
- Relacionamento: `escalas.funcionario_id → funcionarios.id`

**👨‍💼 Funcionários → 📈 Progresso Treinamentos (1:N)**
- Um funcionário pode ter múltiplos treinamentos
- Cada progresso pertence a um funcionário
- Relacionamento: `progresso_treinamentos.funcionario_id → funcionarios.id`

**🎓 Treinamentos → 📈 Progresso Treinamentos (1:N)**
- Um treinamento pode ter múltiplos participantes
- Cada progresso se refere a um treinamento
- Relacionamento: `progresso_treinamentos.treinamento_id → treinamentos.id`

---

## Perfis de Usuário

### 👑 Administrador
Possui acesso total ao sistema. Gerencia configurações gerais, usuários, conteúdo do site e tem visão completa de todas as operações. Responsável por backups, segurança e manutenção do sistema.

### 👨‍⚕️ Veterinário
Foco nas atividades clínicas. Acessa prontuários, registra consultas, solicita exames, emite prescrições e participa de treinamentos. Tem acesso apenas aos seus pacientes e funcionalidades relacionadas ao atendimento.

### 👨‍💼 Gestor
Supervisiona operações da clínica. Gerencia escalas de trabalho, programa treinamentos, acompanha métricas de desempenho e gera relatórios operacionais. Não tem acesso direto aos prontuários clínicos.

### 📞 Recepcionista
Responsável pelo atendimento inicial. Gerencia agendamentos, cadastra novos clientes, controla chegadas e saídas, e tem acesso limitado a informações básicas dos pacientes.

### 🏠 Tutor/Cliente
Acesso restrito ao portal do cliente. Visualiza informações dos seus pets, agenda consultas, baixa documentos e se comunica com a clínica através do sistema.

---

## Fluxos de Trabalho

### 🎯 Fluxos Principais do MVP

#### 🔄 **Fluxo do Cliente**
1. **Site público** → Conhece a clínica
2. **Agendamento** → Solicita consulta
3. **Cadastro** → Cria conta no portal
4. **Atendimento** → Veterinário registra consulta
5. **Documentos** → Acessa resultados no portal

#### 🏥 **Fluxo da Clínica**
1. **Configuração** → Personaliza site e dados
2. **Agendamentos** → Gerencia agenda diária
3. **Atendimentos** → Registra consultas e prescrições
4. **Documentos** → Compartilha resultados
5. **Relatórios** → Analisa performance

#### 📊 **Fluxo de Marketing**
1. **Conteúdo** → Edita páginas do site
2. **Analytics** → Monitora métricas
3. **Campanhas** → Cria promoções
4. **Conversões** → Acompanha resultados

### 🩺 Atendimento Clínico
O processo inicia com o agendamento feito pela recepção ou pelo próprio tutor no portal. No dia da consulta, o veterinário acessa o prontuário, registra a anamnese e exame físico, solicita exames complementares se necessário, prescreve medicamentos e atualiza o status do atendimento.

### 🔬 Gestão de Exames
Após solicitação pelo veterinário, a recepção agenda o exame e notifica o tutor. Quando os resultados ficam prontos, são uploadados no sistema e o tutor recebe notificação automática. O veterinário analisa os resultados e atualiza o prontuário.

### 🎓 Treinamento da Equipe
O gestor programa treinamentos baseado nas necessidades identificadas. Funcionários acessam o conteúdo em horários flexíveis, completam avaliações e recebem certificados. O progresso é acompanhado individualmente.

### 👤 Portal do Cliente
Tutores fazem login com credenciais próprias, visualizam informações atualizadas dos seus pets, baixam documentos, agendam consultas disponíveis e mantêm dados de contato atualizados.

---

## 🎨 Navegação e Menus

### 🌐 **Site Público**
- **Header** - Logo, menu principal, CTA agendamento
- **Menu principal** - Home, Sobre, Serviços, Equipe, Contato
- **Footer** - Contatos, redes sociais, links úteis
- **Mobile** - Hamburger menu responsivo

### 👤 **Portal do Cliente**
- **Sidebar** - Meus pets, agendamentos, documentos
- **Header** - Perfil do usuário, notificações
- **Dashboard** - Resumo de informações importantes
- **Mobile** - Bottom navigation

### 🏥 **Painel Admin**
- **Sidebar expandível** - Módulos por categoria
- **Header** - Busca global, perfil, notificações
- **Breadcrumbs** - Navegação hierárquica
- **Command palette** - Navegação rápida (Cmd+K)

---

## 🚀 Recursos Técnicos do MVP

### ⚡ **Performance**
- **Server-side rendering** - Páginas públicas
- **Static generation** - Conteúdo estático
- **Image optimization** - Next.js Image
- **Code splitting** - Carregamento otimizado

### 🔒 **Segurança**
- **Row Level Security** - Supabase RLS
- **Autenticação robusta** - JWT tokens
- **Validação de dados** - Zod schemas
- **Sanitização** - Input/output seguro

### 📱 **Experiência do Usuário**
- **PWA** - Instalável em dispositivos
- **Offline support** - Funcionalidades básicas
- **Loading states** - Feedback visual
- **Error boundaries** - Tratamento de erros

### 🔧 **Stack Integrada**
- **Supabase Realtime** - Atualizações em tempo real
- **TanStack Query** - Cache inteligente
- **Zustand** - Estado global consistente
- **React Hook Form** - Formulários otimizados

---

## Considerações de Implementação

### 🛡️ Segurança
Todos os dados são protegidos por criptografia, com backup automático e controle rigoroso de acesso. Logs de auditoria registram todas as ações importantes no sistema.

#### 🔐 Índices Recomendados
- **usuarios**: `email` (UNIQUE), `tipo`, `ativo`
- **pets**: `tutor_id`, `especie`, `ativo`
- **agendamentos**: `data_hora`, `veterinario_id`, `pet_id`, `status`
- **consultas**: `agendamento_id`, `criado_em`
- **exames**: `consulta_id`, `status`, `data_realizacao`

#### 🛡️ Constraints e Validações
- Todas as foreign keys com `ON DELETE RESTRICT` para manter integridade
- Campos de email com validação de formato
- Campos de data com validação de intervalo
- Campos monetários com precisão adequada
- Enums com valores bem definidos

### 📊 Usabilidade
Interface intuitiva desenvolvida considerando usuários com diferentes níveis de familiaridade com tecnologia. Treinamento básico garante adoção efetiva por toda a equipe.

### 📈 Escalabilidade
Arquitetura modular permite crescimento gradual do sistema. Novas funcionalidades podem ser adicionadas conforme a clínica evolui e suas necessidades se expandem.

#### 📊 Otimizações de Performance
- Particionamento por data nas tabelas de agendamentos e consultas
- Índices compostos para consultas frequentes
- Campos JSON indexados para buscas rápidas
- Cache de consultas frequentes

### 🔗 Integração
Sistema preparado para futuras integrações com equipamentos médicos, laboratórios externos, sistemas de pagamento e plataformas de comunicação.

---

## 🎯 Escopo do MVP

### ✅ **Incluído**
- Site público completo e customizável
- Portal do cliente com funcionalidades essenciais
- Painel administrativo básico mas funcional
- Sistema de agendamentos robusto
- Gestão de documentos e exames
- Analytics básico integrado

### ❌ **Não Incluído (Futuras Versões)**
- Sistema de estoque e medicamentos
- Integração com laboratórios externos
- Relatórios financeiros avançados
- Sistema de marketing automation
- Integração com equipamentos médicos
- Múltiplas clínicas (multi-tenant)

---

## 💡 Benefícios do Sistema

### 🏥 Para a Clínica
Organização completa das operações, redução de papelada, maior eficiência nos atendimentos, controle de qualidade através de treinamentos, e relatórios gerenciais para tomada de decisões.

### 👨‍⚕️ Para os Veterinários
Acesso rápido ao histórico completo dos pacientes, ferramentas digitais para diagnóstico e prescrição, comunicação facilitada com a equipe, e oportunidades de desenvolvimento através de treinamentos.

### 🏠 Para os Tutores
Acesso 24/7 às informações dos pets, agendamento online conveniente, recebimento automático de resultados de exames, e comunicação direta com a clínica através de canal digital.

### 👥 Para a Equipe Administrativa
Processos automatizados que reduzem trabalho manual, controle integrado de agendas e escalas, comunicação centralizada, e ferramentas para melhor atendimento ao cliente.

---

## 🎯 Resultado Final

### ✅ **Vantagens da Stack**
- **Performance:** Next.js 15 + React 19 = máxima velocidade
- **Produtividade:** shadcn/ui + Tailwind = desenvolvimento rápido
- **Escalabilidade:** Supabase + TanStack = crescimento sem dor
- **Manutenibilidade:** TypeScript + Zod = código seguro
- **UX:** Magic UI + Framer Motion = experiência premium

### 🚀 **Entregas Esperadas**
- **Site público** responsivo e performático
- **Painel admin** completo e intuitivo
- **Portal do cliente** amigável e funcional
- **Sistema realtime** para notificações
- **PWA** instalável em dispositivos

Este sistema representa uma solução completa para modernização de clínicas veterinárias, melhorando a qualidade do atendimento, eficiência operacional e satisfação tanto da equipe quanto dos clientes. Este MVP garante todas as funcionalidades essenciais para uma clínica veterinária moderna operar digitalmente de forma completa e profissional! 🏆