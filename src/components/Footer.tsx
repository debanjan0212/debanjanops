import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Linkedin, Github, Heart } from 'lucide-react'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 professional-heading">Debanjan Das</h3>
            <p className="text-gray-300 leading-relaxed professional-text">
              Senior Site Reliability Engineer passionate about building scalable, 
              automated infrastructure solutions that drive innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 professional-heading">Quick Links</h4>
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
                  className="block text-gray-300 hover:text-white transition-colors duration-300 professional-text"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 professional-heading">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:itsdebanjandas@gmail.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 professional-text"
              >
                <Mail className="w-4 h-4 mr-2" />
                itsdebanjandas@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/debanjan0212/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 professional-text"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </a>
              <div className="flex items-center text-gray-400 professional-text">
                <Github className="w-4 h-4 mr-2" />
                GitHub (Coming Soon)
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm professional-text">
              © 2024 Debanjan Das. All rights reserved.
            </div>
            
            <div className="flex items-center text-gray-400 text-sm professional-text">
              Built with 
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              using React & Tailwind CSS
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="mailto:itsdebanjandas@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/debanjan0212/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <div className="text-gray-600">
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