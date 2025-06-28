import React from 'react';
import { Calendar } from 'lucide-react';

interface Experience {
  id: number;
  position: string;
  company: string;
  period: string;
  responsibilities: string[];
  animationDelay?: string;
}

const experienceData: Experience[] = [
  {
    id: 1,
    position: "Cofundador & Desarrollador Fullstack",
    company: "CROBF",
    period: "2024 - Presente",
    responsibilities: [
      "Liderazgo en la estrategia tecnológica y arquitectura de software de la empresa.",
      "Desarrollo y mantenimiento de CROBF Hub, plataforma central para la gestión de proyectos.",
      "Implementación de metodologías ágiles y mejores prácticas de desarrollo.",
      "Supervisión de equipos de desarrollo fullstack para múltiples proyectos.",
      "Creación de CROBF Labs, división dedicada a la investigación y desarrollo de tecnologías innovadoras."
    ],
    animationDelay: "0s"
  },
  {
    id: 2,
    position: "Desarrollador Fullstack",
    company: "HexaDevs",
    period: "2024 - actualidad",
    responsibilities: [
      "Desarrollo de aplicaciones web complejas utilizando React, Node.js y bases de datos NoSQL.",
      "Implementación de arquitecturas de microservicios para mejorar la escalabilidad.",
      "Colaboración en la optimización de rendimiento y seguridad de aplicaciones existentes."
    ],
    animationDelay: "0.3s"
  }
];

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (
    <div
      className="bg-card rounded-lg p-8 border border-border animate-fade-in"
      style={{ animationDelay: experience.animationDelay }}
    >
      <div className="flex flex-col sm:flex-row justify-between mb-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-primary">{experience.position}</h3>
          <h4 className="text-lg font-medium">{experience.company}</h4>
        </div>
        <div className="flex items-center mt-2 sm:mt-0 text-muted-foreground">
          <Calendar size={16} className="mr-1" />
          <span>{experience.period}</span>
        </div>
      </div>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Experiencia Laboral</h2>

        <div className="space-y-8">
          {experienceData.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;