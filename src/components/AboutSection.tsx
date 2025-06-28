const AboutSection = () => {
  return (
    <section id="about" className="pt-6 pb-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-14 text-center">Sobre mí</h2>
        <div className="prose prose-invert max-w-none pb-6">
          <p className="text-muted-foreground text-center text-lg leading-relaxed">
            Soy <mark>desarrollador fullstack</mark> y me gusta crear aplicaciones que realmente le sirvan a la gente, ya sea para ahorrarles tiempo o facilitar algo que antes era complicado.
          </p>
          <p className="text-muted-foreground text-center text-lg leading-relaxed mt-5">
            <mark>Trabajo con JavaScript</mark> y tengo una filosofía simple: prefiero invertir tiempo al principio para hacer las cosas bien que estar parcheando problemas después. Me considero autodidacta y disfruto cuando puedo resolver un problema técnico complejo y el resultado termina siendo algo genuinamente útil.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
