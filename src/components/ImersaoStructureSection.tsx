
import React from 'react';
import { Calendar, Clock, Users, Gift, Award } from 'lucide-react';

const ImersaoStructureSection = () => {
  const schedule = [
    {
      day: "Dia 1: Sexta-feira (19h-22h)",
      title: "Fundamentos e Teoria do Diagnóstico Multinível",
      description: "Entenda as bases científicas e energéticas da Triagem Arqueira e como os diferentes níveis se interconectam.",
      color: "from-blue-500 to-cyan-500",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      day: "Dia 2: Sábado (9h-12h / 14h-17h)",
      title: "Protocolo Completo, Demonstrações e Análise de Casos Reais",
      description: "Mergulhe no passo a passo do protocolo, assista a demonstrações ao vivo e aprenda com a análise de casos reais de atendimento.",
      color: "from-purple-500 to-pink-500",
      icon: <Clock className="w-6 h-6" />
    },
    {
      day: "Dia 3: Domingo (9h-12h)",
      title: "Prática Supervisionada, Correções e Dúvidas Ao Vivo",
      description: "Tire todas as suas dúvidas, participe de sessões de prática com supervisão e saia pronto para aplicar a Triagem Arqueira.",
      color: "from-green-500 to-emerald-500",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const bonuses = [
    {
      title: "Acesso à comunidade exclusiva de terapeutas da Imersão",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Material de apoio em PDF",
      icon: <Gift className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Certificado de participação",
      icon: <Award className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjA1Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNDAgMGw0MCA0MC00MCA0MC00MC00MHoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            <Calendar className="inline-block mr-4 text-cyan-400" size={50} />
            Veja em Detalhes o Cronograma da Nossa{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Imersão de 3 Dias
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {schedule.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                {item.icon}
              </div>
              
              <h3 className="text-lg font-bold text-cyan-400 mb-3 text-center">{item.day}</h3>
              <h4 className="text-xl font-semibold text-white mb-4 text-center leading-tight">{item.title}</h4>
              <p className="text-gray-300 leading-relaxed text-center">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Você também recebe:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {bonuses.map((bonus, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${bonus.color} rounded-xl flex items-center justify-center mb-4 text-white mx-auto`}>
                  {bonus.icon}
                </div>
                <span className="text-white text-lg leading-relaxed">{bonus.title}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-8 rounded-2xl shadow-2xl inline-block">
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Tudo isso por apenas</p>
              <p className="text-5xl md:text-6xl font-bold text-gray-900">R$97</p>
              <p className="text-lg text-gray-800 mt-2">💳 Pagamento único • Acesso imediato</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImersaoStructureSection;
