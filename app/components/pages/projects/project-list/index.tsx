"use client";

import { Link } from "@/app/components/link";
import { ProjectCard } from "./project-card";
import { Project } from "@/app/types/projects";
import { domAnimation, LazyMotion, m } from "motion/react";

type ProjectsProps = {
  projects: Project[];
};

const ProjectsList = ({ projects }: ProjectsProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        className="container py-16 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <Link key={project.title} href={`/projects/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </m.section>
    </LazyMotion>
  );
};

export default ProjectsList;