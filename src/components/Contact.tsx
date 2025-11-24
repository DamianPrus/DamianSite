import { Github, Linkedin, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Zainteresowany <span className="gradient-text">współpracą?</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Sprawdź mój kod lub skontaktuj się ze mną bezpośrednio.
            Jestem otwarty na ciekawe projekty i wyzwania security.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card-gradient p-8 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all group text-center"
          >
            <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Github className="text-cyan-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <p className="text-gray-400 text-sm">Zobacz moje projekty</p>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card-gradient p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all group text-center"
          >
            <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Linkedin className="text-blue-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-400 text-sm">Nawiążmy kontakt</p>
          </a>

          <a
            href="mailto:contact@damianprus.dev"
            className="card-gradient p-8 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all group text-center"
          >
            <div className="w-16 h-16 bg-teal-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="text-teal-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm">Napisz do mnie</p>
          </a>
        </div>

        <div className="card-gradient p-8 md:p-12 rounded-xl border border-gray-800">
          <h3 className="text-2xl font-semibold mb-6 text-center">Wyślij wiadomość</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Imię i nazwisko</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="Jan Kowalski"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="jan@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Temat</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="Współpraca / Projekt / Pytanie"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Wiadomość</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                placeholder="Opisz swoją propozycję..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center space-x-2 group font-semibold"
            >
              <span>Wyślij wiadomość</span>
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
