import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

/**
 * API Route para salvar alterações de conteúdo diretamente nos arquivos
 * 
 * ATENÇÃO: Funciona apenas em desenvolvimento
 */

interface SaveRequest {
  filePath: string;
  oldContent: string;
  newContent: string;
}

export async function POST(request: NextRequest) {
  // Segurança: apenas em desenvolvimento
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json(
      { error: 'Esta API só funciona em desenvolvimento' },
      { status: 403 }
    );
  }

  try {
    const body: SaveRequest = await request.json();
    const { filePath, oldContent, newContent } = body;

    // Validações
    if (!filePath || !oldContent || !newContent) {
      return NextResponse.json(
        { error: 'Parâmetros inválidos' },
        { status: 400 }
      );
    }

    // Segurança: apenas arquivos dentro de src/components
    if (!filePath.includes('src/components')) {
      return NextResponse.json(
        { error: 'Apenas arquivos em src/components podem ser editados' },
        { status: 403 }
      );
    }

    // Caminho absoluto do arquivo
    const projectRoot = process.cwd();
    const absolutePath = path.join(projectRoot, filePath);

    // Verifica se arquivo existe
    try {
      await fs.access(absolutePath);
    } catch {
      return NextResponse.json(
        { error: 'Arquivo não encontrado' },
        { status: 404 }
      );
    }

    // Lê o conteúdo atual
    const currentContent = await fs.readFile(absolutePath, 'utf-8');

    // Verifica se o conteúdo antigo ainda existe (evita conflitos)
    if (!currentContent.includes(oldContent)) {
      return NextResponse.json(
        { 
          error: 'Conteúdo foi modificado por outra fonte. Recarregue a página.',
          conflict: true
        },
        { status: 409 }
      );
    }

    // Substitui o conteúdo
    const updatedContent = currentContent.replace(oldContent, newContent);

    // Salva o arquivo
    await fs.writeFile(absolutePath, updatedContent, 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Arquivo atualizado com sucesso',
      filePath
    });

  } catch (error) {
    console.error('Erro ao salvar arquivo:', error);
    return NextResponse.json(
      { error: 'Erro ao salvar arquivo' },
      { status: 500 }
    );
  }
}
