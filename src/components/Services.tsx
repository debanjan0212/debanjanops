import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Cloud, 
  Settings, 
  Shield,
  Server,
  Database,
  Monitor
} from "lucide-react"

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Design and implement scalable cloud infrastructure on AWS, Azure, and GCP with best practices for security and cost optimization.",
      features: ["Multi-cloud architecture", "Cost optimization", "Scalability planning", "Security implementation"]
    },
    {
      icon: Settings,
      title: "DevOps Automation",
      description: "Streamline your development workflow with CI/CD pipelines, automated testing, and infrastructure as code.",
      features: ["CI/CD pipeline setup", "Automation frameworks", "Process optimization", "Tool integration"]
    },
    {
      icon: Shield,
      title: "Site Reliability Engineering",
      description: "Ensure your systems are reliable, available, and performant with comprehensive monitoring and incident response.",
      features: ["System monitoring", "Incident response", "Performance optimization", "Reliability engineering"]
    }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="services" className="py-20 px-4 relative z-10 bg-white">
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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 h-full hover-elevate transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 professional-heading">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 professional-text leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" onClick={scrollToContact} className="w-full">
                    Learn More
                  </Button>
                </Card>
              </motion.div>
            )
          })}
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