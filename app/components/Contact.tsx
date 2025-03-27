"use client"

import { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
 
    console.log('Form submitted:', formState);
  
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    alert('Obrigado pela sua mensagem. Entraremos em contato em breve!');
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-[#59C13D] mt-1 shrink-0" size={20} />,
      title: "Localização do Escritório",
      details: "123 Rua Ambiental\nSão Paulo, SP 01234-000"
    },
    {
      icon: <Mail className="text-[#59C13D] mt-1 shrink-0" size={20} />,
      title: "E-mail",
      details: "info@biomare.com.br\nsuporte@biomare.com.br"
    },
    {
      icon: <Phone className="text-[#59C13D] mt-1 shrink-0" size={20} />,
      title: "Telefone",
      details: "+55 (11) 1234-5678\nSegunda a Sexta, 9h-17h"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 mb-2 rounded-full text-xs uppercase tracking-wider bg-[#59C13D]/10 text-[#59C13D] font-medium">
            Entre em Contato
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] tracking-tight">Fale Conosco</h2>
          
          <p className="text-lg md:text-xl text-[#A9A9A9] mb-12 mt-4 max-w-2xl mx-auto">
            Tem dúvidas ou precisa de serviços de consultoria ambiental? Entre em contato com nossa equipe e responderemos prontamente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-[#333333]">Informações de Contato</h3>
              <p className="text-[#333333]/70">
                Preencha o formulário ou entre em contato diretamente usando as informações abaixo.
              </p>
            </div>

            <ul className="space-y-6">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start space-x-4">
                  {info.icon}
                  <div>
                    <h4 className="text-[#333333] font-medium">{info.title}</h4>
                    <p className="text-[#333333]/70 mt-1">
                      {info.details}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-[#F5F9F3]/20 p-8 rounded-lg border border-[#59C13D]/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#333333] mb-2">
                    Seu Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-md border border-[#59C13D]/20 focus:border-[#59C13D] focus:ring focus:ring-[#59C13D]/20 focus:outline-none transition-all"
                    placeholder="João Silva"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-2">
                    Endereço de Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-md border border-[#59C13D]/20 focus:border-[#59C13D] focus:ring focus:ring-[#59C13D]/20 focus:outline-none transition-all"
                    placeholder="joao@exemplo.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-[#333333] mb-2">
                  Assunto
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-md border border-[#59C13D]/20 focus:border-[#59C13D] focus:ring focus:ring-[#59C13D]/20 focus:outline-none transition-all"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-[#333333] mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-md border border-[#59C13D]/20 focus:border-[#59C13D] focus:ring focus:ring-[#59C13D]/20 focus:outline-none transition-all resize-none"
                  placeholder="Conte-nos sobre suas necessidades ambientais..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#59C13D] text-white rounded-md hover:bg-[#59C13D]/90 transition-all duration-300 shadow-sm"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
