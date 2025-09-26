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
    <section id="experience" className="py-20 bg-beige-dark relative overflow-hidden">
      {/* Floating DevOps Logos Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Terraform */}
        <div className="floating-element animate-float-3d-1" style={{ top: '10%', left: '5%' }}>
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-lg backdrop-blur-sm border border-white/10 flex items-center justify-center text-purple-400 font-bold text-xs transform-gpu perspective-1000 rotateX-12 rotateY-12">
            TF
          </div>
        </div>
        
        {/* Docker */}
        <div className="floating-element animate-float-3d-2" style={{ top: '25%', right: '8%' }}>
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-xl backdrop-blur-sm border border-white/10 flex items-center justify-center text-blue-400 font-bold text-xs transform-gpu perspective-1000 rotateX-15 rotateY-15">
            🐳
          </div>
        </div>
        
        {/* Kubernetes */}
        <div className="floating-element animate-float-3d-3" style={{ top: '45%', left: '10%' }}>
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center text-blue-300 font-bold text-sm transform-gpu perspective-1000 rotateX-20 rotateY-10">
            ⚙️
          </div>
        </div>
        
        {/* AWS */}
        <div className="floating-element animate-float-3d-4" style={{ top: '70%', right: '15%' }}>
          <div className="w-13 h-13 bg-gradient-to-br from-orange-500/20 to-yellow-600/20 rounded-lg backdrop-blur-sm border border-white/10 flex items-center justify-center text-orange-400 font-bold text-xs transform-gpu perspective-1000 rotateX-18 rotateY-12">
            AWS
          </div>
        </div>
        
        {/* Jenkins */}
        <div className="floating-element animate-float-3d-5" style={{ top: '15%', left: '70%' }}>
          <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-blue-600/20 rounded-xl backdrop-blur-sm border border-white/10 flex items-center justify-center text-red-400 font-bold text-xs transform-gpu perspective-1000 rotateX-10 rotateY-20">
            ⚡
          </div>
        </div>
        
        {/* Git */}
        <div className="floating-element animate-float-3d-6" style={{ top: '60%', left: '75%' }}>
          <div className="w-10 h-10 bg-gradient-to-br from-red-600/20 to-orange-500/20 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center text-red-400 font-bold text-xs transform-gpu perspective-1000 rotateX-25 rotateY-8">
            Git
          </div>
        </div>
        
        {/* Ansible */}
        <div className="floating-element animate-float-3d-7" style={{ top: '35%', right: '30%' }}>
          <div className="w-11 h-11 bg-gradient-to-br from-red-700/20 to-black/20 rounded-lg backdrop-blur-sm border border-white/10 flex items-center justify-center text-red-300 font-bold text-xs transform-gpu perspective-1000 rotateX-12 rotateY-18">
            📋
          </div>
        </div>
        
        {/* Pulumi */}
        <div className="floating-element animate-float-3d-8" style={{ top: '80%', left: '20%' }}>
          <div className="w-9 h-9 bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center text-purple-300 font-bold text-xs transform-gpu perspective-1000 rotateX-15 rotateY-22">
            PU
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-coffee-light max-w-3xl mx-auto">
            A journey through leading organizations, building expertise in cloud infrastructure and DevOps
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-golden transform md:-translate-x-0.5"></div>

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
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-golden rounded-full border-4 border-warm-white transform -translate-x-2 md:-translate-x-2 z-10">
                  {exp.isActive && (
                    <div className="absolute inset-0 bg-golden rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <Card className={`gradient-card border-0 shadow-medium hover:shadow-strong transition-smooth ${
                    exp.isActive ? 'ring-2 ring-golden ring-opacity-50' : ''
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-coffee-dark mb-1">
                            {exp.role}
                          </h3>
                          <div className="flex items-center text-golden font-semibold mb-2">
                            <Briefcase className="w-4 h-4 mr-2" />
                            {exp.company}
                            {exp.isActive && (
                              <span className="ml-2 bg-golden text-coffee-dark px-2 py-1 rounded-full text-xs">
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-coffee-light">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-coffee-light">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-coffee-medium leading-relaxed">
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