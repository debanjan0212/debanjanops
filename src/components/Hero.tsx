import { ArrowRight, Download, Code, Cloud, Settings, Terminal, Cpu, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import profilePhoto from '@/assets/debanjan-profile.jpg';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-mesh"
      style={{
        backgroundImage: `linear-gradient(rgba(20, 15, 8, 0.85), rgba(25, 18, 12, 0.7)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Floating Elements */}
      <div className="floating-element top-20 left-10 w-16 h-16 glass-effect rounded-xl animate-float hidden lg:block">
        <div className="w-full h-full flex items-center justify-center">
          <Code className="w-8 h-8 text-golden animate-glow" />
        </div>
      </div>
      
      <div className="floating-element top-40 right-20 w-20 h-20 glass-effect rounded-xl animate-float-reverse hidden lg:block">
        <div className="w-full h-full flex items-center justify-center">
          <Cloud className="w-10 h-10 text-accent animate-pulse-glow" />
        </div>
      </div>

      <div className="floating-element bottom-40 left-20 w-14 h-14 glass-effect rounded-xl animate-float hidden lg:block">
        <div className="w-full h-full flex items-center justify-center">
          <Terminal className="w-7 h-7 text-golden animate-glow" />
        </div>
      </div>

      <div className="floating-element top-60 right-10 w-18 h-18 glass-effect rounded-xl animate-float-reverse hidden lg:block">
        <div className="w-full h-full flex items-center justify-center">
          <Settings className="w-9 h-9 text-accent animate-spin-slow" />
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-glow rounded-full blur-3xl opacity-20 animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 gradient-glow rounded-full blur-3xl opacity-15 animate-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Photo with Enhanced Design */}
          <div className="mb-8 flex justify-center relative">
            <div className="relative">
              {/* Glow Ring */}
              <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 rounded-full shadow-neon animate-pulse-glow"></div>
              
              {/* Profile Photo */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-golden shadow-float animate-float relative z-10">
                <img 
                  src={profilePhoto} 
                  alt="Debanjan Das - Senior Site Reliability Engineer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-2 -right-2 w-8 h-8 glass-effect rounded-lg animate-float hidden md:flex items-center justify-center">
                <Cpu className="w-4 h-4 text-golden" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 glass-effect rounded-lg animate-float-reverse hidden md:flex items-center justify-center">
                <Zap className="w-4 h-4 text-accent" />
              </div>
            </div>
          </div>

          {/* Enhanced Hero Content */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-warm-white mb-6">
            <span className="block">Debanjan Das</span>
            <span className="block text-gradient text-2xl md:text-3xl lg:text-4xl font-medium mt-2">
              Senior Site Reliability Engineer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-beige-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Cloud & DevOps Specialist | 7+ Years in Automation & Infrastructure Reliability
          </p>
          
          <div className="mb-12">
            <p className="text-lg text-cream max-w-2xl mx-auto">
              Transforming infrastructure challenges into scalable, automated solutions. 
              Passionate about building resilient systems that power innovation.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToPortfolio}
              className="bg-golden hover:bg-golden-dark text-coffee-dark px-8 py-3 text-lg font-semibold rounded-lg transition-bounce shadow-glow hover:shadow-neon group"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              className="glass-effect border-2 border-golden text-golden hover:bg-golden hover:text-coffee-dark px-8 py-3 text-lg font-semibold rounded-lg transition-bounce hover:shadow-glow"
              asChild
            >
              <a 
                href="/resume.pdf" 
                download="Debanjan_Das_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Modern Stats Cards */}
          <div className="flex flex-wrap justify-center gap-4 mt-16">
            <div className="glass-effect rounded-xl p-4 min-w-[120px] animate-fade-in">
              <div className="text-2xl font-bold text-gradient">7+</div>
              <div className="text-sm text-cream">Years Experience</div>
            </div>
            <div className="glass-effect rounded-xl p-4 min-w-[120px] animate-fade-in">
              <div className="text-2xl font-bold text-gradient">50+</div>
              <div className="text-sm text-cream">Projects Delivered</div>
            </div>
            <div className="glass-effect rounded-xl p-4 min-w-[120px] animate-fade-in">
              <div className="text-2xl font-bold text-gradient">99.9%</div>
              <div className="text-sm text-cream">Uptime Achieved</div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="glass-effect w-8 h-12 rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-4 bg-golden rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;