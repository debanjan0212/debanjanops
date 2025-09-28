import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Cloud, 
  Settings, 
  Shield,
  Server,
  Database,
  Monitor,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure Design & Management",
      description: "Comprehensive cloud architecture design and implementation across AWS, Azure, and GCP. From initial planning to production deployment, ensuring scalability, security, and cost-effectiveness.",
      features: [
        "Multi-cloud architecture design and strategy",
        "Cloud migration planning and execution", 
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Cloud cost optimization and rightsizing",
        "Disaster recovery and backup strategies",
        "Security compliance and governance"
      ]
    },
    {
      icon: Settings,
      title: "DevOps Automation & CI/CD",
      description: "End-to-end DevOps transformation including automated CI/CD pipelines, infrastructure automation, and deployment strategies that reduce time-to-market while improving reliability.",
      features: [
        "CI/CD pipeline design and implementation",
        "Automated testing and quality assurance",
        "Container orchestration with Kubernetes",
        "Configuration management and deployment automation",
        "Git workflow optimization and branching strategies",
        "Environment provisioning and management"
      ]
    },
    {
      icon: Shield,
      title: "Site Reliability Engineering & Monitoring",
      description: "Comprehensive SRE practices to ensure your systems are reliable, available, and performant. Implementation of observability, monitoring, and incident response procedures.",
      features: [
        "System reliability and availability optimization",
        "Comprehensive monitoring and alerting setup",
        "Incident response and post-mortem processes",
        "Performance optimization and capacity planning",
        "SLA/SLO definition and tracking",
        "Chaos engineering and resilience testing"
      ]
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [isAutoPlay, services.length])

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="services" className="py-20 px-4 relative z-10 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 professional-heading">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto professional-text">
            Comprehensive DevOps and infrastructure services to transform your technology stack
          </p>
        </motion.div>

        {/* Horizontal Stack Carousel */}
        <div 
          className="relative h-[500px] mb-16 overflow-hidden"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 z-30">
            <Button
              variant="outline"
              size="icon"
              onClick={prevService}
              className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 z-30">
            <Button
              variant="outline"
              size="icon"
              onClick={nextService}
              className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Service Cards Horizontal Stack */}
          <div className="relative w-full h-full flex items-center justify-center">
            {services.map((service, index) => {
              const Icon = service.icon
              const isActive = index === currentIndex
              const isPrev = index === (currentIndex - 1 + services.length) % services.length
              const isNext = index === (currentIndex + 1) % services.length
              
              let position = 'hidden'
              let transform = 'translate-x-0'
              let scale = 'scale-75'
              let opacity = 'opacity-0'
              let zIndex = 'z-10'
              
              if (isActive) {
                position = 'block'
                transform = 'translate-x-0'
                scale = 'scale-100'
                opacity = 'opacity-100'
                zIndex = 'z-20'
              } else if (isPrev) {
                position = 'block'
                transform = '-translate-x-[280px]'
                scale = 'scale-75'
                opacity = 'opacity-60'
                zIndex = 'z-10'
              } else if (isNext) {
                position = 'block'
                transform = 'translate-x-[280px]'
                scale = 'scale-75'
                opacity = 'opacity-60'
                zIndex = 'z-10'
              }

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.75 }}
                  animate={{ 
                    opacity: isActive ? 1 : isPrev || isNext ? 0.6 : 0,
                    scale: isActive ? 1 : 0.75,
                    x: isActive ? 0 : isPrev ? -280 : isNext ? 280 : 0
                  }}
                  transition={{ 
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className={`absolute inset-0 w-full max-w-md mx-auto ${position} ${zIndex}`}
                  style={{ 
                    left: '50%', 
                    transform: 'translateX(-50%)',
                    width: '400px',
                    height: '450px'
                  }}
                >
                  <Card className={`p-6 h-full transition-all duration-500 ${
                    isActive 
                      ? 'shadow-xl border-primary/30 bg-card/95 backdrop-blur-sm' 
                      : 'shadow-md border-border/30 bg-card/80'
                  }`}>
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold professional-heading">{service.title}</h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 professional-text leading-relaxed text-sm">
                        {service.description}
                      </p>
                      
                      <div className="flex-1">
                        <div className="space-y-2">
                          {service.features.slice(0, 4).map((feature, featureIndex) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: isActive ? 1 : 0.7, x: 0 }}
                              transition={{ delay: isActive ? featureIndex * 0.05 : 0 }}
                              className="flex items-center text-xs text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0"></div>
                              {feature}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-border/50">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={scrollToContact} 
                          className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <Card className="p-6 text-center hover-elevate transition-all duration-300">
            <Server className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Infrastructure as Code</h3>
            <p className="text-muted-foreground text-sm professional-text">
              Terraform and Ansible expertise for reproducible infrastructure
            </p>
          </Card>
          <Card className="p-6 text-center hover-elevate transition-all duration-300">
            <Database className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Container Orchestration</h3>
            <p className="text-muted-foreground text-sm professional-text">
              Kubernetes and Docker solutions for scalable applications
            </p>
          </Card>
          <Card className="p-6 text-center hover-elevate transition-all duration-300">
            <Monitor className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Monitoring & Alerting</h3>
            <p className="text-muted-foreground text-sm professional-text">
              Comprehensive monitoring with ELK Stack and Prometheus
            </p>
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
            <h3 className="text-2xl font-bold mb-4 professional-heading">Start a Conversation</h3>
            <p className="text-muted-foreground mb-6 professional-text max-w-2xl mx-auto">
              Ready to optimize your infrastructure and streamline your DevOps processes? Let's discuss your project requirements.
            </p>
            <Button size="lg" onClick={scrollToContact} className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;