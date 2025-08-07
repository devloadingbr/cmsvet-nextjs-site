/**
 * Serviço de IA para análise veterinária e chat
 */

import { TriagemDataForAI, AIAnalysis, ChatMessage, Pet, Symptom } from './types';
import { AI_PROMPTS } from './constants';
import { clinic, contact } from '../env';

export class TriagemAIService {
  private apiKey: string;
  private model: string;

  constructor() {
    this.apiKey = process.env.OPENAI_API_KEY || '';
    this.model = process.env.OPENAI_MODEL || 'gpt-4';
    
    if (!this.apiKey || this.apiKey.includes('exemplo')) {
      console.warn('⚠️ OpenAI API Key não configurada. Configure OPENAI_API_KEY no arquivo .env.local');
    }
  }

  /**
   * Analisa sintomas do pet e retorna diagnóstico e recomendações
   */
  async analyzeSymptoms(data: TriagemDataForAI): Promise<AIAnalysis> {
    // Se API Key não configurada, usar análise padrão
    if (!this.apiKey || this.apiKey.includes('exemplo')) {
      console.log('🤖 Using default analysis (no OpenAI API key)');
      return this.getDefaultAnalysis(data);
    }

    const prompt = this.buildAnalysisPrompt(data);
    
    try {
      // Timeout de 15 segundos
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);
      
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: this.model,
          messages: [
            { 
              role: 'system', 
              content: process.env.TRIAGEM_ANALYSIS_PROMPT || AI_PROMPTS.ANALYSIS_SYSTEM 
            },
            { role: 'user', content: prompt }
          ],
          temperature: 0.3,
          max_tokens: 1000,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.statusText}`);
      }

      const result = await response.json();
      const aiResponse = result.choices[0].message.content;
      
      return this.parseAnalysisResponse(aiResponse, data);
    } catch (error) {
      console.error('❌ Error analyzing symptoms:', {
        error: error instanceof Error ? error.message : error,
        model: this.model,
        hasApiKey: !!this.apiKey,
        petName: data.pet.name,
        symptomsCount: data.symptoms.length
      });
      
      // Se foi erro de timeout/abort, usar fallback
      if (error instanceof Error && error.name === 'AbortError') {
        console.log('⏰ Request timeout, using fallback analysis');
        return this.getDefaultAnalysis(data);
      }
      
      // Se foi erro de API, usar fallback
      if (error instanceof Error && error.message.includes('API')) {
        console.log('🔄 API error, using fallback analysis');
        return this.getDefaultAnalysis(data);
      }
      
      // Para outros erros, usar fallback também
      console.log('🛡️ Using fallback analysis due to error');
      return this.getDefaultAnalysis(data);
    }
  }

  /**
   * Processa mensagem do chat pós-triagem
   */
  async processChatMessage(
    message: string,
    pet: Pet,
    symptoms: Symptom[],
    previousAnalysis: AIAnalysis,
    chatHistory: ChatMessage[]
  ): Promise<string> {
    const prompt = this.buildChatPrompt(message, pet, symptoms, previousAnalysis);
    
    try {
      const messages = [
        { 
          role: 'system', 
          content: process.env.TRIAGEM_CHAT_PROMPT || AI_PROMPTS.CHAT_SYSTEM 
        },
        ...this.buildChatHistory(chatHistory),
        { role: 'user', content: prompt }
      ];

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: this.model,
          messages,
          temperature: 0.2,
          max_tokens: 500,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.statusText}`);
      }

      const result = await response.json();
      return result.choices[0].message.content;
    } catch (error) {
      console.error('Error processing chat message:', error);
      throw new Error('Erro ao processar mensagem. Tente novamente.');
    }
  }

  /**
   * Constrói o prompt para análise inicial
   */
  private buildAnalysisPrompt(data: TriagemDataForAI): string {
    const symptomsText = data.symptoms.map(s => `- ${s.name} (${s.emoji}): ${s.description}`).join('\n');
    
    return `
DADOS DO PET:
Nome: ${data.pet.name}
Idade: ${data.pet.age} anos
Espécie: ${data.pet.species === 'dog' ? 'Cão' : data.pet.species === 'cat' ? 'Gato' : 'Outro'}

SINTOMAS RELATADOS:
${symptomsText}

INFORMAÇÕES EXTRAS:
${data.extraInfo || 'Nenhuma informação adicional fornecida'}

CONTEXTO DA CLÍNICA:
- ${clinic.name} em ${contact.phone.primary}
- Atendimento 24h disponível
- WhatsApp: ${contact.phone.secondary}

RESPONDA EM FORMATO JSON com esta estrutura exata:
{
  "urgencyLevel": [número de 1-10],
  "urgencyText": "[emergency|today|this_week|monitor]",
  "diagnosis": "[diagnóstico provável em linguagem simples]",
  "immediateActions": ["ação1", "ação2", "ação3"],
  "whenToSeekHelp": "[quando procurar ajuda veterinária]",
  "cta": {
    "type": "[emergency|appointment|monitor]",
    "text": "[texto do botão]",
    "action": "[emergency_whatsapp|appointment_whatsapp|monitor_at_home]",
    "urgency": [true|false]
  },
  "estimatedTime": "[tempo estimado se aplicável]",
  "disclaimer": "Esta análise não substitui consulta veterinária profissional."
}

Seja empático, prático e sempre oriente sobre quando procurar ajuda profissional.
`;
  }

  /**
   * Constrói o prompt para chat
   */
  private buildChatPrompt(
    message: string,
    pet: Pet,
    symptoms: Symptom[],
    analysis: AIAnalysis
  ): string {
    const symptomsText = symptoms.map(s => s.name).join(', ');
    
    return `
CONTEXTO DA CONSULTA:
Pet: ${pet.name} (${pet.species === 'dog' ? 'Cão' : pet.species === 'cat' ? 'Gato' : 'Outro'}, ${pet.age} anos)
Sintomas iniciais: ${symptomsText}
Diagnóstico inicial: ${analysis.diagnosis}
Nível de urgência: ${analysis.urgencyLevel}/10

PERGUNTA DO TUTOR:
${message}

Responda de forma:
- Específica para este caso (use o nome do pet)
- Prática e objetiva
- Empática mas profissional
- Sempre referencie quando procurar a clínica se necessário

Se a situação se agravar ou surgir dúvida sobre emergência, sempre recomende contato imediato: ${contact.phone.primary}
`;
  }

  /**
   * Converte histórico de chat para formato da API
   */
  private buildChatHistory(chatHistory: ChatMessage[]) {
    return chatHistory.slice(-6).map(msg => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.content
    }));
  }

  /**
   * Processa resposta da IA para análise
   */
  private parseAnalysisResponse(aiResponse: string, originalData: TriagemDataForAI): AIAnalysis {
    try {
      console.log('🤖 AI Response received:', aiResponse.substring(0, 200) + '...');
      
      // Remove possíveis caracteres antes/depois do JSON
      const cleanResponse = aiResponse.replace(/```json\n?|\n?```/g, '').trim();
      
      console.log('🧹 Cleaned response:', cleanResponse.substring(0, 200) + '...');
      
      const parsed = JSON.parse(cleanResponse);
      
      console.log('✅ Parsed AI response:', {
        hasUrgencyLevel: !!parsed.urgencyLevel,
        hasDiagnosis: !!parsed.diagnosis,
        hasCta: !!parsed.cta,
        urgencyLevel: parsed.urgencyLevel
      });
      
      // Valida campos obrigatórios
      if (!parsed.urgencyLevel || !parsed.diagnosis || !parsed.cta) {
        console.warn('⚠️ Incomplete AI response, using fallback');
        return this.getDefaultAnalysis(originalData);
      }

      // Garante que urgencyLevel está no range correto
      parsed.urgencyLevel = Math.max(1, Math.min(10, parsed.urgencyLevel));
      
      // Define urgencyText baseado no urgencyLevel se não fornecido
      if (!parsed.urgencyText) {
        if (parsed.urgencyLevel >= 8) parsed.urgencyText = 'emergency';
        else if (parsed.urgencyLevel >= 6) parsed.urgencyText = 'today';
        else if (parsed.urgencyLevel >= 3) parsed.urgencyText = 'this_week';
        else parsed.urgencyText = 'monitor';
      }

      // Garante arrays
      parsed.immediateActions = parsed.immediateActions || [];
      
      // Adiciona disclaimer se não presente
      parsed.disclaimer = parsed.disclaimer || 'Esta análise não substitui consulta veterinária profissional.';

      console.log('🎯 Final parsed analysis:', {
        urgencyLevel: parsed.urgencyLevel,
        urgencyText: parsed.urgencyText,
        diagnosisLength: parsed.diagnosis?.length
      });

      return parsed as AIAnalysis;
    } catch (error) {
      console.error('❌ Error parsing AI response:', {
        error: error instanceof Error ? error.message : error,
        responseLength: aiResponse?.length,
        responsePreview: aiResponse?.substring(0, 100)
      });
      
      // Retorna resposta padrão em caso de erro
      console.log('🛡️ Using fallback due to parsing error');
      return this.getDefaultAnalysis(originalData);
    }
  }

  /**
   * Retorna análise padrão em caso de erro
   */
  private getDefaultAnalysis(data: TriagemDataForAI): AIAnalysis {
    const hasEmergencySymptoms = data.symptoms.some(s => s.urgencyLevel === 'emergency');
    
    return {
      urgencyLevel: hasEmergencySymptoms ? 9 : 5,
      urgencyText: hasEmergencySymptoms ? 'emergency' : 'today',
      diagnosis: `Com base nos sintomas relatados para ${data.pet.name}, recomendamos avaliação veterinária.`,
      immediateActions: [
        'Mantenha o pet em local calmo e seguro',
        'Observe os sintomas de perto',
        'Ofereça água fresca se o pet estiver consciente'
      ],
      whenToSeekHelp: hasEmergencySymptoms 
        ? 'Procure ajuda veterinária imediatamente'
        : 'Procure ajuda veterinária nas próximas horas',
      cta: {
        type: hasEmergencySymptoms ? 'emergency' : 'appointment',
        text: hasEmergencySymptoms ? '🚨 EMERGÊNCIA WHATSAPP' : '📅 AGENDAR CONSULTA',
        action: hasEmergencySymptoms ? 'emergency_whatsapp' : 'appointment_whatsapp',
        urgency: hasEmergencySymptoms
      },
      disclaimer: 'Esta análise não substitui consulta veterinária profissional.'
    };
  }
}

// Instância singleton do serviço  
export const triagemAIService = new TriagemAIService();

// Funções helper para compatibilidade
export const analyzeSymptoms = async (data: TriagemDataForAI) => {
  try {
    const analysis = await triagemAIService.analyzeSymptoms(data);
    return { success: true, analysis };
  } catch (error) {
    console.error('Error in analyzeSymptoms:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Erro desconhecido' 
    };
  }
};

export const sendChatMessage = async (params: {
  message: string;
  sessionId: string;
  petContext: { name: string; age: number; species: string };
  previousMessages: ChatMessage[];
  analysis?: AIAnalysis;
}) => {
  try {
    // Mock implementation - replace with actual API call
    const response = await triagemAIService.processChatMessage(
      params.message,
      { 
        name: params.petContext.name, 
        age: params.petContext.age, 
        species: params.petContext.species as 'dog' | 'cat' | 'other'
      },
      [], // symptoms would be passed here
      params.analysis || {} as AIAnalysis,
      params.previousMessages
    );
    
    return {
      success: true,
      message: response,
      questionsRemaining: 4, // mock value
      shouldEndChat: false
    };
  } catch (error) {
    console.error('Error in sendChatMessage:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido',
      questionsRemaining: 0
    };
  }
};