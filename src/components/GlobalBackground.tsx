import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * GlobalBackground (upgraded)
 * - Page-level perspective & tilt linked to pointer
 * - Respect prefers-reduced-motion
 * - Lazy-load iframe
 * - Throttled pointer updates + rAF
 */

export default function GlobalBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Respect user preference for reduced motion
  const prefersReducedMotion = useRef<boolean>(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mq ? mq.matches : false;
    const onChange = () => (prefersReducedMotion.current = !!mq.matches);
    mq?.addEventListener?.("change", onChange);
    return () => mq?.removeEventListener?.("change", onChange);
  }, []);

  // normalized mouse [-1..1]
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // smooth springs to avoid jumps
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 40 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 40 });

  // map to tilt and depth
  const tiltY = useTransform(smoothX, (v) => v * 8); // rotateY
  const tiltX = useTransform(smoothY, (v) => -v * 6); // rotateX (invert)
  const globalTranslateZ = useTransform(smoothY, (v) => v * 6); // small Z offset for depth

  // pointer handling: throttle using rAF
  useEffect(() => {
    if (prefersReducedMotion.current) return undefined;
    let raf = 0;
    const onPointer = (e: PointerEvent) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        // Use bounding rect so nested containers work too if you ever bind to containerRef
        const w = window.innerWidth;
        const h = window.innerHeight;
        const nx = (e.clientX / w) * 2 - 1; // -1 .. 1
        const ny = (e.clientY / h) * 2 - 1;
        mouseX.set(nx);
        mouseY.set(ny);
      });
    };

    // prefer pointermove for better touch/mouse support
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("pointerleave", () => { mouseX.set(0); mouseY.set(0); }, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.cancelAnimationFrame(raf);
    };
  }, [mouseX, mouseY]);

  // lazy-load iframe only when in viewport or slightly after mount
  useEffect(() => {
    const t = setTimeout(() => setIframeLoaded(true), 600); // small delay to allow page paint
    return () => clearTimeout(t);
  }, []);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    setIsLoading(false);
  };
  const handleIframeError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  // small optimization: hide complex animations on small screens or low-power devices
  const shouldReduceForDevice = (() => {
    if (typeof navigator === "undefined") return true;
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const connection = (navigator as any).connection;
    if (isMobile) return true;
    if (connection && connection.saveData) return true;
    return false;
  })();

  // depth layers config (you can customize)
  const layers = useMemo(() => [
    { id: "hero-3d", depth: 32, opacity: 1, content: "iframe" },
    { id: "devops-video", depth: 18, opacity: 0.25, content: "video", topOffset: "100%" },
    { id: "skills-video", depth: 14, opacity: 0.5, content: "video", topOffsetType: "element" },
    { id: "services-video", depth: 12, opacity: 0.5, content: "video", topOffsetType: "element" },
  ], []);

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      style={{
        // Shared perspective for all children: large value for subtle 3D
        perspective: 1200,
        transformStyle: "preserve-3d",
      }}
      aria-hidden
    >
      {/* subtle global tilt applied to wrapper */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          translateZ: globalTranslateZ,
          willChange: "transform",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Loading overlay */}
        {isLoading && !prefersReducedMotion.current && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-20 bg-gradient-to-br from-amber-950/6 to-orange-900/6"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.6 }}
            style={{ pointerEvents: "none" }}
          >
            <div className="flex flex-col items-center gap-3">
              <motion.div
                className="w-12 h-12 border-4 border-amber-600/60 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.1, ease: "linear", repeat: Infinity }}
              />
              <div className="text-amber-200/80 text-sm font-light">
                Initializing immersive experience…
              </div>
            </div>
          </motion.div>
        )}

        {/* HERO: iframe or fallback image */}
        <div className="absolute inset-0 w-full h-full" style={{ opacity: 0.28 }}>
          {iframeLoaded && !hasError ? (
            <iframe
              src="https://my.spline.design/projectpromolookatmouse-ddlyf0zWizL0p3CxWVOAfFxt/"
              title="Primary 3D Animation"
              frameBorder={0}
              width="100%"
              height="100%"
              style={{ border: "none", transformStyle: "preserve-3d", willChange: "transform" }}
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              loading="lazy"
              aria-hidden
            />
          ) : hasError ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/60 text-lg">3D Animation Unavailable</div>
            </div>
          ) : (
            // lightweight placeholder until iframe is loaded
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/8 to-orange-800/6 flex items-center justify-center">
              <div className="text-amber-200/50">Preparing hero animation…</div>
            </div>
          )}
        </div>

        {/* Example depth layer that reacts a bit stronger to the pointer
            Use transform translateZ on children for parallax */}
        <ProgrammableDevOpsLayer
          mouseX={smoothX}
          mouseY={smoothY}
          shouldReduce={shouldReduceForDevice || prefersReducedMotion.current}
        />
      </motion.div>
    </motion.div>
  );
}

