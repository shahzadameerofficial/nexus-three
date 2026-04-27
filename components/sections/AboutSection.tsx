// ✅ NO "use client"

import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Motion from "@/components/animations/Motion";

const highlights = [
  "4+ years of development experience",
  "Fast MVP delivery (weeks, not months)",
  "Clean & scalable codebase",
  "Focused on real business outcomes",
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <Motion
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 gradient-nexus opacity-90" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-6xl md:text-8xl font-display font-bold mb-4">
                    5+
                  </h3>
                  <p className="text-xl opacity-90">Years of Excellence</p>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <Motion
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-background rounded-xl p-6 shadow-card"
            >
              <p className="text-4xl font-display font-bold gradient-text">
                100%
              </p>
              <p className="text-sm text-muted-foreground">
                Client Satisfaction
              </p>
            </Motion>
          </Motion>

          {/* RIGHT */}
          <Motion
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-6">
              A Small Team That Builds{" "}
              <span className="gradient-text">Big Products</span>
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Nexus Three is a focused team of developers and designers with
              hands-on experience building real SaaS products, business management systems,
              and complex web platforms.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              We've worked on everything from POS systems and
              HR platforms to SaaS signage tools and real estate marketplaces — so we
              understand what it actually takes to ship a product that works in the real world.
              No bloated processes.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <Motion
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle size={18} className="text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </Motion>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <Link href="/about" className="flex items-center gap-2">
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </Button>
          </Motion>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;