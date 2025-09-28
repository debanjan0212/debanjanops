import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Database, 
  Settings, 
  Cloud, 
  Shield, 
  Server, 
  ExternalLink,
  Code2,
  Container,
  Monitor,
  Terminal
} from "lucide-react"

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const projects = [
    {
      title: "End-to-End Logging & Monitoring",
      description: "Comprehensive logging and monitoring solution for big data processing systems with real-time alerts and dashboards.",
      icon: Monitor,
      technologies: ["ELK Stack", "Monitoring", "Big Data", "Dashboards"],
      category: "Monitoring"
    },
    {
      title: "Ansible Automation Framework",
      description: "Automated daily operational tasks reducing manual intervention by 80% and improving system reliability.",
      icon: Settings,
      technologies: ["Ansible", "Python", "Automation", "DevOps"],
      category: "Automation"
    },
    {
      title: "Terraform Infrastructure Management",
      description: "Scalable infrastructure-as-code solutions for multi-cloud environments with automated provisioning.",
      icon: Cloud,
      technologies: ["Terraform", "AWS", "IaC", "Multi-Cloud"],
      category: "Infrastructure"
    },
    {
      title: "Kubernetes Container Orchestration",
      description: "Container orchestration platform with automated scaling, deployment, and management capabilities.",
      icon: Container,
      technologies: ["Kubernetes", "Docker", "Helm", "Container Management"],
      category: "Containers"
    },
    {
      title: "CI/CD Pipeline Optimization",
      description: "Streamlined continuous integration and deployment pipelines reducing deployment time by 60%.",
      icon: Code2,
      technologies: ["Jenkins", "ArgoCD", "GitLab", "Pipeline Automation"],
      category: "DevOps"
    },
    {
      title: "Security Compliance Framework",
      description: "Security-first infrastructure framework ensuring compliance with industry standards and best practices.",
      icon: Shield,
      technologies: ["Security", "Compliance", "Best Practices", "Automation"],
      category: "Security"
    }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="portfolio" className="py-12 px-4 relative z-10 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 professional-heading">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto professional-text">
            DevOps and infrastructure projects that showcase my expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover-elevate transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 professional-heading">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 professional-text leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={scrollToContact}
                    className="w-full justify-between"
                  >
                    Learn More
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Project Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          <Card className="p-6 text-center hover-elevate transition-all duration-300">
            <div className="text-2xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground text-sm">Major Projects</div>
          </Card>
          <Card className="p-6 text-center hover-elevate transition-all duration-300">
            <div className="text-2xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground text-sm">Technology Stacks</div>
          </Card>
          <Card className="p-6 text-center hover-elevate transition-all duration-300">
            <div className="text-2xl font-bold text-primary mb-2">80%</div>
            <div className="text-muted-foreground text-sm">Automation Achieved</div>
          </Card>
          <Card className="p-6 text-center hover-elevate transition-all duration-300">
            <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground text-sm">System Reliability</div>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 professional-heading">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-muted-foreground mb-6 professional-text max-w-2xl mx-auto">
              Let's discuss how I can help optimize your infrastructure and automate your DevOps processes.
            </p>
            <Button size="lg" onClick={scrollToContact} className="bg-primary hover:bg-primary/90">
              Get In Touch
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;