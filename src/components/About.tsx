import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            About Me
          </h2>
          <p className="text-xl text-coffee-light max-w-3xl mx-auto">
            Passionate DevOps engineer with a proven track record of building scalable, 
            reliable infrastructure solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-coffee-medium leading-relaxed text-lg">
                Debanjan Das is a DevOps and Site Reliability Engineer with over 7 years of experience 
                in automation, cloud infrastructure, and incident management. With a background in 
                Electrical and Electronics Engineering (B.Tech, VIT Vellore, 2018), Debanjan has worked 
                with leading companies including Capgemini, TCS, TransUnion, and currently serves as 
                Senior SRE at Signeasy.
              </p>
              <p className="text-coffee-medium leading-relaxed text-lg">
                His expertise spans cloud-native solutions, infrastructure automation, monitoring, 
                and cost optimization. Debanjan is passionate about leveraging cutting-edge technologies 
                and AI tools to solve complex infrastructure challenges and drive operational excellence.
              </p>
            </div>
          </div>

          {/* Education Card */}
          <div className="space-y-6">
            <Card className="gradient-card border-0 shadow-medium hover:shadow-strong transition-smooth">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-golden p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-coffee-dark" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-coffee-dark mb-2">Education</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-semibold text-coffee-medium">
                          B.Tech in Electrical and Electronics Engineering
                        </h4>
                        <div className="flex items-center text-coffee-light mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>Vellore Institute of Technology</span>
                        </div>
                        <div className="flex items-center text-coffee-light mt-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>2014 – 2018</span>
                        </div>
                        <div className="mt-2">
                          <span className="bg-golden text-coffee-dark px-3 py-1 rounded-full text-sm font-semibold">
                            CGPA: 8.48 (84.6%)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-golden mb-2">7+</div>
                  <div className="text-coffee-medium font-medium">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-golden mb-2">4</div>
                  <div className="text-coffee-medium font-medium">Companies</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;