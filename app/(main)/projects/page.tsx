import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, Project } from "@/data/projects";
import Image from "next/image";
import Motion from "@/components/animations/Motion";

export const dynamic = "force-static";

export default function Projects() {
  const typedProjects = projects as Project[];

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="container-custom">
          <Motion
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent text-sm font-semibold uppercase">
              Our Work
            </span>

            <h1 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h1>

            <p className="text-xl text-muted-foreground">
              Explore our portfolio of successful projects that have helped businesses transform and grow through innovative technology solutions.
            </p>
          </Motion>
        </div>
      </section>

      {/* GRID */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {typedProjects.map((project, index) => (
            <Motion
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="group block bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6">
                  <span className="text-sm text-accent">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-semibold mt-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mt-2">
                    {project.shortDescription}
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xs text-muted-foreground">
                      Client: {project.client}
                    </span>

                    <div className="w-10 h-10 rounded-full gradient-nexus flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <ArrowUpRight size={18} className="text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            </Motion>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <Motion
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Want Your Project Here?
          </h2>

          <Button asChild variant="nexus" size="lg">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </Motion>
      </section>
    </>
  );
}