'use client';

import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import TeamSection from '@/components/sections/TeamSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import InfoSection from '@/components/sections/InfoSection';
import BlogSection from '@/components/sections/BlogSection';

export default function CSMHomepage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseSection />
      <TeamSection />
      <TestimonialsSection />
      <InfoSection />
      <BlogSection />
    </main>
  );
}