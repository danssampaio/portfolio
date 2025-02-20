"use client";

import { RichText } from "@/app/components/rich-text";
import { TechBadge } from "@/app/components/tech-bagde";
import { WorkExperience } from "@/app/types/work-experience";
import { differenceInMonths, differenceInYears, format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import Image from "next/image";
import Link from "next/link";

type ExperienceItemProps = {
  experience: WorkExperience;
};

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const startDate = new Date(experience.startDate);
  const formattedStartDate = format(startDate, "MMM yyyy", { locale: ptBR });
  const formattedEndDate = experience.endDate
    ? format(new Date(experience.endDate), "MMM yyyy", { locale: ptBR })
    : "o momento";

  const end = experience.endDate ? new Date(experience.endDate) : new Date();
  const months = differenceInMonths(end, startDate);
  const years = differenceInYears(end, startDate);
  const monthsRemaining = months % 12;

  const timeWorked =
    years > 0
      ? `${years} ano${years > 1 ? "s" : ""}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? "es" : ""}`
            : ""
        }`
      : `${months} mes${months > 1 ? "es" : ""}`;

  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-neutral-500 p-0.5">
          <Link href={experience.companyUrl} target="_blank">
            <Image
              src={experience.companyLogo.url}
              width={40}
              height={40}
              alt={`Logo da empresa ${experience.companyName}`}
            />
          </Link>
        </div>
        <div className="h-full w-[2px] bg-neutral-600"></div>
      </div>
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            className="text-neutral-500 hover:text-[#1effff] transition-colors"
            href={experience.companyUrl}
            target="_blank"
          >
            @ {experience.companyName}
          </a>
          <h4 className="text-neutral-300">{experience.role}</h4>
          <span className="text-neutral-500">
            {" "}
            {formattedStartDate} • {formattedEndDate} • ({timeWorked})
          </span>
          <div className="text-neutral-400">
            <RichText content={experience.description.raw} />
          </div>
        </div>
        <p className="text-neutral-400 text-sm mb-3 mt-6 font-semibold">
          Tecnologias
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[450px] mb-8">
          {experience.technologies.map((tech) => (
            <TechBadge
              key={`experience-${experience.companyName}-tech-${tech.name}`}
              name={tech.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
