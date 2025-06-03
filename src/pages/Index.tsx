
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import TriagemSection from '../components/TriagemSection';
import TargetSection from '../components/TargetSection';
import TestimonialsSection from '../components/TestimonialsSection';
import GuaranteeSection from '../components/GuaranteeSection';
import FooterSection from '../components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <TriagemSection />
      <TargetSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FooterSection />
    </div>
  );
};

export default Index;
