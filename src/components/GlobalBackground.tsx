import { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

// Global 3D Background Layer reused across the whole site
export default function GlobalBackground() {
  const canvasRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 300 })
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 300 })

  useEffect(() => {
    let animationFrame: number
    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 2 - 1
        const y = (e.clientY / window.innerHeight) * 2 - 1
        mouseX.set(x)
        mouseY.set(y)
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [mouseX, mouseY])

  const handleLoad = () => setIsLoading(false)
  const handleError = () => { setIsLoading(false); setHasError(true) }

  return (
    <div ref={canvasRef} className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      {/* Primary 3D Layer - Hero Section */}
      <div className="absolute inset-0 w-full h-full">
        {isLoading && (
          <motion.div className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-950/20 via-background to-orange-900/10 flex items-center justify-center z-10"
            initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <div className="flex flex-col items-center gap-6">
              <motion.div className="w-16 h-16 border-4 border-amber-600/60 border-t-transparent rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} />
              <motion.div className="text-amber-200/80 text-xl font-light tracking-wide" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
                Initializing Immersive Experience...
              </motion.div>
            </div>
          </motion.div>
        )}

        <div className="w-full h-full" style={{ opacity: 0.8, backgroundColor: 'transparent' }}>
          <iframe
            src='https://my.spline.design/projectpromolookatmouse-ddlyf0zWizL0p3CxWVOAfFxt/'
            frameBorder='0'
            width='100%'
            height='100%'
            style={{ border: 'none' }}
            title="Primary 3D Animation"
            onLoad={handleLoad}
            onError={handleError}
          />
        </div>

        {hasError && (
          <motion.div className="absolute inset-0 w-full h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/60 text-lg">3D Animation Unavailable</div>
            </div>
          </motion.div>
        )}
      </div>

      {/* DevOps Coding Video - About/Experience Sections */}
      <div className="absolute top-full w-full h-screen overflow-hidden" style={{ opacity: 0.4 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'hue-rotate(30deg) saturate(0.8)' }}
        >
          <source src="/videos/devops-coding.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-transparent to-orange-800/20"></div>
      </div>

      {/* Server/DataCenter Video - Skills/Services Sections */}
      <div className="absolute w-full h-screen overflow-hidden" style={{ top: '200vh', opacity: 0.5 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'hue-rotate(45deg) saturate(0.7)' }}
        >
          <source src="/videos/server-datacenter.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-800/20 via-transparent to-orange-700/30"></div>
      </div>

      {/* Extended 3D Animation - Portfolio Section */}
      <div className="absolute w-full h-screen" style={{ top: '300vh', opacity: 0.4 }}>
        <iframe
          src='https://my.spline.design/projectpromolookatmouse-ddlyf0zWizL0p3CxWVOAfFxt/'
          frameBorder='0'
          width='100%'
          height='100%'
          style={{ border: 'none', transform: 'rotateX(10deg) scale(1.1)' }}
          title="Extended 3D Animation"
        />
      </div>

      {/* DevOps Coding Video (Mirrored) - Contact Section */}
      <div className="absolute w-full h-screen overflow-hidden" style={{ top: '400vh', opacity: 0.3 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'hue-rotate(60deg) saturate(0.6)', transform: 'scaleX(-1)' }}
        >
          <source src="/videos/devops-coding.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-700/20 via-transparent to-orange-600/25"></div>
      </div>

      <div style={{ opacity: 0.25, position: 'relative', zIndex: 1 }}>
        <ProgrammableDevOpsLayer mouseX={smoothMouseX} mouseY={smoothMouseY} />
      </div>
    </div>
  )
}

