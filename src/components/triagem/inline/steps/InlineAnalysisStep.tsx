/**
 * Step 3: Análise IA - Versão Inline
 */

'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useInlineTriagem } from '../../hooks/useInlineTriagem';
import { useTriagemStore } from '@/stores/triagem-store';
import { SYMPTOMS_DATA } from '@/lib/triagem/symptoms-data';
import { analyzeSymptoms } from '@/lib/triagem/ai-service';
import { Phone, MessageCircle, Clock, AlertTriangle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { urls, whatsappMessages } from '@/lib/env';

export function InlineAnalysisStep() {
  const { 
    petDisplayData, 
    selectedSymptomsData, 
    currentSession, 
    nextStep,
    isLoading 
  } = useInlineTriagem();
  
  const { setAnalysis, setLoading, setError } = useTriagemStore();
  const [analysisStarted, setAnalysisStarted] = useState(false);

  // Dados dos sintomas selecionados
  const selectedSymptoms = SYMPTOMS_DATA.filter(
    symptom => selectedSymptomsData.includes(symptom.id)
  );

  const startAnalysis = useCallback(async () => {
    if (!currentSession) return;
    
    setAnalysisStarted(true);
    setLoading(true);
    
    try {
      const analysisData = {
        pet: currentSession.pet,
        symptoms: selectedSymptoms,
        extraInfo: currentSession.extraInfo,
        timestamp: new Date().toISOString(),
      };

      const result = await analyzeSymptoms(analysisData);
      
      if (result.success && result.analysis) {
        setAnalysis(result.analysis);
      } else {
        throw new Error(result.error || 'Erro na análise');
      }
    } catch (error) {
      console.error('Erro na análise:', error);
      setError('Erro ao processar análise. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }, [currentSession, selectedSymptoms, setAnalysis, setLoading, setError]);

  // Iniciar análise automaticamente
  useEffect(() => {
    if (!analysisStarted && currentSession && !currentSession.analysis) {
      startAnalysis();
    }
  }, [currentSession, analysisStarted, startAnalysis]);

  const getUrgencyColor = (urgencyText: string) => {
    switch (urgencyText) {
      case 'emergency':
        return 'bg-red-500/20 border-red-400 text-red-100';
      case 'today':
        return 'bg-orange-500/20 border-orange-400 text-orange-100';
      case 'this_week':
        return 'bg-yellow-500/20 border-yellow-400 text-yellow-100';
      case 'monitor':
        return 'bg-green-500/20 border-green-400 text-green-100';
      default:
        return 'bg-blue-500/20 border-blue-400 text-blue-100';
    }
  };

  const getUrgencyIcon = (urgencyText: string) => {
    switch (urgencyText) {
      case 'emergency':
        return '🚨';
      case 'today':
        return '⚡';
      case 'this_week':
        return '📅';
      case 'monitor':
        return '👁️';
      default:
        return '🔍';
    }
  };

  const getUrgencyTitle = (urgencyText: string) => {
    switch (urgencyText) {
      case 'emergency':
        return 'EMERGÊNCIA - Atendimento Imediato';
      case 'today':
        return 'URGENTE - Atendimento Hoje';
      case 'this_week':
        return 'CONSULTA - Esta Semana';
      case 'monitor':
        return 'OBSERVAR - Monitoramento';
      default:
        return 'Análise Concluída';
    }
  };

  // Loading state
  if (isLoading || !currentSession?.analysis) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 text-center"
      >
        <div className="space-y-4">
          <div className="text-6xl">🤖</div>
          <h4 className="text-xl lg:text-2xl font-bold text-blue-600">
            Analisando sintomas de {petDisplayData?.name}...
          </h4>
          <p className="text-slate-600">
            Nossa IA está processando {selectedSymptoms.length} sintomas observados
          </p>
        </div>

        {/* Animação de loading */}
        <div className="flex justify-center">
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-amber-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Sintomas sendo analisados */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-3">
          <h5 className="font-semibold text-amber-700">Sintomas em análise:</h5>
          <div className="flex flex-wrap gap-2">
            {selectedSymptoms.map((symptom) => (
              <Badge
                key={symptom.id}
                className="bg-white border border-amber-300 text-amber-700"
              >
                {symptom.emoji} {symptom.name}
              </Badge>
            ))}
          </div>
        </div>

        <p className="text-sm text-slate-500">
          Aguarde enquanto processamos a análise veterinária...
        </p>
      </motion.div>
    );
  }

  const analysis = currentSession.analysis;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header com resultado */}
      <div className="text-center space-y-2">
        <div className="text-4xl">{getUrgencyIcon(analysis.urgencyText)}</div>
        <h4 className="text-xl lg:text-2xl font-bold text-white">
          Análise Concluída
        </h4>
        <div className={`inline-block px-4 py-2 rounded-full border-2 font-semibold ${getUrgencyColor(analysis.urgencyText)}`}>
          {getUrgencyTitle(analysis.urgencyText)}
        </div>
      </div>

      {/* Diagnóstico */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
        <h5 className="font-semibold text-blue-700 flex items-center">
          🎯 Diagnóstico Preliminar
        </h5>
        <p className="text-slate-700 leading-relaxed">{analysis.diagnosis}</p>
      </div>

      {/* Ações imediatas */}
      {analysis.immediateActions && analysis.immediateActions.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-3">
          <h5 className="font-semibold text-amber-700 flex items-center">
            ⚡ Ações Imediatas
          </h5>
          <ul className="space-y-2">
            {analysis.immediateActions.map((action, index) => (
              <li key={index} className="flex items-start space-x-2 text-slate-700">
                <span className="text-amber-600 mt-1">•</span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Quando buscar ajuda */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3">
        <h5 className="font-semibold text-slate-700 flex items-center">
          🩺 Quando Buscar Ajuda
        </h5>
        <p className="text-slate-600 leading-relaxed">{analysis.whenToSeekHelp}</p>
      </div>

      {/* CTA Principal */}
      <div className="space-y-3">
        <h5 className="font-semibold text-slate-700 text-center">
          {analysis.cta.urgency ? '🚨 Ação Recomendada' : '💡 Próximo Passo'}
        </h5>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* WhatsApp */}
          <a
            href={urls.whatsappWithMessage(
              analysis.cta.urgency 
                ? whatsappMessages.emergency 
                : whatsappMessages.appointment
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02]"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>

          {/* Ligação */}
          <a
            href={urls.phoneCall}
            className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02]"
          >
            <Phone className="w-5 h-5" />
            <span>Ligar Agora</span>
          </a>
        </div>

        {/* Botão para continuar para chat */}
        <Button
          onClick={nextStep}
          className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-[1.02]"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Continuar para Chat de Dúvidas
        </Button>
      </div>

      {/* Tempo estimado */}
      {analysis.estimatedTime && (
        <div className="text-center text-sm text-blue-200 bg-white/5 rounded-lg p-3 flex items-center justify-center space-x-2">
          <Clock className="w-4 h-4" />
          <span>
            <span className="font-semibold">Tempo estimado:</span> {analysis.estimatedTime}
          </span>
        </div>
      )}

      {/* Disclaimer */}
      <div className="text-center text-xs text-blue-300 bg-white/5 rounded-lg p-3">
        <AlertTriangle className="w-4 h-4 mx-auto mb-2" />
        <p>{analysis.disclaimer}</p>
      </div>
    </motion.div>
  );
}