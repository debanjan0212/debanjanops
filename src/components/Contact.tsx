import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-coffee-dark to-coffee-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-beige-light max-w-3xl mx-auto">
            Ready to discuss your next DevOps project or SRE challenge? Let's talk about how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-warm-white mb-4">
                Got a project?
              </h3>
              <h4 className="text-3xl font-bold text-golden mb-6">
                Let's talk.
              </h4>
              <p className="text-beige-light leading-relaxed mb-8">
                Whether you need DevOps consulting, infrastructure automation, or SRE expertise, 
                I'm here to help transform your operations and drive reliability at scale.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a 
                href="mailto:itsdebanjandas@gmail.com"
                className="flex items-center text-golden hover:text-warm-white transition-smooth group"
              >
                <div className="w-12 h-12 bg-golden/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-golden/30 transition-smooth">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-beige-light">itsdebanjandas@gmail.com</div>
                </div>
              </a>

              <a 
                href="tel:+917903963451"
                className="flex items-center text-golden hover:text-warm-white transition-smooth group"
              >
                <div className="w-12 h-12 bg-golden/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-golden/30 transition-smooth">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-beige-light">+91 7903963451</div>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/debanjan0212/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-golden hover:text-warm-white transition-smooth group"
              >
                <div className="w-12 h-12 bg-golden/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-golden/30 transition-smooth">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-beige-light">Page makeover in progress</div>
                </div>
              </a>

              <div className="flex items-center text-golden">
                <div className="w-12 h-12 bg-golden/20 rounded-lg flex items-center justify-center mr-4">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">GitHub</div>
                  <div className="text-beige-light">Coming Soon</div>
                </div>
              </div>

              <div className="flex items-center text-golden">
                <div className="w-12 h-12 bg-golden/20 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-beige-light">Bengaluru (North) India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <Card className="bg-warm-white/10 backdrop-blur-sm border-0 shadow-strong">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-warm-white mb-2">
                  Estimate your project?
                </h3>
                <p className="text-beige-light mb-8">
                  Let me know here.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-warm-white font-medium mb-2">
                      What's your name?
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-warm-white/20 border-warm-white/30 text-warm-white placeholder:text-beige-light focus:border-golden"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-warm-white font-medium mb-2">
                      Your fancy email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-warm-white/20 border-warm-white/30 text-warm-white placeholder:text-beige-light focus:border-golden"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-warm-white font-medium mb-2">
                      Tell me about your project
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-warm-white/20 border-warm-white/30 text-warm-white placeholder:text-beige-light focus:border-golden resize-none"
                      placeholder="Describe your DevOps/SRE needs, infrastructure challenges, or any specific requirements..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-golden hover:bg-golden-dark text-coffee-dark font-semibold py-3 rounded-lg transition-bounce"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Thank You Message */}
            <div className="text-center mt-8">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☕</span>
              </div>
              <p className="text-beige-light">
                Thanks for scrolling, that's all folks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;