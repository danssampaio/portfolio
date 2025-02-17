"use client";

import { SectionTitle } from "@/app/components/section-title";
import { KnowTech } from "./know-tech";
import { HorizontalDivider } from "@/app/components/divider";
import { KnownTech as IKnownTech} from "@/app/types/projects";

type KnownTechsProps = {
  techs: IKnownTech[];
};


export const KnowTechs = ({ techs }: KnownTechsProps) => {
  return (
    <section className="container">
      <SectionTitle title="Conhecimentos" />
      <HorizontalDivider className="mb-16"/>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-4">
        {techs?.map((tech) => (
          <KnowTech key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  );
};
