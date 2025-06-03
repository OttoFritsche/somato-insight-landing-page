
import React from 'react';
import CTAButton from './CTAButton';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <CTAButton 
            onClick={() => console.log('CTA Final clicado - Diagnóstico por R$197')}
            className="text-xl mb-8"
          >
            🟦 Quero meu Diagnóstico Somático por R$197
          </CTAButton>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400">
            © {currentYear} Diagnóstico Somático de Alta Precisão. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
