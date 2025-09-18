"use client";

import { HorizontalDivider } from "@/app/components/divider";
import { SectionTitle } from "@/app/components/section-title";
import { ProjectCard } from "./project-card";
import { Link } from "@/app/components/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Project } from "@/app/types/projects";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";

type HighlightedProjectsProps = {
  projects: Project[];
};
const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        className="container py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <m.div
          className="text-gray-400 text-justify my-6 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
          <SectionTitle title="Projetos em Destaque" />
        </m.div>
        <HorizontalDivider className="mb-16" />

        <div>
          {projects?.map((project, index) => (
            <m.div
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} reversed={index % 2 !== 0} />
              <HorizontalDivider className="my-16" />
            </m.div>
          ))}
          <div className="flex items-center gap-1.5">
            <span className="text-gray-400">Se interessou?</span>
            <Link href="/projects" className="inline-flex text-xl">
              Ver todos
              <HiArrowNarrowRight />
            </Link>
          </div>
        </div>
      </m.section>
    </LazyMotion>
  );
};

export default HighlightedProjects;
