#!/usr/bin/env node

const { spawn } = require('child_process');
const http = require('http');
const { URL } = require('url');

/**
 * Context7 MCP Server Local
 * Integra diretamente com o projeto para buscar documentação atualizada
 */
class Context7MCPServer {
  constructor(port = 3001) {
    this.port = port;
    this.server = null;
  }

  async fetchDocumentation(library, version = 'latest') {
    console.log(`🔍 Buscando documentação para: ${library}@${version}`);
    
    // Mapeamento de bibliotecas para URLs de documentação
    const docUrls = {
      'vercel': 'https://vercel.com/docs',
      'nextjs': 'https://nextjs.org/docs',
      'react': 'https://react.dev/reference',
      'typescript': 'https://www.typescriptlang.org/docs',
      'tailwindcss': 'https://tailwindcss.com/docs',
      'shadcn': 'https://ui.shadcn.com/docs'
    };

    const baseUrl = docUrls[library.toLowerCase()];
    if (!baseUrl) {
      return { error: `Documentação não encontrada para: ${library}` };
    }

    try {
      // Simula busca de documentação (em produção, faria web scraping real)
      const mockDocs = this.getMockDocumentation(library);
      return {
        library,
        version,
        documentation: mockDocs,
        source: baseUrl,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return { error: `Erro ao buscar documentação: ${error.message}` };
    }
  }

  getMockDocumentation(library) {
    const docs = {
      'vercel': {
        title: 'Vercel Deployment Guide',
        sections: [
          {
            title: 'Next.js 15 Deployment',
            content: `
# Deploying Next.js 15 to Vercel

## Environment Variables
- Set in Vercel Dashboard or via CLI
- Use NEXT_PUBLIC_ prefix for client-side variables
- Support for different environments (development, preview, production)

## Build Configuration
- Automatic detection of Next.js projects
- Support for App Router and Pages Router
- Edge Runtime compatibility

## Best Practices
- Use vercel.json for advanced configuration
- Enable analytics and speed insights
- Configure custom domains and SSL
            `
          },
          {
            title: 'Enterprise Features',
            content: `
# Vercel for Enterprise

## Security
- SOC 2 Type II compliance
- Advanced DDoS protection
- Custom security headers

## Performance
- Global Edge Network
- Incremental Static Regeneration
- Image optimization with Next.js Image component
            `
          }
        ]
      },
      'nextjs': {
        title: 'Next.js 15 Documentation',
        sections: [
          {
            title: 'App Router',
            content: `
# Next.js 15 App Router

## New Features
- Improved TypeScript support
- Enhanced Server Components
- Better error handling
- Optimized bundling

## File Structure
- app/ directory for new App Router
- layout.tsx for shared layouts
- page.tsx for route pages
- loading.tsx for loading states
            `
          }
        ]
      }
    };

    return docs[library.toLowerCase()] || { title: 'Documentation not found', sections: [] };
  }

  start() {
    this.server = http.createServer((req, res) => {
      // CORS headers
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

      if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
      }

      const url = new URL(req.url, `http://localhost:${this.port}`);
      
      if (req.method === 'GET' && url.pathname === '/docs') {
        const library = url.searchParams.get('library') || 'vercel';
        const version = url.searchParams.get('version') || 'latest';
        
        this.fetchDocumentation(library, version)
          .then(result => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result, null, 2));
          })
          .catch(error => {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: error.message }));
          });
      } else if (req.method === 'GET' && url.pathname === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
          status: 'ok', 
          server: 'Context7 MCP Local',
          timestamp: new Date().toISOString() 
        }));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Endpoint not found' }));
      }
    });

    this.server.listen(this.port, () => {
      console.log(`🚀 Context7 MCP Server rodando na porta ${this.port}`);
      console.log(`📚 Endpoints disponíveis:`);
      console.log(`   GET /docs?library=vercel&version=latest`);
      console.log(`   GET /health`);
    });
  }

  stop() {
    if (this.server) {
      this.server.close();
      console.log('🛑 Context7 MCP Server parado');
    }
  }
}

// Executa o servidor se chamado diretamente
if (require.main === module) {
  const server = new Context7MCPServer();
  server.start();

  // Graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Parando servidor...');
    server.stop();
    process.exit(0);
  });
}

module.exports = Context7MCPServer;