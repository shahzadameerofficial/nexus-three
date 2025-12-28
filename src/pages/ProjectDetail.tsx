import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import ProjectScreenshotsCarousel from "@/components/ProjectScreenshotsCarousel";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="section-padding text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Button variant="nexus" asChild>
            <Link to="/projects">View All Projects</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-8 px-4 md:px-8">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft size={18} />
                Back to Projects
              </Link>
              
              {/* Category & Client Info */}
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                  {project.category}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">
                  Client: <span className="text-foreground font-medium">{project.client}</span>
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
                {project.title}
              </h1>

              {/* Technologies Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Description & Screenshots - Half Half Layout */}
        <section className="px-4 md:px-8 py-16 bg-muted/40 border-y border-border/40">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-display font-bold mb-6">
                  Project <span className="gradient-text">Overview</span>
                </h2>
                <div 
                  className="text-muted-foreground leading-relaxed text-base space-y-4 [&_strong]:text-foreground [&_strong]:font-semibold [&_em]:text-accent [&_em]:not-italic [&_em]:font-medium"
                  dangerouslySetInnerHTML={{ __html: project.fullDescription }}
                />
              </motion.div>

              {/* Screenshots */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-display font-bold mb-4">
                  Project <span className="gradient-text">Screenshots</span>
                </h2>
                <ProjectScreenshotsCarousel 
                  screenshots={project.screenshots} 
                  projectTitle={project.title} 
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="section-padding bg-secondary/40 border-y border-border/40">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-display font-bold mb-4">
                  The <span className="gradient-text">Challenge</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-display font-bold mb-4">
                  Our <span className="gradient-text">Solution</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding bg-muted/40 border-y border-border/40">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold">
                Key <span className="gradient-text">Features</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-background/70 border border-border/60 rounded-xl p-5 shadow-soft"
                >
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
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
                Ready to Build Something Similar?
              </h2>
              <p className="text-background/70 mb-8 max-w-xl mx-auto">
                Let's discuss how we can create an innovative solution tailored to your business needs.
              </p>
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Start Your Project
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

export default ProjectDetail;
