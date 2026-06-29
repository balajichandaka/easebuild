import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Web applications built by EaseBuild.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <Container>
      <div className="py-12 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Projects</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          A growing collection of business web apps — each deployed, maintained, and
          tailored to real workflows.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </Container>
  );
}
