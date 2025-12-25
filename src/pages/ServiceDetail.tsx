import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Palette, TrendingUp, Briefcase, ShoppingCart, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const servicesData: Record<string, {
  icon: typeof Code;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  features: string[];
}> = {
  "web-development": {
    icon: Code,
    title: "Web Development",
    tagline: "Build Your Digital Foundation",
    description: "We create stunning, high-performance websites and web applications that drive results. Our development team combines technical expertise with creative design to deliver solutions that not only look amazing but also perform flawlessly across all devices.",
    benefits: [
      "Custom-built solutions tailored to your needs",
      "Mobile-first, responsive design",
      "SEO-optimized code structure",
      "Fast loading speeds and performance",
      "Secure and scalable architecture",
      "Ongoing support and maintenance",
    ],
    process: [
      { step: "01", title: "Discovery", description: "Understanding your goals, audience, and requirements" },
      { step: "02", title: "Design", description: "Creating wireframes and visual designs for approval" },
      { step: "03", title: "Development", description: "Building your website with clean, efficient code" },
      { step: "04", title: "Launch", description: "Testing, optimization, and deployment" },
    ],
    features: ["React/Next.js Development", "E-commerce Solutions", "WordPress/CMS", "API Integration", "Progressive Web Apps", "Performance Optimization"],
  },
  "ui-ux-design": {
    icon: Palette,
    title: "Graphics & UI/UX Design",
    tagline: "Design That Captivates",
    description: "Transform your brand with stunning visuals and intuitive user experiences. Our design team creates compelling graphics and seamless interfaces that engage your audience and communicate your brand's unique value proposition.",
    benefits: [
      "Unique brand identity that stands out",
      "User-centered design approach",
      "Consistent visual language",
      "Increased user engagement",
      "Higher conversion rates",
      "Memorable brand experiences",
    ],
    process: [
      { step: "01", title: "Research", description: "Analyzing your brand, competitors, and target audience" },
      { step: "02", title: "Concept", description: "Developing creative concepts and directions" },
      { step: "03", title: "Design", description: "Crafting pixel-perfect designs and assets" },
      { step: "04", title: "Delivery", description: "Providing all files and brand guidelines" },
    ],
    features: ["Brand Identity", "Logo Design", "UI/UX Design", "Motion Graphics", "Print Design", "Social Media Assets"],
  },
  "digital-marketing": {
    icon: TrendingUp,
    title: "Digital Marketing",
    tagline: "Grow Your Online Presence",
    description: "Data-driven digital marketing strategies that deliver measurable results. We help businesses increase visibility, drive qualified traffic, and convert visitors into loyal customers through targeted campaigns and continuous optimization.",
    benefits: [
      "Increased brand visibility",
      "Higher quality traffic",
      "Better conversion rates",
      "Measurable ROI",
      "Competitive advantage",
      "Sustainable growth",
    ],
    process: [
      { step: "01", title: "Audit", description: "Analyzing your current digital presence and performance" },
      { step: "02", title: "Strategy", description: "Developing a customized marketing plan" },
      { step: "03", title: "Execute", description: "Implementing campaigns across channels" },
      { step: "04", title: "Optimize", description: "Continuous monitoring and improvement" },
    ],
    features: ["SEO", "PPC Advertising", "Social Media Marketing", "Content Marketing", "Email Marketing", "Analytics & Reporting"],
  },
  "business-development": {
    icon: Briefcase,
    title: "Business Development",
    tagline: "Scale Your Business",
    description: "Strategic consulting and growth solutions to help you expand your market reach and revenue. We work with you to identify opportunities, optimize operations, and implement strategies that drive sustainable business growth.",
    benefits: [
      "Clear growth roadmap",
      "New market opportunities",
      "Improved lead generation",
      "Strategic partnerships",
      "Optimized sales processes",
      "Sustainable revenue growth",
    ],
    process: [
      { step: "01", title: "Assessment", description: "Evaluating your current business position" },
      { step: "02", title: "Planning", description: "Developing strategic growth initiatives" },
      { step: "03", title: "Implementation", description: "Executing growth strategies" },
      { step: "04", title: "Scale", description: "Expanding and optimizing for continued growth" },
    ],
    features: ["Market Research", "Growth Strategy", "Lead Generation", "Partnership Development", "Sales Optimization", "Business Consulting"],
  },
  "amazon-services": {
    icon: ShoppingCart,
    title: "Amazon Services",
    tagline: "Dominate the Marketplace",
    description: "Complete Amazon marketplace solutions to help you launch, grow, and scale your Amazon business. From store setup to advertising management, we provide comprehensive support to maximize your success on the world's largest marketplace.",
    benefits: [
      "Professional store setup",
      "Optimized product listings",
      "Increased visibility and sales",
      "Efficient PPC management",
      "Brand protection",
      "Competitive edge",
    ],
    process: [
      { step: "01", title: "Setup", description: "Creating and optimizing your Amazon store" },
      { step: "02", title: "Optimize", description: "Enhancing listings for maximum visibility" },
      { step: "03", title: "Advertise", description: "Running targeted PPC campaigns" },
      { step: "04", title: "Scale", description: "Expanding product lines and market reach" },
    ],
    features: ["Store Setup", "Listing Optimization", "Amazon PPC", "Brand Registry", "Inventory Management", "Review Strategy"],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="section-padding text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Button variant="nexus" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 px-4 md:px-8">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="w-16 h-16 rounded-xl gradient-nexus flex items-center justify-center mb-6">
                <Icon size={32} className="text-white" />
              </div>
              <span className="text-accent text-sm font-semibold">{service.tagline}</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mt-2 mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                  Why Choose Our <span className="gradient-text">{service.title}</span>
                </h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle size={20} className="text-accent flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-background rounded-2xl p-8 shadow-card"
              >
                <h3 className="font-semibold text-lg mb-6">Services Included:</h3>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full gradient-nexus" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-display font-bold gradient-text mb-4">{step.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-background/70 mb-8 max-w-xl mx-auto">
                Let's discuss how our {service.title.toLowerCase()} services can help transform your business.
              </p>
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
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

export default ServiceDetail;
