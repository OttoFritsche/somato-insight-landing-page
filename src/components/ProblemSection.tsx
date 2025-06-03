
import React from 'react';

const ProblemSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Você é terapeuta,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              já estudou muito...
            </span>
          </h2>
          
          <p className="text-2xl text-gray-700 mb-12 font-light">
            Mas lá no fundo sente que ainda começa cada atendimento com{' '}
            <span className="text-red-600 font-semibold">incerteza</span>.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-lg">❓</span>
                </div>
                <p className="text-lg text-gray-800 italic leading-relaxed">
                  "Será que o problema do cliente é emocional?"
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 text-lg">🤔</span>
                </div>
                <p className="text-lg text-gray-800 italic leading-relaxed">
                  "Será que é físico? Ou será uma crença profunda?"
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-yellow-600 text-lg">⚡</span>
                </div>
                <p className="text-lg text-gray-800 italic leading-relaxed">
                  "Qual abordagem eu uso primeiro?"
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-lg">😰</span>
                </div>
                <p className="text-lg text-gray-800 italic leading-relaxed">
                  "E se eu estiver tratando o sintoma errado?"
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl">
            <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
              Essa dúvida{' '}
              <span className="bg-gradient-to-r from-red-300 to-yellow-300 text-transparent bg-clip-text">
                paralisa o seu poder terapêutico
              </span>
              . E é exatamente aí que a{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 text-transparent bg-clip-text">
                Imersão Triagem Arqueira
              </span>{' '}
              entra para transformar sua prática.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
