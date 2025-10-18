import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

/**
 * API Route para escanear arquivos e encontrar textos editáveis
 * 
 * ATENÇÃO: Funciona apenas em desenvolvimento
 */

interface EditableElement {
  id: string;
  text: string;
  filePath: string;
  lineNumber: number;
  context: string;
  type: 'jsx-text' | 'jsx-attribute' | 'string-literal';
}

export async function GET(request: NextRequest) {
  // Segurança: apenas em desenvolvimento
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json(
      { error: 'Esta API só funciona em desenvolvimento' },
      { status: 403 }
    );
  }

  try {
    const searchParams = request.nextUrl.searchParams;
    const text = searchParams.get('text');

    if (!text) {
      return NextResponse.json(
        { error: 'Parâmetro "text" é obrigatório' },
        { status: 400 }
      );
    }

    const projectRoot = process.cwd();
    const componentsDir = path.join(projectRoot, 'src', 'components');

    // Busca recursivamente em todos os arquivos
    const results = await scanDirectory(componentsDir, text);

    return NextResponse.json({
      success: true,
      results,
      count: results.length
    });

  } catch (error) {
    console.error('Erro ao escanear arquivos:', error);
    return NextResponse.json(
      { error: 'Erro ao escanear arquivos' },
      { status: 500 }
    );
  }
}

async function scanDirectory(dir: string, searchText: string): Promise<EditableElement[]> {
  const results: EditableElement[] = [];

  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // Recursão em subdiretórios
        const subResults = await scanDirectory(fullPath, searchText);
        results.push(...subResults);
      } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) {
        // Escaneia arquivo
        const fileResults = await scanFile(fullPath, searchText);
        results.push(...fileResults);
      }
    }
  } catch (error) {
    console.error(`Erro ao escanear diretório ${dir}:`, error);
  }

  return results;
}

async function scanFile(filePath: string, searchText: string): Promise<EditableElement[]> {
  const results: EditableElement[] = [];

  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const lines = content.split('\n');

    lines.forEach((line, index) => {
      // Remove espaços para comparação
      const trimmedLine = line.trim();
      const trimmedSearch = searchText.trim();

      if (trimmedLine.includes(trimmedSearch)) {
        // Determina o tipo de elemento
        let type: EditableElement['type'] = 'jsx-text';
        
        if (line.includes('className=') || line.includes('placeholder=')) {
          type = 'jsx-attribute';
        } else if (line.includes("'") || line.includes('"')) {
          type = 'string-literal';
        }

        // Extrai contexto (3 linhas antes e depois)
        const contextStart = Math.max(0, index - 3);
        const contextEnd = Math.min(lines.length, index + 4);
        const context = lines.slice(contextStart, contextEnd).join('\n');

        results.push({
          id: `${path.basename(filePath)}-${index}`,
          text: trimmedSearch,
          filePath: filePath.replace(process.cwd() + '/', ''),
          lineNumber: index + 1,
          context,
          type
        });
      }
    });
  } catch (error) {
    console.error(`Erro ao escanear arquivo ${filePath}:`, error);
  }

  return results;
}
