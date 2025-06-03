
import React from 'react';

const GuaranteeSection = () => {
  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-xl text-gray-800 mb-6">
            Você sai da triagem com clareza sobre o que está travando seus atendimentos.
          </p>
          
          <p className="text-xl text-gray-800 mb-8">
            E com um plano para mudar isso.
          </p>
          
          <div className="bg-green-100 border-2 border-green-300 rounded-lg p-6 mb-8">
            <p className="text-lg font-bold text-green-800">
              🛡️ Garantia: Ou devolvemos seu dinheiro.
            </p>
          </div>
          
          <div className="bg-red-100 border-2 border-red-300 rounded-lg p-6">
            <p className="text-lg font-bold text-red-800">
              ⏰ Vagas limitadas por semana — agende agora e garante sua sessão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
