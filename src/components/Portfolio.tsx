import { 
  Database, 
  Settings, 
  Cloud, 
  Shield, 
  Server, 
  Zap,
  ExternalLink,
  Code2
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
    <section id="portfolio" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            Portfolio & Projects
          </h2>
          <p className="text-xl text-coffee-light max-w-3xl mx-auto">
            Real-world solutions that demonstrate expertise in DevOps, cloud infrastructure, and automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center text-warm-white`}>
                    {project.icon}
                  </div>
                  <span className="bg-beige-light text-coffee-medium px-2 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-coffee-dark mb-3">
                  {project.title}
                </h3>
                
                <p className="text-coffee-medium leading-relaxed mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-golden/20 text-coffee-dark px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  onClick={scrollToContact}
                  variant="outline"
                  size="sm"
                  className="w-full border-golden/50 text-coffee-medium hover:bg-golden hover:text-coffee-dark transition-smooth"
                >
                  Learn More
                  <ExternalLink className="ml-2 w-3 h-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Categories Summary */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-gradient-to-br from-golden to-golden-dark rounded-lg text-coffee-dark">
            <div className="text-3xl font-bold mb-2">9+</div>
            <div className="font-medium">Major Projects</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-coffee-medium to-coffee-light rounded-lg text-warm-white">
            <div className="text-3xl font-bold mb-2">5</div>
            <div className="font-medium">Technology Stacks</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-beige-medium to-golden rounded-lg text-coffee-dark">
            <div className="text-3xl font-bold mb-2">80%</div>
            <div className="font-medium">Process Automation</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-coffee-light to-beige-medium rounded-lg text-coffee-dark">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="font-medium">System Reliability</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="gradient-card border-0 shadow-medium inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-coffee-dark mb-4">
                Interested in My Work?
              </h3>
              <p className="text-coffee-medium mb-6 max-w-md">
                Let's discuss how these solutions can be adapted for your infrastructure needs.
              </p>
              <Button 
                onClick={scrollToContact}
                className="bg-golden hover:bg-golden-dark text-coffee-dark px-6 py-2 rounded-lg transition-bounce"
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