/**
 * Barra de progresso para o wizard de triagem
 */

'use client';

import { Progress } from '@/components/ui/progress';
import { TriagemStep } from '@/lib/triagem/types';
import { STEP_LABELS } from '@/lib/triagem/constants';

interface ProgressBarProps {
  currentStep: TriagemStep;
  className?: string;
}

const STEPS: TriagemStep[] = ['pet_data', 'symptoms', 'analysis', 'chat'];

export function ProgressBar({ currentStep, className }: ProgressBarProps) {
  const currentIndex = STEPS.indexOf(currentStep);
  const progress = ((currentIndex + 1) / STEPS.length) * 100;

  return (
    <div className={`w-full space-y-4 ${className}`}>
      {/* Barra de progresso visual */}
      <div className="relative">
        <Progress value={progress} className="h-3" />
        
        {/* Indicadores de etapa */}
        <div className="flex justify-between mt-2">
          {STEPS.map((step, index) => {
            const isCompleted = index < currentIndex;
            const isCurrent = index === currentIndex;
            
            return (
              <div
                key={step}
                className="flex flex-col items-center space-y-1"
              >
                {/* Círculo do indicador */}
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                    ${isCompleted 
                      ? 'bg-blue-600 text-white' 
                      : isCurrent 
                        ? 'bg-blue-100 text-blue-600 border-2 border-blue-600' 
                        : 'bg-gray-200 text-gray-500'
                    }
                  `}
                >
                  {isCompleted ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                
                {/* Label da etapa */}
                <span
                  className={`
                    text-xs text-center max-w-16
                    ${isCurrent ? 'text-blue-600 font-semibold' : 'text-gray-500'}
                  `}
                >
                  {STEP_LABELS[step]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Texto de progresso */}
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Etapa {currentIndex + 1} de {STEPS.length}: {STEP_LABELS[currentStep]}
        </p>
      </div>
    </div>
  );
}