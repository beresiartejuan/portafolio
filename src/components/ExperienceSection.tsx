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
    position: "Desarrollador Fullstack · Sistema de gestión para tienda de ropa",
    company: "Única",
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

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-5">
      <div className="md:col-span-5">
        <p className="text-sm text-primary tabular-nums">{experience.period}</p>
        <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-[-0.02em] leading-tight text-foreground">
          {experience.company}
        </h3>
        <p className="mt-1 text-base text-muted-foreground">{experience.position}</p>
      </div>

      <ul className="md:col-span-7 space-y-3 text-base text-foreground leading-relaxed">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </article>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Experiencia laboral</h2>

        <div className="space-y-12 md:space-y-14">
          {experienceData.map((experience, index) => (
            <Reveal key={experience.id} delay={Math.min(index * 60, 180)}>
              <ExperienceCard experience={experience} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;