// ✅ NO "use client"

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import Motion from "@/components/animations/Motion";

const CTASection = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">

        <Motion
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl gradient-nexus p-12 md:p-20 text-center overflow-hidden"
        >
          {/* Background decorations (pure CSS, server-safe) */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10">

            {/* Badge */}
            <Motion
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6"
            >
              <Sparkles size={16} className="text-white" />
              <span className="text-sm font-medium text-white">
                Let's Build Something Amazing
              </span>
            </Motion>

            {/* Heading */}
            <Motion
              as="h2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              Have a Product Idea?
              <br />
              Let's Build It Together.
            </Motion>

            {/* Text */}
            <Motion
              as="p"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/80 text-lg max-w-2xl mx-auto mb-10"
            >
              Whether you're a startup founder with an MVP in mind or a business 
owner who needs a custom platform — we're ready to scope it, design it, and 
ship it. Book a free 30-minute discovery call and let's figure out what you need.
            </Motion>

            {/* Buttons */}
            <Motion
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 hover:shadow-xl"
                asChild
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Book a Free Call
                  <ArrowRight size={18} />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/projects">iew Our Portfolio</Link>
              </Button>
            </Motion>

          </div>
        </Motion>

      </div>
    </section>
  );
};

export default CTASection;