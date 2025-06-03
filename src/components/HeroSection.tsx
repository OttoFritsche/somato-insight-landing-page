
import React from 'react';
import CTAButton from './CTAButton';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Você ainda atende no escuro — mesmo depois de dezenas de cursos?
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
          Descubra o protocolo da Triagem Arqueira e aprenda a diagnosticar com precisão se o problema do seu cliente é físico, emocional, mental ou energético — e por onde começar o atendimento, tudo isso em uma imersão ao vivo de 3 dias.
        </h2>
        
        <CTAButton 
          onClick={() => console.log('CTA clicado - Imersão por R$97')}
          className="text-xl"
        >
          🟦 Quero garantir minha vaga na Imersão por R$97
        </CTAButton>
      </div>
    </section>
  );
};

export default HeroSection;
