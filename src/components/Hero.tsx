import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),rgba(0,0,0,0.1))]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">
                Mateo Galvez<br /><span className='bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent border-b-4'>Web Developer</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
            Passionate front-end web developer with experience in creating modern, intuitive and functional interfaces. 
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center gap-2 transition-all hover:gap-4"
              >
                View Projects<ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border border-blue-600 rounded-full hover:bg-blue-600/10 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl transform rotate-6"></div>
            <img 
              src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80&w=1000"
              alt="Developer Profile" 
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-blue-500" />
      </div>
    </section>
  );
}