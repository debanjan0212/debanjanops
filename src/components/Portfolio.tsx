import { 
  Database, 
  Settings, 
  Cloud, 
  Shield, 
  Server, 
  Zap,
  ExternalLink,
  Code2,
  Container,
  Monitor,
  Terminal,
  Cpu,
  HardDrive,
  Network
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Portfolio = () => {
  const projects = [
    {
      title: "End-to-End Logging & Monitoring",
      description: "Comprehensive logging and monitoring solution for big data processing systems with real-time alerts and dashboards.",
      icon: <Database className="w-6 h-6" />,
      technologies: ["ELK Stack", "Monitoring", "Big Data", "Dashboards"],
      category: "Monitoring",
      gradient: "from-golden to-golden-dark"
    },
    {
      title: "Ansible Automation Framework",
      description: "Automated daily operational tasks reducing manual intervention by 80% and improving system reliability.",
      icon: <Settings className="w-6 h-6" />,
      technologies: ["Ansible", "Automation", "Python", "Scripting"],
      category: "Automation",
      gradient: "from-coffee-medium to-coffee-light"
    },
    {
      title: "On-Premises Housekeeping Automation",
      description: "Automated maintenance scripts for on-premises infrastructure reducing operational overhead significantly.",
      icon: <Server className="w-6 h-6" />,
      technologies: ["Bash", "Python", "Cron", "System Administration"],
      category: "Infrastructure",
      gradient: "from-coffee-light to-beige-medium"
    },
    {
      title: "Optimized EC2 User Data Workflows",
      description: "Streamlined EC2 instance provisioning with optimized user data scripts for faster deployment times.",
      icon: <Cloud className="w-6 h-6" />,
      technologies: ["AWS EC2", "User Data", "Cloud-Init", "Optimization"],
      category: "Cloud",
      gradient: "from-beige-medium to-golden"
    },
    {
      title: "Infrastructure as Code Architecture",
      description: "Comprehensive IaC solutions using Terraform, Terragrunt, and Pulumi for scalable infrastructure management.",
      icon: <Code2 className="w-6 h-6" />,
      technologies: ["Terraform", "Terragrunt", "Pulumi", "IaC"],
      category: "IaC",
      gradient: "from-golden-dark to-coffee-medium"
    },
    {
      title: "Kubernetes Helm Charts",
      description: "Templated Helm charts for standardized Kubernetes service deployments across multiple environments.",
      icon: <Settings className="w-6 h-6" />,
      technologies: ["Kubernetes", "Helm", "Templates", "DevOps"],
      category: "Orchestration",
      gradient: "from-coffee-medium to-golden"
    },
    {
      title: "AWS Vulnerability Management",
      description: "Comprehensive vulnerability assessment and automated patching strategy for AWS infrastructure security.",
      icon: <Shield className="w-6 h-6" />,
      technologies: ["AWS Security", "Vulnerability Management", "Patching", "Compliance"],
      category: "Security",
      gradient: "from-golden to-coffee-light"
    },
    {
      title: "Kong API Gateway Implementation",
      description: "Cost-effective API gateway solution reducing infrastructure costs while improving API management and security.",
      icon: <Zap className="w-6 h-6" />,
      technologies: ["Kong", "API Gateway", "Cost Optimization", "Microservices"],
      category: "Architecture",
      gradient: "from-coffee-light to-golden-dark"
    },
    {
      title: "Cloud Cost Optimization",
      description: "Comprehensive cost optimization projects for both cloud and on-premises infrastructure reducing operational expenses.",
      icon: <Cloud className="w-6 h-6" />,
      technologies: ["Cost Optimization", "AWS", "Resource Management", "Analytics"],
      category: "Optimization",
      gradient: "from-beige-medium to-coffee-medium"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-coffee-dark via-coffee-medium to-coffee-light relative overflow-hidden">
      {/* Animated DevOps Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating DevOps Icons */}
        <div className="absolute top-20 left-10 w-16 h-16 text-golden/20 animate-float">
          <Container className="w-full h-full" />
        </div>
        <div className="absolute top-40 right-20 w-20 h-20 text-accent/20 animate-float-reverse">
          <Monitor className="w-full h-full" />
        </div>
        <div className="absolute bottom-40 left-20 w-18 h-18 text-golden/20 animate-float">
          <Terminal className="w-full h-full" />
        </div>
        <div className="absolute top-60 left-1/3 w-14 h-14 text-accent/20 animate-float-reverse">
          <Cpu className="w-full h-full" />
        </div>
        <div className="absolute bottom-60 right-1/4 w-16 h-16 text-golden/20 animate-float">
          <HardDrive className="w-full h-full" />
        </div>
        <div className="absolute top-1/3 right-10 w-12 h-12 text-accent/20 animate-float-reverse">
          <Network className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 left-1/2 w-15 h-15 text-golden/20 animate-float">
          <Server className="w-full h-full" />
        </div>
        
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-glow rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 gradient-glow rounded-full blur-3xl opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-6">
            <span className="text-gradient">Portfolio & Projects</span>
          </h2>
          <p className="text-xl text-beige-light max-w-3xl mx-auto">
            Real-world solutions that demonstrate expertise in DevOps, cloud infrastructure, and automation
          </p>
        </div>

        {/* Modern Project Carousel */}
        <div className="mb-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className="bg-coffee-dark/80 backdrop-blur-sm border border-golden/30 shadow-strong hover:shadow-neon transition-smooth hover:-translate-y-2 animate-fade-in group h-full"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center text-warm-white shadow-glow group-hover:animate-pulse-glow`}>
                          {project.icon}
                        </div>
                        <span className="bg-golden/20 text-golden px-3 py-1 rounded-full text-xs font-medium border border-golden/30">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-warm-white mb-3 group-hover:text-gradient transition-all duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-beige-light leading-relaxed mb-4 text-sm flex-grow">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-golden/20 text-golden px-2 py-1 rounded text-xs font-medium hover:bg-golden/30 transition-smooth cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <Button 
                        onClick={scrollToContact}
                        variant="outline"
                        size="sm"
                        className="w-full bg-golden/10 border-golden/50 text-golden hover:bg-golden hover:text-coffee-dark hover:shadow-glow transition-smooth group mt-auto"
                      >
                        Learn More
                        <ExternalLink className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-golden/20 border-golden/30 text-golden hover:bg-golden hover:text-coffee-dark" />
            <CarouselNext className="bg-golden/20 border-golden/30 text-golden hover:bg-golden hover:text-coffee-dark" />
          </Carousel>
        </div>

        {/* Enhanced Project Categories Summary */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-coffee-dark/60 backdrop-blur-sm border border-golden/30 rounded-xl text-warm-white hover:shadow-glow transition-smooth group">
            <div className="text-3xl font-bold mb-2 text-gradient group-hover:animate-pulse-glow">9+</div>
            <div className="font-medium text-beige-light">Major Projects</div>
          </div>
          <div className="text-center p-6 bg-coffee-dark/60 backdrop-blur-sm border border-golden/30 rounded-xl text-warm-white hover:shadow-glow transition-smooth group">
            <div className="text-3xl font-bold mb-2 text-gradient group-hover:animate-pulse-glow">5</div>
            <div className="font-medium text-beige-light">Technology Stacks</div>
          </div>
          <div className="text-center p-6 bg-coffee-dark/60 backdrop-blur-sm border border-golden/30 rounded-xl text-warm-white hover:shadow-glow transition-smooth group">
            <div className="text-3xl font-bold mb-2 text-gradient group-hover:animate-pulse-glow">80%</div>
            <div className="font-medium text-beige-light">Process Automation</div>
          </div>
          <div className="text-center p-6 bg-coffee-dark/60 backdrop-blur-sm border border-golden/30 rounded-xl text-warm-white hover:shadow-glow transition-smooth group">
            <div className="text-3xl font-bold mb-2 text-gradient group-hover:animate-pulse-glow">24/7</div>
            <div className="font-medium text-beige-light">System Reliability</div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <Card className="bg-coffee-dark/60 backdrop-blur-sm border border-golden/30 shadow-glow inline-block hover:shadow-neon transition-smooth">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Interested in My Work?
              </h3>
              <p className="text-beige-light mb-6 max-w-md">
                Let's discuss how these solutions can be adapted for your infrastructure needs.
              </p>
              <Button 
                onClick={scrollToContact}
                className="bg-golden hover:bg-golden-dark text-coffee-dark px-6 py-2 rounded-lg transition-bounce shadow-glow hover:shadow-neon"
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;