import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "E-Commerce Revolution",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
    description: "Complete e-commerce platform with advanced features",
  },
  {
    id: 2,
    title: "Brand Identity Refresh",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    description: "Modern brand identity for a tech startup",
  },
  {
    id: 3,
    title: "Growth Marketing Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "360° digital marketing strategy",
  },
  {
    id: 4,
    title: "Amazon Store Launch",
    category: "Amazon Services",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80",
    description: "Successful Amazon storefront setup",
  },
];

const ProjectsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">Our Work</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <Button variant="hero-secondary" asChild>
            <Link to="/projects" className="flex items-center gap-2">
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/projects/${project.id}`}
                className="group block relative rounded-2xl overflow-hidden aspect-[16/10]"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <span className="text-sm font-medium text-accent mb-2">{project.category}</span>
                  <h3 className="text-2xl font-display font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={20} className="text-white" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
