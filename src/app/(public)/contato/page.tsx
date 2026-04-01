'use client';

import { useState } from 'react';
import { Phone, MapPin, Clock, Mail, ChevronDown, ChevronUp, Send, MessageCircle, Users, Briefcase, AlertTriangle, ExternalLink } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { ButtonCSM } from '@/components/ui/button-csm';
import { CardCSM, CardCsmContent } from '@/components/ui/card-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';
import { contact, address, hours, social, urls, clinic, whatsappMessages } from '@/lib/env';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const contatoFAQs = [
  {
    question: 'Preciso agendar consulta ou posso ir direto?',
    answer: 'Para consultas de rotina, recomendamos o agendamento prévio pelo WhatsApp ou telefone para garantir seu horário. Para emergências, venha diretamente — nosso atendimento de emergência funciona 24h sem necessidade de agendamento.',
  },
  {
    question: 'Quais formas de pagamento vocês aceitam?',
    answer: 'Aceitamos dinheiro, cartões de débito e crédito (Visa, Mastercard, Elo), PIX e parcelamento em até 6x sem juros no cartão de crédito para procedimentos acima de R$ 300.',
  },
  {
    question: 'Vocês atendem emergências nos finais de semana e feriados?',
    answer: 'Sim! Nosso atendimento de emergência funciona 24 horas por dia, 7 dias por semana, incluindo finais de semana e feriados. Basta ligar ou vir diretamente à clínica.',
  },
  {
    question: 'Como chegar à clínica?',
    answer: `Estamos localizados na ${address.full}. Temos estacionamento próprio. Você pode usar o link do Google Maps abaixo para traçar a rota mais fácil até nós.`,
  },
  {
    question: 'Posso enviar exames ou laudos por e-mail?',
    answer: `Sim, você pode enviar exames, laudos e históricos médicos do seu pet para ${contact.email.general}. Nossa equipe analisará e entrará em contato para orientações.`,
  },
];

const assuntosContato = [
  'Dúvidas sobre serviços',
  'Agendamento de consulta',
  'Reclamação',
  'Elogio',
  'Outro',
];

const areasTrabalho = [
  'Veterinário(a)',
  'Auxiliar Veterinário',
  'Recepção',
  'Administrativo',
  'Estágio',
];

