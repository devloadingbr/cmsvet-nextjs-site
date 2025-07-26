#!/usr/bin/env node

const http = require('http');

/**
 * Context7 MCP Client
 * Cliente para buscar documentação do servidor Context7 local
 */
class Context7MCPClient {
  constructor(serverUrl = 'http://localhost:3001') {
    this.serverUrl = serverUrl;
  }

  async fetchDocumentation(library, version = 'latest') {
    return new Promise((resolve, reject) => {
      const url = `${this.serverUrl}/docs?library=${encodeURIComponent(library)}&version=${encodeURIComponent(version)}`;
      
      console.log(`🔍 Buscando documentação: ${library}@${version}`);
      
      const req = http.get(url, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          try {
            const result = JSON.parse(data);
            if (result.error) {
              reject(new Error(result.error));
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(new Error(`Erro ao parsear resposta: ${error.message}`));
          }
        });
      });
      
      req.on('error', (error) => {
        reject(new Error(`Erro de conexão: ${error.message}`));
      });
      
      req.setTimeout(10000, () => {
        req.destroy();
        reject(new Error('Timeout na requisição'));
      });
    });
  }

  async checkHealth() {
    return new Promise((resolve, reject) => {
      const req = http.get(`${this.serverUrl}/health`, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (error) {
            reject(new Error(`Erro ao parsear resposta: ${error.message}`));
          }
        });
      });
      
      req.on('error', (error) => {
        reject(new Error(`Servidor não está rodando: ${error.message}`));
      });
      
      req.setTimeout(5000, () => {
        req.destroy();
        reject(new Error('Timeout - servidor não responde'));
      });
    });
  }

  formatDocumentation(docs) {
    if (docs.error) {
      return `❌ Erro: ${docs.error}`;
    }

    let output = `\n📚 ${docs.documentation.title}\n`;
    output += `🔗 Fonte: ${docs.source}\n`;
    output += `⏰ Atualizado: ${new Date(docs.timestamp).toLocaleString('pt-BR')}\n\n`;

    docs.documentation.sections.forEach(section => {
      output += `## ${section.title}\n`;
      output += section.content.trim() + '\n\n';
    });

    return output;
  }
}

// CLI interface
async function main() {
  const args = process.argv.slice(2);
  const library = args[0] || 'vercel';
  const version = args[1] || 'latest';

  const client = new Context7MCPClient();

  try {
    // Verifica se o servidor está rodando
    console.log('🏥 Verificando servidor Context7 MCP...');
    await client.checkHealth();
    console.log('✅ Servidor ativo\n');

    // Busca a documentação
    const docs = await client.fetchDocumentation(library, version);
    const formattedDocs = client.formatDocumentation(docs);
    
    console.log(formattedDocs);
    
  } catch (error) {
    console.error(`❌ Erro: ${error.message}`);
    console.log('\n💡 Para iniciar o servidor, execute:');
    console.log('   npm run mcp:server\n');
    process.exit(1);
  }
}

// Executa CLI se chamado diretamente
if (require.main === module) {
  main();
}

module.exports = Context7MCPClient;