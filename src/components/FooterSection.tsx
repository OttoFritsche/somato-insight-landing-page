
import React from 'react';
import CTAButton from './CTAButton';
import { Sparkles } from 'lucide-react';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTMwIDMwbDMwLTMwSDB2NjBoNjBWMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="mb-12">
          <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-pulse" />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Chega de atender{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
              no escuro
            </span>
            ! Transforme seus diagnósticos e resultados com a{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Imersão Triagem Arqueira
            </span>
            .
          </h2>
        </div>
        
        <div className="mb-12">
          <div className="transform hover:scale-105 transition-all duration-300 mb-8">
            <CTAButton 
              onClick={() => console.log('CTA Final clicado - Imersão por R$97')}
              className="text-xl md:text-2xl py-6 px-12 shadow-2xl shadow-blue-500/25 border-2 border-blue-400/50 hover:border-blue-300"
            >
              🟦 SIM, QUERO DOMINAR A TRIAGEM ARQUEIRA POR APENAS R$97!
            </CTAButton>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm p-6 rounded-2xl border border-orange-300/30 max-w-3xl mx-auto">
            <p className="text-orange-200 text-sm md:text-base leading-relaxed">
              ⚡ <strong>Oferta por tempo limitado:</strong> Após a imersão ao vivo, a gravação completa e materiais complementares poderão ser oferecidos por um valor maior. Aproveite o preço especial da edição ao vivo!
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <p className="text-gray-400 text-sm md:text-base">
            © {currentYear} Imersão Triagem Arqueira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
