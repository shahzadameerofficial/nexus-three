import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, Project } from "@/data/projects";
import ProjectScreenshotsCarousel from "@/components/ProjectScreenshotsCarousel";
import Motion from "@/components/animations/Motion";

export const dynamic = "force-static";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = (projects as Project[]).find((p) => p.id === slug);

  if (!project) return notFound();

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-8 px-4 md:px-8">
        <div className="container-custom">

          <Motion
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                {project.category}
              </span>

              <span className="text-muted-foreground">•</span>

              <span className="text-sm text-muted-foreground">
                Client:{" "}
                <span className="text-foreground font-medium">
                  {project.client}
                </span>
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              {project.title}
            </h1>

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
          </Motion>

        </div>
      </section>

      {/* DESCRIPTION + SCREENSHOTS */}
      <section className="px-4 md:px-8 py-16 bg-muted/40 border-y border-border/40">
        <div className="container-custom grid lg:grid-cols-2 gap-8 lg:gap-12">

          <Motion
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-display font-bold mb-6">
              Project <span className="gradient-text">Overview</span>
            </h2>

            <div
              className="text-muted-foreground leading-relaxed space-y-4 [&_strong]:text-foreground [&_em]:text-accent"
              dangerouslySetInnerHTML={{ __html: project.fullDescription }}
            />
          </Motion>

          <Motion
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-display font-bold mb-4">
              Project <span className="gradient-text">Screenshots</span>
            </h2>

            <ProjectScreenshotsCarousel
              screenshots={project.screenshots}
              projectTitle={project.title}
            />
          </Motion>

        </div>
      </section>

      {/* CHALLENGE + SOLUTION */}
      <section className="section-padding bg-secondary/40 border-y border-border/40">
        <div className="container-custom grid lg:grid-cols-2 gap-12">

          <Motion
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
          </Motion>

          <Motion
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
          </Motion>

        </div>
      </section>

      {/* FEATURES */}
      <section className="section-padding bg-muted/40 border-y border-border/40">
        <div className="container-custom">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold">
              Key <span className="gradient-text">Features</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, index) => (
              <Motion
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-3 bg-background/70 border border-border/60 rounded-xl p-5"
              >
                <CheckCircle
                  className="text-accent flex-shrink-0 mt-0.5"
                  size={20}
                />
                <span className="text-sm">{feature}</span>
              </Motion>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-custom text-center">

          <Motion
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Build Something Similar?
            </h2>

            <p className="text-background/70 mb-8 max-w-xl mx-auto">
              Let’s create something tailored for your business.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight size={18} />
              </Link>
            </Button>
          </Motion>

        </div>
      </section>
    </>
  );
}