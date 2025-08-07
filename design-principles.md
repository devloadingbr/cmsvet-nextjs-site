# Princípios de Design - CSM Clínica Veterinária

## 1. Identidade Visual

### Paleta de Cores
- **Primária**: Azul (#2563eb) - Representa confiança e profissionalismo
- **Secundária**: Rosa/Rubi (#e11d48) - Transmite cuidado e empatia
- **Apoio**: Gradientes suaves (rose-50, blue-50, amber-50) para fundos
- **Neutras**: Tons de cinza para textos e elementos secundários

### Tipografia
- **Fonte Principal**: Geist Sans (moderna e legível)
- **Hierarquia**: Títulos em negrito, textos corridos em regular
- **Tamanhos**: Responsivos com ênfase em legibilidade

## 2. Experiência do Usuário

### Navegação
- Menu intuitivo com ícones representativos
- Navegação mobile-first com drawer para telas menores
- Breadcrumbs e indicação de página atual

### Acessibilidade
- Contraste adequado entre texto e fundo
- Tamanhos de fonte escaláveis
- Navegação por teclado
- Labels descritivas para leitores de tela

### Responsividade
- Mobile-first design
- Grid flexível que se adapta a diferentes tamanhos de tela
- Touch targets adequados para dispositivos móveis

## 3. Componentes UI

### Botões
- **Primários**: Fundo azul com texto branco
- **Secundários**: Borda com cor primária e fundo transparente
- **Emergência**: Fundo vermelho para ações críticas
- **Estados**: Hover, focus e active bem definidos

### Cards
- Elevação suave com sombras
- Bordas arredondadas (0.625rem)
- Consistência de espaçamento interno
- Destaque visual para elementos importantes

### Formulários
- Labels claras e posicionadas corretamente
- Feedback visual para estados de validação
- Campos com foco bem definido
- Mensagens de erro acessíveis

## 4. Conteúdo e Linguagem

### Tom de Voz
- Profissional mas acolhedor
- Claro e direto ao ponto
- Empático com os tutores de animais
- Técnico quando necessário, mas acessível

### Estrutura de Conteúdo
- Hierarquia visual clara
- Informações organizadas por seções
- Ênfase em benefícios para o pet e tutor
- Call-to-actions claros e relevantes

## 5. Performance e Otimização

### Carregamento
- Lazy loading para imagens
- Code splitting para componentes
- Prefetching de rotas importantes
- Indicadores de carregamento suaves

### Otimização
- Imagens otimizadas para web
- Minificação de assets
- Caching estratégico
- Fontes otimizadas via Next.js

## 6. SEO e Semântica

### Estrutura
- HTML semântico adequado
- Metadados otimizados por página
- Schema.org para dados estruturados
- Open Graph e Twitter Cards

### Acessibilidade Semântica
- Headings estruturados (h1, h2, h3...)
- Landmarks ARIA para navegação
- Roles e states apropriados
- Textos alternativos descritivos

## 7. Padrões de Desenvolvimento

### Componentização
- Componentes reutilizáveis e modulares
- Props bem definidas e tipadas
- Separação clara de lógica e apresentação
- Documentação inline nos componentes

### Consistência
- Padrões de nomenclatura consistentes
- Estrutura de pastas padronizada
- Estilos seguindo o design system
- Comportamentos previsíveis

## 8. Funcionalidades Específicas

### Sistema de Triagem
- Interface intuitiva e guiada
- Feedback visual em cada etapa
- Persistência de dados entre sessões
- Integração com IA para análise

### Contatos e Agendamento
- Múltiplos canais de contato visíveis
- Links diretos para WhatsApp e telefone
- Formulários simplificados
- Confirmação de envio clara

## 9. Design Responsivo

### Breakpoints
- Mobile: até 640px
- Tablet: 641px a 1024px
- Desktop: acima de 1025px

### Adaptações
- Layout fluido entre breakpoints
- Componentes que se reorganizam conforme espaço
- Touch targets aumentados em mobile
- Navegação otimizada para cada dispositivo

## 10. Diretrizes de Implementação

### Código
- TypeScript para tipagem estática
- ESLint e Prettier para consistência
- Commits semânticos
- Documentação dos componentes complexos

### Testes
- Testes unitários para componentes críticos
- Testes de integração para fluxos importantes
- Testes de acessibilidade
- Testes cross-browser
