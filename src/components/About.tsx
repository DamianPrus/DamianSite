import { Shield, Code, Lock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O <span className="gradient-text">mnie</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="card-gradient p-8 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 text-cyan-400">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
            <p className="text-gray-400 leading-relaxed">
              Specjalizuję się w testach penetracyjnych, audytach bezpieczeństwa i zabezpieczaniu infrastruktury.
              Moim celem jest tworzenie systemów odpornych na ataki.
            </p>
          </div>

          <div className="card-gradient p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400">
              <Code size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Fullstack Dev</h3>
            <p className="text-gray-400 leading-relaxed">
              Tworzę nowoczesne aplikacje webowe wykorzystując React, Node.js i TypeScript.
              Dbam o czysty kod, wydajność i skalowalność rozwiązań.
            </p>
          </div>

          <div className="card-gradient p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-400">
              <Lock size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Secure Coding</h3>
            <p className="text-gray-400 leading-relaxed">
              Wdrażam praktyki Secure SDLC w każdym projekcie.
              Bezpieczeństwo to dla mnie nie dodatek, ale fundament każdej aplikacji.
            </p>
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
