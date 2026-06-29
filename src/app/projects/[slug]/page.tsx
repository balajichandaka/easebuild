import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.name,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <Container>
      <div className="py-12 sm:py-16">
        <Link href="/projects" className="text-sm font-medium text-blue-600 hover:text-blue-700">
          ← All projects
        </Link>
        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
          <div className="relative aspect-[16/9]">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-contain p-8"
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        </div>
        <div className="mt-8 max-w-3xl">
          <p className="text-sm font-medium text-blue-600">{project.year}</p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900">{project.name}</h1>
          <p className="mt-3 text-lg text-slate-600">{project.tagline}</p>
          <p className="mt-6 leading-relaxed text-slate-700">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Visit live site ↗
          </a>
        </div>
      </div>
    </Container>
  );
}
