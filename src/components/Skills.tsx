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
      title: "Cloud Platforms & Services",
      icon: Cloud,
      skills: [
        "AWS (EC2, EKS, S3, Lambda, CloudFront, Route53)",
        "Azure (AKS, Blob Storage, Functions)",
        "GCP (GKE, Cloud Storage, Compute Engine)",
        "Multi-cloud Architecture Design",
        "Cloud Cost Optimization",
        "Cloud Security & Compliance"
      ],
    },
    {
      title: "Container & Orchestration",
      icon: Server,
      skills: [
        "Kubernetes (Administration & Operations)",
        "Docker (Container Development & Management)", 
        "Helm Charts & Package Management",
        "Container Security & Scanning",
        "Service Mesh (Istio, Linkerd)",
        "Container Registry Management"
      ],
    },
    {
      title: "DevOps & Automation Tools",
      icon: Settings,
      skills: [
        "Jenkins (Pipeline Development & Management)",
        "GitLab CI/CD & GitHub Actions",
        "ArgoCD (GitOps Implementation)",
        "Terraform (Infrastructure as Code)",
        "Ansible (Configuration Management)",
        "Puppet & Chef (Legacy System Management)"
      ],
    },
    {
      title: "Monitoring & Observability",
      icon: Monitor,
      skills: [
        "ELK Stack (Elasticsearch, Logstash, Kibana)",
        "Prometheus & Grafana",
        "Datadog & New Relic",
        "Application Performance Monitoring",
        "Custom Metrics & Alerting",
        "Distributed Tracing (Jaeger, Zipkin)"
      ],
    },
    {
      title: "Programming & Scripting",
      icon: Code,
      skills: [
        "Python (Automation & Tool Development)",
        "Bash/Shell Scripting",
        "Go (CLI Tools & Microservices)",
        "YAML & JSON Configuration",
        "Git & Version Control Strategies",
        "API Development & Integration"
      ],
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      skills: [
        "Security Scanning & Vulnerability Assessment",
        "RBAC & Identity Management",
        "SOX, PCI DSS & GDPR Compliance",
        "Secrets Management (Vault, K8s Secrets)",
        "Network Security & Firewalls",
        "Security Incident Response"
      ],
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

        {/* Key Metrics & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-4 gap-6"
        >
          <Card className="p-6 text-center hover-elevate transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <h3 className="text-sm font-semibold mb-1">System Uptime</h3>
            <p className="text-muted-foreground text-xs professional-text">
              Achieved across production environments
            </p>
          </Card>
          <Card className="p-6 text-center hover-elevate transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <h3 className="text-sm font-semibold mb-1">Deployments/Month</h3>
            <p className="text-muted-foreground text-xs professional-text">
              Automated CI/CD pipeline deployments
            </p>
          </Card>
          <Card className="p-6 text-center hover-elevate transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">60%</div>
            <h3 className="text-sm font-semibold mb-1">MTTR Reduction</h3>
            <p className="text-muted-foreground text-xs professional-text">
              Through enhanced monitoring & automation
            </p>
          </Card>
          <Card className="p-6 text-center hover-elevate transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">35%</div>
            <h3 className="text-sm font-semibold mb-1">Cost Savings</h3>
            <p className="text-muted-foreground text-xs professional-text">
              Cloud infrastructure optimization
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;