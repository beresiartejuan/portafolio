import { useState } from "react";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="pt-6 pb-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Sobre mí</h2>

        <div className="pb-4 max-w-4xl text-pretty">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Soy un desarrollador con una fuerte curiosidad por cómo funcionan las cosas y una obsesión sana por hacerlas bien.
            Me gusta crear{' '}
            <mark className="bg-primary/5 text-primary/80 px-1 rounded">productos digitales</mark>{' '}
            que no solo funcionen, sino que sean claros, rápidos y agradables de usar.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed mt-5">
            He trabajado en proyectos muy distintos entre sí: desde{' '}
            <mark className="bg-primary/5 text-primary/80 px-1 rounded">sistemas de gestión</mark>{' '}
            para negocios pequeños, hasta{' '}
            <mark className="bg-primary/5 text-primary/80 px-1 rounded">plataformas educativas</mark>{' '}
            y{' '}
            <mark className="bg-primary/5 text-primary/80 px-1 rounded">herramientas pensadas para desarrolladores</mark>.
            Esa variedad me enseñó a adaptarme rápido, a priorizar lo importante y a escribir código pensando en quien lo va a mantener mañana.
          </p>

          {isExpanded && (
            <div className="mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Además de programar, me gusta{' '}
                <mark className="bg-primary/5 text-primary/80 px-1 rounded">enseñar y compartir conocimiento</mark>.
                {' '}Dar clases particulares me ayudó a mejorar mi forma de comunicar ideas técnicas de manera simple y a recordar conceptos
                fundamentales dentro de varias áreas de la programación.
              </p>
              <p>
                Arranqué en el desarrollo web explorando el{' '}
                <mark className="bg-primary/5 text-primary/80 px-1 rounded">frontend</mark>, pero con el tiempo me fui metiendo cada vez más en
                el{' '}
                <mark className="bg-primary/5 text-primary/80 px-1 rounded">backend</mark>, lo que me permitió tener una visión completa de los
                proyectos. Disfruto mucho pensar la{' '}
                <mark className="bg-primary/5 text-primary/80 px-1 rounded">arquitectura</mark>, tomar decisiones técnicas y convertir ideas
                abstractas en soluciones reales.
              </p>
              <p>
                Hoy sigo aprendiendo todos los días, probando{' '}
                <mark className="bg-primary/5 text-primary/80 px-1 rounded">nuevas tecnologías</mark>{' '}
                y buscando{' '}
                <mark className="bg-primary/5 text-primary/80 px-1 rounded">desafíos que me motiven</mark>.
                {' '}Si hay algo que me define, es que disfruto el proceso tanto como el resultado final.
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {isExpanded ? "Ver menos" : "Ver más"}
            <span
              className={`ml-1 text-xs transition-transform duration-200 ${isExpanded ? "rotate-180" : ""
                }`}
            >
              ▼
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
