"use client";

import { TbBrandGithub } from "react-icons/tb";
import { Button } from "../../../button";
import { SectionTitle } from "../../../section-title";
import { TechBadge } from "../../../tech-bagde";
import { FiGlobe } from "react-icons/fi";
import { Link } from "../../../link";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Project } from "@/app/types/projects";
import { RichText } from "@/app/components/rich-text";

type ProjectDetailsProps = {
  project: Project;
};

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const urls = project.githubUrl?.split(",").map((url) => url.trim());

  return (
    <section
      className="w-full sm:min-h-[750px] flex flex-col items-center justify-center
     relative pb-10 sm:pb-24 py-32 px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover fixed, url(${project.thumbnail.url}) no-repeat center/cover`,
        }}
      />
      <SectionTitle
        title={project.title}
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <div className="text-neutral-400 text-center max-w-[940px] my-4 sm:my-6 text-sm sm:text-base">
        <RichText content={project.description.raw} />
      </div>
      <div className="w-full max-w-[530px] flex flex-wrap gap-2 items-center justify-center">
        {project.technologies.map((tech) => (
          <TechBadge key={tech.name} name={tech.name} />
        ))}
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        {urls?.length === 1 && (
          <a href={project.githubUrl} target="_blank">
            <Button className="max-w-[180px]">
              <TbBrandGithub size={20} />
              Repositório
            </Button>
          </a>
        )}
        {urls?.length === 2 && (
          <>
            <a href={urls[0]} target="_blank">
              <Button className="max-w-[180px]">
                <TbBrandGithub size={20} />
                Frontend
              </Button>
            </a>
            <a href={urls[1]} target="_blank">
              <Button className="max-w-[180px]">
                <TbBrandGithub size={20} />
                Backend
              </Button>
            </a>
          </>
        )}
        {project?.liveProjectUrl && (
          <a href={project.liveProjectUrl} target="_blank">
            <Button className="min-w-[180px]">
              <FiGlobe size={20} />
              Página da Aplicação
            </Button>
          </a>
        )}
      </div>
      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para Projetos
      </Link>
    </section>
  );
};
