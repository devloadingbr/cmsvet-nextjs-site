/**
 * API Route para chat pós-triagem com IA
 */

import { NextRequest, NextResponse } from 'next/server';
import { triagemAIService } from '@/lib/triagem/ai-service';
import { getSymptomById } from '@/lib/triagem/symptoms-data';
import { validateChatMessage } from '@/lib/triagem/utils';
import { ChatResponse } from '@/lib/triagem/types';
import { DEFAULT_TRIAGEM_CONFIG } from '@/lib/triagem/constants';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      message, 
      pet, 
      symptomIds, 
      analysis, 
      chatHistory, 
      questionsRemaining 
    } = body;

    // Validação da mensagem
    const messageValidation = validateChatMessage(message);
    if (!messageValidation.isValid) {
      return NextResponse.json(
        { 
          success: false, 
          error: messageValidation.errors[0],
          questionsRemaining: questionsRemaining || 0 
        },
        { status: 400 }
      );
    }

    // Verificar se ainda há perguntas disponíveis
    const remainingQuestions = questionsRemaining || DEFAULT_TRIAGEM_CONFIG.maxChatQuestions;
    if (remainingQuestions <= 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Limite de perguntas atingido',
          questionsRemaining: 0,
          shouldEndChat: true 
        },
        { status: 400 }
      );
    }

    // Validar dados obrigatórios
    if (!pet || !symptomIds || !analysis) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Dados da triagem inicial não encontrados',
          questionsRemaining: remainingQuestions 
        },
        { status: 400 }
      );
    }

    // Buscar dados completos dos sintomas
    const symptoms = symptomIds
      .map((id: string) => getSymptomById(id))
      .filter(Boolean);

    if (symptoms.length === 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Sintomas da triagem não encontrados',
          questionsRemaining: remainingQuestions 
        },
        { status: 400 }
      );
    }

    // Chamar serviço de IA para processar a mensagem
    const aiResponse = await triagemAIService.processChatMessage(
      message,
      pet,
      symptoms,
      analysis,
      chatHistory || []
    );

    // Calcular perguntas restantes após esta
    const newQuestionsRemaining = Math.max(0, remainingQuestions - 1);
    const shouldEndChat = newQuestionsRemaining === 0;

    const response: ChatResponse = {
      success: true,
      message: aiResponse,
      questionsRemaining: newQuestionsRemaining,
      shouldEndChat,
    };

    return NextResponse.json(response);

  } catch (error) {
    console.error('Error in chat route:', error);

    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Erro interno do servidor',
        questionsRemaining: 0 
      },
      { status: 500 }
    );
  }
}

// Configurações do route
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';