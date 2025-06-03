
import React from 'react';
import { CheckCircle } from 'lucide-react';

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
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
              ✅ Esta Imersão é para Terapeutas que:
            </span>
          </h2>
        </div>
        
        <div className="space-y-4">
          {criteria.map((criterion, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-200/50 hover:shadow-xl hover:bg-white/90 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-8 h-8 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
                </div>
                <span className="text-lg text-gray-800 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {criterion}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 rounded-2xl shadow-2xl">
            <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
              Se você se identificou com pelo menos{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text">
                3 pontos acima
              </span>
              , esta imersão vai{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 text-transparent bg-clip-text">
                revolucionar sua prática terapêutica
              </span>
              !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
