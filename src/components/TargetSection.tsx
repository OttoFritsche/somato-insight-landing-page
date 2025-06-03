
import React from 'react';

const TargetSection = () => {
  const criteria = [
    "Já tem formações ou atua com terapias, psicologia ou saúde emocional.",
    "Sente que seus resultados com clientes não são consistentes.",
    "Quer unir corpo, emoção e energia em uma abordagem única.",
    "Está em busca de um método que realmente reorganize o sistema do cliente."
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          ✅ Essa triagem é para você se:
        </h2>
        
        <div className="space-y-4">
          {criteria.map((criterion, index) => (
            <div key={index} className="flex items-start bg-green-50 p-4 rounded-lg">
              <span className="text-green-600 mr-3 text-xl">✅</span>
              <span className="text-lg text-gray-800">{criterion}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
