import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const services = [
  "Avaliação da Qualidade da Água", 
  "Pesquisas Ecológicas", 
  "Conformidade Ambiental", 
  "Gestão de Resíduos", 
  "Planejamento de Sustentabilidade", 
  "Educação Ambiental"
];

const quickLinks = [
  { name: "Sobre Nós", href: "#about" },
  { name: "Nossos Serviços", href: "#services" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
  { name: "Política de Privacidade", href: "#" },
  { name: "Termos de Serviço", href: "#" }
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bg-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white mb-2">
              <span className="font-semibold text-2xl">Biomare</span>
            </div>
            <p className="text-white/70 text-sm">
              Serviços líderes de consultoria ambiental comprometidos com soluções sustentáveis e gestão ecológica.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-white/60 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-primary  transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href="#" className="text-white/60 hover:text-primary  transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-white/60 hover:text-primary  transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {currentYear} Biomare Consultoria Ambiental. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-white/50 hover:text-white/80 transition-colors text-sm">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-white/50 hover:text-white/80 transition-colors text-sm">
              Termos de Serviço
            </Link>
            <Link href="#" className="text-white/50 hover:text-white/80 transition-colors text-sm">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
