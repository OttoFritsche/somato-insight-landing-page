
import React from 'react';

const TriagemSection = () => {
  const benefits = [
    "Leitura precisa do seu campo físico, emocional e energético.",
    "Identificação da principal trava no seu modelo de atendimento.",
    "Um mapa prático para integrar seu conhecimento com uma nova abordagem.",
    "Indicação do próximo passo ideal para sua evolução como terapeuta."
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          🔍 O que você vai receber no Diagnóstico Somático de Alta Precisão:
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <span className="text-primary mr-3 text-xl">✓</span>
                <span className="text-lg text-gray-800">{benefit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TriagemSection;