export default function ContatoPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Formulário de contato
  const [contatoForm, setContatoForm] = useState({
    nome: '', email: '', telefone: '', assunto: '', mensagem: '',
  });
  const [contatoStatus, setContatoStatus] = useState<FormStatus>('idle');

  // Formulário trabalhe conosco
  const [trabalheForm, setTrabalheForm] = useState({
    nome: '', email: '', telefone: '', area: '', mensagem: '',
  });
  const [trabalheStatus, setTrabalheStatus] = useState<FormStatus>('idle');

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleContatoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContatoStatus('sending');
    setTimeout(() => {
      setContatoStatus('success');
      setContatoForm({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });
    }, 1500);
  };

  const handleTrabalheSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTrabalheStatus('sending');
    setTimeout(() => {
      setTrabalheStatus('success');
      setTrabalheForm({ nome: '', email: '', telefone: '', area: '', mensagem: '' });
    }, 1500);
  };

  const inputClasses = 'w-full px-4 py-3 rounded-lg border border-csm-blue-light bg-white text-csm-gray-dark placeholder:text-csm-gray focus:outline-none focus:ring-2 focus:ring-csm-blue focus:border-csm-blue transition-all';
  const selectClasses = 'w-full px-4 py-3 rounded-lg border border-csm-blue-light bg-white text-csm-gray-dark focus:outline-none focus:ring-2 focus:ring-csm-blue focus:border-csm-blue transition-all';
  const labelClasses = 'block text-sm font-semibold text-csm-gray-dark mb-1.5';

  return (
    <div className="min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-b from-white to-csm-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh] py-12 sm:py-16">
          <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 w-full">
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
              <BadgeCSM variant="blue" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Atendimento 24h
              </BadgeCSM>
              <BadgeCSM variant="yellow" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </BadgeCSM>
              <BadgeCSM variant="blue" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Resposta Rápida
              </BadgeCSM>
            </div>

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-csm-blue-light text-csm-blue">
              <MessageCircle className="w-8 h-8" />
            </div>

            {/* Title */}
            <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-csm-blue">Fale Conosco</span>
                <span className="block text-csm-gray-dark text-3xl sm:text-4xl lg:text-5xl mt-1 sm:mt-2">Estamos Aqui Para Você</span>
              </h1>
              <p className="text-lg sm:text-xl text-csm-gray max-w-3xl mx-auto leading-relaxed px-2">
                Entre em contato com a {clinic.name}. Tire dúvidas, agende consultas ou fale com nossa equipe — estamos prontos para ajudar.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-4 sm:gap-6 justify-center max-w-4xl mx-auto px-2">
              <ButtonCSM
                variant="whatsapp"
                size="lg"
                className="flex-1 max-w-xs"
                onClick={() => window.open(urls.whatsappWithMessage(whatsappMessages.info), '_blank')}
                data-track="whatsapp_click"
                data-track-location="hero"
                data-track-label="contato"
              >
                <FaWhatsapp className="w-5 h-5" />
                WHATSAPP
              </ButtonCSM>
              <ButtonCSM
                variant="primary"
                size="lg"
                className="flex-1 max-w-xs"
                onClick={() => window.location.href = urls.phoneCall}
                data-track="ligar_click"
                data-track-location="hero"
                data-track-label="contato"
              >
                <Phone className="w-5 h-5" />
                LIGAR AGORA
              </ButtonCSM>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CARDS DE INFORMAÇÃO ===== */}
      <section className="py-16 bg-gradient-to-b from-white to-csm-blue-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Localização */}
            <CardCSM variant="default">
              <CardCsmContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-csm-blue rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-csm-gray-dark text-center mb-4">Localização</h3>
                <div className="space-y-3 text-sm text-csm-gray">
                  <p className="font-medium text-csm-gray-dark">{address.full}</p>
                  <p>CEP: {address.cep}</p>
                  <a
                    href={social.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-csm-blue font-semibold hover:underline mt-2"
                    data-track="tracar_rota_click"
                    data-track-location="info-card"
                    data-track-label="contato"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver no Google Maps
                  </a>
                </div>
              </CardCsmContent>
            </CardCSM>

            {/* Telefones */}
            <CardCSM variant="default">
              <CardCsmContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-csm-yellow rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-csm-gray-dark text-center mb-4">Telefones</h3>
                <div className="space-y-3 text-sm">
                  <a href={urls.phoneCall} className="flex items-center gap-2 text-csm-gray-dark hover:text-csm-blue transition-colors" data-track="ligar_click" data-track-location="info-card" data-track-label="contato">
                    <Phone className="w-4 h-4 text-csm-blue flex-shrink-0" />
                    <span><strong>Telefone:</strong> {contact.phone.primary}</span>
                  </a>
                  <a href={urls.whatsappWithMessage(whatsappMessages.info)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-csm-gray-dark hover:text-[#25D366] transition-colors" data-track="whatsapp_click" data-track-location="info-card" data-track-label="contato">
                    <FaWhatsapp className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                    <span><strong>WhatsApp:</strong> {contact.phone.primary}</span>
                  </a>
                  <a href={urls.emailContact} className="flex items-center gap-2 text-csm-gray-dark hover:text-csm-blue transition-colors" data-track="email_click" data-track-location="info-card" data-track-label="contato">
                    <Mail className="w-4 h-4 text-csm-blue flex-shrink-0" />
                    <span><strong>Email:</strong> {contact.email.general}</span>
                  </a>
                </div>
              </CardCsmContent>
            </CardCSM>

            {/* Horários */}
            <CardCSM variant="default">
              <CardCsmContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-csm-blue rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-csm-gray-dark text-center mb-4">Horários</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-csm-blue flex-shrink-0 mt-0.5" />
                    <span className="text-csm-gray-dark">{hours.regular}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-csm-orange flex-shrink-0 mt-0.5" />
                    <span className="text-csm-gray-dark font-semibold">Emergência: {hours.emergency}</span>
                  </div>
                </div>
              </CardCsmContent>
            </CardCSM>
          </div>
        </div>
      </section>

      {/* ===== FORMULÁRIO DE CONTATO ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BadgeCSM variant="blue" className="mb-4">Envie sua Mensagem</BadgeCSM>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-csm-gray-dark">Formulário de </span>
              <span className="text-csm-blue">Contato</span>
            </h2>
            <p className="text-lg text-csm-gray max-w-2xl mx-auto">
              Preencha o formulário abaixo e nossa equipe responderá o mais breve possível
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <CardCSM variant="default">
              <CardCsmContent className="p-8">
                {contatoStatus === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-csm-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-csm-green" />
                    </div>
                    <h3 className="text-2xl font-bold text-csm-gray-dark mb-2">Mensagem Enviada!</h3>
                    <p className="text-csm-gray mb-6">Recebemos sua mensagem e responderemos em breve.</p>
                    <ButtonCSM variant="secondary" onClick={() => setContatoStatus('idle')}>
                      Enviar Nova Mensagem
                    </ButtonCSM>
                  </div>
                ) : (
                  <form onSubmit={handleContatoSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClasses}>Nome *</label>
                        <input
                          type="text"
                          required
                          placeholder="Seu nome completo"
                          className={inputClasses}
                          value={contatoForm.nome}
                          onChange={(e) => setContatoForm({ ...contatoForm, nome: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="seu@email.com"
                          className={inputClasses}
                          value={contatoForm.email}
                          onChange={(e) => setContatoForm({ ...contatoForm, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClasses}>Telefone</label>
                        <input
                          type="tel"
                          placeholder="(41) 99999-9999"
                          className={inputClasses}
                          value={contatoForm.telefone}
                          onChange={(e) => setContatoForm({ ...contatoForm, telefone: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Assunto *</label>
                        <select
                          required
                          className={selectClasses}
                          value={contatoForm.assunto}
                          onChange={(e) => setContatoForm({ ...contatoForm, assunto: e.target.value })}
                        >
                          <option value="">Selecione o assunto</option>
                          {assuntosContato.map((assunto) => (
                            <option key={assunto} value={assunto}>{assunto}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClasses}>Mensagem *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Escreva sua mensagem aqui..."
                        className={inputClasses}
                        value={contatoForm.mensagem}
                        onChange={(e) => setContatoForm({ ...contatoForm, mensagem: e.target.value })}
                      />
                    </div>

                    <ButtonCSM
                      variant="primary"
                      size="lg"
                      className="w-full"
                      type="submit"
                      disabled={contatoStatus === 'sending'}
                    >
                      {contatoStatus === 'sending' ? (
                        <>Enviando...</>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Enviar Mensagem
                        </>
                      )}
                    </ButtonCSM>
                  </form>
                )}
              </CardCsmContent>
            </CardCSM>
          </div>
        </div>
      </section>

      {/* ===== TRABALHE CONOSCO ===== */}
      <section className="py-20 bg-gradient-to-b from-white to-csm-blue-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BadgeCSM variant="yellow" className="mb-4">Carreiras</BadgeCSM>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-csm-gray-dark">Trabalhe </span>
              <span className="text-csm-blue">Conosco</span>
            </h2>
            <p className="text-lg text-csm-gray max-w-2xl mx-auto">
              Faça parte da nossa equipe! Envie sua apresentação e entraremos em contato
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <CardCSM variant="highlight">
              <CardCsmContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-csm-yellow rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-csm-gray-dark">Formulário de Candidatura</h3>
                    <p className="text-sm text-csm-gray">Preencha seus dados para a direção avaliar</p>
                  </div>
                </div>

                {trabalheStatus === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-csm-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-csm-green" />
                    </div>
                    <h3 className="text-2xl font-bold text-csm-gray-dark mb-2">Candidatura Recebida!</h3>
                    <p className="text-csm-gray mb-6">Agradecemos seu interesse. Nossa direção analisará seu perfil e entrará em contato.</p>
                    <ButtonCSM variant="secondary" onClick={() => setTrabalheStatus('idle')}>
                      Enviar Nova Candidatura
                    </ButtonCSM>
                  </div>
                ) : (
                  <form onSubmit={handleTrabalheSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClasses}>Nome *</label>
                        <input
                          type="text"
                          required
                          placeholder="Seu nome completo"
                          className={inputClasses}
                          value={trabalheForm.nome}
                          onChange={(e) => setTrabalheForm({ ...trabalheForm, nome: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="seu@email.com"
                          className={inputClasses}
                          value={trabalheForm.email}
                          onChange={(e) => setTrabalheForm({ ...trabalheForm, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClasses}>Telefone *</label>
                        <input
                          type="tel"
                          required
                          placeholder="(41) 99999-9999"
                          className={inputClasses}
                          value={trabalheForm.telefone}
                          onChange={(e) => setTrabalheForm({ ...trabalheForm, telefone: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Área de Interesse *</label>
                        <select
                          required
                          className={selectClasses}
                          value={trabalheForm.area}
                          onChange={(e) => setTrabalheForm({ ...trabalheForm, area: e.target.value })}
                        >
                          <option value="">Selecione a área</option>
                          {areasTrabalho.map((area) => (
                            <option key={area} value={area}>{area}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClasses}>Apresentação / Experiência *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Conte um pouco sobre você, sua experiência e por que gostaria de trabalhar conosco..."
                        className={inputClasses}
                        value={trabalheForm.mensagem}
                        onChange={(e) => setTrabalheForm({ ...trabalheForm, mensagem: e.target.value })}
                      />
                    </div>

                    <ButtonCSM
                      variant="primary"
                      size="lg"
                      className="w-full"
                      type="submit"
                      disabled={trabalheStatus === 'sending'}
                    >
                      {trabalheStatus === 'sending' ? (
                        <>Enviando...</>
                      ) : (
                        <>
                          <Briefcase className="w-5 h-5" />
                          Enviar Candidatura
                        </>
                      )}
                    </ButtonCSM>
                  </form>
                )}
              </CardCsmContent>
            </CardCSM>
          </div>
        </div>
      </section>

      {/* ===== REDES SOCIAIS + MAPA ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BadgeCSM variant="blue" className="mb-4">Nos Encontre</BadgeCSM>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-csm-gray-dark">Redes Sociais e </span>
              <span className="text-csm-blue">Localização</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Redes Sociais */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-csm-gray-dark mb-4">Siga-nos nas Redes</h3>

              <a
                href={urls.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                data-track="social_click"
                data-track-location="redes-sociais"
                data-track-label="instagram"
              >
                <CardCSM variant="default" className="hover:border-csm-blue cursor-pointer">
                  <CardCsmContent className="p-5 flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-lg flex items-center justify-center">
                      <FaInstagram className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-csm-gray-dark">Instagram</h4>
                      <p className="text-sm text-csm-gray">{social.instagram}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-csm-gray ml-auto" />
                  </CardCsmContent>
                </CardCSM>
              </a>

              <a
                href={urls.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                data-track="social_click"
                data-track-location="redes-sociais"
                data-track-label="facebook"
              >
                <CardCSM variant="default" className="hover:border-csm-blue cursor-pointer">
                  <CardCsmContent className="p-5 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1877F2] rounded-lg flex items-center justify-center">
                      <FaFacebook className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-csm-gray-dark">Facebook</h4>
                      <p className="text-sm text-csm-gray">/{social.facebook}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-csm-gray ml-auto" />
                  </CardCsmContent>
                </CardCSM>
              </a>

              <a
                href={urls.whatsappWithMessage(whatsappMessages.info)}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                data-track="whatsapp_click"
                data-track-location="redes-sociais"
                data-track-label="contato"
              >
                <CardCSM variant="default" className="hover:border-csm-blue cursor-pointer">
                  <CardCsmContent className="p-5 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center">
                      <FaWhatsapp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-csm-gray-dark">WhatsApp</h4>
                      <p className="text-sm text-csm-gray">{contact.phone.primary}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-csm-gray ml-auto" />
                  </CardCsmContent>
                </CardCSM>
              </a>
            </div>

            {/* Mapa */}
            <div>
              <h3 className="text-xl font-bold text-csm-gray-dark mb-4">Nossa Localização</h3>
              <CardCSM variant="default" className="overflow-hidden">
                <div className="bg-csm-blue-light h-[300px] flex flex-col items-center justify-center p-6 text-center">
                  <MapPin className="w-12 h-12 text-csm-blue mb-4" />
                  <h4 className="text-lg font-bold text-csm-gray-dark mb-2">{clinic.name}</h4>
                  <p className="text-csm-gray mb-4">{address.full}</p>
                  <ButtonCSM
                    variant="primary"
                    size="md"
                    onClick={() => window.open(social.googleMaps, '_blank')}
                    data-track="tracar_rota_click"
                    data-track-location="mapa"
                    data-track-label="contato"
                  >
                    <MapPin className="w-4 h-4" />
                    Abrir no Google Maps
                  </ButtonCSM>
                </div>
              </CardCSM>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 bg-gradient-to-b from-white to-csm-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BadgeCSM variant="yellow" className="mb-4">Dúvidas Frequentes</BadgeCSM>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-csm-gray-dark">Perguntas </span>
              <span className="text-csm-blue">Frequentes</span>
            </h2>
            <p className="text-lg text-csm-gray max-w-2xl mx-auto">
              Respostas rápidas para as dúvidas mais comuns sobre nosso atendimento
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {contatoFAQs.map((faq, index) => (
              <CardCSM key={index} variant="default" className="cursor-pointer" onClick={() => toggleFAQ(index)}>
                <CardCsmContent className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-csm-gray-dark pr-4">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-csm-blue flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-csm-gray flex-shrink-0" />
                    )}
                  </div>
                  {openFAQ === index && (
                    <p className="mt-3 text-csm-gray leading-relaxed border-t border-csm-blue-light pt-3">
                      {faq.answer}
                    </p>
                  )}
                </CardCsmContent>
              </CardCSM>
            ))}
          </div>

          {/* CTA Final */}
          <div className="text-center mt-12">
            <p className="text-csm-gray mb-4">Não encontrou o que procurava?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonCSM
                variant="whatsapp"
                size="md"
                onClick={() => window.open(urls.whatsappWithMessage(whatsappMessages.info), '_blank')}
                data-track="whatsapp_click"
                data-track-location="faq"
                data-track-label="contato"
              >
                <FaWhatsapp className="w-5 h-5" />
                Falar pelo WhatsApp
              </ButtonCSM>
              <ButtonCSM
                variant="primary"
                size="md"
                onClick={() => window.location.href = urls.phoneCall}
                data-track="ligar_click"
                data-track-location="faq"
                data-track-label="contato"
              >
                <Phone className="w-5 h-5" />
                Ligar Agora
              </ButtonCSM>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}