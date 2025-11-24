import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold gradient-text">Damian Prus</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('about')} className="nav-link-bloom hover:text-blue-400 transition-colors">O mnie</button>
              <button onClick={() => scrollToSection('skills')} className="nav-link-bloom hover:text-blue-400 transition-colors">Kompetencje</button>
              <button onClick={() => scrollToSection('projects')} className="nav-link-bloom hover:text-blue-400 transition-colors">Projekty</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link-bloom hover:text-blue-400 transition-colors">Kontakt</button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/DamianPrus" target="_blank" rel="noopener noreferrer" className="icon-link-bloom hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/damian-prus5/" target="_blank" rel="noopener noreferrer" className="icon-link-bloom hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:damian.prus.contact@gmail.com" className="icon-link-bloom hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="nav-link-bloom hover:text-blue-400 transition-colors text-left">O mnie</button>
              <button onClick={() => scrollToSection('skills')} className="nav-link-bloom hover:text-blue-400 transition-colors text-left">Kompetencje</button>
              <button onClick={() => scrollToSection('projects')} className="nav-link-bloom hover:text-blue-400 transition-colors text-left">Projekty</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link-bloom hover:text-blue-400 transition-colors text-left">Kontakt</button>
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/DamianPrus" target="_blank" rel="noopener noreferrer" className="icon-link-bloom hover:text-blue-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/damian-prus5/" target="_blank" rel="noopener noreferrer" className="icon-link-bloom hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:damian.prus.contact@gmail.com" className="icon-link-bloom hover:text-blue-400 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
