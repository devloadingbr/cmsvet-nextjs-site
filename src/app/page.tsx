import { Metadata } from 'next';
import CSMHomepage from '@/components/pages/CSMHomepage';
import { pageMetadata, generateFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  keywords: pageMetadata.home.keywords,
};

// FAQ Schema para a página inicial
const homeFAQs = [
  {
    question: "A CSM Clínica Veterinária funciona 24 horas?",
    answer: "Sim, oferecemos atendimento veterinário 24 horas por dia, 7 dias por semana, incluindo emergências e internações."
  },
  {
    question: "Quais serviços a clínica oferece?",
    answer: "Oferecemos consultas, emergências 24h, vacinação, exames laboratoriais e de imagem, cirurgias, internação e atendimento domiciliar."
  },
  {
    question: "A clínica atende emergências?",
    answer: "Sim, temos plantão 24h com veterinários presentes na clínica para atendimento de emergências veterinárias."
  },
  {
    question: "Como agendar uma consulta?",
    answer: "Você pode agendar pelo WhatsApp (41) 99598-8646 ou telefone (41) 3077-0023. Também atendemos por ordem de chegada."
  }
];

export default function Home() {
  return (
    <>
      <CSMHomepage />
      
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(homeFAQs)),
        }}
      />
    </>
  );
}
