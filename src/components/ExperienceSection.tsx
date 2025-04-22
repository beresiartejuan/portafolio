import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Experiencia Laboral</h2>
        
        <div className="space-y-8">
          <div className="bg-card rounded-lg p-8 border border-border animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between mb-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">Cofundador & CTO</h3>
                <h4 className="text-lg font-medium">CROBF</h4>
              </div>
              <div className="flex items-center mt-2 sm:mt-0 text-muted-foreground">
                <Calendar size={16} className="mr-1" />
                <span>2018 - Presente</span>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Liderazgo en la estrategia tecnológica y arquitectura de software de la empresa.</li>
              <li>Desarrollo y mantenimiento de CROBF Hub, plataforma central para la gestión de proyectos.</li>
              <li>Implementación de metodologías ágiles y mejores prácticas de desarrollo.</li>
              <li>Supervisión de equipos de desarrollo fullstack para múltiples proyectos.</li>
              <li>Creación de CROBF Labs, división dedicada a la investigación y desarrollo de tecnologías innovadoras.</li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg p-8 border border-border animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="flex flex-col sm:flex-row justify-between mb-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">Senior Fullstack Developer</h3>
                <h4 className="text-lg font-medium">HexaDevs</h4>
              </div>
              <div className="flex items-center mt-2 sm:mt-0 text-muted-foreground">
                <Calendar size={16} className="mr-1" />
                <span>2015 - 2018</span>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Desarrollo de aplicaciones web complejas utilizando React, Node.js y bases de datos NoSQL.</li>
              <li>Implementación de arquitecturas de microservicios para mejorar la escalabilidad.</li>
              <li>Colaboración en la optimización de rendimiento y seguridad de aplicaciones existentes.</li>
              <li>Mentoría a desarrolladores junior y liderazgo técnico en proyectos clave.</li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg p-8 border border-border animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="flex flex-col sm:flex-row justify-between mb-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">Frontend Developer</h3>
                <h4 className="text-lg font-medium">Secretum Technologies</h4>
              </div>
              <div className="flex items-center mt-2 sm:mt-0 text-muted-foreground">
                <Calendar size={16} className="mr-1" />
                <span>2013 - 2015</span>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Diseño e implementación de interfaces de usuario para aplicaciones web con enfoque en UX/UI.</li>
              <li>Desarrollo frontend con HTML5, CSS3, JavaScript y frameworks como Angular.</li>
              <li>Integración con APIs RESTful y optimización del rendimiento en el lado del cliente.</li>
              <li>Participación en la implementación de pruebas automatizadas y despliegue continuo.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
