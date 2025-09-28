import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 80%"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"])

  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      color: "hsl(25, 60%, 45%)",
      skills: [
        { name: "AWS", fullName: "Amazon Web Services", efficiency: 95 },
        { name: "Azure", fullName: "Microsoft Azure", efficiency: 90 },
        { name: "GCP", fullName: "Google Cloud Platform", efficiency: 85 },
        { name: "Multi-cloud", fullName: "Multi-cloud Architecture", efficiency: 92 },
        { name: "Cost Optimization", fullName: "Cloud Cost Optimization", efficiency: 90 },
        { name: "Security", fullName: "Cloud Security & Compliance", efficiency: 88 }
      ],
    },
    {
      title: "Container & Orchestration", 
      icon: Server,
      color: "hsl(30, 50%, 40%)",
      skills: [
        { name: "Kubernetes", fullName: "Kubernetes Administration", efficiency: 94 },
        { name: "Docker", fullName: "Docker Container Management", efficiency: 96 },
        { name: "Helm", fullName: "Helm Charts & Packaging", efficiency: 88 },
        { name: "Security", fullName: "Container Security", efficiency: 85 },
        { name: "Istio", fullName: "Service Mesh (Istio)", efficiency: 82 },
        { name: "Registry", fullName: "Container Registry", efficiency: 90 }
      ],
    },
    {
      title: "DevOps Automation",
      icon: Settings,
      color: "hsl(35, 45%, 35%)",
      skills: [
        { name: "Jenkins", fullName: "Jenkins Pipeline Development", efficiency: 92 },
        { name: "GitLab CI/CD", fullName: "GitLab CI/CD & GitHub Actions", efficiency: 90 },
        { name: "ArgoCD", fullName: "ArgoCD GitOps", efficiency: 85 },
        { name: "Terraform", fullName: "Terraform Infrastructure", efficiency: 94 },
        { name: "Ansible", fullName: "Ansible Configuration", efficiency: 88 },
        { name: "Automation", fullName: "Automation Scripting", efficiency: 95 }
      ],
    },
    {
      title: "Monitoring & Observability",
      icon: Monitor,
      color: "hsl(20, 55%, 50%)",
      skills: [
        { name: "ELK Stack", fullName: "ELK Stack Implementation", efficiency: 90 },
        { name: "Prometheus", fullName: "Prometheus & Grafana", efficiency: 92 },
        { name: "Datadog", fullName: "Datadog & New Relic", efficiency: 85 },
        { name: "APM", fullName: "Performance Monitoring", efficiency: 88 },
        { name: "Alerts", fullName: "Custom Metrics & Alerts", efficiency: 90 },
        { name: "Tracing", fullName: "Distributed Tracing", efficiency: 82 }
      ],
    },
    {
      title: "Programming & Scripting",
      icon: Code,
      color: "hsl(15, 65%, 55%)",
      skills: [
        { name: "Python", fullName: "Python Development", efficiency: 90 },
        { name: "Bash", fullName: "Bash/Shell Scripting", efficiency: 95 },
        { name: "Go", fullName: "Go Development", efficiency: 80 },
        { name: "YAML", fullName: "YAML & JSON", efficiency: 92 },
        { name: "Git", fullName: "Git Version Control", efficiency: 94 },
        { name: "APIs", fullName: "API Development", efficiency: 85 }
      ],
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      color: "hsl(25, 45%, 30%)",
      skills: [
        { name: "Vulnerability", fullName: "Vulnerability Assessment", efficiency: 88 },
        { name: "RBAC", fullName: "RBAC & Identity Management", efficiency: 90 },
        { name: "Compliance", fullName: "Compliance (SOX, PCI DSS)", efficiency: 85 },
        { name: "Secrets", fullName: "Secrets Management", efficiency: 92 },
        { name: "Network", fullName: "Network Security", efficiency: 86 },
        { name: "Incident", fullName: "Incident Response", efficiency: 84 }
      ],
    }
  ];

  const handleSkillClick = (skill: any) => {
    setSelectedSkill({
      ...skill,
      category: skill.category,
      categoryColor: skill.categoryColor
    })
    
    // Scroll to center the modal in viewport
    setTimeout(() => {
      window.scrollTo({
        top: window.scrollY + window.innerHeight / 2 - 300,
        behavior: 'smooth'
      })
    }, 100)
  }

  return (
    <section id="skills" className="py-4 px-4 relative z-10 overflow-hidden gpu-accelerated">
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 -z-10 gpu-accelerated"
      />
      <motion.div 
        style={{ y }} 
        className="max-w-7xl mx-auto relative z-10 gpu-accelerated"
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 professional-heading">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto professional-text">
            Click on any skill to see detailed proficiency levels
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.8, 
                  delay: categoryIndex * 0.3
                }}
                className="flex flex-col"
              >
                {/* Category Header */}
                <Card className="p-6 mb-4 bg-card/50 backdrop-blur-sm border-border/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <Icon 
                        className="w-6 h-6" 
                        style={{ color: category.color }}
                      />
                    </div>
                    <h3 className="text-lg font-bold professional-heading">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.button
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ 
                          duration: 1.2, 
                          delay: categoryIndex * 0.4 + skillIndex * 0.2 
                        }}
                        onClick={() => handleSkillClick({
                          ...skill,
                          category: category.title,
                          categoryColor: category.color
                        })}
                        className="p-3 rounded-lg border border-border/30 bg-background/30 hover:bg-background/50 transition-all duration-200 hover:scale-105 hover:border-primary/30 group"
                      >
                        <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {skill.efficiency}%
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
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
      </motion.div>

      {/* Individual Skill Detail Modal - Centered in Viewport */}
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
              className="bg-card border border-border rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: selectedSkill.categoryColor }}
                  >
                    <div className="text-white font-bold text-sm text-center">
                      {selectedSkill.name}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold professional-heading">{selectedSkill.fullName}</h3>
                    <p className="text-muted-foreground text-sm">From {selectedSkill.category}</p>
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
                  <h4 className="text-lg font-semibold mb-4">Proficiency Level</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Overall Efficiency</span>
                      <span className="text-sm text-muted-foreground">{selectedSkill.efficiency}%</span>
                    </div>
                    <Progress value={selectedSkill.efficiency} className="h-3" />
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="text-center">
                    <div 
                      className="text-6xl font-bold mb-2"
                      style={{ color: selectedSkill.categoryColor }}
                    >
                      {selectedSkill.efficiency}%
                    </div>
                    <p className="text-lg font-semibold mb-2">
                      {selectedSkill.efficiency >= 90 ? "Expert Level" : 
                       selectedSkill.efficiency >= 80 ? "Advanced" : 
                       selectedSkill.efficiency >= 70 ? "Intermediate" : "Developing"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Years of hands-on experience with {selectedSkill.fullName.toLowerCase()}
                    </p>
                  </div>
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