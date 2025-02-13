import { Project } from "@/app/types/projects";
import Image from "next/image";

type ProjectProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <div
      className="rounded-lg h-[360px] flex flex-col bg-neutral-800 overflow-hidden border-2
     border-neutral-700 hover:border-cyan-600 opacity-80 hover:opacity-100 transition-all group"
    >
      <div className="w-full h-48 overflow-hidden">
        <Image
          src={project.thumbnail.url}
          width={380}
          height={200}
          unoptimized
          alt={`Thumbnail do projeto ${project.title}`}
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>
      <div className="flex-1 flex flex-col p-4">
        <strong className="font-semibold text-neutral-50/90 group-hover:text-cyan-600 transition-all">
          {project.title}
        </strong>
        <p className="mt-1 text-neutral-400 text-sm line-clamp-3">
          {project.shortDescription}
        </p>
        <span className="text-neutral-300 text-xs font-medium block mt-auto truncate">
          {project.technologies.map((x) => x.name).join(", ")}
        </span>
      </div>
    </div>
  );
};
