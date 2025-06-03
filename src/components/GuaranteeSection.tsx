
import React from 'react';

const GuaranteeSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            🛡️ Sua Satisfação Garantida ou Seu Dinheiro de Volta!
          </h3>
          
          <p className="text-lg text-gray-800 mb-6">
            Participe da Imersão Triagem Arqueira. Se ao final do primeiro dia você sentir que o conteúdo não é transformador para sua prática terapêutica, basta nos enviar um e-mail e devolvemos 100% do seu investimento.
          </p>
          
          <p className="text-xl font-bold text-green-800">
            Risco zero para você.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-red-100 border-2 border-red-300 rounded-lg p-6">
            <p className="text-lg font-bold text-red-800">
              ⏰ Vagas para a imersão ao vivo são limitadas para garantir a qualidade da interação e suporte.
            </p>
          </div>
          
          <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-6">
            <p className="text-lg font-bold text-yellow-800">
              🌟 Esta é uma oportunidade única de aprender essa técnica inovadora diretamente com o criador do método, em um formato intensivo e prático.
            </p>
          </div>
          
          <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-6">
            <p className="text-lg font-bold text-purple-800">
              🔥 Esta técnica não está disponível em nenhum outro curso no Brasil com este nível de profundidade e suporte ao vivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
