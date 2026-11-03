
// Import all available icons
import AstroIcon from './icons/astro.icon';
import CSSIcon from './icons/css.icon';
import ExpressIcon from './icons/express.icon';
import GitIcon from './icons/git.icon';
import LaravelIcon from './icons/laravel.icon';
import MongoDBIcon from './icons/mongodb.icon';
import NodeIcon from './icons/node.icon';
import PHPIcon from './icons/php.icon';
import PostgreSQLIcon from './icons/postgresql.icon';
import ReactIcon from './icons/react.icon';
import RedisIcon from './icons/redis.icon';
import SassIcon from './icons/sass.icon';
import TailwindIcon from './icons/tailwind.icon';
import TypeScriptIcon from './icons/ts.icon';
import Reveal from './Reveal';

// Define the skills data with their corresponding icons and names
const skills = [
  { icon: TypeScriptIcon, name: 'TypeScript' },
  { icon: PHPIcon, name: 'PHP' },
  { icon: ReactIcon, name: 'React' },
  { icon: AstroIcon, name: 'Astro' },
  { icon: NodeIcon, name: 'Node.js' },
  { icon: ExpressIcon, name: 'Express' },
  { icon: LaravelIcon, name: 'Laravel' },
  { icon: MongoDBIcon, name: 'MongoDB' },
  { icon: PostgreSQLIcon, name: 'PostgreSQL' },
  { icon: RedisIcon, name: 'Redis' },
  { icon: TailwindIcon, name: 'Tailwind CSS' },
  { icon: SassIcon, name: 'Sass' },
  { icon: CSSIcon, name: 'CSS' },
  { icon: GitIcon, name: 'Git' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Skills</h2>

        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-9">
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-6 h-6 flex items-center justify-center skill-icon">
                    <IconComponent className="w-full h-full" />
                  </div>
                  <span className="text-[15px] text-foreground/85">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SkillsSection;
