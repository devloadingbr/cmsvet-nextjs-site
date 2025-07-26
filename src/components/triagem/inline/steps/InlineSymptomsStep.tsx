/**
 * Step 2: Seleção de Sintomas - Versão Inline
 */

'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { SymptomsSchema, SymptomsInput } from '@/lib/triagem/schemas';
import { useInlineTriagem } from '../../hooks/useInlineTriagem';
import { SYMPTOMS_DATA } from '@/lib/triagem/symptoms-data';
import { Symptom } from '@/lib/triagem/types';
import { Search, Plus, Minus } from 'lucide-react';

export function InlineSymptomsStep() {
  const { submitStep, selectedSymptomsData, isLoading, petDisplayData } = useInlineTriagem();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(selectedSymptomsData || []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<SymptomsInput>({
    resolver: zodResolver(SymptomsSchema),
    mode: 'onChange',
    defaultValues: {
      selectedSymptoms,
      extraInfo: '',
    },
  });

  const watchedExtraInfo = watch('extraInfo');

  // Filtrar sintomas por busca
  const filteredSymptoms = SYMPTOMS_DATA.filter(
    symptom =>
      symptom.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      symptom.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Separar sintomas básicos dos demais
  const basicSymptoms = filteredSymptoms.filter(s => s.isBasic);
  const otherSymptoms = filteredSymptoms.filter(s => !s.isBasic);

  const toggleSymptom = (symptomId: string) => {
    const newSelection = selectedSymptoms.includes(symptomId)
      ? selectedSymptoms.filter(id => id !== symptomId)
      : [...selectedSymptoms, symptomId];
    
    setSelectedSymptoms(newSelection);
    setValue('selectedSymptoms', newSelection, { shouldValidate: true });
  };

  const getSelectedSymptomsData = (): Symptom[] => {
    return SYMPTOMS_DATA.filter(symptom => selectedSymptoms.includes(symptom.id));
  };

  const onSubmit = async (data: SymptomsInput) => {
    const formData = {
      ...data,
      selectedSymptoms,
    };
    await submitStep(formData);
  };

  const SymptomBadge = ({ symptom }: { symptom: Symptom }) => {
    const isSelected = selectedSymptoms.includes(symptom.id);
    const urgencyColors = {
      emergency: 'border-red-400 bg-red-400/20 hover:bg-red-400/30 text-red-100',
      today: 'border-orange-400 bg-orange-400/20 hover:bg-orange-400/30 text-orange-100',
      this_week: 'border-yellow-400 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-100',
      monitor: 'border-green-400 bg-green-400/20 hover:bg-green-400/30 text-green-100',
    };

    return (
      <motion.button
        type="button"
        onClick={() => toggleSymptom(symptom.id)}
        className={`
          p-3 rounded-lg border-2 transition-all duration-200 text-left w-full
          ${isSelected
            ? 'border-amber-400 bg-amber-400/20 text-white shadow-lg'
            : `border-white/20 bg-white/5 text-blue-200 hover:bg-white/10 ${urgencyColors[symptom.urgencyLevel]}`
          }
        `}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{symptom.emoji}</span>
            <div>
              <div className="font-semibold text-sm">{symptom.name}</div>
              <div className="text-xs opacity-75">{symptom.description}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {symptom.isBasic && (
              <Badge variant="secondary" className="text-xs bg-white/10 text-white border-white/20">
                Básico
              </Badge>
            )}
            {isSelected ? (
              <Minus className="w-4 h-4 text-amber-400" />
            ) : (
              <Plus className="w-4 h-4" />
            )}
          </div>
        </div>
      </motion.button>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header do step */}
      <div className="text-center space-y-2">
        <h4 className="text-xl lg:text-2xl font-bold text-white">
          Sintomas de {petDisplayData?.name || 'seu pet'}
        </h4>
        <p className="text-blue-100">
          Selecione os sintomas que você observou ({selectedSymptoms.length}/10)
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Busca de sintomas */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200 w-4 h-4" />
          <input
            type="text"
            placeholder="Buscar sintomas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-blue-200 focus:border-amber-400 focus:outline-none"
          />
        </div>

        {/* Sintomas selecionados */}
        <AnimatePresence>
          {selectedSymptoms.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white/5 rounded-lg p-4 space-y-2"
            >
              <h5 className="font-semibold text-amber-300 flex items-center">
                ✅ Sintomas Selecionados ({selectedSymptoms.length})
              </h5>
              <div className="flex flex-wrap gap-2">
                {getSelectedSymptomsData().map((symptom) => (
                  <Badge
                    key={symptom.id}
                    className="bg-amber-500/20 text-amber-100 border-amber-400/30 cursor-pointer hover:bg-amber-500/30"
                    onClick={() => toggleSymptom(symptom.id)}
                  >
                    {symptom.emoji} {symptom.name} ×
                  </Badge>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lista de sintomas básicos */}
        {basicSymptoms.length > 0 && (
          <div className="space-y-3">
            <h5 className="font-semibold text-white flex items-center">
              🔥 Sintomas Mais Comuns
            </h5>
            <div className="grid gap-2 max-h-48 overflow-y-auto custom-scrollbar">
              {basicSymptoms.map((symptom) => (
                <SymptomBadge key={symptom.id} symptom={symptom} />
              ))}
            </div>
          </div>
        )}

        {/* Lista de outros sintomas */}
        {otherSymptoms.length > 0 && (
          <div className="space-y-3">
            <h5 className="font-semibold text-white flex items-center">
              📋 Outros Sintomas
            </h5>
            <div className="grid gap-2 max-h-32 overflow-y-auto custom-scrollbar">
              {otherSymptoms.slice(0, 10).map((symptom) => (
                <SymptomBadge key={symptom.id} symptom={symptom} />
              ))}
            </div>
          </div>
        )}

        {/* Informações adicionais */}
        <div className="space-y-2">
          <Label htmlFor="extraInfo" className="text-white font-semibold">
            Informações adicionais (opcional)
          </Label>
          <Textarea
            id="extraInfo"
            {...register('extraInfo')}
            placeholder="Descreva outros detalhes importantes sobre o comportamento ou sintomas do seu pet..."
            rows={3}
            className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-amber-400 resize-none"
          />
          <div className="text-right text-xs text-blue-200">
            {watchedExtraInfo?.length || 0}/500 caracteres
          </div>
          {errors.extraInfo && (
            <p className="text-amber-300 text-sm">{errors.extraInfo.message}</p>
          )}
        </div>

        {/* Validação de sintomas */}
        {errors.selectedSymptoms && (
          <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-3">
            <p className="text-red-200 text-sm">{errors.selectedSymptoms.message}</p>
          </div>
        )}

        {/* Botão de submit */}
        <div className="pt-4">
          <Button
            type="submit"
            disabled={selectedSymptoms.length === 0 || isLoading}
            className="w-full bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold py-3 text-lg transition-all duration-300 transform hover:scale-[1.02]"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-blue-900/20 border-t-blue-900 rounded-full animate-spin" />
                <span>Processando...</span>
              </div>
            ) : (
              <>
                <span>Iniciar Análise ({selectedSymptoms.length} sintomas)</span>
                <span className="ml-2">🤖</span>
              </>
            )}
          </Button>
        </div>

        {/* Dica */}
        <div className="text-center text-sm text-blue-200 bg-white/5 rounded-lg p-3">
          💡 <span className="font-semibold">Dica:</span> Selecione todos os sintomas observados, 
          mesmo que pareçam pequenos. Nossa IA fará a análise completa.
        </div>
      </form>

      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }
      `}</style>
    </motion.div>
  );
}