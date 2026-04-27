"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import Motion from "@/components/animations/Motion";

const stats = [
  { value: 40, suffix: "+", label: "Projects Completed" },
  { value: 30, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Team Experts" },
];

// 👇 still client-side (required)
const AnimatedNumber = ({ value, suffix }: {value: number, suffix: string}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true);
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-foreground text-background overflow-hidden">
      <div className="container-custom px-4 md:px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

          {stats.map((stat, index) => (
            <Motion
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-6xl font-display font-bold mb-2">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </p>

              <p className="text-background/60 text-sm md:text-base">
                {stat.label}
              </p>
            </Motion>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StatsSection;