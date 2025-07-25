/**
 * Badge individual de sintoma clicável
 */

'use client';

import { Badge } from '@/components/ui/badge';
import { Symptom } from '@/lib/triagem/types';
import { CATEGORY_COLORS, URGENCY_COLORS } from '@/lib/triagem/constants';
import { cn } from '@/lib/utils';

interface SymptomBadgeProps {
  symptom: Symptom;
  isSelected: boolean;
  onClick: (symptomId: string) => void;
  size?: 'sm' | 'md' | 'lg';
  showUrgency?: boolean;
  className?: string;
}

export function SymptomBadge({
  symptom,
  isSelected,
  onClick,
  size = 'md',
  showUrgency = false,
  className
}: SymptomBadgeProps) {
  const categoryColors = CATEGORY_COLORS[symptom.category];
  const urgencyColors = URGENCY_COLORS[symptom.urgencyLevel];
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  };

  return (
    <button
      onClick={() => onClick(symptom.id)}
      className={cn(
        'relative group transition-all duration-200 rounded-xl border-2 font-medium',
        'hover:scale-105 hover:shadow-lg active:scale-95',
        sizeClasses[size],
        isSelected ? [
          'border-blue-600 bg-blue-600 text-white',
          'shadow-lg'
        ] : [
          categoryColors.border,
          categoryColors.bg,
          categoryColors.text,
          'hover:border-blue-600 hover:bg-blue-50'
        ],
        className
      )}
    >
      {/* Conteúdo principal */}
      <div className="flex items-center space-x-2">
        {/* Emoji do sintoma */}
        <span className="text-xl">{symptom.emoji}</span>
        
        {/* Nome do sintoma */}
        <span className="font-semibold leading-tight">
          {symptom.name}
        </span>
        
        {/* Indicador de seleção */}
        {isSelected && (
          <div className="ml-2 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      
      {/* Indicadores adicionais */}
      <div className="flex items-center justify-between mt-2">
        {/* Badge de sintoma básico */}
        {symptom.isBasic && (
          <Badge variant="secondary" className="text-xs">
            Principal
          </Badge>
        )}
        
        {/* Indicador de urgência */}
        {showUrgency && (
          <div className={cn(
            'text-xs px-2 py-1 rounded-full',
            urgencyColors.bg,
            urgencyColors.text
          )}>
            {symptom.urgencyLevel === 'emergency' && '🚨'}
            {symptom.urgencyLevel === 'today' && '⚡'}
            {symptom.urgencyLevel === 'this_week' && '📅'}
            {symptom.urgencyLevel === 'monitor' && '👁️'}
          </div>
        )}
      </div>
      
      {/* Tooltip com descrição */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-10">
        <div className="bg-gray-900 text-white text-sm rounded-lg px-3 py-2 max-w-xs text-center">
          {symptom.description}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
      
      {/* Animação de ripple ao clicar */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className={cn(
          'absolute inset-0 bg-blue-400 opacity-0 group-active:opacity-20',
          'transition-opacity duration-150'
        )}></div>
      </div>
    </button>
  );
}