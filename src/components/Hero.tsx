import { ArrowRight, Shield, Code } from 'lucide-react';
import { useState, useRef, useEffect, MouseEvent } from 'react';

export default function Hero() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [heroStyle, setHeroStyle] = useState({});
  const [bloomOpacity, setBloomOpacity] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Global subtle tilt and simple scroll fade
  useEffect(() => {
    const handleScrollAndMove = (e: globalThis.MouseEvent | Event) => {
      // Handle Scroll - simple fade and slight scale
      const scrollY = window.scrollY;
      const maxScroll = 500;
      const progress = Math.min(scrollY / maxScroll, 1);

      const opacity = 1 - progress;
      const scale = 1 - progress * 0.1;

      // Fast fade for bloom circles - fade out in first 20% of scroll (100px)
      const bloomProgress = Math.min(scrollY / 100, 1);
      const bloomOp = 1 - bloomProgress;
      setBloomOpacity(bloomOp);

      setHeroStyle({
        opacity: opacity,
        transform: `scale(${scale})`
      });

      // Handle Mouse Move (only if it's a mouse event)
      if (e instanceof window.MouseEvent) {
        if (isHovering || !containerRef.current) return;

        const { innerWidth, innerHeight } = window;
        const x = e.clientX;
        const y = e.clientY;

        const centerX = innerWidth / 2;
        const centerY = innerHeight / 2;

        // Very subtle global tilt - max 3 degrees
        const rotateX = ((y - centerY) / centerY) * -3;
        const rotateY = ((x - centerX) / centerX) * 3;

        setRotate({ x: rotateX, y: rotateY });
      }
    };

    window.addEventListener('mousemove', handleScrollAndMove);
    window.addEventListener('scroll', handleScrollAndMove);

    return () => {
      window.removeEventListener('mousemove', handleScrollAndMove);
      window.removeEventListener('scroll', handleScrollAndMove);
    };
  }, [isHovering]);

  // Strong hover tilt
  const handleLocalMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Stronger tilt on hover - max 15 degrees
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setRotate({ x: rotateX, y: rotateY });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden transition-all duration-100 ease-out origin-center"
      style={heroStyle}
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-pulse transition-opacity duration-100" style={{ opacity: bloomOpacity }}></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-700 transition-opacity duration-100" style={{ opacity: bloomOpacity }}></div>

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
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center space-x-2 group"
            >
              <span>Skontaktuj się</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 border border-gray-700 rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <Code size={18} />
              <span>Zobacz Projekty</span>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center perspective-1000">
          <div className="relative animate-float">
            <div
              ref={containerRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onMouseMove={handleLocalMouseMove}
              style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: 'transform 0.2s ease-out'
              }}
              className="w-80 h-80 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 p-1 glow-effect cursor-pointer"
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img
                  src="/cut.png"
                  alt="Damian Prus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
