import Link from "next/link";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-blue-50/80 to-white py-16 sm:py-24">
        <Container>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            EaseBuild
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            We build web apps that help businesses run better
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            Custom software for professionals — CRM, workflows, dashboards, and
            tools deployed on modern stacks. Explore our live projects below.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              View all projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Get in touch
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Featured work</h2>
              <p className="mt-2 text-slate-600">Live products we designed and shipped.</p>
            </div>
            <Link href="/projects" className="text-sm font-medium text-blue-600 hover:text-blue-700">
              See all →
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
