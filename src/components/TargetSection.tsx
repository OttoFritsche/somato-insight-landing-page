
import React from 'react';

const TargetSection = () => {
  const criteria = [
    "Já fizeram diversas formações, mas ainda sentem os atendimentos fragmentados.",
    "Têm dificuldade de saber qual técnica usar, e quando.",
    "Percebem que o cliente melhora, mas volta ao ponto zero.",
    "Desejam um método para aplicar atendimentos com segurança clínica real e parar de depender apenas da 'intuição solta'.",
    "Buscam uma forma de atuar com intuição estruturada e objetiva.",
    "Se frustram com a falta de clareza no início das sessões.",
    "Sentem que usam abordagens erradas no momento errado."
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          ✅ Esta Imersão é para Terapeutas que:
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
