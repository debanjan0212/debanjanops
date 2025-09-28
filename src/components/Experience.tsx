import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase } from "lucide-react"

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

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
    <section id="experience" className="py-20 px-4 relative z-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 professional-heading">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto professional-text">
            A journey through leading technology organizations
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className={`p-6 hover-elevate transition-all duration-300 ${exp.isActive ? 'border-primary bg-primary/5' : ''}`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      {exp.isActive && (
                        <Badge variant="default" className="bg-primary text-primary-foreground">
                          Current
                        </Badge>
                      )}
                    </div>
                    <h4 className="text-lg font-medium text-primary mb-2">{exp.company}</h4>
                    <p className="text-muted-foreground leading-relaxed professional-text">
                      {exp.description}
                    </p>
                  </div>
                  <div className="md:text-right md:min-w-[200px]">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;