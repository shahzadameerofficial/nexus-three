import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Award-winning design team",
  "Agile development methodology",
  "24/7 dedicated support",
  "Result-driven strategies",
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 gradient-nexus opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-6xl md:text-8xl font-display font-bold mb-4">5+</h3>
                  <p className="text-xl opacity-90">Years of Excellence</p>
                </div>
              </div>
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-background rounded-xl p-6 shadow-card"
            >
              <p className="text-4xl font-display font-bold gradient-text">100%</p>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-6">
              We're Not Just an Agency,{" "}
              <span className="gradient-text">We're Your Partner</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At Nexus Three, we believe in the power of connection. Our name reflects our mission: 
              linking innovative ideas, cutting-edge technology, and strategic thinking to create 
              solutions that propel businesses forward.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Founded with a passion for digital excellence, our team of experts combines creativity 
              with technical prowess to deliver results that exceed expectations. We don't just build 
              products; we craft experiences that resonate.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle size={18} className="text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <Link to="/about" className="flex items-center gap-2">
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
