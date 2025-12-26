import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const particleCount = 40;
    const initialParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    setParticles(initialParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || particles.length === 0) return;

    const rect = container.getBoundingClientRect();

    const animate = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          // Mouse interaction - particles move away from cursor
          const dx = mousePos.x - particle.x;
          const dy = mousePos.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            newX -= (dx / distance) * force * 2;
            newY -= (dy / distance) * force * 2;
          }

          // Wrap around edges
          if (newX < 0) newX = rect.width;
          if (newX > rect.width) newX = 0;
          if (newY < 0) newY = rect.height;
          if (newY > rect.height) newY = 0;

          return { ...particle, x: newX, y: newY };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos, particles.length]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Subtle gradient orbs - navy/gold tones */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-nexus-gold/15 to-nexus-gold-light/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-nexus-navy/15 to-nexus-navy-light/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-3/4 left-1/3 w-64 h-64 rounded-full bg-gradient-to-br from-nexus-gold/10 to-transparent blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      
      {/* Refined grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--nexus-navy)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--nexus-navy)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Elegant concentric circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-nexus-navy/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-nexus-gold/15"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-nexus-navy/8"
      />

      {/* Particles with improved visibility */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {particles.map((particle) => (
          <circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill="hsl(40 75% 50%)"
            opacity={particle.opacity + 0.3}
          />
        ))}
        {/* Connection lines - more visible */}
        {particles.map((particle, i) =>
          particles.slice(i + 1).map((other) => {
            const distance = Math.sqrt(
              Math.pow(particle.x - other.x, 2) + Math.pow(particle.y - other.y, 2)
            );
            if (distance < 120) {
              return (
                <line
                  key={`${particle.id}-${other.id}`}
                  x1={particle.x}
                  y1={particle.y}
                  x2={other.x}
                  y2={other.y}
                  stroke="hsl(222 47% 20%)"
                  strokeOpacity={(1 - distance / 120) * 0.15}
                  strokeWidth={0.8}
                />
              );
            }
            return null;
          })
        )}
      </svg>
    </div>
  );
};

export default InteractiveBackground;