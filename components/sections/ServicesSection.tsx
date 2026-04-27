// ✅ NO "use client"

import Link from "next/link";
import {
  Code,
  Palette,
  TrendingUp,
  Briefcase,
  ShoppingCart,
  ArrowUpRight,
  Rocket,
  Lightbulb,
  Cloud,
  Monitor,
} from "lucide-react";

import Motion from "@/components/animations/Motion";

const services = [
  {
    icon: Rocket,
    title: "SaaS & MVP Development",
    description:
      "We build production-ready SaaS platforms and MVPs from scratch — with clean architecture, scalable code, and everything you need to launch and grow.",
    link: "/services/saas-mvp-development",
    features: [
      "Full Stack Web Application Development",
      "SaaS Architecture & Multi-Tenancy",
      "Role-Based Authentication & Permissions",
      "Third-Party API & Payment Integrations",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "We design clean, intuitive interfaces for complex products — dashboards, management systems, and SaaS platforms that users actually enjoy using.",
    link: "/services/ui-ux-design",
    features: [
      "Wireframing & Interactive Prototyping",
      "Dashboard & Admin Panel Design",
      "Design Systems & Component Libraries",
      "Figma to Pixel-Perfect Frontend",
    ],
  },
  {
    icon: Monitor,
    title: "Business Management Systems",
    description:
      "Need a custom internal tool or business platform? We build tailored systems — from POS and HRM to industry-specific management suites — that fit exactly how your business works.",
    link: "/services/business-systems",
    features: [
      "POS, HRM & ATS Systems",
      "Industry-Specific Management Platforms",
      "Admin Dashboards & Reporting",
      "Workflow Automation & Role Management",
    ],
  },
  {
    icon: Cloud,
    title: "Deployment & Ongoing Support",
    description:
      "We don't just build and disappear. We deploy your product to the cloud, set up CI/CD pipelines, and stay available for improvements, features, and scaling.",
    link: "/services/deployment-support",
    features: [
      "Cloud Deployment (AWS, Vercel, DigitalOcean)",
      "CI/CD Pipeline Setup",
      "Performance & Security Optimization",
      "Post-Launch Feature Development",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">

        {/* Header */}
        <Motion
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            What We Do
          </span>

          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand and accelerate your business growth.
          </p>
        </Motion>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Motion
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={service.link}
                className="group block h-full bg-background rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl gradient-nexus flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={26} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  {service.title}

                  <ArrowUpRight
                    size={18}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent"
                  />
                </h3>

                {/* Description */}
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
            </Motion>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;