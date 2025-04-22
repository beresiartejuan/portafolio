
import React from 'react';
import { Code, Database, Server, Laptop, Monitor, Settings, Wrench } from 'lucide-react';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="skill-card animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="mb-4 flex items-center gap-2">
              <Code size={24} className="text-primary" />
              <h3 className="text-xl font-semibold">Lenguajes</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">JS</span>
                </div>
                <span className="text-sm text-muted-foreground">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">TS</span>
                </div>
                <span className="text-sm text-muted-foreground">TypeScript</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">PHP</span>
                </div>
                <span className="text-sm text-muted-foreground">PHP</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">PY</span>
                </div>
                <span className="text-sm text-muted-foreground">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">GO</span>
                </div>
                <span className="text-sm text-muted-foreground">Golang</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">SQL</span>
                </div>
                <span className="text-sm text-muted-foreground">SQL</span>
              </div>
            </div>
          </div>

          <div className="skill-card animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="mb-4 flex items-center gap-2">
              <Monitor size={24} className="text-primary" />
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">React</span>
                </div>
                <span className="text-sm text-muted-foreground">React</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">Vue</span>
                </div>
                <span className="text-sm text-muted-foreground">Vue.js</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">Next</span>
                </div>
                <span className="text-sm text-muted-foreground">Next.js</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">TW</span>
                </div>
                <span className="text-sm text-muted-foreground">Tailwind</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">SASS</span>
                </div>
                <span className="text-sm text-muted-foreground">Sass</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">Redux</span>
                </div>
                <span className="text-sm text-muted-foreground">Redux</span>
              </div>
            </div>
          </div>

          <div className="skill-card animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="mb-4 flex items-center gap-2">
              <Server size={24} className="text-primary" />
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">Node</span>
                </div>
                <span className="text-sm text-muted-foreground">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">Exp</span>
                </div>
                <span className="text-sm text-muted-foreground">Express</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">GQL</span>
                </div>
                <span className="text-sm text-muted-foreground">GraphQL</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">REST</span>
                </div>
                <span className="text-sm text-muted-foreground">REST APIs</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">Laravel</span>
                </div>
                <span className="text-sm text-muted-foreground">Laravel</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">Flask</span>
                </div>
                <span className="text-sm text-muted-foreground">Flask</span>
              </div>
            </div>
          </div>

          <div className="skill-card animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="mb-4 flex items-center gap-2">
              <Database size={24} className="text-primary" />
              <h3 className="text-xl font-semibold">Bases de Datos</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">Mongo</span>
                </div>
                <span className="text-sm text-muted-foreground">MongoDB</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">PG</span>
                </div>
                <span className="text-sm text-muted-foreground">PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">MySQL</span>
                </div>
                <span className="text-sm text-muted-foreground">MySQL</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">Redis</span>
                </div>
                <span className="text-sm text-muted-foreground">Redis</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">FB</span>
                </div>
                <span className="text-sm text-muted-foreground">Firebase</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">ES</span>
                </div>
                <span className="text-sm text-muted-foreground">Elasticsearch</span>
              </div>
            </div>
          </div>

          <div className="skill-card animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="mb-4 flex items-center gap-2">
              <Wrench size={24} className="text-primary" />
              <h3 className="text-xl font-semibold">DevOps</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">Docker</span>
                </div>
                <span className="text-sm text-muted-foreground">Docker</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">K8s</span>
                </div>
                <span className="text-sm text-muted-foreground">Kubernetes</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">AWS</span>
                </div>
                <span className="text-sm text-muted-foreground">AWS</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">GCP</span>
                </div>
                <span className="text-sm text-muted-foreground">GCP</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">CI/CD</span>
                </div>
                <span className="text-sm text-muted-foreground">CI/CD</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">Git</span>
                </div>
                <span className="text-sm text-muted-foreground">Git</span>
              </div>
            </div>
          </div>

          <div className="skill-card animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="mb-4 flex items-center gap-2">
              <Settings size={24} className="text-primary" />
              <h3 className="text-xl font-semibold">Otros</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">Agile</span>
                </div>
                <span className="text-sm text-muted-foreground">Agile/Scrum</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">TDD</span>
                </div>
                <span className="text-sm text-muted-foreground">TDD</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">UI/UX</span>
                </div>
                <span className="text-sm text-muted-foreground">UI/UX</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">PWA</span>
                </div>
                <span className="text-sm text-muted-foreground">PWA</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">SEO</span>
                </div>
                <span className="text-sm text-muted-foreground">SEO</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold">A11y</span>
                </div>
                <span className="text-sm text-muted-foreground">Accesibilidad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
