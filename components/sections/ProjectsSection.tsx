// ✅ NO "use client"

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Motion from "@/components/animations/Motion";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">

        {/* Header */}
        <Motion
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Our Work
            </span>

            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>

          <Button variant="hero-secondary" asChild>
            <Link href="/projects" className="flex items-center gap-2">
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </Button>
        </Motion>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <Motion
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="group block relative rounded-2xl overflow-hidden aspect-[16/10]"
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <span className="text-sm font-medium text-accent mb-2">
                    {project.category}
                  </span>

                  <h3 className="text-2xl font-display font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {project.title}
                  </h3>

                  <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={20} className="text-white" />
                </div>

              </Link>
            </Motion>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;