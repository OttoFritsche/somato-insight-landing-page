
import React from 'react';
import { Calendar } from 'lucide-react';

const ImersaoStructureSection = () => {
  const schedule = [
    {
      day: "Dia 1: Sexta-feira (19h-22h)",
      title: "Fundamentos e Teoria do Diagnóstico Multinível",
      description: "Entenda as bases científicas e energéticas da Triagem Arqueira e como os diferentes níveis se interconectam."
    },
    {
      day: "Dia 2: Sábado (9h-12h / 14h-17h)",
      title: "Protocolo Completo, Demonstrações e Análise de Casos Reais",
      description: "Mergulhe no passo a passo do protocolo, assista a demonstrações ao vivo e aprenda com a análise de casos reais de atendimento."
    },
    {
      day: "Dia 3: Domingo (9h-12h)",
      title: "Prática Supervisionada, Correções e Dúvidas Ao Vivo",
      description: "Tire todas as suas dúvidas, participe de sessões de prática com supervisão e saia pronto para aplicar a Triagem Arqueira."
    }
  ];

  const bonuses = [
    "Acesso à comunidade exclusiva de terapeutas da Imersão",
    "Material de apoio em PDF",
    "Certificado de participação"
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          <Calendar className="inline-block mr-3 text-primary" size={40} />
          Veja em Detalhes o Cronograma da Nossa Imersão de 3 Dias:
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {schedule.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-primary mb-3">{item.day}</h3>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h4>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Você também recebe:
          </h3>
          
          <div className="space-y-4 mb-8">
            {bonuses.map((bonus, index) => (
              <div key={index} className="flex items-center">
                <span className="text-green-600 mr-3 text-xl">🎁</span>
                <span className="text-lg text-gray-800">{bonus}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">Tudo isso por apenas</p>
            <p className="text-5xl font-bold text-gray-900">R$97</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImersaoStructureSection;
