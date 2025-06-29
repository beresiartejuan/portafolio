
import React from 'react';
import { Code, Link, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "bunny.js",
      description: "Librería JavaScript ligera para manipulación del DOM y animaciones con enfoque en rendimiento y tamaño reducido.",
      tags: ["JavaScript"],
      link: "https://bunny-js.dev",
      github: "https://github.com/CROBF-tech/bunny-js",
      category: "frontend"
    },
    {
      title: "Just",
      description: "Editor de texto minimalista para notas rápidas, enfocado en eliminar todas las distracciones posibles.",
      tags: ["Javascript", "React"],
      link: "https://just.beresiarte.xyz",
      github: "https://github.com/beresiartejuan/just",
      category: "frontend"
    },
    {
      title: "TypingCheck",
      description: "Aplicación web para practicar y mejorar la velocidad de escritura con estadísticas.",
      tags: ["JavaScript", "React"],
      link: "https://beresiartejuan.github.io/typing-check/",
      github: "https://github.com/beresiartejuan/typing-check",
      category: "frontend"
    },
    {
      title: "Fancy Clock",
      description: "Reloj y crónometro minialista",
      tags: ["JavaScript", "React"],
      link: "https://clock.beresiarte.xyz",
      github: "https://github.com/beresiartejuan/fancy-clock",
      category: "frontend"
    },
    {
      title: "Blog personal",
      description: "Blog personal en el que escribo sobre tecnología, programación y otros temas de interés.",
      tags: ["Astro", "TypeScript", "Tailwind CSS"],
      link: "https://blog.beresiarte.xyz",
      github: "https://github.com/beresiartejuan/beresiarte",
      category: "fullstack"
    }
  ];

  const [activeFilter, setActiveFilter] = React.useState("all");

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Proyectos</h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            onClick={() => setActiveFilter("all")}
          >
            Todos
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === "frontend"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            onClick={() => setActiveFilter("frontend")}
          >
            Frontend
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === "backend"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            onClick={() => setActiveFilter("backend")}
          >
            Backend
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === "fullstack"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            onClick={() => setActiveFilter("fullstack")}
          >
            Fullstack
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-secondary px-2 py-1 rounded-full text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto flex justify-between pt-4 border-t border-border">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Link size={16} />
                  <span>Demo</span>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  <span>Código</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