/* ---------------------------
   ProgrammableDevOpsLayer
   - Uses motion values passed down to calculate parallax
   - Light on CPU; avoids creating tons of animated DOM on mobile
   --------------------------- */
function ProgrammableDevOpsLayer({ mouseX, mouseY, shouldReduce = false }: { mouseX: any; mouseY: any; shouldReduce?: boolean }) {
  const nodeParallaxFactorX = shouldReduce ? 6 : 40;
  const nodeParallaxFactorY = shouldReduce ? 4 : 30;
  const nodeParallaxX = useTransform(mouseX, (v: number) => v * nodeParallaxFactorX);
  const nodeParallaxY = useTransform(mouseY, (v: number) => v * nodeParallaxFactorY);
  const labelParallaxX = useTransform(mouseX, (v: number) => v * (shouldReduce ? 8 : 15));
  const labelParallaxY = useTransform(mouseY, (v: number) => v * (shouldReduce ? 6 : 12));

  const networkNodes = useMemo(() => {
    // fewer nodes on smaller screens
    const base = window.innerWidth < 900 ? 10 : 25;
    return Array.from({ length: base }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 12,
      delay: Math.random() * 4,
      speed: Math.random() * 0.6 + 0.3
    }));
  }, []);

  const floatingElements = useMemo(() => {
    const labels = ['CI/CD', 'K8s', 'AWS', 'Docker', 'Terraform', 'Jenkins', 'Helm', 'Istio', 'Prometheus', 'Grafana', 'ELK', 'Redis', 'Kafka', 'SRE', 'DevOps'];
    const base = window.innerWidth < 900 ? 7 : 15;
    return Array.from({ length: base }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      label: labels[i % labels.length],
      delay: Math.random() * 4,
      duration: Math.random() * 6 + 3
    }));
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
      <div className="absolute inset-0 opacity-20" style={{ willChange: "transform" }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="devops-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="rgba(139, 69, 19, 0.2)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#devops-dots)"/>
        </svg>
      </div>

      {networkNodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            x: nodeParallaxX,
            y: nodeParallaxY,
            zIndex: 0,
            willChange: "transform"
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.7, 0.25] }}
          transition={{ duration: node.speed * 2, repeat: Infinity, delay: node.delay }}
        >
          <div className="rounded-full bg-gradient-to-r from-amber-400/30 to-orange-500/30 border border-amber-300/20"
            style={{ width: `${node.size}px`, height: `${node.size}px` }} />
        </motion.div>
      ))}

      {floatingElements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute text-xs font-mono text-amber-300/40 pointer-events-none"
          style={{ left: `${el.x}%`, top: `${el.y}%`, x: labelParallaxX, y: labelParallaxY, willChange: "transform" }}
          animate={{ y: [-6, 6, -6], opacity: [0.15, 0.7, 0.15] }}
          transition={{ duration: el.duration, repeat: Infinity, delay: el.delay }}
        >
          {el.label}
        </motion.div>
      ))}
    </div>
  );
}