"use client";

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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);

  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Initialize particles
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const particleCount = 40;

    const initialParticles: Particle[] = Array.from(
      { length: particleCount },
      (_, i) => ({
        id: i,
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
      })
    );

    setParticles(initialParticles);
  }, []);

  // Mouse tracking
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

  // Animation loop
  useEffect(() => {
    const container = containerRef.current;
    if (!container || particles.length === 0) return;

    const rect = container.getBoundingClientRect();

    const animate = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          const dx = mousePos.x - particle.x;
          const dy = mousePos.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          // ✅ Prevent NaN / division by zero
          if (distance > 0 && distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            newX -= (dx / distance) * force * 2;
            newY -= (dy / distance) * force * 2;
          }

          // Wrap edges
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
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos, particles.length]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-nexus-gold/15 to-nexus-gold-light/10 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-nexus-navy/15 to-nexus-navy-light/10 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-3/4 left-1/3 w-64 h-64 rounded-full bg-gradient-to-br from-nexus-gold/10 to-transparent blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--nexus-navy)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--nexus-navy)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Rotating circles */}
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

      {/* Particles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {particles.map((p) => (
          <circle
            key={p.id}
            cx={p.x}
            cy={p.y}
            r={p.size}
            fill="hsl(40 75% 50%)"
            opacity={p.opacity + 0.3}
          />
        ))}

        {particles.map((p, i) =>
          particles.slice(i + 1).map((o) => {
            const d = Math.hypot(p.x - o.x, p.y - o.y);
            if (d < 120) {
              return (
                <line
                  key={`${p.id}-${o.id}`}
                  x1={p.x}
                  y1={p.y}
                  x2={o.x}
                  y2={o.y}
                  stroke="hsl(222 47% 20%)"
                  strokeOpacity={(1 - d / 120) * 0.15}
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