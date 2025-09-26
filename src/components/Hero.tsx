import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(20, 15, 8, 0.8), rgba(25, 18, 12, 0.6)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-golden shadow-strong animate-float">
              <img 
                src={profilePhoto} 
                alt="Debanjan Das - Senior Site Reliability Engineer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Hero Content */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-warm-white mb-6">
            <span className="block">Debanjan Das</span>
            <span className="block text-golden text-2xl md:text-3xl lg:text-4xl font-medium mt-2">
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToPortfolio}
              className="bg-golden hover:bg-golden-dark text-coffee-dark px-8 py-3 text-lg font-semibold rounded-lg transition-bounce shadow-medium"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline"
              className="border-2 border-golden text-golden hover:bg-golden hover:text-coffee-dark px-8 py-3 text-lg font-semibold rounded-lg transition-bounce"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-golden rounded-full flex justify-center">
            <div className="w-1 h-3 bg-golden rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;