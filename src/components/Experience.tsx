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
      role: "Senior Site Reliability Engineer",
      period: "Jan 2025 – Present",
      location: "Bengaluru, India",
      description: "Leading site reliability engineering initiatives for a globally distributed SaaS platform serving millions of users. Architecting highly available, scalable infrastructure and implementing comprehensive monitoring and automation solutions.",
      achievements: [
        "Designed and implemented automated disaster recovery procedures reducing RTO from 4 hours to 15 minutes",
        "Led migration to microservices architecture improving system reliability by 99.9%",
        "Established comprehensive observability stack with custom metrics and alerting reducing MTTR by 60%",
        "Mentoring junior engineers on SRE best practices and incident response procedures"
      ],
      isActive: true
    },
    {
      company: "TransUnion",
      role: "DevOps Engineer (Cloud Infrastructure)",
      period: "Dec 2022 – Jan 2025",
      location: "Remote",
      description: "Managed enterprise-scale cloud infrastructure for credit reporting and analytics platform. Focused on automation, security compliance, and cost optimization across multi-cloud environments.",
      achievements: [
        "Architected and deployed Kubernetes clusters serving 500+ microservices with 99.95% uptime",
        "Implemented Infrastructure as Code reducing provisioning time from days to hours",
        "Established CI/CD pipelines processing 200+ deployments per day with zero-downtime deployments",
        "Reduced cloud costs by 35% through automated resource optimization and rightsizing"
      ]
    },
    {
      company: "Tata Consultancy Services (TCS)",
      role: "Systems Engineer - DevOps Specialist",
      period: "Dec 2021 – Dec 2022",
      location: "Pune, India",
      description: "Specialized in DevOps automation and cloud migration for enterprise clients. Worked on large-scale digital transformation projects across banking and retail sectors.",
      achievements: [
        "Automated deployment processes reducing manual effort by 80% and deployment time by 75%",
        "Migrated 50+ legacy applications to cloud-native architecture",
        "Implemented monitoring solutions providing real-time visibility across 100+ services",
        "Achieved SOX and PCI DSS compliance for critical financial services applications"
      ]
    },
    {
      company: "Capgemini",
      role: "Associate Consultant - Cloud DevOps",
      period: "Aug 2018 – Nov 2021",
      location: "Mumbai, India",
      description: "Started my DevOps journey working on digital transformation initiatives for Fortune 500 clients. Specialized in cloud migration, automation, and infrastructure modernization.",
      achievements: [
        "Successfully migrated 30+ enterprise applications to AWS with minimal downtime",
        "Built automated CI/CD pipelines improving code deployment frequency by 10x",
        "Implemented container orchestration reducing infrastructure costs by 40%",
        "Received 'Rising Star' award for exceptional performance and client satisfaction"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative z-10 bg-background/80 backdrop-blur-sm">
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
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
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
                      <p className="text-muted-foreground leading-relaxed professional-text mb-4">
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
                  
                  {/* Key Achievements */}
                  {exp.achievements && (
                    <div className="border-t pt-4">
                      <h5 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="professional-text">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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