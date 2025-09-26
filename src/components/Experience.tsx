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
    <section id="experience" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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