function ProgrammableDevOpsLayer({ mouseX, mouseY }: { mouseX: any; mouseY: any }) {
  const nodeParallaxX = useTransform(mouseX, (value: number) => value * 40)
  const nodeParallaxY = useTransform(mouseY, (value: number) => value * 30)
  const pipelineParallaxX = useTransform(mouseX, (value: number) => value * 25)
  const pipelineParallaxY = useTransform(mouseY, (value: number) => value * 20)
  const labelParallaxX = useTransform(mouseX, (value: number) => value * 15)
  const labelParallaxY = useTransform(mouseY, (value: number) => value * 12)
  const layerRef = useRef<HTMLDivElement>(null)

  // Static memoized data
  const networkNodes = useMemo(() => Array.from({ length: 25 }, (_, i) => ({
    id: i, x: Math.random() * 100, y: Math.random() * 100, size: Math.random() * 40 + 20, delay: Math.random() * 5, speed: Math.random() * 0.5 + 0.3
  })), [])

  const pipelineConnections = useMemo(() => Array.from({ length: 12 }, (_, i) => ({
    id: i, x1: Math.random() * 100, y1: Math.random() * 100, x2: Math.random() * 100, y2: Math.random() * 100, delay: Math.random() * 3, duration: Math.random() * 4 + 2
  })), [])

  const orbitalSystems = useMemo(() => Array.from({ length: 8 }, (_, i) => ({
    id: i, centerX: Math.random() * 80 + 10, centerY: Math.random() * 80 + 10, radius: Math.random() * 60 + 30, satellites: Math.floor(Math.random() * 4) + 2, speed: Math.random() * 1 + 0.5
  })), [])

  const floatingElements = useMemo(() => Array.from({ length: 15 }, (_, i) => ({
    id: i, x: Math.random() * 100, y: Math.random() * 100, label: ['CI/CD', 'K8s', 'AWS', 'Docker', 'Terraform', 'Jenkins', 'Helm', 'Istio', 'Prometheus', 'Grafana', 'ELK', 'Redis', 'Kafka', 'SRE', 'DevOps'][i], delay: Math.random() * 5, duration: Math.random() * 6 + 4
  })), [])

  return (
    <div ref={layerRef} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="devops-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="rgba(139, 69, 19, 0.3)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#devops-dots)"/>
        </svg>
      </div>

      {networkNodes.map((node) => (
        <motion.div key={node.id} className="absolute" style={{ left: `${node.x}%`, top: `${node.y}%`, x: nodeParallaxX, y: nodeParallaxY }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: node.speed * 2, repeat: Infinity, delay: node.delay }}>
          <div className="rounded-full bg-gradient-to-r from-amber-400/30 to-orange-500/30 border border-amber-300/20" style={{ width: `${node.size}px`, height: `${node.size}px` }} />
        </motion.div>
      ))}

      <svg className="absolute inset-0 w-full h-full" style={{ x: pipelineParallaxX, y: pipelineParallaxY } as any}>
        {pipelineConnections.map((connection) => (
          <motion.line key={connection.id} x1={`${connection.x1}%`} y1={`${connection.y1}%`} x2={`${connection.x2}%`} y2={`${connection.y2}%`} stroke="rgba(255, 193, 7, 0.2)" strokeWidth="1" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: connection.duration, repeat: Infinity, delay: connection.delay }} />
        ))}
      </svg>

      {orbitalSystems.map((system) => (
        <div key={system.id} className="absolute" style={{ left: `${system.centerX}%`, top: `${system.centerY}%` }}>
          {Array.from({ length: system.satellites }).map((_, satelliteIndex) => (
            <motion.div key={satelliteIndex} className="absolute w-2 h-2 bg-amber-400/50 rounded-full" animate={{ rotate: 360 }} transition={{ duration: system.speed * 10, repeat: Infinity, ease: 'linear' }} style={{ x: `${system.radius * Math.cos((satelliteIndex / system.satellites) * 2 * Math.PI)}px`, y: `${system.radius * Math.sin((satelliteIndex / system.satellites) * 2 * Math.PI)}px` }} />
          ))}
        </div>
      ))}

      {floatingElements.map((element) => (
        <motion.div key={element.id} className="absolute text-xs font-mono text-amber-300/40 pointer-events-none" style={{ left: `${element.x}%`, top: `${element.y}%`, x: labelParallaxX, y: labelParallaxY }}
          animate={{ y: [-10, 10, -10], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: element.duration, repeat: Infinity, delay: element.delay }}>
          {element.label}
        </motion.div>
      ))}
    </div>
  )
}
