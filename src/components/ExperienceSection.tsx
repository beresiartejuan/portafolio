import React from 'react';
import Reveal from './Reveal';

interface Experience {
  id: number;
  position: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const experienceData: Experience[] = [
  {
    id: 1,
    position: "Cofundador & Desarrollador Fullstack",
    company: "CROBF",
    period: "2024 — Presente",
    responsibilities: [
      "Liderazgo en la estrategia tecnológica y arquitectura de software.",
      "Desarrollo y mantenimiento de CROBF Hub, plataforma central para la gestión de proyectos.",
      "Implementación de metodologías ágiles y mejores prácticas de desarrollo.",
      "Supervisión de equipos de desarrollo fullstack para múltiples proyectos."
    ]
  },
  {
    id: 2,
    position: "Desarrollador Fullstack",
    company: "HexaDevs",
    period: "2025 — Presente",
    responsibilities: [
      "Contribución en la fase inicial del proyecto y definición tecnológica.",
      "Desarrollo de una academia virtual construida con Astro y TailwindCSS.",
      "Gestión de rutas de contenido para los cursos.",
      "Implementación del sistema de login con Auth0.",
      "Optimización del rendimiento del frontend en Astro."
    ]
  },
  {
    id: 3,
    position: "Desarrollador Fullstack",
    company: "Automóviles Atuel",
    period: "2024 — 2025",
    responsibilities: [
      "Desarrollo de un sitio auto-administrable para concesionaria de autos.",
      "Implementación de CRUD para vehículos y filtros avanzados de búsqueda.",
      "Diseñado para permitir gestión sin intervención técnica por parte del cliente."
    ]
  },
  {
    id: 4,
    position: "Desarrollador Fullstack",
    company: "Única — Sistema de gestión para tienda de ropa",
    period: "2025",
    responsibilities: [
      "Desarrollo de una app intuitiva para reemplazar el control manual de stock.",
      "Gestión de productos, precios, etiquetas e inventario de forma simple y rápida.",
      "Implementación de un sistema de caché para mejorar el rendimiento diario.",
      "La solución permitió mayor organización, eficiencia y reducción de costes en la tienda."
    ]
  },
  {
    id: 6,
    position: "Tutor de Programación",
    company: "Clases Particulares",
    period: "2023 — 2024",
    responsibilities: [
      "Enseñanza personalizada de desarrollo web, desde fundamentos hasta temas avanzados.",
      "Adaptación del contenido a cada estudiante y sus objetivos personales.",
      "Transmisión del entusiasmo por el desarrollo como parte del proceso de aprendizaje.",
      "Fortalecimiento de habilidades de comunicación técnica."
    ]
  },
  {
    id: 7,
    position: "Desarrollador Fullstack Freelance",
    company: "Fiverr",
    period: "2023 — 2024",
    responsibilities: [
      "Desarrollo de soluciones personalizadas para clientes internacionales.",
      "Creación de aplicaciones web usando React y Node.js.",
      "Gestión de proyectos de principio a fin incluyendo planificación, desarrollo y entrega."
    ]
  }
];

const ExperienceCard: React.FC<{ experience: Experience; isLast: boolean }> = ({ experience, isLast }) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div className="absolute left-0 top-2 w-[11px] h-[11px] rounded-full bg-primary/70" />

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <div>
            <h3 className="text-base font-medium text-foreground">{experience.position}</h3>
            <p className="text-sm text-muted-foreground">{experience.company}</p>
          </div>
          <span className="text-sm text-muted-foreground tabular-nums">{experience.period}</span>
        </div>

        <ul className="space-y-2 text-base text-foreground/85 leading-relaxed">
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-primary/60 mt-0.5">•</span>
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Experiencia laboral</h2>

        <div>
          {experienceData.map((experience, index) => (
            <Reveal key={experience.id} delay={Math.min(index * 60, 180)}>
              <ExperienceCard
                experience={experience}
                isLast={index === experienceData.length - 1}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;