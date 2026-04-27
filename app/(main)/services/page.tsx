import Link from "next/link";
import {
  Code,
  Palette,
  TrendingUp,
  Briefcase,
  ShoppingCart,
  ArrowRight,
  Rocket,
  Monitor,
  Cloud,
} from "lucide-react";

import Motion from "@/components/animations/Motion";
import { Button } from "@/components/ui/button";

export const dynamic = "force-static";

const services = [
  {
    icon: Rocket,
    title: "SaaS & MVP Development",
    slug: 'saas-mvp-development',
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
    slug: 'ui-ux-designing',
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
    slug: 'business-management-systems',
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
    slug: 'deployment-support',
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

export default function ServicesPage() {
  return (
    <>
      {/* HERO (SSR + SEO) */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="container-custom">
          <Motion initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>


            <span className="text-accent text-sm font-semibold tracking-wider uppercase">Our Services</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6">
              Solutions That <span className="gradient-text">Drive Growth</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive digital services tailored to elevate your brand and accelerate your business success.
            </p>

          </Motion>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom space-y-20">

          {services.map((service, index) => (
            <div
              key={service.slug}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
            >

              {/* LEFT */}
              <Motion
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="w-16 h-16 gradient-nexus flex items-center justify-center rounded-xl mb-6">
                  <service.icon size={28} className="text-white" />
                </div>

                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>

                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <Button asChild variant="nexus">
                  <Link href={`/services/${service.slug}`}>
                    Learn More <ArrowRight size={16} />
                  </Link>
                </Button>
              </Motion>

              {/* RIGHT */}
              <div className="bg-background rounded-2xl p-8 shadow-soft">
                <h3 className="font-semibold mb-6">What's Included</h3>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full gradient-nexus" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">

          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>

          <p className="text-muted-foreground mb-8">
            Let’s build something impactful together.
          </p>

          <Button asChild variant="nexus" size="lg">
            <Link href="/contact">
              Get Free Consultation <ArrowRight size={16} />
            </Link>
          </Button>

        </div>
      </section>

    </>
  );
}