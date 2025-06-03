
import React from 'react';
import CTAButton from './CTAButton';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Você sente que seus atendimentos não geram a transformação que seus clientes precisam — mesmo com todas as técnicas que você já conhece?
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
          Descubra, em uma triagem individual de 20 minutos, o ponto cego que está sabotando seus resultados — e saiba exatamente como corrigir.
        </h2>
        
        <CTAButton 
          onClick={() => console.log('CTA clicado - Diagnóstico por R$197')}
          className="text-xl"
        >
          🟦 Quero fazer meu Diagnóstico por R$197
        </CTAButton>
      </div>
    </section>
  );
};

export default HeroSection;
