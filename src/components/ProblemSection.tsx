
import React from 'react';

const ProblemSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Você é terapeuta, já estudou muito...
        </h2>
        
        <p className="text-xl text-gray-700 mb-8 text-center">
          Mas lá no fundo sente que ainda começa cada atendimento com incerteza.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <div className="space-y-6 text-center">
            <p className="text-lg text-gray-800 italic">"Será que o problema do cliente é emocional?"</p>
            <p className="text-lg text-gray-800 italic">"Será que é físico? Ou será uma crença profunda?"</p>
            <p className="text-lg text-gray-800 italic">"Qual abordagem eu uso primeiro?"</p>
            <p className="text-lg text-gray-800 italic">"E se eu estiver tratando o sintoma errado?"</p>
          </div>
        </div>
        
        <p className="text-xl text-gray-800 font-medium text-center bg-blue-50 p-6 rounded-lg">
          Essa dúvida paralisa o seu poder terapêutico. E é exatamente aí que a <strong>Imersão Triagem Arqueira</strong> entra para transformar sua prática.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
