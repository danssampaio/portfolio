"use client";

import { Link } from "@/app/components/link";
import { SectionTitle } from "@/app/components/section-title";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";

const PageIntroduction = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        className="flex flex-col mt-16 items-center justify-center px-2 w-full h-[450px] lg:h-[630px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle
          className="text-center items-center [&>h3]:text-4xl"
          title="Meus Projetos"
        />
        <div className="flex flex-col items-center">
          <p className="text-neutral-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
            Aqui você encontrará alguns projetos em que atuei nos últimos anos.
            Cada um deles é um marco da minha jornada profissional, desde o
            início de minhas explorações com desenvolvimento front-end até a
            construção de soluções completas em back-end.
            <br />
            Alguns projetos em que atuei não estarão aqui, por questão de
            armazenamento em outras plataformas a quais não tenho acesso, ou já
            não estão mais em uso, pois foram criados para se utilizar somente
            uma ocasião específica.
          </p>
          <Link href="/">
            <HiArrowNarrowLeft />
            Voltar para Home
          </Link>
        </div>
      </m.section>
    </LazyMotion>
  );
};

export default PageIntroduction;