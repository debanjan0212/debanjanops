import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface MobileAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const MobileAnimationWrapper = ({ children, className = "" }: MobileAnimationWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className={`transform-gpu ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export const AppleCardAnimation = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
      whileHover={{
        scale: 1.02,
        rotateY: 5,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      className="transform-gpu perspective-1000"
    >
      {children}
    </motion.div>
  );
};

export const FloatingElement = ({ children, intensity = 10 }: { children: React.ReactNode; intensity?: number }) => {
  return (
    <motion.div
      animate={{
        y: [0, -intensity, 0],
        rotateY: [0, 5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="transform-gpu"
    >
      {children}
    </motion.div>
  );
};

export const StaggeredContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={itemVariants}>{children}</motion.div>
      }
    </motion.div>
  );
};