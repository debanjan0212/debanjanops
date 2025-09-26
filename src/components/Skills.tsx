import { 
  Cloud, 
  Server, 
  Settings, 
  Shield, 
  Code, 
  Zap,
  Database,
  Monitor,
  GitBranch,
  Bot
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "DevOps & Automation",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Automation", "CI/CD Pipelines", "Infrastructure as Code", "Jenkins", "ArgoCD"],
      color: "from-golden to-golden-dark"
    },
    {
      title: "Cloud Technologies",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "EC2", "S3", "EKS", "CloudFront", "IAM", "ALB"],
      color: "from-coffee-medium to-coffee-light"
    },
    {
      title: "Container Orchestration",
      icon: <Server className="w-6 h-6" />,
      skills: ["Kubernetes", "Docker", "Helm Charts", "Container Management"],
      color: "from-beige-medium to-coffee-light"
    },
    {
      title: "Infrastructure Tools",
      icon: <Code className="w-6 h-6" />,
      skills: ["Terraform", "Terragrunt", "Pulumi", "Ansible", "IaC"],
      color: "from-golden-dark to-coffee-medium"
    },
    {
      title: "Monitoring & Logging",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["ELK Stack", "Logging Solutions", "System Monitoring", "Performance Optimization"],
      color: "from-coffee-light to-beige-medium"
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Vulnerability Management", "Patching Strategy", "Security Automation", "ITIL/ITSM"],
      color: "from-golden to-coffee-medium"
    },
    {
      title: "Programming",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Python", "Bash", "Scripting", "Automation Scripts"],
      color: "from-coffee-medium to-golden-dark"
    },
    {
      title: "AI & Modern Tools",
      icon: <Bot className="w-6 h-6" />,
      skills: ["Cursor", "ChatGPT", "Anthropix", "Napkin", "Lovable", "Erasor", "Perplexity"],
      color: "from-golden-dark to-golden"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-warm-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 gradient-glow rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 gradient-glow rounded-full blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-xl text-coffee-light max-w-3xl mx-auto">
            Comprehensive expertise across the entire DevOps and cloud infrastructure ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="glass-effect border border-golden/20 shadow-soft hover:shadow-glow transition-smooth hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 text-warm-white shadow-glow group-hover:animate-pulse-glow`}>
                  {category.icon}
                </div>
                
                <h3 className="text-lg font-bold text-coffee-dark mb-4 group-hover:text-gradient transition-all duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-beige-light/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-coffee-medium font-medium hover:bg-golden/20 transition-smooth cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Key Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-golden to-golden-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-neon transition-all duration-300 group-hover:animate-pulse-glow">
              <Zap className="w-8 h-8 text-coffee-dark group-hover:animate-glow" />
            </div>
            <h3 className="text-xl font-bold text-coffee-dark mb-2 group-hover:text-gradient transition-all duration-300">Automation Expert</h3>
            <p className="text-coffee-medium">Streamlining operations through intelligent automation and scripting</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-golden to-golden-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-neon transition-all duration-300 group-hover:animate-pulse-glow">
              <Database className="w-8 h-8 text-coffee-dark group-hover:animate-glow" />
            </div>
            <h3 className="text-xl font-bold text-coffee-dark mb-2 group-hover:text-gradient transition-all duration-300">Cloud Architecture</h3>
            <p className="text-coffee-medium">Designing scalable and resilient cloud infrastructure solutions</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-golden to-golden-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-neon transition-all duration-300 group-hover:animate-pulse-glow">
              <Monitor className="w-8 h-8 text-coffee-dark group-hover:animate-glow" />
            </div>
            <h3 className="text-xl font-bold text-coffee-dark mb-2 group-hover:text-gradient transition-all duration-300">Site Reliability</h3>
            <p className="text-coffee-medium">Ensuring high availability and performance of critical systems</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;