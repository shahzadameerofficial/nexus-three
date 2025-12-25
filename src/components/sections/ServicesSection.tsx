import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Palette, TrendingUp, Briefcase, ShoppingCart, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
    link: "/services/web-development",
    features: ["React & Next.js", "E-commerce", "Custom CMS", "API Integration"],
  },
  {
    icon: Palette,
    title: "Graphics | UI/UX Design",
    description: "Stunning visual designs and intuitive user interfaces that captivate audiences and drive engagement.",
    link: "/services/ui-ux-design",
    features: ["Brand Identity", "UI/UX Design", "Motion Graphics", "Print Design"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that boost visibility, drive traffic, and convert leads into loyal customers.",
    link: "/services/digital-marketing",
    features: ["SEO & SEM", "Social Media", "Content Marketing", "PPC Campaigns"],
  },
  {
    icon: Briefcase,
    title: "Business Development",
    description: "Strategic consulting and growth solutions to scale your business and unlock new market opportunities.",
    link: "/services/business-development",
    features: ["Market Research", "Growth Strategy", "Lead Generation", "Partnerships"],
  },
  {
    icon: ShoppingCart,
    title: "Amazon Services",
    description: "Complete Amazon marketplace solutions from storefront setup to optimization and advertising management.",
    link: "/services/amazon-services",
    features: ["Store Setup", "Listing Optimization", "PPC Management", "Brand Registry"],
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand and accelerate your business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                className="group block h-full bg-background rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl gradient-nexus flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={26} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" />
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
