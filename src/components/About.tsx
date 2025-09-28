import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react"

const highlights = [
  {
    icon: Briefcase,
    title: "7+ Years",
    description: "Professional Experience"
  },
  {
    icon: Calendar,
    title: "50+ Projects",
    description: "Successfully Delivered"
  },
  {
    icon: GraduationCap,
    title: "99.9%",
    description: "Uptime Achieved"
  }
]

const technologies = [
  "AWS", "Kubernetes", "Docker", "Terraform", "Jenkins",
  "Python", "Bash", "Ansible", "ArgoCD", "ELK Stack"
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4])

  return (
    <section id="about" className="py-12 px-4 relative z-10 bg-background/80 backdrop-blur-sm overflow-hidden">
      <motion.div 
        style={{ y, opacity }} 
        className="max-w-6xl mx-auto"
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 professional-heading">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto professional-text">
            Passionate Site Reliability Engineer with expertise in building resilient, scalable infrastructure
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="space-y-6 transform-gpu"
          >
            <div className="space-y-6">
              <div className="relative">
                <span className="float-left text-6xl font-serif text-golden mr-2 mt-1 leading-none">H</span>
                <p className="text-lg leading-relaxed text-foreground font-serif">
                  i, I'm Debanjan Das, a Senior Site Reliability Engineer (SRE) and DevOps Specialist with over 7 years of 
                  experience building, automating, and scaling reliable cloud systems.
                </p>
              </div>

              <div className="bg-muted/20 border-l-4 border-golden p-4 rounded-r-lg">
                <p className="text-lg leading-relaxed text-foreground font-serif">
                  I began my journey in technology with a B.Tech in Electrical and Electronics Engineering from VIT Vellore (2018) 
                  with a CGPA of 8.48 (equivalent to 84.8%), and since then, I've worked with some of the world's leading organizations including{" "}
                  <span className="font-semibold text-foreground">Capgemini, TCS, TransUnion, and now Signeasy</span>. 
                  My career has been shaped around cloud-native solutions, infrastructure automation, monitoring, and cost optimization, 
                  enabling businesses to run smoothly and efficiently.
                </p>
              </div>

              <p className="text-lg leading-relaxed text-foreground font-serif">
                I'm deeply passionate about automation and operational excellence — whether it's creating scalable architectures with{" "}
                <span className="text-golden font-medium">Terraform, Ansible, and Kubernetes</span>, optimizing cloud infrastructure on{" "}
                <span className="text-golden font-medium">AWS</span>, or designing CI/CD pipelines with{" "}
                <span className="text-golden font-medium">Jenkins and ArgoCD</span>. I thrive on solving complex infrastructure challenges 
                and ensuring systems are always resilient, secure, and cost-effective.
              </p>

              <div className="bg-muted/20 border-l-4 border-golden p-4 rounded-r-lg">
                <p className="text-lg leading-relaxed text-foreground font-serif">
                  Beyond traditional DevOps, I enjoy exploring AI-driven tools like{" "}
                  <span className="font-semibold text-foreground">ChatGPT, Anthropix, Perplexity, and Cursor</span>, 
                  integrating them into workflows to enhance productivity and innovation.
                </p>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground font-serif italic">
                When I'm not engineering systems, I'm constantly learning, experimenting with new technologies, 
                and refining processes that make engineering teams more efficient and organizations more agile.
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold professional-heading">Technologies I Work With</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <Badge variant="secondary" className="text-sm py-1">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Location & Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Briefcase className="h-4 w-4 text-primary" />
                <span>Senior SRE at Signeasy</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.2 } 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="p-6 hover-elevate transition-all duration-300 transform-gpu perspective-1000 bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 professional-heading">Education</h3>
                    <div className="space-y-2">
                      <h4 className="text-lg font-medium text-foreground">B.Tech in Electrical and Electronics Engineering</h4>
                      <p className="text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Vellore Institute of Technology
                      </p>
                      <p className="text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        2014 - 2018
                      </p>
                      <Badge className="bg-primary/10 text-primary border-primary/20 mt-2">
                        CGPA: 8.48 (84.6%)
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2, type: "spring", stiffness: 200 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.2 } 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="p-6 hover-elevate transition-all duration-300 transform-gpu perspective-1000">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold">{highlight.title}</h3>
                        <p className="text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}

            {/* Call to Action Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <Card className="p-6 bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Let's Work Together</h3>
                  <p className="text-muted-foreground mb-4">
                    Ready to bring your ideas to life with cutting-edge technology?
                  </p>
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-primary font-medium hover:underline"
                    data-testid="button-contact-cta"
                  >
                    Get In Touch →
                  </button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}