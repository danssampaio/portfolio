"use client";

import { Button } from "@/app/components/button";
import { CMSIcon } from "@/app/components/cms-icon";
import { RichText } from "@/app/components/rich-text";
import { TechBadge } from "@/app/components/tech-bagde";
import { HomePageInfo } from "@/app/types/pages-info";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

type HomeSectionProps = {
  homeInfo: HomePageInfo;
};

export const HeroSection = ({ homeInfo }: HomeSectionProps) => {
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
            Olá pessoas, meu nome é
          </p>
          <h2 className="text-4xl font-medium mt-2">Darley(Dan) Souza</h2>
          <div className="text-gray-400 text-justify my-6 text-sm sm:text-base">
            <RichText content={homeInfo.introduction.raw} />
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[530px]">
            {homeInfo.technologies.map((tech, index) => (
              <TechBadge key={index} name={tech.name} />
            ))}
          </div>
          <div className="flex gap-3 mt-4 lg:mt-10 lg:items-start sm:gap-5 flex-col sm:flex-row ">
            <Button onClick={HandleContact} className="w-max">
              Mande uma mensagem
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="flex w-fit items-center h-12 gap-3 text-gray-600 rounded-lg bg-[#179f91] px-4 py-3">
              <span className="text-gray-50">Siga-me nas redes sociais:</span>
              {homeInfo.socials.map((contact, index) => (
                <a
                  className="text-neutral-100 hover:text-neutral-700 transition-colors"
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CMSIcon icon={contact.iconSvg} />
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
          src={homeInfo.profilePicture.url}
          alt="Minha Foto"
        />
      </div>
    </section>
  );
};
