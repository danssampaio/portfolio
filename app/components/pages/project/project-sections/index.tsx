"use client";

import { HorizontalDivider } from "@/app/components/divider";
import { ProjectSection } from "@/app/types/projects";
import Image from "next/image";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";

type ProjectSectionsProps = {
  projectSections: ProjectSection[];
};

export const ProjectSections = ({ projectSections }: ProjectSectionsProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        className="p-14 lg:p-40 flex flex-col gap-4 md:gap-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {projectSections.map((section) => (
          <m.div
            key={section.title}
            className="flex flex-col items-center gap-3 md:gap-6 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-medium text-neutral-300">
              {section.title}
            </h2>
            <p className="text-neutral-400 text-center">
              {section.description}
            </p>
            <div className="w-auto sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-auto rounded-lg">
              <Image
                width={1080}
                height={672}
                className="w-full aspect-auto rounded-lg object-cover"
                alt={`Imagem da sessão ${section.title}`}
                src={section.image.url}
                unoptimized
                priority
              />
            </div>
            <HorizontalDivider />
          </m.div>
        ))}
      </m.section>
    </LazyMotion>
  );
};
