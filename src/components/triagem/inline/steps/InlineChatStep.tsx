/**
 * Step 4: Chat Interativo - Versão Inline
 */

'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ChatMessageSchema, ChatMessageInput } from '@/lib/triagem/schemas';
import { useInlineTriagem } from '../../hooks/useInlineTriagem';
import { useTriagemStore } from '@/stores/triagem-store';
import { sendChatMessage } from '@/lib/triagem/ai-service';
import { generateChatMessageId } from '@/lib/triagem/utils';
import { ChatMessage } from '@/lib/triagem/types';
import { Send, MessageCircle, CheckCircle, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { urls, whatsappMessages } from '@/lib/env';
import { toast } from 'sonner';

export function InlineChatStep() {
  const { 
    currentSession, 
    petDisplayData,
    exitTriagem,
    isLoading 
  } = useInlineTriagem();
  
  const { addChatMessage, setLoading, getRemainingQuestions } = useTriagemStore();
  const [messages, setMessages] = useState<ChatMessage[]>(currentSession?.chatHistory || []);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const remainingQuestions = getRemainingQuestions();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ChatMessageInput>({
    resolver: zodResolver(ChatMessageSchema),
    mode: 'onChange',
    defaultValues: {
      message: '',
      sessionId: currentSession?.id || '',
    },
  });

  // Auto scroll para última mensagem
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Carregar mensagem de boas-vindas se não existir
  useEffect(() => {
    if (messages.length === 0 && currentSession) {
      const welcomeMessage: ChatMessage = {
        id: generateChatMessageId(),
        role: 'assistant',
        content: `Olá! 👋 Acabei de analisar ${petDisplayData?.name || 'seu pet'} e posso esclarecer dúvidas específicas sobre o caso. Tenho ${remainingQuestions} perguntas disponíveis para você. Como posso ajudar?`,
        timestamp: new Date(),
      };
      
      setMessages([welcomeMessage]);
      addChatMessage(welcomeMessage);
    }
  }, [currentSession, messages.length, petDisplayData?.name, remainingQuestions, addChatMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const onSubmit = async (data: ChatMessageInput) => {
    if (!currentSession || remainingQuestions <= 0) return;
    
    const userMessage: ChatMessage = {
      id: generateChatMessageId(),
      role: 'user',
      content: data.message,
      timestamp: new Date(),
    };

    // Adicionar mensagem do usuário
    setMessages(prev => [...prev, userMessage]);
    addChatMessage(userMessage);
    reset();

    // Mostrar indicador de digitação
    setIsTyping(true);
    setLoading(true);

    try {
      // Enviar para IA
      const response = await sendChatMessage({
        message: data.message,
        sessionId: currentSession.id,
        petContext: {
          name: currentSession.pet.name,
          age: currentSession.pet.age,
          species: currentSession.pet.species,
        },
        previousMessages: messages,
        analysis: currentSession.analysis,
      });

      if (response.success && response.message) {
        const assistantMessage: ChatMessage = {
          id: generateChatMessageId(),
          role: 'assistant',
          content: response.message,
          timestamp: new Date(),
        };

        setMessages(prev => [...prev, assistantMessage]);
        addChatMessage(assistantMessage);

        // Verificar se deve encerrar chat
        if (response.shouldEndChat || remainingQuestions <= 1) {
          toast.success('Chat finalizado!', {
            description: 'Obrigado por usar nossa triagem. Entre em contato se precisar de mais ajuda.',
          });
        }
      } else {
        throw new Error(response.error || 'Erro na resposta');
      }
    } catch (error) {
      console.error('Erro no chat:', error);
      toast.error('Erro ao enviar mensagem', {
        description: 'Tente novamente ou entre em contato diretamente.',
      });
    } finally {
      setIsTyping(false);
      setLoading(false);
    }
  };

  const handleFinishChat = () => {
    toast.success('Triagem finalizada!', {
      description: 'Seus dados foram salvos. Entre em contato se precisar de ajuda.',
      action: {
        label: 'WhatsApp',
        onClick: () => window.open(urls.whatsappWithMessage(whatsappMessages.appointment), '_blank'),
      },
    });
    exitTriagem();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4 h-full flex flex-col"
    >
      {/* Header do chat */}
      <div className="text-center space-y-2">
        <h4 className="text-xl lg:text-2xl font-bold text-white flex items-center justify-center">
          <MessageCircle className="w-6 h-6 mr-2" />
          Chat com Assistente IA
        </h4>
        <div className="flex items-center justify-center space-x-4">
          <Badge className="bg-violet-500/20 text-violet-200 border-violet-400/30">
            {remainingQuestions} pergunta{remainingQuestions !== 1 ? 's' : ''} restante{remainingQuestions !== 1 ? 's' : ''}
          </Badge>
          <Badge className="bg-emerald-500/20 text-emerald-200 border-emerald-400/30">
            Pet: {petDisplayData?.name}
          </Badge>
        </div>
      </div>

      {/* Área de mensagens */}
      <div className="flex-1 bg-white/5 rounded-lg p-4 max-h-64 overflow-y-auto custom-scrollbar">
        <div className="space-y-3">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`
                    max-w-[80%] p-3 rounded-lg text-sm
                    ${message.role === 'user'
                      ? 'bg-amber-500 text-blue-900 rounded-br-none'
                      : 'bg-white/10 text-white rounded-bl-none border border-white/20'
                    }
                  `}
                >
                  {message.role === 'assistant' && (
                    <div className="flex items-center space-x-2 mb-2 text-xs text-blue-200">
                      <span>🤖</span>
                      <span>Assistente IA</span>
                    </div>
                  )}
                  <p className="leading-relaxed">{message.content}</p>
                  <div className={`text-xs mt-2 ${message.role === 'user' ? 'text-blue-800' : 'text-blue-300'}`}>
                    {new Date(message.timestamp).toLocaleTimeString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Indicador de digitação */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-white/10 text-white p-3 rounded-lg rounded-bl-none border border-white/20 flex items-center space-x-2">
                <span>🤖</span>
                <div className="flex space-x-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-blue-300 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
                <span className="text-sm">Digitando...</span>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input de mensagem */}
      {remainingQuestions > 0 ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex space-x-2">
            <Input
              {...register('message')}
              placeholder="Digite sua pergunta sobre o seu pet..."
              disabled={isLoading || remainingQuestions <= 0}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-amber-400"
            />
            <Button
              type="submit"
              disabled={!isValid || isLoading || remainingQuestions <= 0}
              className="bg-amber-500 hover:bg-amber-600 text-blue-900 px-4"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          {errors.message && (
            <p className="text-amber-300 text-sm">{errors.message.message}</p>
          )}
        </form>
      ) : (
        <div className="text-center space-y-3">
          <div className="bg-white/5 rounded-lg p-3 border border-amber-400/30">
            <CheckCircle className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <p className="text-amber-200 font-semibold">Chat Finalizado</p>
            <p className="text-blue-200 text-sm mt-1">
              Você utilizou todas as suas perguntas. Entre em contato conosco para mais informações.
            </p>
          </div>
        </div>
      )}

      {/* Ações finais */}
      <div className="space-y-3">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <a
            href={urls.whatsappWithMessage(whatsappMessages.appointment)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg font-semibold text-sm transition-all duration-300"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          <a
            href={urls.phoneCall}
            className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg font-semibold text-sm transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            <span>Ligar</span>
          </a>

          <Button
            onClick={handleFinishChat}
            className="bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm"
          >
            Finalizar
          </Button>
        </div>

        <div className="text-center text-xs text-blue-200 bg-white/5 rounded-lg p-2">
          💡 Este chat é apenas para esclarecimentos. Para emergências, contate-nos imediatamente.
        </div>
      </div>

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