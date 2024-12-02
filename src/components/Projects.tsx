import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "solodeida.com",
    description: "Travel blog, aviation and tourist news ",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    tags: ["Astro", "TypeScript", "Tailwind"],
    github: "https://github.com/matgal21/blog-solodeida",
    demo: "https://solodeida.com"
  },
  {
    title: "Segundo proyecto",
    description: "Web page for counting and marking countries visited",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Firebase", "Tailwind"],
    github: "https://github.com/matgal21/app-paises-visitados",
    demo: "https://app-paises-visitados.vercel.app/"
  },
  {
    title: "Tercer proyecto",
    description: "AI-powered data visualization dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "TensorFlow", "D3.js"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent border-b-4">
          Featured Projects
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            
            <div key={index} className="group relative overflow-hidden rounded-xl backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300">
              <a href={project.demo} target='_blank'>
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-[#ffd60a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 hover:text-[#ffd60a] transition-colors"
                    target='_blank'
                  >
                    <Github className="w-4 h-4" /> Código
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
                    target='_blank'
                  >
                    <ExternalLink className="w-4 h-4" /> Web
                  </a>
                </div>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}