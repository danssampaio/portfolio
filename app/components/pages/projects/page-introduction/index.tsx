"use client";

import { Link } from "@/app/components/link";
import { SectionTitle } from "@/app/components/section-title";
import { HiArrowNarrowLeft } from "react-icons/hi";

export const PageIntroduction = () => {
  return (
    <section className="flex flex-col items-center justify-center px-2 w-full h-[450px] lg:h-[630px] bg-hero-iamge bg-cover">
      <SectionTitle
        className="text-center items-center [&>h3]:text-4xl"
        title="Meus Projetos"
      />
      <div className="flex flex-col items-center">
        <p className="text-neutral-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Aqui você encontrará uma seleção dos meus projetos. Cada um deles reflete minha jornada
          de aprendizado, experimentação, trabalho e aprimoramento contínuo. Sinta-se à
          vontade para explorar e conhecer mais sobre meu trabalho.
        </p>
        <Link href="/">
          <HiArrowNarrowLeft />
          Voltar para Home
        </Link>
      </div>
    </section>
  );
};
