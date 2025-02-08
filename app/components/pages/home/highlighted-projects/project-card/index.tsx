"use client";

import { TechBadge } from "@/app/components/tech-bagde";
import Image from "next/image";
import { Link } from "@/app/components/link";
import { HiArrowNarrowRight } from "react-icons/hi";

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          alt="thumbnail do site da pró-reitoria de extensão uesc"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqN3wWXAui-0ecpu9l47AgL6YCb53cYIqp_Q&s"
          width={320}
          height={304}
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-neutral-50">
          <Image
            src="/images/logo.svg"
            alt="Logo Dan Souza"
            width={0}
            height={0}
            style={{ width: "35px", height: "35px" }}
          />
          Site Pró-Reitoria de Extensão da Universidade Estadual de Santa Cruz
        </h3>
        <p className="text-neutral-400 my-6">
          Plataforma informativa para a divulgação de projetos, eventos,
          notícias e ações de extensão universitária, estruturada para oferecer
          acesso rápido a documentos relacionados às certificações e criação de
          projetos. Contribuí para a otimização da experiência do usuário e a
          organização do conteúdo, garantindo uma navegação intuitiva e
          eficiente.
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[800px]">
          <TechBadge name="HTML" />
          <TechBadge name="CSS" />
          <TechBadge name="Bootstrap" />
          <TechBadge name="Javascript" />
          <TechBadge name="PHP" />
        </div>
        <Link href="/projects/proex-uesc">
          Ver Projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};
