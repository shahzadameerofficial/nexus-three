import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Palette, TrendingUp, Briefcase, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code,
    title: "Web Development",
    slug: "web-development",
    description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Web Application Development",
      "Content Management Systems",
      "API Development & Integration",
      "Performance Optimization",
    ],
  },
  {
    icon: Palette,
    title: "Graphics & UI/UX Design",
    slug: "ui-ux-design",
    description: "Stunning visual designs and intuitive user interfaces that captivate audiences and drive engagement.",
    features: [
      "Brand Identity Design",
      "UI/UX Design",
      "Motion Graphics",
      "Print Design",
      "Social Media Graphics",
      "Presentation Design",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Data-driven marketing strategies that boost visibility, drive traffic, and convert leads into loyal customers.",
    features: [
      "Search Engine Optimization",
      "Pay-Per-Click Advertising",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting",
    ],
  },
  {
    icon: Briefcase,
    title: "Business Development",
    slug: "business-development",
    description: "Strategic consulting and growth solutions to scale your business and unlock new market opportunities.",
    features: [
      "Market Research & Analysis",
      "Growth Strategy Development",
      "Lead Generation",
      "Partnership Development",
      "Sales Funnel Optimization",
      "Business Process Consulting",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Amazon Services",
    slug: "amazon-services",
    description: "Complete Amazon marketplace solutions from storefront setup to optimization and advertising management.",
    features: [
      "Amazon Store Setup",
      "Product Listing Optimization",
      "Amazon PPC Management",
      "Brand Registry Assistance",
      "Inventory Management",
      "Review & Feedback Strategy",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 md:px-8">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">Our Services</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6">
                Solutions That <span className="gradient-text">Drive Growth</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive digital services tailored to elevate your brand and accelerate your business success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-xl gradient-nexus flex items-center justify-center mb-6">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button variant="nexus" asChild>
                    <Link to={`/services/${service.slug}`} className="flex items-center gap-2">
                      Learn More
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>

                <div className={`bg-background rounded-2xl p-8 shadow-soft ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="font-semibold mb-6 text-lg">What's Included:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full gradient-nexus flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss how we can help transform your business with our comprehensive digital solutions.
              </p>
              <Button variant="nexus" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Get Free Consultation
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
