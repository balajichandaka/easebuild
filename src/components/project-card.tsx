import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-100 to-blue-50">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover p-6"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between gap-2">
          <h2 className="text-lg font-semibold text-slate-900">{project.name}</h2>
          <span className="text-xs text-slate-500">{project.year}</span>
        </div>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">
          {project.tagline}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Details →
          </Link>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            Live site ↗
          </a>
        </div>
      </div>
    </article>
  );
}
