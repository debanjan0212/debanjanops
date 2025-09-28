import { motion, useInView, AnimatePresence } from "framer-motion"
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

  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      color: "hsl(220, 90%, 60%)",
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
      color: "hsl(160, 85%, 55%)",
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
      color: "hsl(280, 80%, 65%)",
      skills: [
        { name: "Jenkins", fullName: "Jenkins Pipeline Development", efficiency: 92 },
        { name: "GitLab CI/CD", fullName: "GitLab CI/CD & GitHub Actions", efficiency: 90 },
        { name: "ArgoCD", fullName: "ArgoCD GitOps", efficiency: 85 },
        { name: "Terraform", fullName: "Terraform Infrastructure", efficiency: 94 },
        { name: "Ansible", fullName: "Ansible Configuration", efficiency: 88 },
        { name: "Automation", fullName: "Automation Scripting", efficiency: 95 }
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
            Click on any skill to see detailed proficiency levels
          </p>
        </motion.div>

        {/* Large Circular Skills Containers */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="flex flex-col items-center"
              >
                {/* Large Circular Container */}
                <div className="relative w-80 h-80 mb-6">
                  {/* Outer Circle */}
                  <div 
                    className="absolute inset-0 rounded-full border-4 border-opacity-30 flex items-center justify-center shadow-2xl"
                    style={{ 
                      backgroundColor: `${category.color}20`,
                      borderColor: category.color 
                    }}
                  >
                    {/* Center Icon */}
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center z-20"
                      style={{ backgroundColor: category.color }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Rotating Skills Around the Circle */}
                    {category.skills.map((skill, skillIndex) => {
                      const angle = (skillIndex * 360) / category.skills.length;
                      const radius = 120;
                      const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
                      const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
                      
                      // Random rotation direction and speed
                      const rotationDirection = skillIndex % 2 === 0 ? 1 : -1;
                      const rotationSpeed = 10 + (skillIndex * 2);

                      return (
                        <motion.div
                          key={skill.name}
                          className="absolute cursor-pointer group"
                          style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: 'translate(-50%, -50%)'
                          }}
                          animate={{
                            rotate: rotationDirection * 360
                          }}
                          transition={{
                            duration: rotationSpeed,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          onClick={() => setSelectedSkill({
                            ...skill,
                            category: category.title,
                            categoryColor: category.color
                          })}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <div 
                            className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20 backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl"
                            style={{ 
                              backgroundColor: `${category.color}90`,
                              backdropFilter: 'blur(10px)'
                            }}
                          >
                            <motion.div
                              animate={{
                                rotate: -rotationDirection * 360
                              }}
                              transition={{
                                duration: rotationSpeed,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                              className="text-white font-bold text-xs text-center leading-tight"
                            >
                              {skill.name}
                            </motion.div>
                          </div>

                          {/* Skill efficiency indicator */}
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                              {skill.efficiency}%
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Category Title */}
                <h3 className="text-xl font-bold text-center professional-heading">
                  {category.title}
                </h3>
              </motion.div>
            );
          })}
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

      {/* Individual Skill Detail Modal */}
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
              className="bg-card border border-border rounded-2xl p-8 max-w-md w-full"
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