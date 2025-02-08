"use client";

import { TechBadge } from "@/app/components/tech-bagde";
import Image from "next/image";

export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-neutral-500 p-0.5">
          <Image
            src="/images/proex-logo.png"
            width={40}
            height={40}
            alt="proex logo"
          />
        </div>
        <div className="h-full w-[1px] bg-neutral-600"></div>
      </div>
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            className="text-neutral-500 hover:text-[#4894ff] transition-colors"
            href="proex.uesc.br"
            target="_blank"
          >
            @ PROEX
          </a>
          <h4 className="text-neutral-300">Desenvolvedor Web</h4>
          <span className="text-neutral-500">
            {" "}
            nov 2019 • ago 2023 • (3 anos e 10 meses)
          </span>
          <p className="text-neutral-400">
            Desenvolvimento e atualização do site da Pró-Reitoria de Extensão da
            Universidade Estadual de Santa Cruz e atuação na atualização do banco de
            dados do sistema de gerenciamento de extensão(SIEX).
          </p>
        </div>
        <p className="text-neutral-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[450px] mb-8">
          <TechBadge name="HTML" />
          <TechBadge name="CSS" />
          <TechBadge name="Bootstrap" />
          <TechBadge name="Javascript" />
          <TechBadge name="PHP" />
          <TechBadge name="SQL Server 2008" />
        </div>
      </div>
    </div>
  );
};
