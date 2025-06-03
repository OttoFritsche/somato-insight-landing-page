
import React from 'react';

const TriagemSection = () => {
  const pillars = [
    "Sinesiologia aplicada",
    "Pêndulo com protocolo guiado",
    "Hierarquia terapêutica baseada em neurociência somática",
    "Integração de corpo, mente e campo energético"
  ];

  const results = [
    "O que está em primeiro lugar: corpo, emoção, mente ou energia?",
    "Qual a carga emocional ou física associada ao trauma ou sintoma?",
    "Por onde começar e o que evitar em cada sessão para maximizar resultados?"
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          A Solução Definitiva para Diagnósticos Terapêuticos Precisos: Imersão Triagem Arqueira
        </h2>
        
        <p className="text-xl text-gray-700 mb-8 text-center">
          A Triagem Arqueira é um protocolo autoral que ensina terapeutas a diagnosticar com clareza e precisão, usando um método que une:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <span className="text-primary mr-3 text-xl">⭐</span>
                <span className="text-lg text-gray-800 font-medium">{pillar}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Nesta imersão de 3 dias ao vivo, você não apenas aprenderá a teoria, mas verá na prática como aplicar a Triagem Arqueira para saber exatamente:
          </h3>
          
          <div className="space-y-4">
            {results.map((result, index) => (
              <div key={index} className="flex items-start">
                <span className="text-primary mr-3 text-xl">✓</span>
                <span className="text-lg text-gray-800">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TriagemSection;
