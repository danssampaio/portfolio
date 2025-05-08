"use client";

import { SectionTitle } from "@/app/components/section-title";
import { ExperienceItem } from "./experience-item";
import { WorkExperience as IWorkExperience } from "@/app/types/work-experience";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";

type WorkExperienceProps = {
  experiences: IWorkExperience[];
};
const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        className="container flex flex-col md:flex-row py-16 gap-10 md:gap-4 lg:gap-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-[420px]">
          <SectionTitle title="Experiência Profissional" />
          <p className="text-neutral-400 mt-6 text-justify">
            Sou um desenvolvedor full stack com maior experiência (e
            preferência) no frontend, tendo atuado em projetos institucionais,
            acadêmicos e corporativos. Já trabalhei com desenvolvimento de
            interfaces, integração com APIs RESTful e modelagem de banco de
            dados. Possuo conhecimentos em tecnologias como HTML, CSS,
            JavaScript, TypeScript, Angular, Java e Spring, além de experiência
            com metodologias ágeis como Scrum e Kanban. Meu foco é desenvolver
            soluções eficientes e escaláveis, contribuindo para a otimização de
            processos e aprimoramento da experiência do usuário.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {experiences?.map((experience) => (
            <m.div
              key={experience.companyName}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <ExperienceItem experience={experience} />
            </m.div>
          ))}
        </div>
      </m.section>
    </LazyMotion>
  );
};

export default WorkExperience;