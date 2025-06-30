// Import all available icons
import AstroIcon from './icons/astro.icon';
import CSSIcon from './icons/css.icon';
import ExpressIcon from './icons/express.icon';
import GitIcon from './icons/git.icon';
import JavaScriptIcon from './icons/js.icon';
import JWTIcon from './icons/jwt.icon';
import LaravelIcon from './icons/laravel.icon';
import MongoDBIcon from './icons/mongodb.icon';
import NodeIcon from './icons/node.icon';
import PHPIcon from './icons/php.icon';
import PostgreSQLIcon from './icons/postgresql.icon';
import ReactIcon from './icons/react.icon';
import RedisIcon from './icons/redis.icon';
import SassIcon from './icons/sass.icon';
import SWCIcon from './icons/swc.icon';
import TailwindIcon from './icons/tailwind.icon';
import TypeScriptIcon from './icons/ts.icon';
import TursoIcon from './icons/turso.icon';

// Define the skills data with their corresponding icons and names
const skills = [
  // Programming Languages
  { icon: JavaScriptIcon, name: 'JavaScript' },
  { icon: TypeScriptIcon, name: 'TypeScript' },
  { icon: PHPIcon, name: 'PHP' },

  // Frontend Frameworks/Libraries
  { icon: ReactIcon, name: 'React' },
  { icon: AstroIcon, name: 'Astro' },

  // Backend Frameworks/Libraries
  { icon: NodeIcon, name: 'Node.js' },
  { icon: ExpressIcon, name: 'Express' },
  { icon: LaravelIcon, name: 'Laravel' },

  // Databases
  { icon: MongoDBIcon, name: 'MongoDB' },
  { icon: PostgreSQLIcon, name: 'PostgreSQL' },
  { icon: RedisIcon, name: 'Redis' },
  { icon: TursoIcon, name: 'Turso' },

  // Styling
  { icon: TailwindIcon, name: 'Tailwind CSS' },
  { icon: SassIcon, name: 'Sass' },
  { icon: CSSIcon, name: 'CSS' },

  // Tools and Utilities
  { icon: GitIcon, name: 'Git' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Skills</h2>

        {/* Responsive grid for skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 mt-12">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="skill-card flex flex-col items-center p-4 animate-fade-in hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 flex items-center justify-center mb-3 bg-secondary/30 rounded-lg p-2 hover:bg-secondary/50 transition-colors duration-300">
                  <IconComponent className="w-full h-full text-primary" />
                </div>
                <span className="text-sm text-center text-muted-foreground font-medium">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;