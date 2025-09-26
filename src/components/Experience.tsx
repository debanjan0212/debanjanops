import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      company: "Signeasy",
      role: "Senior SRE (Cloud DevOps)",
      period: "Jan 2025 – Present",
      location: "Current Position",
      description: "Leading site reliability engineering initiatives for cloud infrastructure optimization and automation.",
      isActive: true
    },
    {
      company: "TransUnion",
      role: "Developer (Cloud DevOps)",
      period: "Dec 2022 – Jan 2025",
      location: "2+ Years",
      description: "Implemented scalable cloud solutions and DevOps practices for enterprise-level data processing systems."
    },
    {
      company: "TCS",
      role: "System Engineer (DevOps)",
      period: "Dec 2021 – Dec 2022",
      location: "1 Year",
      description: "Developed automation frameworks and managed CI/CD pipelines for large-scale enterprise applications."
    },
    {
      company: "Capgemini",
      role: "Associate Consultant (DevOps)",
      period: "Aug 2018 – Nov 2021",
      location: "3+ Years",
      description: "Started career in DevOps, focusing on infrastructure automation and cloud migration projects."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Network Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated Connection Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-20">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          
          {/* Animated connecting lines */}
          <path d="M 100 200 Q 300 100 500 250 T 900 200" 
                stroke="url(#lineGradient)" 
                strokeWidth="2" 
                fill="none"
                className="animate-pulse-slow" />
          <path d="M 200 400 Q 400 300 600 450 T 800 400" 
                stroke="url(#lineGradient)" 
                strokeWidth="1.5" 
                fill="none"
                className="animate-pulse-slow"
                style={{ animationDelay: '2s' }} />
          <path d="M 50 600 Q 350 500 650 650 T 950 600" 
                stroke="url(#lineGradient)" 
                strokeWidth="1" 
                fill="none"
                className="animate-pulse-slow"
                style={{ animationDelay: '4s' }} />
        </svg>
      </div>

      {/* Hexagonal DevOps Ecosystem */}
      <div className="absolute inset-0 pointer-events-none">
        {/* AWS */}
        <div className="floating-element animate-float-hex-1" style={{ top: '15%', left: '8%' }}>
          <div className="hexagon-container">
            <div className="hexagon bg-gradient-to-br from-orange-500/20 to-yellow-600/30 border border-orange-400/30">
              <span className="text-orange-300 font-bold text-xs">AWS</span>
            </div>
          </div>
        </div>

        {/* Docker */}
        <div className="floating-element animate-float-hex-2" style={{ top: '25%', right: '12%' }}>
          <div className="hexagon-container">
            <div className="hexagon bg-gradient-to-br from-blue-500/20 to-blue-700/30 border border-blue-400/30">
              <span className="text-blue-300 font-bold text-xs">🐳</span>
            </div>
          </div>
        </div>

        {/* Kubernetes */}
        <div className="floating-element animate-float-hex-3" style={{ top: '45%', left: '5%' }}>
          <div className="hexagon-container">
            <div className="hexagon bg-gradient-to-br from-blue-400/20 to-indigo-600/30 border border-blue-300/30">
              <span className="text-blue-200 font-bold text-xs">K8s</span>
            </div>
          </div>
        </div>

        {/* Jenkins */}
        <div className="floating-element animate-float-hex-4" style={{ top: '65%', right: '15%' }}>
          <div className="hexagon-container">
            <div className="hexagon bg-gradient-to-br from-red-500/20 to-blue-600/30 border border-red-400/30">
              <span className="text-red-300 font-bold text-xs">JNK</span>
            </div>
          </div>
        </div>

        {/* Terraform */}
        <div className="floating-element animate-float-hex-5" style={{ top: '10%', left: '45%' }}>
          <div className="hexagon-container">
            <div className="hexagon bg-gradient-to-br from-purple-500/20 to-blue-600/30 border border-purple-400/30">
              <span className="text-purple-300 font-bold text-xs">TF</span>
            </div>
          </div>
        </div>

        {/* Git */}
        <div className="floating-element animate-float-hex-6" style={{ top: '55%', left: '75%' }}>
          <div className="hexagon-container">
            <div className="hexagon bg-gradient-to-br from-red-600/20 to-orange-500/30 border border-red-400/30">
              <span className="text-red-200 font-bold text-xs">Git</span>
            </div>
          </div>
        </div>

        {/* Ansible */}
        <div className="floating-element animate-float-hex-7" style={{ top: '35%', right: '35%' }}>
          <div className="hexagon-container">
            <div className="hexagon bg-gradient-to-br from-red-700/20 to-black/30 border border-red-500/30">
              <span className="text-red-200 font-bold text-xs">ANS</span>
            </div>
          </div>
        </div>

        {/* DevOps Central Hub */}
        <div className="floating-element animate-pulse-glow" style={{ top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <div className="hexagon-container scale-150">
            <div className="hexagon bg-gradient-to-br from-orange-500/30 to-red-600/40 border-2 border-orange-400/50 shadow-glow">
              <span className="text-orange-200 font-bold text-sm">DevOps</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            A journey through leading organizations, building expertise in cloud infrastructure and DevOps
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-orange-400 to-blue-400 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-orange-400 to-blue-500 rounded-full border-4 border-slate-800 transform -translate-x-2 md:-translate-x-2 z-10 shadow-glow">
                  {exp.isActive && (
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-blue-500 rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <Card className={`bg-slate-800/80 backdrop-blur-md border border-slate-600/50 shadow-2xl hover:shadow-glow transition-smooth ${
                    exp.isActive ? 'ring-2 ring-orange-400/50' : ''
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">
                            {exp.role}
                          </h3>
                          <div className="flex items-center text-orange-300 font-semibold mb-2">
                            <Briefcase className="w-4 h-4 mr-2" />
                            {exp.company}
                            {exp.isActive && (
                              <span className="ml-2 bg-gradient-to-r from-orange-400 to-blue-500 text-white px-2 py-1 rounded-full text-xs">
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-blue-200">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-blue-200">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-slate-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;