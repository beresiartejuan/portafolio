
import React from 'react';
import { Code, Database, Server } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Sobre mí</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
              <Code size={24} className="text-primary" />
            </div>
            <h3 className="font-medium">Frontend Developer</h3>
            <p className="text-sm text-muted-foreground">
              Interfaces intuitivas y experiencias de usuario excepcionales
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
              <Database size={24} className="text-primary" />
            </div>
            <h3 className="font-medium">Backend Developer</h3>
            <p className="text-sm text-muted-foreground">
              APIs robustas y arquitecturas escalables
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
              <Server size={24} className="text-primary" />
            </div>
            <h3 className="font-medium">Fullstack Developer</h3>
            <p className="text-sm text-muted-foreground">
              Soluciones completas y optimizadas
            </p>
          </div>
        </div>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground text-center leading-relaxed">
            Como arquitecto de software y cofundador de CROBF, me especializo en diseñar soluciones tecnológicas que combinan innovación y escalabilidad. Mi enfoque se centra en crear experiencias digitales que impacten positivamente en los usuarios y generen valor real para las empresas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
