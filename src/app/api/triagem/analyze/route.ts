/**
 * API Route para análise de sintomas com IA
 */

import { NextRequest, NextResponse } from 'next/server';
import { triagemAIService } from '@/lib/triagem/ai-service';
import { getSymptomById } from '@/lib/triagem/symptoms-data';
import { validatePetData, validateSymptoms } from '@/lib/triagem/utils';
import { TriagemDataForAI, AnalysisResponse } from '@/lib/triagem/types';

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  console.log('🚀 [API] Triagem analyze iniciada');
  
  try {
    const body = await request.json();
    const { pet, symptomIds, extraInfo } = body;
    
    console.log('📊 [API] Dados recebidos:', {
      petName: pet?.name,
      petAge: pet?.age,
      petSpecies: pet?.species,
      symptomsCount: symptomIds?.length,
      symptoms: symptomIds,
      hasExtraInfo: !!extraInfo,
      extraInfoLength: extraInfo?.length || 0,
      timestamp: new Date().toISOString()
    });

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
    console.log('🤖 [API] Chamando AI service...');
    const analysisStartTime = Date.now();
    
    const analysis = await triagemAIService.analyzeSymptoms(dataForAI);
    
    const analysisDuration = Date.now() - analysisStartTime;
    console.log('✅ [API] Análise IA concluída:', {
      urgencyLevel: analysis.urgencyLevel,
      urgencyText: analysis.urgencyText,
      hasAnalysis: !!analysis,
      diagnosisLength: analysis.diagnosis?.length,
      duration: `${analysisDuration}ms`
    });

    // Gerar ID da sessão (em um sistema real, salvaria no banco)
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const response: AnalysisResponse = {
      success: true,
      analysis,
      sessionId,
    };

    const totalDuration = Date.now() - startTime;
    console.log('🎯 [API] Resposta enviada com sucesso:', {
      sessionId,
      totalDuration: `${totalDuration}ms`
    });
    
    return NextResponse.json(response);

  } catch (error) {
    const totalDuration = Date.now() - startTime;
    
    console.error('❌ [API] Erro na análise:', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      duration: `${totalDuration}ms`,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { 
        success: false, 
        error: 'Erro ao processar análise. Tente novamente.',
        details: process.env.NODE_ENV === 'development' 
          ? (error instanceof Error ? error.message : String(error))
          : undefined,
        sessionId: null 
      },
      { status: 500 }
    );
  }
}

// Configurações do route
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';