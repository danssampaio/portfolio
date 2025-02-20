"use client";

import { Link } from "@/app/components/link";
import { ProjectCard } from "./project-card";
import { Project } from "@/app/types/projects";

type ProjectsProps = {
  projects: Project[];
};

export const ProjectsList = ({ projects }: ProjectsProps) => {
  return (
    <section className="container py-16 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {projects.map((project) => (
        <Link key={project.title} href={`/projects/${project.slug}`}>
          <ProjectCard project={project} />
        </Link>
      ))}
    </section>
  );
};
