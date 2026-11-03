import React from 'react';
import Reveal from './Reveal';

const projects = [
  {
    title: "Fabrik",
    description: "Gestión de fábrica: lotes, recetas y trazabilidad. Monorepo TypeScript con dominio DDD puro, API en NestJS + Turso y app en Next.js con demo sin backend.",
    tags: ["TypeScript", "NestJS", "Next.js", "DDD"],
    image: "/projects/fabrik-js.png",
    link: "https://beresiartejuan.github.io/fabrik-js/",
    github: "https://github.com/beresiartejuan/fabrik-js",
    category: "fullstack"
  },
  {
    title: "Colors",
    description: "Visualizador de paletas de color sobre plantillas reales para ver cómo se comporta una paleta antes de usarla.",
    tags: ["TypeScript", "React", "Tailwind CSS"],
    image: "/projects/colors.png",
    link: "https://colors.beresiarte.xyz",
    github: "https://github.com/beresiartejuan/colors",
    category: "frontend"
  },
  {
    title: "Aki",
    description: "Agente de IA autónomo: gateway de Telegram, agent core con Ollama y sandbox de ejecución en Docker.",
    tags: ["TypeScript", "Ollama", "Docker"],
    image: "/projects/aki-assistant-ai.png",
    link: "https://aki.beresiarte.xyz",
    github: "https://github.com/beresiartejuan/aki-assistant-ai",
    category: "backend"
  },
  {
    title: "bunny.js",
    description: "Librería JavaScript ligera para manipulación del DOM y animaciones con enfoque en rendimiento y tamaño reducido.",
    tags: ["JavaScript"],
    image: "/projects/bunny-js.png",
    link: "https://bunny-js.crobf.tech",
    github: "https://github.com/CROBF-tech/bunny-js",
    category: "frontend"
  },
  {
    title: "Just",
    description: "Editor de texto minimalista para notas rápidas, enfocado en eliminar todas las distracciones posibles.",
    tags: ["JavaScript", "React"],
    image: "/projects/just.png",
    link: "https://just.beresiarte.xyz",
    github: "https://github.com/beresiartejuan/just",
    category: "frontend"
  },
  {
    title: "Typing Check",
    description: "Aplicación web para practicar y mejorar la velocidad de escritura con estadísticas.",
    tags: ["JavaScript", "React"],
    image: "/projects/typing-check.png",
    link: "https://beresiartejuan.github.io/typing-check/",
    github: "https://github.com/beresiartejuan/typing-check",
    category: "frontend"
  },
  {
    title: "Fancy Clock",
    description: "Reloj y cronómetro minimalista.",
    tags: ["JavaScript", "React"],
    image: "/projects/fancy-clock.png",
    link: "https://clock.beresiarte.xyz",
    github: "https://github.com/beresiartejuan/fancy-clock",
    category: "frontend"
  },
  {
    title: "Blog personal",
    description: "Blog personal en el que escribo sobre tecnología, programación y otros temas de interés.",
    tags: ["Astro", "TypeScript", "Tailwind CSS"],
    image: "/projects/blog.png",
    link: "https://blog.beresiarte.xyz",
    github: "https://github.com/beresiartejuan/beresiarte",
    category: "fullstack"
  }
];

const filters = [
  { key: "all", label: "Todos" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "fullstack", label: "Fullstack" }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = React.useState("all");

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Proyectos</h2>

        <div className="flex flex-wrap gap-5 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`text-[15px] transition-colors hover:text-primary ${
                activeFilter === filter.key
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              }`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="space-y-16">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.title} delay={Math.min(index * 60, 120)}>
              <article className="group">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-md"
                    aria-label={`Ver demo de ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={`Captura de pantalla de ${project.title}`}
                      loading="lazy"
                      className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </a>

                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                      <h3 className="text-xl font-medium text-foreground">{project.title}</h3>
                      <div className="flex items-center gap-4 text-[15px]">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          Demo
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          Código
                        </a>
                      </div>
                    </div>

                    <p className="mt-3 text-foreground/85 leading-relaxed max-w-[50ch]">{project.description}</p>

                    <div className="flex flex-wrap gap-3 mt-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-[13px] text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;