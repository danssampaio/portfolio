"use client";

import { Link } from "@/app/components/link";
import { SectionTitle } from "@/app/components/section-title";
import { HiArrowNarrowLeft } from "react-icons/hi";

export const PageIntroduction = () => {
  return (
    <section className="flex flex-col items-center justify-center px-2 w-full h-[450px] lg:h-[630px] bg-hero-iamge bg-cover">
      <SectionTitle
        className="text-center items-center [&>h3]:text-4xl"
        subtitle="projects"
        title="Meus Projetos"
      />
      <div className="flex flex-col items-center">
        <p className="text-neutral-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          fugiat quisquam optio dicta accusamus officiis consequatur mollitia
          ipsa ipsam natus? Consequatur id debitis maxime praesentium delectus
          nulla nihil voluptate deserunt.
        </p>
        <Link href="/">
            <HiArrowNarrowLeft/>
            Voltar para Home        
        </Link>
      </div>
    </section>
  );
};
