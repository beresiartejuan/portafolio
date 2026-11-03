import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const facts = [
  ["Dónde estoy", "Mendoza, Argentina"],
  ["Qué hago", "Fullstack & arquitectura de software"],
  ["En qué ando", "TypeScript, React, Astro, Node.js"],
  ["Buscando", "Empleo como programador"],
];

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Sobre mí</h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <Reveal className="md:col-span-7">
            <div className="max-w-[60ch] space-y-6 leading-relaxed">
              <p className="text-lg text-foreground">
                Soy un desarrollador con una fuerte curiosidad por cómo funcionan las cosas y una obsesión sana por hacerlas bien.
                Me gusta crear productos digitales que no solo funcionen, sino que sean claros, rápidos y agradables de usar.
              </p>

              <p className="text-foreground/85">
                He trabajado en proyectos muy distintos entre sí: desde sistemas de gestión para negocios pequeños,
                hasta plataformas educativas y herramientas pensadas para desarrolladores. Esa variedad me enseñó
                a adaptarme rápido, a priorizar lo importante y a escribir código pensando en quien lo va a mantener mañana.
              </p>

              {isExpanded && (
                <div className="space-y-6 text-foreground/85 animate-fade-in">
                  <p>
                    Además de programar, me gusta enseñar y compartir conocimiento. Dar clases particulares me ayudó a mejorar
                    mi forma de comunicar ideas técnicas de manera simple y a recordar conceptos fundamentales dentro de
                    varias áreas de la programación.
                  </p>
                  <p>
                    Arranqué en el desarrollo web explorando el frontend, pero con el tiempo me fui metiendo cada vez más en
                    el backend, lo que me permitió tener una visión completa de los proyectos. Disfruto mucho pensar la
                    arquitectura, tomar decisiones técnicas y convertir ideas abstractas en soluciones reales.
                  </p>
                  <p>
                    Hoy sigo aprendiendo todos los días, probando nuevas tecnologías y buscando desafíos que me motiven.
                    Si hay algo que me define, es que disfruto el proceso tanto como el resultado final.
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                {isExpanded ? "Ver menos" : "Ver más"}
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </Reveal>

          <Reveal delay={140} className="md:col-span-5">
            <dl className="space-y-6">
              {facts.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-sm text-muted-foreground">{label}</dt>
                  <dd className="text-foreground mt-1">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;