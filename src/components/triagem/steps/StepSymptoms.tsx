/**
 * Etapa 2: Seleção de sintomas
 */

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SymptomGrid } from '../symptoms/SymptomGrid';
import { Pet } from '@/lib/triagem/types';
import { validateSymptoms, validateExtraInfo, hasEmergencySymptoms } from '@/lib/triagem/utils';
import { cn } from '@/lib/utils';

interface StepSymptomsProps {
  pet: Pet;
  initialSymptoms?: string[];
  initialExtraInfo?: string;
  onNext: (symptoms: string[], extraInfo: string) => void;
  onBack: () => void;
  className?: string;
}

export function StepSymptoms({
  pet,
  initialSymptoms = [],
  initialExtraInfo = '',
  onNext,
  onBack,
  className
}: StepSymptomsProps) {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(initialSymptoms);
  const [extraInfo, setExtraInfo] = useState(initialExtraInfo);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSymptomToggle = (symptomId: string) => {
    const newSymptoms = selectedSymptoms.includes(symptomId)
      ? selectedSymptoms.filter(id => id !== symptomId)
      : [...selectedSymptoms, symptomId];
    
    setSelectedSymptoms(newSymptoms);
    setErrors([]);
  };

  const handleExtraInfoChange = (value: string) => {
    setExtraInfo(value);
    setErrors([]);
  };

  const handleSubmit = () => {
    const symptomsValidation = validateSymptoms(selectedSymptoms);
    const extraInfoValidation = validateExtraInfo(extraInfo);
    
    const allErrors = [
      ...symptomsValidation.errors,
      ...extraInfoValidation.errors
    ];

    if (allErrors.length > 0) {
      setErrors(allErrors);
      return;
    }

    onNext(selectedSymptoms, extraInfo);
  };

  const isValid = selectedSymptoms.length > 0;
  const isEmergency = hasEmergencySymptoms(selectedSymptoms);

  return (
    <div className={cn('max-w-6xl mx-auto space-y-8', className)}>
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="text-6xl">🩺</div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Sintomas de {pet.name}
          </h2>
          <p className="text-gray-600 mt-2">
            Selecione todos os sintomas que você observou em {pet.name}
          </p>
        </div>
      </div>

      {/* Alerta de emergência */}
      {isEmergency && (
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
          <div className="flex items-center">
            <div className="text-2xl mr-3">🚨</div>
            <div>
              <h3 className="text-lg font-semibold text-red-800">
                Sinais de Emergência Detectados
              </h3>
              <p className="text-red-700 mt-1">
                {pet.name} apresenta sintomas que podem indicar uma emergência veterinária. 
                Recomendamos buscar atendimento imediato.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Grid de sintomas */}
      <SymptomGrid
        selectedSymptoms={selectedSymptoms}
        onSymptomToggle={handleSymptomToggle}
        maxSelections={10}
      />

      {/* Informações extras */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            💬 Informações Adicionais (Opcional)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="extra-info" className="text-base">
              Descreva outros detalhes importantes sobre {pet.name}
            </Label>
            <Textarea
              id="extra-info"
              placeholder={`Ex: Os sintomas começaram ontem à noite, ${pet.name} comeu algo diferente, houve algum acidente, etc.`}
              value={extraInfo}
              onChange={(e) => handleExtraInfoChange(e.target.value)}
              className="min-h-24 text-base"
              maxLength={500}
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>
                Informações como quando começaram os sintomas podem ajudar no diagnóstico
              </span>
              <span>
                {extraInfo.length}/500
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Erros */}
      {errors.length > 0 && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center space-x-2 text-red-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold">Problemas encontrados:</span>
          </div>
          <ul className="list-disc list-inside mt-2 text-red-600">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Botões de navegação */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <Button
          variant="outline"
          onClick={onBack}
          className="px-8 py-3"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar aos Dados
        </Button>

        <Button
          onClick={handleSubmit}
          disabled={!isValid}
          className={cn(
            'px-8 py-3 text-lg font-semibold',
            isEmergency ? 'bg-red-600 hover:bg-red-700' : ''
          )}
          size="lg"
        >
          {isEmergency ? (
            <>
              🚨 Analisar Emergência
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </>
          ) : isValid ? (
            <>
              Analisar com IA Veterinária
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </>
          ) : (
            'Selecione pelo menos um sintoma'
          )}
        </Button>
      </div>

      {/* Dicas */}
      {selectedSymptoms.length === 0 && (
        <div className="text-center p-8 bg-amber-50 border border-amber-200 rounded-xl">
          <div className="text-4xl mb-4">🎯</div>
          <h4 className="font-semibold text-amber-900 mb-2">
            Dicas para Seleção de Sintomas
          </h4>
          <div className="text-amber-800 text-sm space-y-2 max-w-2xl mx-auto">
            <p>• Selecione todos os sintomas que você observou, mesmo que pareçam pequenos</p>
            <p>• Se não tem certeza sobre um sintoma, é melhor incluir do que omitir</p>
            <p>• Os sintomas principais são os mais comuns - comece por eles</p>
            <p>• Use as categorias expandidas se não encontrar o que procura</p>
          </div>
        </div>
      )}
    </div>
  );
}