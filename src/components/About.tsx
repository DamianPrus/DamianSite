import { Shield, Code, Lock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O <span className="gradient-text">mnie</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="card-gradient p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all group">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Code className="text-cyan-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
            <p className="text-gray-400">Od frontendu po backend - buduję kompletne rozwiązania webowe</p>
          </div>

          <div className="card-gradient p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Shield className="text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
            <p className="text-gray-400">Audyty bezpieczeństwa i testy penetracyjne aplikacji webowych</p>
          </div>

          <div className="card-gradient p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all group">
            <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Lock className="text-teal-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Coding</h3>
            <p className="text-gray-400">Kod odporny na ataki - bezpieczeństwo od pierwszej linii</p>
          </div>
        </div>

        <div className="card-gradient p-8 md:p-12 rounded-xl border border-gray-800">
          <p className="text-lg text-gray-300 leading-relaxed">
            Jestem pasjonatem technologii z unikalnym zestawem umiejętności. Nie tylko tworzę kod, który działa,
            ale także dbam o to, by był odporny na ataki. Moje doświadczenie obejmuje cały cykl życia aplikacji –
            od projektowania interfejsu użytkownika, przez logikę serwerową, aż po audyty bezpieczeństwa i
            wdrażanie zabezpieczeń. Wierzę, że w dzisiejszym świecie developer i specjalista ds. bezpieczeństwa
            to dwie strony tej samej monety.
          </p>
        </div>
      </div>
    </section>
  );
}
