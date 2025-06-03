
import React from 'react';
import { Zap, Brain, Heart, Activity } from 'lucide-react';

const TriagemSection = () => {
  const pillars = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Sinesiologia aplicada",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Pêndulo com protocolo guiado",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Hierarquia terapêutica baseada em neurociência somática",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Integração de corpo, mente e campo energético",
      color: "from-red-500 to-orange-500"
    }
  ];

  const results = [
    "O que está em primeiro lugar: corpo, emoção, mente ou energia?",
    "Qual a carga emocional ou física associada ao trauma ou sintoma?",
    "Por onde começar e o que evitar em cada sessão para maximizar resultados?"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            A Solução Definitiva para{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Diagnósticos Terapêuticos Precisos
            </span>
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-8">
            Imersão Triagem Arqueira
          </h3>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
            A Triagem Arqueira é um protocolo autoral que ensina terapeutas a diagnosticar com clareza e precisão, usando um método que une:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="group bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                {pillar.icon}
              </div>
              <h4 className="text-white font-semibold text-lg leading-tight">{pillar.title}</h4>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Nesta imersão de{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              3 dias ao vivo
            </span>
            , você não apenas aprenderá a teoria, mas verá na prática como aplicar a Triagem Arqueira para saber exatamente:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-white text-lg leading-relaxed">{result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TriagemSection;
