'use client';

import { useEffect, useState } from 'react';
import HeroSectionTest from '@/components/sections-test/HeroSectionTest';
import ClubSectionTest from '@/components/sections-test/ClubSectionTest';
import ConsultasSectionTest from '@/components/sections-test/ConsultasSectionTest';
import VacinasSectionTest from '@/components/sections-test/VacinasSectionTest';
import ExamesSectionTest from '@/components/sections-test/ExamesSectionTest';
import InternamentoSectionTest from '@/components/sections-test/InternamentoSectionTest';
import CirurgiasSectionTest from '@/components/sections-test/CirurgiasSectionTest';
import DiferenciaisSectionTest from '@/components/sections-test/DiferenciaisSectionTest';
import EquipeSectionTest from '@/components/sections-test/EquipeSectionTest';
import DepoimentosSectionTest from '@/components/sections-test/DepoimentosSectionTest';
import ConveniosSectionTest from '@/components/sections-test/ConveniosSectionTest';
import CTASectionTest from '@/components/sections-test/CTASectionTest';
import FooterSectionTest from '@/components/sections-test/FooterSectionTest';
import SectionNavigation from '@/components/ui/section-navigation';
import WhatsAppFloat from '@/components/ui/whatsapp-float';

export default function HomeTestPage() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll('.fullpage-section');
    
    const observerOptions = {
      root: null,
      threshold: 0.5,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Array.from(sections).indexOf(entry.target as Element);
          setActiveSection(index);
          
          // Adiciona classe de animação
          entry.target.classList.add('section-visible');
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('.fullpage-section');
    sections[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  const sectionNames = [
    'Hero',
    'Club',
    'Consultas',
    'Vacinas',
    'Exames',
    'Internamento',
    'Cirurgias',
    'Diferenciais',
    'Equipe',
    'Depoimentos',
    'Convênios',
    'Contato',
    'Footer'
  ];

  return (
    <>
      <main>
        <HeroSectionTest />
        <ClubSectionTest />
        <ConsultasSectionTest />
        <VacinasSectionTest />
        <ExamesSectionTest />
        <InternamentoSectionTest />
        <CirurgiasSectionTest />
        <DiferenciaisSectionTest />
        <EquipeSectionTest />
        <DepoimentosSectionTest />
        <ConveniosSectionTest />
        <CTASectionTest />
        <FooterSectionTest />
      </main>

      {/* Navegação por pontos laterais */}
      <SectionNavigation
        sections={sectionNames}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* WhatsApp flutuante */}
      <WhatsAppFloat />
    </>
  );
}
