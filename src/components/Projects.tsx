import { Shield, Lock, ShoppingCart, Search, ExternalLink, Code } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Security Audit',
      description: 'Kompleksowy audyt bezpieczeństwa aplikacji webowej z raportem zawierającym wykryte podatności OWASP Top 10 oraz rekomendacje naprawcze.',
      tags: ['Burp Suite', 'OWASP ZAP', 'Python', 'Security'],
      icon: Shield,
      color: 'cyan'
    },
    {
      title: 'Secure Auth System',
      description: 'System uwierzytelniania z implementacją JWT, rate limiting, 2FA i ochroną przed atakami typu brute-force.',
      tags: ['Node.js', 'Express', 'JWT', 'bcrypt', 'PostgreSQL'],
      icon: Lock,
      color: 'blue'
    },
    {
      title: 'E-commerce Platform',
      description: 'Pełnoprawna platforma e-commerce z panelem administracyjnym, systemem płatności i zarządzaniem produktami.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Docker'],
      icon: ShoppingCart,
      color: 'teal'
    },
    {
      title: 'Vulnerability Scanner',
      description: 'Narzędzie do automatycznego skanowania aplikacji webowych w poszukiwaniu popularnych podatności bezpieczeństwa.',
      tags: ['Python', 'Selenium', 'BeautifulSoup', 'SQLMap'],
      icon: Search,
      color: 'purple'
    }
  ];

  const colorClasses = {
    cyan: {
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-400',
      border: 'border-cyan-500/50',
      tag: 'bg-cyan-500/10 text-cyan-400'
    },
    blue: {
      bg: 'bg-blue-500/10',
      text: 'text-blue-400',
      border: 'border-blue-500/50',
      tag: 'bg-blue-500/10 text-blue-400'
    },
    teal: {
      bg: 'bg-teal-500/10',
      text: 'text-teal-400',
      border: 'border-teal-500/50',
      tag: 'bg-teal-500/10 text-teal-400'
    },
    purple: {
      bg: 'bg-violet-500/10',
      text: 'text-violet-400',
      border: 'border-violet-500/50',
      tag: 'bg-violet-500/10 text-violet-400'
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Wybrane <span className="gradient-text">Projekty</span>
          </h2>
          <p className="text-gray-400 text-lg">Projekty łączące development i cybersecurity</p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colors = colorClasses[project.color as keyof typeof colorClasses];

            return (
              <div key={index} className={`card-gradient p-8 rounded-xl border border-gray-800 hover:${colors.border} transition-all group cursor-pointer`}>
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={colors.text} size={28} />
                </div>

                <h3 className={`text-2xl font-semibold mb-3 group-hover:${colors.text} transition-colors`}>
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`px-3 py-1 ${colors.tag} rounded-full text-sm`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
                  <button className={`flex items-center space-x-2 ${colors.text} hover:underline`}>
                    <Code size={16} />
                    <span className="text-sm">Code</span>
                  </button>
                  <button className={`flex items-center space-x-2 ${colors.text} hover:underline`}>
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
