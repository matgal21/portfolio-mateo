import { Code2, Palette, Rocket } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Development",
    description: "Expertise in modern web technologies and frameworks",
    techs: ["React", "TypeScript", "Node.js", "Next.js"]
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Design",
    description: "Creating beautiful and intuitive user interfaces",
    techs: ["Figma", "Tailwind CSS", "Framer Motion"]
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Performance",
    description: "Optimizing for speed and user experience",
    techs: ["Web Vitals", "SEO", "Analytics"]
  }
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
          <div className="flex items-center gap-8 mb-6">
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent border-b-4">
                  About Me
                </span>
              </h2>
              <img 
                src="/public/mateo.jpg" 
                alt="Mateo" 
                className="w-48 h-48 rounded-full object-cover shadow-lg shadow-gray-50 hover:scale-110 hover:transition "
              />
            </div>
            <p className="text-gray-300 mb-6">
              I'm a passionate developer focused on creating innovative digital solutions. With a strong foundation in modern web technologies, I bring ideas to life through clean code and intuitive design.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me exploring new technologies, working on my travel website, or sharing knowledge with the developer community.
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