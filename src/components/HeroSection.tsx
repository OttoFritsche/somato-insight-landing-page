
import React from 'react';
import CTAButton from './CTAButton';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-24 px-4 overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-5xl mx-auto text-center animate-fade-in">
        <div className="mb-6">
          <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase mb-4">
            🎯 Imersão Exclusiva • 3 Dias Ao Vivo
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Você ainda atende{' '}
          <span className="bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
            no escuro
          </span>{' '}
          — mesmo depois de{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            dezenas de cursos?
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
          Descubra o protocolo da{' '}
          <span className="text-blue-400 font-semibold">Triagem Arqueira</span>{' '}
          e aprenda a diagnosticar com precisão se o problema do seu cliente é{' '}
          <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-semibold">
            físico, emocional, mental ou energético
          </span>{' '}
          — e por onde começar o atendimento, tudo isso em uma imersão ao vivo de 3 dias.
        </h2>
        
        <div className="transform hover:scale-105 transition-all duration-300">
          <CTAButton 
            onClick={() => console.log('CTA clicado - Imersão por R$97')}
            className="text-xl py-6 px-12 shadow-2xl shadow-blue-500/25 border-2 border-blue-400/50 hover:border-blue-300 backdrop-blur-sm"
          >
            🟦 Quero garantir minha vaga na Imersão por R$97
          </CTAButton>
        </div>
        
        <div className="mt-8 flex justify-center items-center space-x-8 text-gray-400">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Vagas Limitadas</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
            <span className="text-sm">3 Dias Ao Vivo</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
            <span className="text-sm">Certificado Incluso</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
