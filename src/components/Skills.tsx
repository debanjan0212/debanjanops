import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Cloud, 
  Server, 
  Settings, 
  Shield, 
  Code, 
  Database,
  Monitor,
  GitBranch
} from "lucide-react"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const skillCategories = [
    {
      title: "DevOps & Automation",
      icon: Settings,
      skills: ["Jenkins", "ArgoCD", "Ansible", "Terraform", "CI/CD Pipelines"],
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["AWS", "EC2", "EKS", "S3", "CloudFront", "IAM"],
    },
    {
      title: "Container Technologies",
      icon: Server,
      skills: ["Kubernetes", "Docker", "Helm Charts", "Container Management"],
    },
    {
      title: "Monitoring & Security",
      icon: Shield,
      skills: ["ELK Stack", "Prometheus", "Grafana", "Security Compliance"],
    },
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "Bash", "YAML", "JSON", "Infrastructure as Code"],
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Database Management"],
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative z-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 professional-heading">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto professional-text">
            Technologies and tools I work with to build reliable, scalable systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover-elevate transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold professional-heading">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      >
                        <Badge variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <Card className="p-6 text-center hover-elevate transition-all duration-300">
            <Monitor className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Infrastructure Monitoring</h3>
            <p className="text-muted-foreground text-sm professional-text">
              Comprehensive monitoring solutions with real-time alerting and dashboards
            </p>
          </Card>
          <Card className="p-6 text-center hover-elevate transition-all duration-300">
            <GitBranch className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Process Automation</h3>
            <p className="text-muted-foreground text-sm professional-text">
              Automated workflows reducing manual intervention by 80%
            </p>
          </Card>
          <Card className="p-6 text-center hover-elevate transition-all duration-300">
            <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Security First</h3>
            <p className="text-muted-foreground text-sm professional-text">
              Security-focused infrastructure with compliance and best practices
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;