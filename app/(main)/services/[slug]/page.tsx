import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Code,
  Palette,
  TrendingUp,
  Briefcase,
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const dynamic = "force-static";

/* =========================
   TYPES
========================= */

type ServiceProcessStep = {
  step: string;
  title: string;
  description: string;
};

type Service = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  process: ServiceProcessStep[];
  features: string[];
};

type ServiceSlug =
  | "web-development"
  | "ui-ux-design"
  | "digital-marketing"
  | "business-development"
  | "amazon-services";

/* =========================
   DATA
========================= */

const servicesData: Record<ServiceSlug, Service> = {
  "web-development": {
    icon: Code,
    title: "Web Development",
    tagline: "Build Your Digital Foundation",
    description:
      "We create stunning, high-performance websites and web applications that drive results. Our development team combines technical expertise with creative design to deliver solutions that not only look amazing but also perform flawlessly across all devices.",
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
    features: [
      "React/Next.js Development",
      "E-commerce Solutions",
      "WordPress/CMS",
      "API Integration",
      "Progressive Web Apps",
      "Performance Optimization",
    ],
  },

  "ui-ux-design": {
    icon: Palette,
    title: "Graphics & UI/UX Design",
    tagline: "Design That Captivates",
    description:
      "Transform your brand with stunning visuals and intuitive user experiences. Our design team creates compelling graphics and seamless interfaces that engage your audience and communicate your brand's unique value proposition.",
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
    features: [
      "Brand Identity",
      "Logo Design",
      "UI/UX Design",
      "Motion Graphics",
      "Print Design",
      "Social Media Assets",
    ],
  },

  "digital-marketing": {
    icon: TrendingUp,
    title: "Digital Marketing",
    tagline: "Grow Your Online Presence",
    description:
      "Data-driven digital marketing strategies that deliver measurable results. We help businesses increase visibility, drive qualified traffic, and convert visitors into loyal customers through targeted campaigns and continuous optimization.",
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
    features: [
      "SEO",
      "PPC Advertising",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting",
    ],
  },

  "business-development": {
    icon: Briefcase,
    title: "Business Development",
    tagline: "Scale Your Business",
    description:
      "Strategic consulting and growth solutions to help you expand your market reach and revenue. We work with you to identify opportunities, optimize operations, and implement strategies that drive sustainable business growth.",
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
    features: [
      "Market Research",
      "Growth Strategy",
      "Lead Generation",
      "Partnership Development",
      "Sales Optimization",
      "Business Consulting",
    ],
  },

  "amazon-services": {
    icon: ShoppingCart,
    title: "Amazon Services",
    tagline: "Dominate the Marketplace",
    description:
      "Complete Amazon marketplace solutions to help you launch, grow, and scale your Amazon business. From store setup to advertising management, we provide comprehensive support to maximize your success on the world's largest marketplace.",
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
    features: [
      "Store Setup",
      "Listing Optimization",
      "Amazon PPC",
      "Brand Registry",
      "Inventory Management",
      "Review Strategy",
    ],
  },
};

/* =========================
   PAGE
========================= */



export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug as ServiceSlug];
  
  if (!service) return notFound();
  console.log(service)

  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="container-custom max-w-4xl">

          <div className="w-16 h-16 rounded-xl gradient-nexus flex items-center justify-center mb-6">
            <Icon size={32} className="text-white" />
          </div>

          <span className="text-accent text-sm font-semibold">
            {service.tagline}
          </span>

          <h1 className="text-4xl md:text-6xl font-display font-bold mt-2 mb-6">
            {service.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Why Choose Our{" "}
                <span className="gradient-text">{service.title}</span>
              </h2>

              <div className="space-y-4">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-accent" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-card">
              <h3 className="font-semibold text-lg mb-6">
                Services Included:
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {service.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full gradient-nexus" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {service.process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="text-5xl font-bold gradient-text mb-4">
                  {p.step}
                </div>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Get Started?
          </h2>

          <p className="text-background/70 mb-8 max-w-xl mx-auto">
            Let’s discuss how our {service.title} services can help transform your business.
          </p>

          <Button size="lg" asChild>
            <Link href="/contact" className="flex items-center gap-2">
              Get Free Consultation
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}