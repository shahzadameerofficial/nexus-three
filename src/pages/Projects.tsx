import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "E-Commerce Revolution",
    category: "Web Development",
    client: "TechVision",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
    description: "Complete e-commerce platform with advanced features and seamless checkout experience.",
  },
  {
    id: 2,
    title: "Brand Identity Refresh",
    category: "UI/UX Design",
    client: "CloudNine",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    description: "Modern brand identity redesign for a fast-growing tech startup.",
  },
  {
    id: 3,
    title: "Growth Marketing Campaign",
    category: "Digital Marketing",
    client: "DataFlow",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "360° digital marketing strategy that doubled online revenue.",
  },
  {
    id: 4,
    title: "Amazon Store Launch",
    category: "Amazon Services",
    client: "GrowthHub",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80",
    description: "Successful Amazon storefront setup with optimized listings.",
  },
  {
    id: 5,
    title: "SaaS Dashboard",
    category: "Web Development",
    client: "ScaleUp",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description: "Intuitive analytics dashboard for a B2B SaaS platform.",
  },
  {
    id: 6,
    title: "Mobile App Design",
    category: "UI/UX Design",
    client: "FutureLabs",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    description: "User-centric mobile app design with stunning visuals.",
  },
];

const categories = ["All", "Web Development", "UI/UX Design", "Digital Marketing", "Amazon Services"];

const Projects = () => {
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
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">Our Work</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6">
                Featured <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore our portfolio of successful projects that have helped businesses transform and grow.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="group block relative rounded-2xl overflow-hidden bg-background shadow-soft hover:shadow-card transition-all duration-300">
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <span className="text-sm text-accent font-medium">{project.category}</span>
                      <h3 className="text-xl font-semibold mt-2 mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Client: {project.client}</span>
                        <div className="w-10 h-10 rounded-full gradient-nexus flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowUpRight size={18} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                Want Your Project Here?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss how we can create something amazing together.
              </p>
              <Button variant="nexus" size="lg" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
