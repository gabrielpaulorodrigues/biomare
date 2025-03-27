import { 
  Droplets, 
  TreePine, 
  FileCheck, 
  Recycle, 
  AreaChart, 
  School 
} from 'lucide-react';

export function Services() {

  const services = [
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Avaliação da Qualidade da Água",
      description: "Avaliação abrangente dos recursos hídricos, incluindo amostragem, análise e estratégias de remediação para lagos, rios e águas subterrâneas."
    },
    {
      icon: <TreePine className="h-6 w-6" />,
      title: "Pesquisas Ecológicas",
      description: "Avaliações detalhadas de habitats, pesquisas de vida selvagem e estudos de impacto ecológico para identificar ecossistemas sensíveis e espécies protegidas."
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Conformidade Ambiental",
      description: "Garantindo que suas operações atendam às regulamentações ambientais locais, estaduais e federais por meio de auditorias, assistência em licenciamento e gestão de conformidade."
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      title: "Gestão de Resíduos",
      description: "Desenvolvimento de planos abrangentes de gestão de resíduos, programas de reciclagem e protocolos de manuseio de materiais perigosos."
    },
    {
      icon: <AreaChart className="h-6 w-6" />,
      title: "Planejamento de Sustentabilidade",
      description: "Criação de estratégias de sustentabilidade personalizadas para reduzir a pegada ambiental, melhorar a eficiência de recursos e aprimorar a responsabilidade corporativa."
    },
    {
      icon: <School className="h-6 w-6" />,
      title: "Educação Ambiental",
      description: "Programas de treinamento e workshops para organizações que buscam melhorar sua consciência ambiental e práticas sustentáveis."
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 mb-2 rounded-full text-xs uppercase tracking-wider bg-[#59C13D]/10 text-[#59C13D] font-medium">
            Nossos Serviços
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] tracking-tight">Soluções Ambientais Abrangentes</h2>
          
          <p className="text-lg md:text-xl text-[#A9A9A9] mb-12 mt-4 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços de consultoria ambiental adaptados às suas necessidades e desafios específicos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-6 rounded-lg transition-all duration-500 cursor-pointer border border-transparent hover:border-[#59C13D]/20 hover:shadow-lg hover:bg-[#F5F9F3]/20"
            >
              <div className="p-3 rounded-full inline-flex bg-[#59C13D]/10 text-[#59C13D] mb-5 transform transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-medium text-[#333333] mb-3 transition-colors duration-300 group-hover:text-[#1A7BBF]">
                {service.title}
              </h3>
              
              <p className="text-[#333333]/70 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-4 overflow-hidden transition-all duration-500 group-hover:h-8 group-hover:opacity-100 h-0 opacity-0">
                <button className="text-[#59C13D] text-sm font-medium hover:underline">
                  Saiba mais →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
