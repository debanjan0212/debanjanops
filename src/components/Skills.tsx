import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { X } from "lucide-react"
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
  const [selectedSkill, setSelectedSkill] = useState<any>(null)

  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      efficiency: 95,
      color: "hsl(220, 90%, 60%)",
      skills: [
        { name: "AWS (EC2, EKS, S3, Lambda)", efficiency: 95 },
        { name: "Azure (AKS, Blob Storage)", efficiency: 90 },
        { name: "GCP (GKE, Cloud Storage)", efficiency: 85 },
        { name: "Multi-cloud Architecture", efficiency: 92 },
        { name: "Cloud Cost Optimization", efficiency: 90 },
        { name: "Cloud Security & Compliance", efficiency: 88 }
      ],
    },
    {
      title: "Container & Orchestration", 
      icon: Server,
      efficiency: 92,
      color: "hsl(160, 85%, 55%)",
      skills: [
        { name: "Kubernetes Administration", efficiency: 94 },
        { name: "Docker Container Management", efficiency: 96 },
        { name: "Helm Charts & Packaging", efficiency: 88 },
        { name: "Container Security", efficiency: 85 },
        { name: "Service Mesh (Istio)", efficiency: 82 },
        { name: "Container Registry", efficiency: 90 }
      ],
    },
    {
      title: "DevOps Automation",
      icon: Settings,
      efficiency: 90,
      color: "hsl(280, 80%, 65%)",
      skills: [
        { name: "Jenkins Pipeline Development", efficiency: 92 },
        { name: "GitLab CI/CD & GitHub Actions", efficiency: 90 },
        { name: "ArgoCD GitOps", efficiency: 85 },
        { name: "Terraform Infrastructure", efficiency: 94 },
        { name: "Ansible Configuration", efficiency: 88 },
        { name: "Automation Scripting", efficiency: 95 }
      ],
    },
    {
      title: "Monitoring & Observability",
      icon: Monitor,
      efficiency: 88,
      color: "hsl(30, 95%, 60%)",
      skills: [
        { name: "ELK Stack Implementation", efficiency: 90 },
        { name: "Prometheus & Grafana", efficiency: 92 },
        { name: "Datadog & New Relic", efficiency: 85 },
        { name: "Performance Monitoring", efficiency: 88 },
        { name: "Custom Metrics & Alerts", efficiency: 90 },
        { name: "Distributed Tracing", efficiency: 82 }
      ],
    },
    {
      title: "Programming & Scripting",
      icon: Code,
      efficiency: 85,
      color: "hsl(120, 70%, 55%)",
      skills: [
        { name: "Python Development", efficiency: 90 },
        { name: "Bash/Shell Scripting", efficiency: 95 },
        { name: "Go Development", efficiency: 80 },
        { name: "YAML & JSON", efficiency: 92 },
        { name: "Git Version Control", efficiency: 94 },
        { name: "API Development", efficiency: 85 }
      ],
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      efficiency: 87,
      color: "hsl(0, 85%, 65%)",
      skills: [
        { name: "Vulnerability Assessment", efficiency: 88 },
        { name: "RBAC & Identity Management", efficiency: 90 },
        { name: "Compliance (SOX, PCI DSS)", efficiency: 85 },
        { name: "Secrets Management", efficiency: 92 },
        { name: "Network Security", efficiency: 86 },
        { name: "Incident Response", efficiency: 84 }
      ],
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative z-10 bg-background/80 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto">
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
            Interactive skill wheel - Click on any skill to see proficiency levels
          </p>
        </motion.div>

        {/* Circular Skills Layout */}
        <div className="relative w-full max-w-4xl mx-auto mb-16">
          <div className="relative w-[600px] h-[600px] mx-auto">
            {/* Center Hub */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-2xl">
                <div className="text-white text-center">
                  <div className="text-lg font-bold">DevOps</div>
                  <div className="text-sm opacity-90">Engineer</div>
                </div>
              </div>
            </motion.div>

            {/* Skill Category Circles */}
            {skillCategories.map((category, index) => {
              const angle = (index * 360) / skillCategories.length;
              const radius = 200;
              const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
              const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.title}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  className="absolute cursor-pointer group"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={() => setSelectedSkill(category)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl border-4 border-white/20"
                    style={{ backgroundColor: category.color }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Skill Title */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center">
                    <div className="text-sm font-semibold text-foreground whitespace-nowrap">
                      {category.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {category.efficiency}% Efficiency
                    </div>
                  </div>

                  {/* Connection Line */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                    className="absolute top-1/2 left-1/2 origin-left h-0.5 bg-gradient-to-r from-primary/60 to-transparent"
                    style={{
                      width: `${radius - 60}px`,
                      transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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

      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card border border-border rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: selectedSkill.color }}
                  >
                    <selectedSkill.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold professional-heading">{selectedSkill.title}</h3>
                    <p className="text-muted-foreground">Overall Efficiency: {selectedSkill.efficiency}%</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedSkill(null)}
                  className="rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Skill Breakdown</h4>
                  <div className="space-y-4">
                    {selectedSkill.skills.map((skill: any, index: number) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.efficiency}%</span>
                        </div>
                        <Progress value={skill.efficiency} className="h-2" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h4 className="text-lg font-semibold mb-2">Proficiency Level</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedSkill.efficiency}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-primary to-purple-500"
                      />
                    </div>
                    <span className="text-sm font-bold">{selectedSkill.efficiency}%</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {selectedSkill.efficiency >= 90 ? "Expert Level" : 
                     selectedSkill.efficiency >= 80 ? "Advanced" : 
                     selectedSkill.efficiency >= 70 ? "Intermediate" : "Developing"}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;