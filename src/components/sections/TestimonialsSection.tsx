import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechVision",
    content: "Nexus Three transformed our digital presence completely. Their team's creativity and technical expertise delivered results beyond our expectations. Highly recommended!",
    rating: 5,
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, CloudNine",
    content: "The best decision we made was partnering with Nexus Three. Their strategic approach to digital marketing doubled our online revenue in just six months.",
    rating: 5,
    avatar: "MC",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, DataFlow",
    content: "Professional, responsive, and incredibly talented. Nexus Three doesn't just deliver projects; they deliver experiences that resonate with our audience.",
    rating: 5,
    avatar: "ER",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
