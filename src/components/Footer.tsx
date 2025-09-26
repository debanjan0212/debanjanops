import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-dark border-t border-coffee-medium py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-golden mb-4">Debanjan Das</h3>
            <p className="text-beige-light leading-relaxed">
              Senior Site Reliability Engineer passionate about building scalable, 
              automated infrastructure solutions that drive innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-warm-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Experience', 'Skills', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-beige-light hover:text-golden transition-smooth"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-warm-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:itsdebanjandas@gmail.com"
                className="flex items-center text-beige-light hover:text-golden transition-smooth"
              >
                <Mail className="w-4 h-4 mr-2" />
                itsdebanjandas@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/debanjan0212/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-beige-light hover:text-golden transition-smooth"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </a>
              <div className="flex items-center text-beige-light">
                <Github className="w-4 h-4 mr-2" />
                GitHub (Coming Soon)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-coffee-medium pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-beige-light text-sm">
              © 2024 Debanjan Das. All rights reserved.
            </div>
            
            <div className="flex items-center text-beige-light text-sm">
              Built with 
              <Heart className="w-4 h-4 mx-1 text-golden" />
              using React & Tailwind CSS
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="mailto:itsdebanjandas@gmail.com"
                className="text-beige-light hover:text-golden transition-smooth"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/debanjan0212/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-beige-light hover:text-golden transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <div className="text-coffee-light">
                <Github className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;