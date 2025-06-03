
import React from 'react';
import { Shield, Clock, Star, Zap } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-8 md:p-12 rounded-3xl shadow-2xl border border-emerald-300/50 mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-emerald-600" />
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🛡️ Sua Satisfação Garantida ou Seu Dinheiro de Volta!
            </h3>
            
            <p className="text-xl text-emerald-100 mb-6 leading-relaxed">
              Participe da Imersão Triagem Arqueira. Se ao final do primeiro dia você sentir que o conteúdo não é transformador para sua prática terapêutica, basta nos enviar um e-mail e devolvemos{' '}
              <span className="text-yellow-300 font-bold">100% do seu investimento</span>.
            </p>
            
            <p className="text-2xl font-bold text-yellow-300">
              Risco zero para você.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-red-500 to-pink-500 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <Clock className="w-8 h-8 text-white mr-3" />
              <h4 className="text-white font-bold text-lg">Urgência</h4>
            </div>
            <p className="text-red-100 text-lg leading-relaxed">
              ⏰ Vagas para a imersão ao vivo são limitadas para garantir a qualidade da interação e suporte.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <Star className="w-8 h-8 text-white mr-3" />
              <h4 className="text-white font-bold text-lg">Exclusividade</h4>
            </div>
            <p className="text-yellow-100 text-lg leading-relaxed">
              🌟 Esta é uma oportunidade única de aprender essa técnica inovadora diretamente com o criador do método, em um formato intensivo e prático.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-white mr-3" />
              <h4 className="text-white font-bold text-lg">Inovação</h4>
            </div>
            <p className="text-purple-100 text-lg leading-relaxed">
              🔥 Esta técnica não está disponível em nenhum outro curso no Brasil com este nível de profundidade e suporte ao vivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
