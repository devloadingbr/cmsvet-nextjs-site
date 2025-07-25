/**
 * Etapa 3: Análise da IA e resultados
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Pet, AIAnalysis } from '@/lib/triagem/types';
import { URGENCY_COLORS, URGENCY_LABELS } from '@/lib/triagem/constants';
import { formatSymptomsForDisplay, buildWhatsAppMessage } from '@/lib/triagem/utils';
import { urls } from '@/lib/env';
import { cn } from '@/lib/utils';

interface StepAnalysisProps {
  pet: Pet;
  symptomIds: string[];
  extraInfo: string;
  onAnalysisComplete: (analysis: AIAnalysis) => void;
  onStartChat: () => void;
  onBack: () => void;
  className?: string;
}

export function StepAnalysis({
  pet,
  symptomIds,
  extraInfo,
  onAnalysisComplete,
  onStartChat,
  onBack,
  className
}: StepAnalysisProps) {
  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const symptomsText = formatSymptomsForDisplay(symptomIds);

  const analyzeSymptoms = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/triagem/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pet,
          symptomIds,
          extraInfo,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Erro ao analisar sintomas');
      }

      setAnalysis(data.analysis);
      onAnalysisComplete(data.analysis);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setIsLoading(false);
    }
  }, [pet, symptomIds, extraInfo, onAnalysisComplete]);

  useEffect(() => {
    analyzeSymptoms();
  }, [analyzeSymptoms]);

  const handleCTAAction = () => {
    if (!analysis) return;

    const message = buildWhatsAppMessage(
      pet,
      symptomIds,
      analysis.urgencyText,
      analysis.cta.urgency
    );

    if (analysis.cta.action === 'emergency_whatsapp') {
      window.open(urls.whatsappWithMessage(message), '_blank');
    } else if (analysis.cta.action === 'appointment_whatsapp') {
      window.open(urls.whatsappWithMessage(message), '_blank');
    }
  };

  if (isLoading) {
    return (
      <div className={cn('max-w-4xl mx-auto space-y-8', className)}>
        <div className="text-center space-y-6">
          <div className="text-6xl animate-bounce">🤖</div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Analisando Sintomas de {pet.name}
            </h2>
            <p className="text-gray-600 mt-2">
              Nossa IA veterinária está processando as informações...
            </p>
          </div>
          
          {/* Loading animation */}
          <div className="space-y-4">
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse delay-75"></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse delay-150"></div>
            </div>
            
            <div className="max-w-md mx-auto space-y-2 text-sm text-gray-600">
              <p>⚡ Processando sintomas com nossa IA veterinária</p>
              <p>📊 Gerando recomendações personalizadas para {pet.name}</p>
              <p>🩺 Calculando nível de urgência</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn('max-w-4xl mx-auto space-y-8', className)}>
        <div className="text-center space-y-6">
          <div className="text-6xl">⚠️</div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Erro na Análise
            </h2>
            <p className="text-gray-600 mt-2">
              Houve um problema ao analisar os sintomas de {pet.name}
            </p>
          </div>
          
          <div className="border border-red-200 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-red-700">{error}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={analyzeSymptoms} className="px-8">
              Tentar Novamente
            </Button>
            <Button variant="outline" onClick={onBack} className="px-8">
              Voltar aos Sintomas
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!analysis) return null;

  const urgencyColors = URGENCY_COLORS[analysis.urgencyText];
  const urgencyLabel = URGENCY_LABELS[analysis.urgencyText];

  return (
    <div className={cn('max-w-4xl mx-auto space-y-8', className)}>
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="text-6xl">📋</div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Análise para {pet.name}
          </h2>
          <p className="text-gray-600 mt-2">
            Nossa IA veterinária analisou os sintomas e gerou recomendações personalizadas
          </p>
        </div>
      </div>

      {/* Resumo dos sintomas */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">📝 Sintomas Relatados</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            <strong>{pet.name}</strong> ({pet.age} anos) apresenta: {symptomsText}
          </p>
          {extraInfo && (
            <div className="border-l-4 border-blue-400 p-4 rounded border border-blue-200">
              <p className="text-blue-800">
                <strong>Informações adicionais:</strong> {extraInfo}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Nível de urgência */}
      <Card className={cn('border-2', urgencyColors.border)}>
        <CardHeader>
          <CardTitle className="text-xl flex items-center justify-between">
            <span>🚨 Nível de Urgência</span>
            <Badge className={cn(
              urgencyColors.bg,
              urgencyColors.text,
              'text-lg px-4 py-2'
            )}>
              {analysis.urgencyLevel}/10
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-6 rounded-lg border border-gray-200">
            <h3 className={cn('text-2xl font-bold mb-2', urgencyColors.text)}>
              {urgencyLabel}
            </h3>
            <p className={cn('text-lg', urgencyColors.text)}>
              {analysis.whenToSeekHelp}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Diagnóstico */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">🩺 Avaliação Veterinária</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 text-lg leading-relaxed">
            {analysis.diagnosis}
          </p>
        </CardContent>
      </Card>

      {/* Ações imediatas */}
      {analysis.immediateActions && analysis.immediateActions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">⚡ Ações Imediatas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {analysis.immediateActions.map((action, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{action}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* CTA Principal */}
      <Card className={cn(
        'border-2',
        analysis.cta.urgency ? 'border-red-500' : 'border-blue-500'
      )}>
        <CardContent className="p-8 text-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Próximo Passo Recomendado
              </h3>
              <p className="text-gray-600">
                Com base na análise, recomendamos:
              </p>
            </div>
            
            <Button
              onClick={handleCTAAction}
              size="lg"
              className={cn(
                'px-8 py-4 text-xl font-bold',
                analysis.cta.urgency ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
              )}
            >
              {analysis.cta.text}
            </Button>
            
            {analysis.estimatedTime && (
              <p className="text-sm text-gray-600">
                Tempo estimado: {analysis.estimatedTime}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Chat opcional */}
      <Card>
        <CardContent className="p-6 text-center">
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                💬 Tem mais dúvidas sobre {pet.name}?
              </h4>
              <p className="text-gray-600">
                Faça até 5 perguntas específicas para nossa IA veterinária
              </p>
            </div>
            
            <Button
              variant="outline"
              onClick={onStartChat}
              className="px-6 py-3"
            >
              Fazer Perguntas no Chat
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <div className="text-xl">⚠️</div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Importante
            </h4>
            <p className="text-gray-700 text-sm">
              {analysis.disclaimer}
            </p>
          </div>
        </div>
      </div>

      {/* Botão voltar */}
      <div className="text-center">
        <Button
          variant="outline"
          onClick={onBack}
          className="px-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar aos Sintomas
        </Button>
      </div>
    </div>
  );
}