import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full backdrop-blur-md bg-[#003566]/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/">
          <span className="text-xl font-bold bg-gradient-to-r from-[#ffd60a] to-yellow-500 bg-clip-text text-transparent">
            Mateo Galvez Portfolio
          </span>
          </a>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#home" className="hover:text-[#ffd60a] hover:border-b-4 transition-colors">Inicio</a>
              <a href="#projects" className="hover:text-[#ffd60a] hover:border-b-4 transition-colors">Proyectos</a>
              <a href="#about" className="hover:text-[#ffd60a] hover:border-b-4 transition-colors">Sobre mi</a>
              <a href="#contact" className="hover:text-[#ffd60a] hover:border-b-4 transition-colors">Contacto</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/matgal21" className="hover:text-blue-500 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/mateo-galvez-618000225/" className="hover:text-sky-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:mateogalvez123321@gmail.com" className="hover:text-red-500 ">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-md bg-black/30">
            <a href="#home" className="block px-3 py-2 hover:text-[#ffd60a] transition-colors duration-300 ease-in-out justify-center text-center hover:border-b-2 t">Inicio</a>
            <a href="#projects" className="block px-3 py-2 hover:text-[#ffd60a] transition-colors duration-300 ease-in-out justify-center text-center hover:border-b-2">Proyectos</a>
            <a href="#about" className="block px-3 py-2 hover:text-[#ffd60a] transition-colors duration-300 ease-in-out justify-center text-center hover:border-b-2">Sobre mi</a>
            <a href="#contact" className="block px-3 py-2 hover:text-[#ffd60a] transition-colors duration-300 ease-in-out justify-center text-center hover:border-b-2 ">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
}