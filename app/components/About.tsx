import { CheckCircle } from 'lucide-react';

export function About(){
  const values = [
    {
      title: "Sustentabilidade",
      description: "Promovo práticas ecológicas que minimizam o impacto ambiental."
    },
    {
      title: "Especialização",
      description: "Como bióloga, trago conhecimento especializado e experiência prática."
    },
    {
      title: "Integridade",
      description: "Mantenho os mais altos padrões éticos em todos os meus serviços."
    },
    {
      title: "Dedicação",
      description: "Ofereço atendimento personalizado e dedicado a cada cliente."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5F9F3]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 mb-2 rounded-full text-xs uppercase tracking-wider bg-[#59C13D]/10 text-[#59C13D] font-medium">
              Sobre a Biomare
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] tracking-tight">Consultoria Ambiental</h2>
            
            <p className="text-[#333333]/80 leading-relaxed">
              A Biomare é liderada por Jéssica Schmitt, bióloga especializada em consultoria ambiental, que oferece soluções personalizadas para empresas que precisam navegar por regulamentações ambientais complexas e promover práticas sustentáveis.
            </p>
            
            <p className="text-[#333333]/80 leading-relaxed">
              Com formação em Biologia e experiência no setor ambiental, Jéssica trabalha diretamente com cada cliente para fornecer estratégias personalizadas que equilibram a responsabilidade ecológica com as necessidades práticas de negócios.
            </p>
            
            <div className="pt-4">
              <button className="px-5 py-2.5 bg-transparent border border-[#59C13D] text-[#59C13D] rounded-md hover:bg-[#59C13D] hover:text-white transition-all duration-300">
                Conheça Meu Trabalho
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm border border-[#59C13D]/10 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#59C13D] shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-[#333333] text-lg mb-2">{value.title}</h3>
                    <p className="text-[#333333]/70 text-sm">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};