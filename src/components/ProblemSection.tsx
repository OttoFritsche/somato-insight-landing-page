
import React from 'react';

const ProblemSection = () => {
  const problems = [
    "O cliente volta com o mesmo problema.",
    "A técnica funciona em alguns, mas não em todos.",
    "Você sente que algo está faltando — mas não sabe o quê."
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Você se identifica com isso?
        </h2>
        
        <p className="text-xl text-gray-700 mb-8 text-center">
          Você já investiu em cursos, formações, ferramentas. Mas, na hora do atendimento, sente que algo trava:
        </p>
        
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <ul className="space-y-4">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">•</span>
                <span className="text-lg text-gray-800">{problem}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <p className="text-xl text-gray-800 italic text-center font-medium bg-blue-50 p-6 rounded-lg">
          É porque o seu método está fragmentado. E o trauma do cliente… não.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
