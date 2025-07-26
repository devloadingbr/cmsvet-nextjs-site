/**
 * Step 1: Dados do Pet - Versão Inline
 */

'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PetDataSchema, PetDataInput } from '@/lib/triagem/schemas';
import { useInlineTriagem } from '../../hooks/useInlineTriagem';
import { PetSpecies } from '@/lib/triagem/types';

export function InlinePetDataStep() {
  const { submitStep, petDisplayData, isLoading } = useInlineTriagem();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm<PetDataInput>({
    resolver: zodResolver(PetDataSchema),
    mode: 'onChange',
    defaultValues: {
      name: petDisplayData?.name || '',
      age: petDisplayData ? parseInt(petDisplayData.age) || 0 : 0,
      species: 'dog',
      breed: petDisplayData?.breed || '',
      weight: petDisplayData ? parseFloat(petDisplayData.weight) || undefined : undefined,
    },
  });

  const watchedSpecies = watch('species');

  const onSubmit = async (data: PetDataInput) => {
    await submitStep(data);
  };

  const speciesOptions: { value: PetSpecies; label: string; icon: string }[] = [
    { value: 'dog', label: 'Cão', icon: '🐕' },
    { value: 'cat', label: 'Gato', icon: '🐱' },
    { value: 'other', label: 'Outro', icon: '🐾' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header do step */}
      <div className="text-center space-y-2">
        <h4 className="text-xl lg:text-2xl font-bold text-blue-600">
          Dados do Seu Pet
        </h4>
        <p className="text-slate-600">
          Precisamos conhecer um pouco sobre seu companheiro
        </p>
      </div>

      {/* Formulário */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Nome do pet */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-slate-700 font-semibold">
            Nome do pet *
          </Label>
          <Input
            id="name"
            {...register('name')}
            placeholder="Ex: Luna, Rex, Mimi..."
            className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-600 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Seleção da espécie */}
        <div className="space-y-2">
          <Label className="text-slate-700 font-semibold">
            Espécie *
          </Label>
          <div className="grid grid-cols-3 gap-2">
            {speciesOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setValue('species', option.value)}
                className={`
                  p-3 rounded-lg border-2 transition-all duration-200 text-center
                  ${watchedSpecies === option.value
                    ? 'border-amber-500 bg-amber-50 text-amber-700'
                    : 'border-slate-300 bg-white text-slate-600 hover:bg-slate-50'
                  }
                `}
              >
                <div className="text-2xl mb-1">{option.icon}</div>
                <div className="text-sm font-medium">{option.label}</div>
              </button>
            ))}
          </div>
          {errors.species && (
            <p className="text-red-600 text-sm">{errors.species.message}</p>
          )}
        </div>

        {/* Idade e peso - linha horizontal */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="age" className="text-slate-700 font-semibold">
              Idade (anos) *
            </Label>
            <Input
              id="age"
              type="number"
              min="0"
              max="30"
              step="0.1"
              {...register('age', { valueAsNumber: true })}
              placeholder="Ex: 3"
              className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.age && (
              <p className="text-red-600 text-sm">{errors.age.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="weight" className="text-slate-700 font-semibold">
              Peso (kg)
            </Label>
            <Input
              id="weight"
              type="number"
              min="0.1"
              max="100"
              step="0.1"
              {...register('weight', { valueAsNumber: true })}
              placeholder="Ex: 15.5"
              className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.weight && (
              <p className="text-red-600 text-sm">{errors.weight.message}</p>
            )}
          </div>
        </div>

        {/* Raça (opcional) */}
        <div className="space-y-2">
          <Label htmlFor="breed" className="text-slate-700 font-semibold">
            Raça (opcional)
          </Label>
          <Input
            id="breed"
            {...register('breed')}
            placeholder="Ex: Golden Retriever, SRD, Persa..."
            className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.breed && (
            <p className="text-red-600 text-sm">{errors.breed.message}</p>
          )}
        </div>

        {/* Botão de submit */}
        <div className="pt-4">
          <Button
            type="submit"
            disabled={!isValid || isLoading}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                <span>Salvando...</span>
              </div>
            ) : (
              <>
                <span>Continuar para Sintomas</span>
                <span className="ml-2">→</span>
              </>
            )}
          </Button>
        </div>

        {/* Dica */}
        <div className="text-center text-sm text-slate-600 bg-amber-50 border border-amber-200 rounded-lg p-3">
          💡 <span className="font-semibold text-amber-700">Dica:</span> Quanto mais preciso os dados, 
          melhor será nossa análise dos sintomas do seu pet.
        </div>
      </form>
    </motion.div>
  );
}