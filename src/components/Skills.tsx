import { Code, Shield, Award } from 'lucide-react';

export default function Skills() {
  const fullstackSkills = [
    'JavaScript (ES6+) / TypeScript',
    'React.js / Next.js',
    'Node.js / Express',
    'HTML5 & CSS3 / Tailwind CSS',
    'SQL (PostgreSQL) & NoSQL',
    'Git & Docker'
  ];

  const cybersecSkills = [
    'OWASP Top 10 Analysis',
    'Web App Penetration Testing',
    'Secure Coding Practices',
    'Vulnerability Assessment',
    'Cryptography Basics',
    'Burp Suite, OWASP ZAP'
  ];

  const certificates = [
    { name: 'CompTIA Security+', issuer: 'CompTIA', year: '2024' },
    { name: 'Certified Ethical Hacker (Practical)', issuer: 'EC-Council', year: '2023' },
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'Fullstack Developer Bootcamp', issuer: 'Udemy / Other', year: '2022' }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Kompetencje <span className="gradient-text">Techniczne</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="card-gradient p-8 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <Code className="text-cyan-400" size={20} />
              </div>
              <h3 className="text-2xl font-semibold">Fullstack Development</h3>
            </div>
            <ul className="space-y-3">
              {fullstackSkills.map((skill, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span className="text-gray-300">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-gradient p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Shield className="text-blue-400" size={20} />
              </div>
              <h3 className="text-2xl font-semibold">Cybersecurity & SecOps</h3>
            </div>
            <ul className="space-y-3">
              {cybersecSkills.map((skill, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span className="text-gray-300">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center">
              <Award className="text-teal-400" size={20} />
            </div>
            <h3 className="text-2xl font-semibold">Certyfikaty</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="card-gradient p-6 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold group-hover:text-teal-400 transition-colors">{cert.name}</h4>
                  <span className="text-sm text-gray-500">{cert.year}</span>
                </div>
                <p className="text-gray-400">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
