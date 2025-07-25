/**
 * API Route para análise de sintomas com IA
 */

import { NextRequest, NextResponse } from 'next/server';
import { triagemAIService } from '@/lib/triagem/ai-service';
import { getSymptomById } from '@/lib/triagem/symptoms-data';
import { validatePetData, validateSymptoms } from '@/lib/triagem/utils';
import { TriagemDataForAI, AnalysisResponse } from '@/lib/triagem/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { pet, symptomIds, extraInfo } = body;

    // Validações
    const petValidation = validatePetData(pet);
    if (!petValidation.isValid) {
      return NextResponse.json(
        { 
          success: false, 
          error: petValidation.errors[0],
          sessionId: null 
        },
        { status: 400 }
      );
    }

    const symptomsValidation = validateSymptoms(symptomIds);
    if (!symptomsValidation.isValid) {
      return NextResponse.json(
        { 
          success: false, 
          error: symptomsValidation.errors[0],
          sessionId: null 
        },
        { status: 400 }
      );
    }

    // Buscar dados completos dos sintomas
    const symptoms = symptomIds
      .map((id: string) => getSymptomById(id))
      .filter(Boolean);

    if (symptoms.length !== symptomIds.length) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Alguns sintomas selecionados são inválidos',
          sessionId: null 
        },
        { status: 400 }
      );
    }

    // Preparar dados para IA
    const dataForAI: TriagemDataForAI = {
      pet,
      symptoms,
      extraInfo: extraInfo || '',
      timestamp: new Date().toISOString(),
    };

    // Chamar serviço de IA
    const analysis = await triagemAIService.analyzeSymptoms(dataForAI);

    // Gerar ID da sessão (em um sistema real, salvaria no banco)
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const response: AnalysisResponse = {
      success: true,
      analysis,
      sessionId,
    };

    return NextResponse.json(response);

  } catch (error) {
    console.error('Error in analyze route:', error);

    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Erro interno do servidor',
        sessionId: null 
      },
      { status: 500 }
    );
  }
}

// Configurações do route
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';