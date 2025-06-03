
import React from 'react';
import CTAButton from './CTAButton';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Chega de atender no escuro! Transforme seus diagnósticos e resultados com a Imersão Triagem Arqueira.
        </h2>
        
        <div className="mb-8">
          <CTAButton 
            onClick={() => console.log('CTA Final clicado - Imersão por R$97')}
            className="text-xl mb-6"
          >
            🟦 SIM, QUERO DOMINAR A TRIAGEM ARQUEIRA POR APENAS R$97!
          </CTAButton>
          
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Após a imersão ao vivo, a gravação completa e materiais complementares poderão ser oferecidos por um valor maior. Aproveite o preço especial da edição ao vivo!
          </p>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400">
            © {currentYear} Imersão Triagem Arqueira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
