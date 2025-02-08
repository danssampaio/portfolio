"use client";

import { Button } from "@/app/components/buton";
import { TechBadge } from "@/app/components/tech-bagde";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { LuMail } from "react-icons/lu";
import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandLinkedin,
} from "react-icons/tb";

const CONTACTS = [
  {
    url: "https://github.com/danssampaio",
    icon: TbBrandGithub,
  },
  {
    url: "https://www.instagram.com/dan.souza_s/",
    icon: TbBrandInstagram,
  },
  {
    url: "https://www.linkedin.com/in/dan-souza-sampaio-046170193/",
    icon: TbBrandLinkedin,
  },
  {
    url: "mailto:dan.souza.swork@gmail.com",
    icon: LuMail,
  },
];

const TECHNOLOGIES = [
  "HTML",
  "CSS",
  "Angular",
  "Typescript",
  "NodeJs",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "MySQL",
];

export const HeroSection = () => {
  const HandleContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full lg:h-[755px] flex flex-col justify-center pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse md:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-[#1effff] sm:pt-5">
            Olá pessoas, meu nome é{" "}
          </p>
          <h2 className="text-4xl font-medium mt-2">Dan Souza</h2>
          <p className="text-gray-400 text-justify my-6 text-sm sm:text-base">
            Sou desenvolvedor web full stack, com foco no front-end, apaixonado
            por criar interfaces intuitivas, funcionais e acessíveis. Formado em
            Ciência da Computação, tenho experiência em desenvolvimento de
            aplicações responsivas e interativas, sempre buscando a melhor
            experiência para o usuário. Comunicativo e proativo, gosto de
            transformar ideias em soluções eficientes e visualmente atraentes.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[530px]">
            {TECHNOLOGIES.map((tech, index) => (
              <TechBadge key={index} name={tech} />
            ))}
          </div>
          <div className="flex mt-4 lg:mt-10 sm:items-center sm:gap-5 flex-col sm:flex-row ">
            <Button onClick={HandleContact} className="w-max">
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="flex items-center ms-2 h-20 gap-3 text-gray-600 justify-center">
              {CONTACTS.map((contact, index) => (
                <a
                  className="hover:text-gray-100 transition-colors"
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <contact.icon size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl mt-12 rounded-lg object-cover m-2 "
          width={320}
          height={304}
          priority
          src="/images/profile-pic.jpg"
          alt="Minha Foto"
        />
      </div>
    </section>
  );
};
