"use client";

import { SectionTitle } from "@/app/components/section-title";
import { KnowTech } from "./know-tech";
import { technologies } from "@/app/components/pages/home/know-techs/technologies";
import { HorizontalDivider } from "@/app/components/divider";

export const KnowTechs = () => {
  return (
    <section className="container">
      <SectionTitle subtitle="competências" title="Conhecimentos" />
      <HorizontalDivider className="mb-16"/>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-4">
        {technologies.map((tech, index) => (
          <KnowTech key={index} tech={tech} />
        ))}
      </div>
    </section>
  );
};
