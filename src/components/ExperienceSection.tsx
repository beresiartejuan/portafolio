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
      "Supervisión de equipos de desarrollo fullstack para múltiples proyectos."
    ],
    animationDelay: "0s"
  },
  {
    id: 2,
    position: "Desarrollador Fullstack",
    company: "HexaDevs",
    period: "2025 - Presente",
    responsibilities: [
      "Contribución en la fase inicial del proyecto y definición tecnológica.",
      "Desarrollo de una academia virtual construida con Astro y TailwindCSS.",
      "Gestión de rutas de contenido para los cursos",
      "Implementación del sistema de login con Auth0.",
      "Optimización del rendimiento del frontend en Astro."
    ],
    animationDelay: "0.2s"
  },
  {
    id: 3,
    position: "Desarrollador Fullstack",
    company: "Automóviles Atuel",
    period: "2024 - 2025",
    responsibilities: [
      "Desarrollo de un sitio auto-administrable para concesionaria de autos.",
      "Implementación de CRUD para vehículos y filtros avanzados de búsqueda.",
      "Diseñado para permitir gestión sin intervención técnica por parte del cliente."
    ],
    animationDelay: "0.4s"
  },
  {
    id: 4,
    position: "Desarrollador Fullstack",
    company: "Única - Sistema de gestión para tienda de ropa",
    period: "2025",
    responsibilities: [
      "Desarrollo de una app intuitiva para reemplazar el control manual de stock.",
      "Gestión de productos, precios, etiquetas e inventario de forma simple y rápida.",
      "Implementación de un sistema de caché para mejorar el rendimiento diario.",
      "La solución permitió mayor organización, eficiencia y reducción de costes en la tienda."
    ],
    animationDelay: "0.6s"
  },
  {
    id: 6,
    position: "Tutor de Programación",
    company: "Clases Particulares",
    period: "2023 - 2024",
    responsibilities: [
      "Enseñanza personalizada de desarrollo web, desde fundamentos hasta temas avanzados.",
      "Adaptación del contenido a cada estudiante y sus objetivos personales.",
      "Transmisión del entusiasmo por el desarrollo como parte del proceso de aprendizaje.",
      "Fortalecimiento de habilidades de comunicación técnica."
    ],
    animationDelay: "1s"
  },
  {
    id: 7,
    position: "Desarrollador Fullstack Freelance",
    company: "Fiverr",
    period: "2023 - 2024",
    responsibilities: [
      "Desarrollo de soluciones personalizadas para clientes internacionales.",
      "Creación de aplicaciones web usando React y Node.js.",
      "Gestión de proyectos de principio a fin incluyendo planificación, desarrollo y entrega."
    ],
    animationDelay: "1.2s"
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