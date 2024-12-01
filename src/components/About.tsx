import { Code2, Palette, Rocket } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Desarrollo",
    description: "Experiencias en tecnologías web modernas y librerías",
    techs: ["React", "TypeScript", "Node.js", "Next.js"]
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Diseño",
    description: "Crear interfaces modernas y atractivas",
    techs: ["Figma", "Tailwind CSS", "Framer Motion"]
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Rendimiento",
    description: "Optimización de rendimiento y experiencia de usuario",
    techs: ["Web Vitals", "SEO", "Analytics"]
  }
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent border-b-4">
                Sobre mi
              </span>
            </h2>
            <p className="text-gray-300 mb-6">
              I'm a passionate developer focused on creating innovative digital solutions. With a strong foundation in modern web technologies, I bring ideas to life through clean code and intuitive design.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="grid gap-6 ">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-[#ffd60a]">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.techs.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-[#ffd60a]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}