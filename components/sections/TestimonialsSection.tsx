// ✅ NO "use client"

import { Star, Quote } from "lucide-react";
import Motion from "@/components/animations/Motion";

const testimonials = [
  {
    id: 1,
    name: "Dental Practice Client",
    role: "Healthcare Management Platform",
    content:
      "Nexus Three built our entire practice management suite from scratch — appointments, patient records, billing and role-based staff access. Delivered on time and exactly as we envisioned.",
    rating: 5,
    avatar: "DM",
  },
  {
    id: 2,
    name: "Real Estate Platform Client",
    role: "Property Listings & Marketing Platform",
    content:
      "They built our agent listing and buyer-facing property platform end to end. The UI was clean, the search was fast, and the whole thing launched in under six weeks.",
    rating: 5,
    avatar: "RE",
  },
  {
    id: 3,
    name: "SaaS Startup Founder",
    role: "Digital Signage SaaS Platform",
    content:
      "We needed a multi-tenant SaaS product with real-time signage control. Nexus Three understood the architecture immediately and delivered a platform we've been scaling ever since.",
    rating: 5,
    avatar: "SS",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">

        {/* Section Header */}
        <Motion
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about working with us.
          </p>
        </Motion>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Motion
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              {/* Quote icon */}
              <Quote size={40} className="text-accent/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-nexus flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Motion>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;