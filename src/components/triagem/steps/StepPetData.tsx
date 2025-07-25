/**
 * Etapa 1: Coleta de dados do pet
 */

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Pet, PetSpecies } from '@/lib/triagem/types';
import { SPECIES_LABELS, SPECIES_ICONS } from '@/lib/triagem/constants';
import { validatePetData, formatPetAge } from '@/lib/triagem/utils';
import { cn } from '@/lib/utils';

interface StepPetDataProps {
  initialData?: Partial<Pet>;
  onNext: (pet: Pet) => void;
  className?: string;
}

export function StepPetData({ initialData, onNext, className }: StepPetDataProps) {
  const [petData, setPetData] = useState<Partial<Pet>>({
    name: initialData?.name || '',
    age: initialData?.age || 1,
    species: initialData?.species || 'dog',
    ...initialData
  });
  const [errors, setErrors] = useState<string[]>([]);

  const handleNameChange = (name: string) => {
    setPetData(prev => ({ ...prev, name }));
    setErrors([]);
  };

  const handleAgeChange = (age: number[]) => {
    setPetData(prev => ({ ...prev, age: age[0] }));
    setErrors([]);
  };

  const handleSpeciesChange = (species: PetSpecies) => {
    setPetData(prev => ({ ...prev, species }));
    setErrors([]);
  };

  const handleSubmit = () => {
    const validation = validatePetData(petData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    onNext(petData as Pet);
  };

  const isValid = petData.name && petData.age !== undefined && petData.species;

  return (
    <div className={cn('max-w-2xl mx-auto space-y-8', className)}>
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="text-6xl">🐾</div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Dados do Seu Pet
          </h2>
          <p className="text-gray-600 mt-2">
            Vamos conhecer melhor seu companheiro para uma análise mais precisa
          </p>
        </div>
      </div>

      {/* Formulário */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            📋 Informações Básicas
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Nome do Pet */}
          <div className="space-y-2">
            <Label htmlFor="pet-name" className="text-base font-semibold">
              Como seu pet se chama? *
            </Label>
            <Input
              id="pet-name"
              type="text"
              placeholder="Ex: Rex, Luna, Mimi..."
              value={petData.name || ''}
              onChange={(e) => handleNameChange(e.target.value)}
              className="text-lg py-3"
              maxLength={30}
            />
            <p className="text-sm text-gray-500">
              Nome que você usa para chamar seu pet
            </p>
          </div>

          {/* Idade */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">
              Qual a idade? *
            </Label>
            
            <div className="space-y-4">
              <div className="px-4">
                <Slider
                  value={[petData.age || 1]}
                  onValueChange={handleAgeChange}
                  max={20}
                  min={0}
                  step={0.5}
                  className="w-full"
                />
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {formatPetAge(petData.age || 1)}
                </div>
                <p className="text-sm text-gray-500">
                  Mova o controle para ajustar a idade
                </p>
              </div>
            </div>
          </div>

          {/* Espécie */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">
              Que tipo de animal é? *
            </Label>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {Object.entries(SPECIES_LABELS).map(([species, label]) => {
                const isSelected = petData.species === species;
                const icon = SPECIES_ICONS[species as PetSpecies];
                
                return (
                  <button
                    key={species}
                    onClick={() => handleSpeciesChange(species as PetSpecies)}
                    className={cn(
                      'p-6 rounded-xl border-2 transition-all duration-200',
                      'hover:scale-105 active:scale-95',
                      isSelected ? [
                        'border-blue-500 bg-blue-50 text-blue-700',
                        'shadow-lg shadow-blue-200/50'
                      ] : [
                        'border-gray-200 bg-white text-gray-700',
                        'hover:border-blue-300 hover:bg-blue-50'
                      ]
                    )}
                  >
                    <div className="text-4xl mb-2">{icon}</div>
                    <div className="font-semibold">{label}</div>
                    
                    {isSelected && (
                      <div className="mt-2">
                        <div className="w-6 h-6 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

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
                <span className="font-semibold">Verifique os dados:</span>
              </div>
              <ul className="list-disc list-inside mt-2 text-red-600">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Botão de continuar */}
          <div className="pt-4">
            <Button
              onClick={handleSubmit}
              disabled={!isValid}
              className="w-full py-4 text-lg font-semibold"
              size="lg"
            >
              {isValid ? (
                <>
                  Continuar para Sintomas
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              ) : (
                'Preencha todos os campos obrigatórios'
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Informações importantes */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <div className="text-2xl">💡</div>
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">
              Por que precisamos dessas informações?
            </h4>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• A idade ajuda a entender riscos específicos por faixa etária</li>
              <li>• A espécie influencia na interpretação dos sintomas</li>
              <li>• O nome personaliza a experiência e as recomendações</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}