import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { z } from 'zod';

// Form validation schema
const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters")
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_d2tpiun';
  const EMAILJS_TEMPLATE_ID = 'template_wj87ai6';
  const EMAILJS_PUBLIC_KEY = 'AtyFW3qsDkf98KhYZ';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: validatedData.name,
          from_email: validatedData.email,
          subject: validatedData.subject,
          message: validatedData.message,
          to_email: 'itsdebanjandas@gmail.com', // Your email
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Failed to Send Message",
          description: "Please check your EmailJS configuration or try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 px-4 relative z-10 bg-background/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-beige-light max-w-3xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from you and explore how we can work together.
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
                Whether you're looking for DevOps consulting, infrastructure expertise, or collaboration opportunities, 
                I'm here to help drive innovation and reliability in your technology operations.
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
                  <div className="text-beige-light">linkedin.com/in/debanjan0212</div>
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
                  Get in Touch
                </h3>
                <p className="text-beige-light mb-8">
                  Let me know how I can help you.
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
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-warm-white/20 border-warm-white/30 text-warm-white placeholder:text-beige-light focus:border-golden"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div>
                    <label className="block text-warm-white font-medium mb-2">
                      Reason for reaching out
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-warm-white/20 border-warm-white/30 text-warm-white placeholder:text-beige-light focus:border-golden resize-none"
                      placeholder="Tell me about your requirements, collaboration ideas, or any questions you have..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-golden hover:bg-golden-dark text-coffee-dark font-semibold py-3 rounded-lg transition-bounce disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
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