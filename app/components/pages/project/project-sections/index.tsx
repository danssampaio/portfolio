"use client";

import { ProjectSection } from "@/app/types/projects";
import Image from "next/image";

type ProjectSectionsProps = {
  projectSections: ProjectSection[];
};

export const ProjectSections = ({ projectSections }: ProjectSectionsProps) => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-4 md:gap-32">
      {projectSections.map((section) => (
        <div
          key={section.title}
          className="flex flex-col items-center gap-3 md:gap-6"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-neutral-300">
            {section.title}
          </h2>
          <p className="text-neutral-400 text-center">
            {section.description}
          </p>
          <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-auto rounded-lg">
            <Image
              src={section.image.url}
              alt={`Imagem da sessão ${section.title}`}
              width={1080}
              height={672}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>
        </div>
      ))}
    </section>
  );
};
