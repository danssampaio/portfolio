"use client";


import { TbBrandGithub } from "react-icons/tb";
import { Button } from "../../../button";
import { SectionTitle } from "../../../section-title";
import { TechBadge } from "../../../tech-bagde";
import { FiGlobe } from "react-icons/fi";
import { Link } from "../../../link";
import { HiArrowNarrowLeft } from "react-icons/hi";

export const ProjectDetails = () => {
  return (
    <section
      className="w-full sm:min-h-[750px] flex flex-col items-center justify-end
     relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background:
            "url(/images/hero-bg.png) no-repeat center/cover fixed, url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqN3wWXAui-0ecpu9l47AgL6YCb53cYIqp_Q&s) no-repeat center/cover",
        }}
      />
      <SectionTitle
        subtitle="projetos"
        title="PROEX"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <p className="text-neutral-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        Plataforma informativa para a divulgação de projetos, eventos, notícias
        e ações de extensão universitária, estruturada para oferecer acesso
        rápido a documentos relacionados às certificações e criação de projetos.
        Contribuí para a otimização da experiência do usuário e a organização do
        conteúdo, garantindo uma navegação intuitiva e eficiente.
      </p>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <TechBadge name="HTML" />
        <TechBadge name="CSS" />
        <TechBadge name="Bootstrap" />
        <TechBadge name="PHP" />
        <TechBadge name="Javascript" />
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a
          href="https://github.com/NUCOM-PROEX-UESC/proex_site"
          target="_blank"
        >
          <Button className="max-w-[180px]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </a>
        <a href="https://proex.uesc.br/" target="_blank">
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Página da Aplicação
          </Button>
        </a>
      </div>
      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para Projetos
      </Link>
    </section>
  );
};
