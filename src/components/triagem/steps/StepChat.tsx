/**
 * Etapa 4: Chat interativo pós-triagem
 */

'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Pet, AIAnalysis, ChatMessage } from '@/lib/triagem/types';
import { validateChatMessage, generateChatMessageId, formatTimestamp } from '@/lib/triagem/utils';
import { cn } from '@/lib/utils';

interface StepChatProps {
  pet: Pet;
  symptomIds: string[];
  analysis: AIAnalysis;
  initialMessages?: ChatMessage[];
  maxQuestions?: number;
  onFinish: () => void;
  className?: string;
}

export function StepChat({
  pet,
  symptomIds,
  analysis,
  initialMessages = [],
  maxQuestions = 5,
  onFinish,
  className
}: StepChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [questionsRemaining, setQuestionsRemaining] = useState(
    maxQuestions - initialMessages.filter(m => m.role === 'user').length
  );
  const [error, setError] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Focus no input quando carregado
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!currentMessage.trim() || isLoading || questionsRemaining <= 0) return;

    const validation = validateChatMessage(currentMessage);
    if (!validation.isValid) {
      setError(validation.errors[0]);
      return;
    }

    const userMessage: ChatMessage = {
      id: generateChatMessageId(),
      role: 'user',
      content: currentMessage.trim(),
      timestamp: new Date(),
      petContext: {
        name: pet.name,
        age: pet.age,
        species: pet.species
      }
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/triagem/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentMessage.trim(),
          pet,
          symptomIds,
          analysis,
          chatHistory: messages,
          questionsRemaining,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Erro ao processar mensagem');
      }

      const aiMessage: ChatMessage = {
        id: generateChatMessageId(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
      setQuestionsRemaining(data.questionsRemaining);

      if (data.shouldEndChat) {
        setTimeout(() => {
          onFinish();
        }, 2000);
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    `Posso dar água para ${pet.name}?`,
    'Quanto tempo posso esperar?',
    'O que devo observar?',
    'Como transportar com segurança?',
    `É normal ${pet.name} fazer isso?`
  ];

  return (
    <div className={cn('max-w-4xl mx-auto space-y-6', className)}>
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="text-6xl">💬</div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Chat com Nossa IA Veterinária
          </h2>
          <p className="text-gray-600 mt-2">
            Tire suas dúvidas específicas sobre {pet.name}
          </p>
        </div>
      </div>

      {/* Contador de perguntas */}
      <div className="flex justify-center">
        <Badge 
          variant={questionsRemaining > 0 ? "default" : "secondary"}
          className="px-4 py-2 text-base"
        >
          {questionsRemaining} pergunta{questionsRemaining !== 1 ? 's' : ''} restante{questionsRemaining !== 1 ? 's' : ''}
        </Badge>
      </div>

      {/* Chat Container */}
      <Card className="h-96 flex flex-col">
        <CardHeader className="flex-shrink-0 border-b">
          <CardTitle className="text-lg flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            IA Veterinária Online
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 p-0 overflow-hidden">
          {/* Messages */}
          <div className="h-full overflow-y-auto p-4 space-y-4">
            {/* Welcome message */}
            {messages.length === 0 && (
              <div className="flex justify-start">
                <div className="max-w-xs lg:max-w-md">
                  <div className="text-blue-800 rounded-lg p-3 border border-blue-200">
                    <p className="text-sm">
                      Olá! Sou a IA veterinária da CSM. Acabei de analisar {pet.name} e posso esclarecer dúvidas específicas sobre o caso. 
                      Você tem {questionsRemaining} perguntas disponíveis. Como posso ajudar?
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Agora mesmo
                  </p>
                </div>
              </div>
            )}

            {/* Chat messages */}
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'flex',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                <div className={cn(
                  'max-w-xs lg:max-w-md',
                  message.role === 'user' ? 'order-2' : 'order-1'
                )}>
                  <div className={cn(
                    'rounded-lg p-3 break-words',
                    message.role === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'border border-gray-200 text-gray-800'
                  )}>
                    <p className="text-sm leading-relaxed">
                      {message.content}
                    </p>
                  </div>
                  <p className={cn(
                    'text-xs text-gray-500 mt-1',
                    message.role === 'user' ? 'text-right' : 'text-left'
                  )}>
                    {formatTimestamp(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-xs lg:max-w-md">
                  <div className="border border-gray-200 rounded-lg p-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </CardContent>
      </Card>

      {/* Input Area */}
      <div className="space-y-4">
        {/* Error */}
        {error && (
          <div className="p-3 border border-red-500 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        {/* Input */}
        <div className="flex space-x-2">
          <Input
            ref={inputRef}
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={`Faça uma pergunta sobre ${pet.name}...`}
            disabled={isLoading || questionsRemaining <= 0}
            className="flex-1 text-base py-3"
            maxLength={300}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!currentMessage.trim() || isLoading || questionsRemaining <= 0}
            className="px-6"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            )}
          </Button>
        </div>

        {/* Character count */}
        <div className="text-right text-xs text-gray-500">
          {currentMessage.length}/300
        </div>

        {/* Suggested questions */}
        {messages.length === 0 && questionsRemaining > 0 && (
          <div className="space-y-3">
            <p className="text-sm text-gray-600 text-center">
              Sugestões de perguntas:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {suggestedQuestions.slice(0, 3).map((question, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMessage(question)}
                  className="px-3 py-2 text-sm border border-gray-200 hover:border-gray-300 rounded-lg transition-colors"
                  disabled={isLoading}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Finish button */}
        <div className="text-center pt-4">
          <Button
            variant="outline"
            onClick={onFinish}
            className="px-8"
          >
            Finalizar Triagem
          </Button>
        </div>
      </div>

      {/* Chat info */}
      {questionsRemaining === 0 && (
        <div className="border border-amber-500 rounded-lg p-6 text-center">
          <div className="text-2xl mb-2">⏰</div>
          <h4 className="font-semibold text-amber-900 mb-2">
            Limite de Perguntas Atingido
          </h4>
          <p className="text-amber-800 text-sm">
            Você utilizou todas as {maxQuestions} perguntas disponíveis. Para mais dúvidas, 
            entre em contato diretamente com a clínica.
          </p>
        </div>
      )}
    </div>
  );
}