import { ArrowRight, Shield, Code } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-teal-900/20"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400">
            <Shield size={16} />
            <span>Secure by Design</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Damian <span className="gradient-text">Prus</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300">
            Fullstack & Cybersec Specialist
          </p>

          <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
            Buduję nowoczesne aplikacje webowe z fundamentem bezpieczeństwa.
            Łączę kreatywność programisty z mentalnością "Secure by Design".
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center space-x-2 group"
            >
              <span>Skontaktuj się</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 border border-gray-700 rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all flex items-center space-x-2"
            >
              <Code size={18} />
              <span>Zobacz Projekty</span>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center glow-effect animate-float">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Shield size={64} className="text-white" />
                </div>
                <p className="text-gray-400 text-sm">Your Photo Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
