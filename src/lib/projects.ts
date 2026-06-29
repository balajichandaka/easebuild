import projectsData from "@/content/projects.json";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
  featured: boolean;
  year: number;
};

const projects = projectsData as Project[];

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => b.year - a.year);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
