import Link from 'next/link';

export function Navbar(){
    
  const menuItems = [
    { id: 'about', label: 'Sobre' },
    { id: 'services', label: 'Serviços' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white py-6 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" passHref>
            <span className="cursor-pointer text-primary font-semibold text-2xl">Biomare</span>
          </Link>
          <span className="hidden sm:inline-block text-text-primary font-light text-sm">Consultoria Ambiental</span>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link key={item.id} href={`#${item.id}`} passHref>
              <span className="cursor-pointer text-text-primary hover:text-primary transition-colors duration-300">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
