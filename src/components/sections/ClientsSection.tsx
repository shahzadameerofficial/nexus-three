import { motion } from "framer-motion";

const clients = [
  "TechVision", "CloudNine", "DataFlow", "InnovateCo", "GrowthHub", 
  "ScaleUp", "FutureLabs", "DigitalPro", "SmartSolutions", "NextGen"
];

const ClientsSection = () => {
  return (
    <section className="py-16 bg-secondary/30 overflow-hidden">
      <div className="container-custom mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm"
        >
          Trusted by innovative brands worldwide
        </motion.p>
      </div>

      {/* Infinite scroll marquee */}
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="mx-12 flex items-center justify-center"
            >
              <span className="text-2xl md:text-3xl font-display font-bold text-foreground/20 hover:text-foreground/40 transition-colors duration-300">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
