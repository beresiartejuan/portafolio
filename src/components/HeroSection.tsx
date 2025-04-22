
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="flex items-center justify-center py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Juan <span className="text-primary hover:border-b-4 hover:border-b-primary transition-all">Beresiarte</span>
            </h1>
            <h2 className="text-xl text-muted-foreground">
              Desarrollador Fullstack & Arquitecto de Software
            </h2>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md transition-colors"
              >
                Contactar
              </a>
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/beresiartejuan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/beresiartejuan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary/10 rounded-md blur-xl"></div>
              <img 
                src="/me.jpeg" 
                alt="Juan Beresiarte" 
                className="relative z-10 w-full h-full object-cover rounded-md border-2 border-primary/20 transition-all hover:rotate-2 hover:shadow-xl hover:shadow-primary/70"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
