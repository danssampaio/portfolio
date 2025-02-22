"use client";

import { CMSIcon } from "@/app/components/cms-icon";
import { KnownTech as IKnownTech } from "@/app/types/projects";
import Link from "next/link";

type KnowTechProps = {
  tech: IKnownTech;
};

export const KnowTech = ({ tech }: KnowTechProps) => {
  return (
    <Link
      className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-[#1effff] hover:bg-gray-600/40 transition-all "
      href={`${tech.techUrl}`}
      target="_blank"
    >
      <div className="flex items-center justify-between ">
        <p className="font-medium">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>
{/*       <span>{tech.experienceTime ?? "Carregando..."}</span> */}
    </Link>
  );
};
