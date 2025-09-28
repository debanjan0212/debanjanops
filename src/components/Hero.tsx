import React from 'react'
import { motion } from "framer-motion"
import { ChevronDown, Github, Linkedin, Mail, MapPin, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black">
      
      {/* Content Layer - Split Layout Design */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20">

            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >

              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                  <span className="text-white">Debanjan Das</span>
                </h1>

                <h2 className="text-xl lg:text-2xl font-medium mb-2 text-gray-300">
                  DevOps Engineer
                </h2>

                <h3 className="text-2xl lg:text-3xl font-semibold mb-6 leading-tight">
                  <span className="text-white">Transforming Ideas Into </span>
                  <span className="text-red-500">Digital Reality</span>
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8"
              >
                <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                  Senior Site Reliability Engineer with 7+ years transforming infrastructure challenges into scalable, automated solutions. Building resilient systems that power innovation at <span className="text-primary font-semibold">Signeasy</span>.
                </p>

                <div className="flex items-center gap-2 text-gray-400 mt-4">
                  <MapPin className="h-4 w-4" />
                  <span>Bengaluru, India</span>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center gap-4 mb-8"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/10 hover:bg-white/20 border border-white/20"
                  data-testid="button-github"
                >
                  <Github className="h-5 w-5 text-white" />
                </Button>
                <a 
                  href="https://www.linkedin.com/in/debanjan0212/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white/10 hover:bg-white/20 border border-white/20"
                    data-testid="button-linkedin"
                  >
                    <Linkedin className="h-5 w-5 text-white" />
                  </Button>
                </a>
                <a href="mailto:itsdebanjandas@gmail.com">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white/10 hover:bg-white/20 border border-white/20"
                    data-testid="button-email"
                  >
                    <Mail className="h-5 w-5 text-white" />
                  </Button>
                </a>
              </motion.div>

              {/* Call to Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  onClick={scrollToPortfolio}
                  className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 text-lg font-semibold shadow-xl transition-all duration-300"
                  data-testid="button-projects"
                >
                  <FolderOpen className="w-5 h-5 mr-2" />
                  MY PROJECTS
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                  onClick={scrollToAbout}
                  data-testid="button-about"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Side - Professional Portrait */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Clean portrait with natural pop-out and floating animation */}
              <motion.img
                src="https://i.postimg.cc/DfqWFVx3/Gemini-Generated-Image-kjzignkjzignkjzi.png"
                alt="Debanjan Das - Professional Portrait"
                className="w-80 h-96 lg:w-96 lg:h-[500px] object-cover object-center relative z-10 rounded-lg"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5)) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))',
                  background: 'transparent'
                }}
                animate={{
                  y: [0, -15, 0],
                  x: [0, 8, 0, -8, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                data-testid="img-professional-portrait"
              />
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToAbout}
            className="text-white/90 hover:text-white transition-colors backdrop-blur-sm bg-black/10 border border-white/10"
            data-testid="button-scroll-about"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}