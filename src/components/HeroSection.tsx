import { Github, Linkedin, ArrowDown } from 'lucide-react';
import Reveal from './Reveal';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-svh flex items-center pt-14 pb-20">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-base text-muted-foreground">
            Desarrollador Fullstack &amp; Arquitecto de Software
          </p>
          <h1 className="mt-3 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-[-0.03em] leading-[0.95]">
            Juan Beresiarte
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">
            <div className="md:col-span-7">
              <p className="text-lg text-foreground/90 max-w-xl leading-relaxed">
                Construyo productos digitales claros, rápidos y agradables de usar.
                Especializado en frontend, backend y arquitectura de software.
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-8">
                <a
                  href="#contact"
                  className="primary-button"
                >
                  Contactar
                </a>
                <a
                  href="https://github.com/beresiartejuan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/beresiartejuan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div className="md:col-span-5 flex justify-center md:justify-end">
              <img
                src="/me.jpeg"
                alt="Juan Beresiarte"
                className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-md"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Ir a Sobre mí"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;