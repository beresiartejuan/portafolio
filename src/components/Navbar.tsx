
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#hero" className="text-xl font-bold text-primary">JB</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Sobre mí</a>
            <a href="#experience" className="text-foreground hover:text-primary transition-colors">Experiencia</a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">Proyectos</a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contacto</a>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <a href="https://github.com/juanberesiarte" target="_blank" rel="noopener noreferrer" 
              className="text-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/juanberesiarte" target="_blank" rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-foreground"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
              onClick={toggleMenu}
            >
              Sobre mí
            </a>
            <a 
              href="#experience" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
              onClick={toggleMenu}
            >
              Experiencia
            </a>
            <a 
              href="#projects" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
              onClick={toggleMenu}
            >
              Proyectos
            </a>
            <a 
              href="#skills" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
              onClick={toggleMenu}
            >
              Contacto
            </a>
          </div>
          <div className="px-5 py-3 flex items-center space-x-3 border-t border-border">
            <a 
              href="https://github.com/juanberesiarte" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/juanberesiarte" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
