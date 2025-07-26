/**
 * Indicador de progresso visual para triagem inline
 */

'use client';

import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { TriagemStep } from '@/lib/triagem/types';
import { CheckCircle2 } from 'lucide-react';

interface InlineStepIndicatorProps {
  currentStep: TriagemStep;
  progress: number;
}

export function InlineStepIndicator({ currentStep, progress }: InlineStepIndicatorProps) {
  const steps = [
    { key: 'pet_data', label: 'Pet', icon: '🐕', description: 'Dados básicos' },
    { key: 'symptoms', label: 'Sintomas', icon: '🔍', description: 'Observações' },
    { key: 'analysis', label: 'Análise', icon: '🤖', description: 'IA processa' },
    { key: 'chat', label: 'Chat', icon: '💬', description: 'Dúvidas' },
  ] as const;

  const getCurrentStepIndex = () => {
    return steps.findIndex(step => step.key === currentStep);
  };

  const currentIndex = getCurrentStepIndex();

  return (
    <div className="space-y-4">
      {/* Barra de progresso principal */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-slate-600">
          <span>Progresso da triagem</span>
          <span className="font-semibold text-amber-600">{progress}%</span>
        </div>
        <Progress 
          value={progress} 
          className="h-2 bg-slate-200"
        />
      </div>

      {/* Steps visuais */}
      <div className="grid grid-cols-4 gap-2 lg:gap-4">
        {steps.map((step, index) => {
          const isCompleted = index < currentIndex;
          const isCurrent = index === currentIndex;
          const isPending = index > currentIndex;

          return (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`
                relative flex flex-col items-center text-center p-2 rounded-lg transition-all duration-300
                ${isCurrent ? 'bg-amber-50 border border-amber-200' : ''}
                ${isCompleted ? 'text-amber-600' : ''}
                ${isPending ? 'text-slate-400' : ''}
              `}
            >
              {/* Ícone do step */}
              <div className={`
                relative w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-1 transition-all duration-300
                ${isCompleted ? 'bg-amber-500 text-white' : ''}
                ${isCurrent ? 'bg-blue-600 text-white scale-110' : ''}
                ${isPending ? 'bg-slate-200 text-slate-500' : ''}
              `}>
                {isCompleted ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <span>{step.icon}</span>
                )}
                
                {/* Pulso animado no step atual */}
                {isCurrent && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-amber-400"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </div>

              {/* Label */}
              <div className="text-xs lg:text-sm font-semibold">
                {step.label}
              </div>
              
              {/* Descrição (apenas desktop) */}
              <div className="hidden lg:block text-xs text-slate-500 mt-1">
                {step.description}
              </div>

              {/* Conector (não no último item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-full w-full">
                  <div className={`
                    h-0.5 w-full transition-colors duration-300
                    ${isCompleted ? 'bg-amber-500' : 'bg-slate-300'}
                  `}>
                    {/* Animação de preenchimento */}
                    {index === currentIndex - 1 && (
                      <motion.div
                        className="h-full bg-amber-500"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Status textual */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-sm text-slate-600"
      >
        {currentIndex >= 0 && (
          <p>
            <span className="text-amber-600 font-semibold">
              {steps[currentIndex]?.label}:
            </span>{' '}
            {getStepDescription(currentStep)}
          </p>
        )}
      </motion.div>
    </div>
  );
}

function getStepDescription(step: TriagemStep): string {
  switch (step) {
    case 'pet_data':
      return 'Informe os dados básicos do seu pet';
    case 'symptoms':
      return 'Selecione os sintomas que você observou';
    case 'analysis':
      return 'Nossa IA está analisando os sintomas...';
    case 'chat':
      return 'Tire suas dúvidas com nosso assistente';
    default:
      return 'Processando...';
  }
}