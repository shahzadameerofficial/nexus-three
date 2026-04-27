// ✅ NO "use client"

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import InteractiveBackground from "@/components/InteractiveBackground";
import Motion from "@/components/animations/Motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">

      {/* Background (client component internally) */}
      <InteractiveBackground />

      <div className="container-custom relative z-10 px-4 md:px-8 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
          >
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">
              Connecting You Smarter...
            </span>
          </Motion>

          {/* Heading */}
          <Motion
            as="h1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            We Design & Build
            <span className="block">
              SaaS Products That Are{" "}
              <span className="gradient-text">Ready to Launch</span>
            </span>
          </Motion>

          {/* Subtext */}
          <Motion
            as="p"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            From MVP to full platform, Nexus Three is your end-to-end product
            team. We turn your idea into a scalable, production-ready web product, fast.
          </Motion>

          {/* CTA */}
          <Motion
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="nexus" size="lg" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight size={18} />
              </Link>
            </Button>

            <Button variant="hero-secondary" size="lg" asChild>
              <Link href="/projects">View Our Work</Link>
            </Button>
          </Motion>

          {/* Stats */}
          <Motion
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { number: "40+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "15+", label: "Team Experts" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold gradient-text">
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </Motion>
        </div>
      </div>

      {/* Scroll indicator */}
      <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2">
          <Motion
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          />
        </div>
      </Motion>

    </section>
  );
};

export default HeroSection;