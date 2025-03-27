import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export function Hero(){
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-bg-light z-0"></div>
        
        {/* Primeira bola */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/10 animate-floatSmooth"></div>
        
        {/* Segunda bola */}
        <div className="absolute bottom-1/4 left-1/4 w-60 h-60 rounded-full bg-accent/10 animate-floatSmooth"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20">
        <div>
          <span className="inline-block px-3 py-1 mb-6 rounded-full text-xs uppercase tracking-wider bg-[#59C13D]/10 text-[#59C13D] font-medium">
            Consultoria Ambiental
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] tracking-tight mb-6 max-w-4xl mx-auto text-balance">
          <span className="text-[#1A7BBF] font-bold">Soluções</span> para sua empresa operar sem riscos
        </h1>
        
        <p className="text-lg md:text-xl text-[#A9A9A9] mb-12 mt-4 max-w-2xl mx-auto">
          Garantimos licenciamento ambiental, corte de vegetação e regularização imobiliária para o funcionamento seguro da sua empresa.
        </p>
        
        <div className="mt-20">
          <Link
            href="#about"
            className="px-6 py-3 bg-[#59C13D] text-white rounded-md hover:bg-[#59C13D]/90 transition-all duration-300 shadow-sm"
          >
            Conheça Nossa Abordagem
          </Link>
        </div>
        
        <div className="absolute bottom-10 left-1/2 smooth-bounce">
          <Link
            href="#about"
            aria-label="Rolar para Sobre"
            className="flex flex-col items-center text-[#333333]/70 hover:text-[#333333] transition-colors duration-300"
          >
            <span className="text-xs mb-2">Role para saber mais</span>
            <ArrowDown size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};
