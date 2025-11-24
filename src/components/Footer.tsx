import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Shield className="text-cyan-400" size={20} />
            <span className="text-gray-400">© 2025 Damian Prus. Secure by Design.</span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <a href="#about" className="nav-link-bloom hover:text-blue-400 transition-colors">O mnie</a>
            <span>•</span>
            <a href="#skills" className="nav-link-bloom hover:text-blue-400 transition-colors">Kompetencje</a>
            <span>•</span>
            <a href="#projects" className="nav-link-bloom hover:text-blue-400 transition-colors">Projekty</a>
            <span>•</span>
            <a href="#contact" className="nav-link-bloom hover:text-blue-400 transition-colors">Kontakt</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
