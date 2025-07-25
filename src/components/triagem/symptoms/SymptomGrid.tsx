/**
 * Grid de badges de sintomas organizados por categoria
 */

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SymptomBadge } from './SymptomBadge';
import { Symptom, SymptomCategory } from '@/lib/triagem/types';
import { 
  CATEGORY_LABELS, 
  CATEGORY_ICONS, 
  CATEGORY_COLORS 
} from '@/lib/triagem/constants';
import { 
  getBasicSymptoms, 
  getExpandedSymptoms, 
  getSymptomsByCategory 
} from '@/lib/triagem/symptoms-data';
import { cn } from '@/lib/utils';

interface SymptomGridProps {
  selectedSymptoms: string[];
  onSymptomToggle: (symptomId: string) => void;
  maxSelections?: number;
  showExpandedByDefault?: boolean;
  className?: string;
}

export function SymptomGrid({
  selectedSymptoms,
  onSymptomToggle,
  maxSelections = 10,
  showExpandedByDefault = false,
  className
}: SymptomGridProps) {
  const [showExpanded, setShowExpanded] = useState(showExpandedByDefault);
  const [expandedCategories, setExpandedCategories] = useState<Set<SymptomCategory>>(new Set());

  const basicSymptoms = getBasicSymptoms();
  const expandedSymptoms = getExpandedSymptoms();
  const canSelectMore = selectedSymptoms.length < maxSelections;

  const handleSymptomClick = (symptomId: string) => {
    const isSelected = selectedSymptoms.includes(symptomId);
    
    // Se está desmarcando ou se pode selecionar mais
    if (isSelected || canSelectMore) {
      onSymptomToggle(symptomId);
    }
  };

  const toggleCategoryExpansion = (category: SymptomCategory) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const renderCategorySection = (category: SymptomCategory, symptoms: Symptom[]) => {
    const isExpanded = expandedCategories.has(category);
    const categoryColors = CATEGORY_COLORS[category];
    const categoryIcon = CATEGORY_ICONS[category];
    const categoryLabel = CATEGORY_LABELS[category];
    
    if (symptoms.length === 0) return null;

    return (
      <div key={category} className="space-y-3">
        {/* Header da categoria */}
        <button
          onClick={() => toggleCategoryExpansion(category)}
          className={cn(
            'w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all',
            categoryColors.bg,
            categoryColors.border,
            'hover:shadow-md'
          )}
        >
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{categoryIcon}</span>
            <div className="text-left">
              <h3 className={cn('font-semibold text-lg', categoryColors.text)}>
                {categoryLabel}
              </h3>
              <p className="text-sm text-gray-600">
                {symptoms.length} sintoma{symptoms.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Badge com count de selecionados nesta categoria */}
            {symptoms.some(s => selectedSymptoms.includes(s.id)) && (
              <Badge variant="secondary" className={categoryColors.badge}>
                {symptoms.filter(s => selectedSymptoms.includes(s.id)).length} selecionados
              </Badge>
            )}
            
            {/* Ícone de expansão */}
            <svg
              className={cn(
                'w-5 h-5 transition-transform',
                categoryColors.text,
                isExpanded ? 'rotate-180' : ''
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {/* Grid de sintomas da categoria */}
        {isExpanded && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pl-4">
            {symptoms.map((symptom) => (
              <SymptomBadge
                key={symptom.id}
                symptom={symptom}
                isSelected={selectedSymptoms.includes(symptom.id)}
                onClick={handleSymptomClick}
                size="md"
                showUrgency={true}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={cn('space-y-6', className)}>
      {/* Header com informações */}
      <div className="text-center space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            🔍 O que está acontecendo com seu pet?
          </h2>
          <p className="text-gray-600 mt-2">
            Selecione os sintomas que você observou. Você pode escolher até {maxSelections} sintomas.
          </p>
        </div>
        
        {/* Contador de seleções */}
        <div className="flex items-center justify-center space-x-4">
          <Badge 
            variant={selectedSymptoms.length > 0 ? "default" : "secondary"}
            className="px-4 py-2 text-base"
          >
            {selectedSymptoms.length} de {maxSelections} selecionados
          </Badge>
          
          {!canSelectMore && (
            <Badge variant="destructive" className="px-3 py-1">
              Limite atingido
            </Badge>
          )}
        </div>
      </div>

      {/* Sintomas Principais (sempre visíveis) */}
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            📌 Sintomas Principais
          </h3>
          <p className="text-sm text-gray-600">
            Os 12 sintomas mais comuns e importantes
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {basicSymptoms.map((symptom) => (
            <SymptomBadge
              key={symptom.id}
              symptom={symptom}
              isSelected={selectedSymptoms.includes(symptom.id)}
              onClick={handleSymptomClick}
              size="md"
              showUrgency={true}
            />
          ))}
        </div>
      </div>

      {/* Toggle para sintomas expandidos */}
      <div className="text-center">
        <Button
          variant="outline"
          onClick={() => setShowExpanded(!showExpanded)}
          className="px-6 py-3"
        >
          {showExpanded ? (
            <>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              Ocultar Sintomas Adicionais
            </>
          ) : (
            <>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Ver Mais Sintomas ({expandedSymptoms.length} adicionais)
            </>
          )}
        </Button>
      </div>

      {/* Sintomas Expandidos por Categoria */}
      {showExpanded && (
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              📂 Sintomas por Categoria
            </h3>
            <p className="text-sm text-gray-600">
              Clique nas categorias para expandir e ver sintomas específicos
            </p>
          </div>
          
          <div className="space-y-4">
            {Object.values(CATEGORY_LABELS).map((_, index) => {
              const category = Object.keys(CATEGORY_LABELS)[index] as SymptomCategory;
              const categorySymptoms = getSymptomsByCategory(category).filter(s => !s.isBasic);
              return renderCategorySection(category, categorySymptoms);
            })}
          </div>
        </div>
      )}

      {/* Ajuda/Dicas */}
      {selectedSymptoms.length === 0 && (
        <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
          <div className="text-4xl mb-2">💡</div>
          <h4 className="font-semibold text-blue-900 mb-2">
            Não sabe quais sintomas selecionar?
          </h4>
          <p className="text-blue-700 text-sm">
            Comece pelos sintomas principais acima. Eles cobrem as situações mais comuns.
            Se não encontrar o que procura, explore as categorias de sintomas adicionais.
          </p>
        </div>
      )}
    </div>
  );
}