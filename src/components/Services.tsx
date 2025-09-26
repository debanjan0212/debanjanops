import { 
  Settings, 
  Cloud, 
  Shield, 
  Zap, 
  Database, 
  GitBranch,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "DevOps Engineering",
      description: "End-to-end DevOps solutions including automation, CI/CD pipeline design, and Infrastructure as Code implementation.",
      features: ["CI/CD Pipeline Setup", "Automation Scripts", "Infrastructure as Code", "Process Optimization"],
      gradient: "from-golden to-golden-dark"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Site Reliability Engineering",
      description: "Comprehensive SRE services focusing on system reliability, monitoring, incident management, and scalability.",
      features: ["System Monitoring", "Incident Management", "Performance Optimization", "Reliability Engineering"],
      gradient: "from-coffee-medium to-coffee-light"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Optimization & Security",
      description: "Cloud infrastructure optimization, security implementation, and cost management across AWS platforms.",
      features: ["AWS Architecture", "Cost Optimization", "Security Implementation", "Migration Services"],
      gradient: "from-coffee-light to-beige-medium"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            Professional Services
          </h2>
          <p className="text-xl text-coffee-light max-w-3xl mx-auto">
            Comprehensive DevOps and SRE solutions to transform your infrastructure and operations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="gradient-card border-0 shadow-medium hover:shadow-strong transition-smooth hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 text-warm-white`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-coffee-dark mb-4">
                  {service.title}
                </h3>
                
                <p className="text-coffee-medium leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-golden rounded-full mr-3"></div>
                      <span className="text-coffee-medium font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full border-golden text-golden hover:bg-golden hover:text-coffee-dark transition-bounce"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Service Highlights */}
        <div className="bg-gradient-to-r from-coffee-dark to-coffee-medium rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-warm-white mb-4">
            Ready to Transform Your Infrastructure?
          </h3>
          <p className="text-xl text-beige-light mb-8 max-w-3xl mx-auto">
            Let's discuss how modern DevOps practices and SRE principles can enhance your system reliability, 
            reduce operational overhead, and accelerate your development velocity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              className="bg-golden hover:bg-golden-dark text-coffee-dark px-8 py-3 text-lg font-semibold rounded-lg transition-bounce"
            >
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <div className="flex items-center space-x-6 text-beige-light">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>Secure Solutions</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                <span>Fast Implementation</span>
              </div>
              <div className="flex items-center">
                <GitBranch className="w-5 h-5 mr-2" />
                <span>Best Practices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;