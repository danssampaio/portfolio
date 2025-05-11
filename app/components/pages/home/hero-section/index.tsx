"use client";

import { Button } from "@/app/components/button";
import { CMSIcon } from "@/app/components/cms-icon";
import { RichText } from "@/app/components/rich-text";
import { TechBadge } from "@/app/components/tech-bagde";
import { HomePageInfo } from "@/app/types/pages-info";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";

type HomeSectionProps = {
  homeInfo: HomePageInfo;
};

const HeroSection = ({ homeInfo }: HomeSectionProps) => {
  const HandleContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [typedText, setTypedText] = useState("");
  const [typedName, setTypedName] = useState("");

  const fullText = "Olá, meu nome é";
  const fullName = "Darley Souza Sampaio";

  useEffect(() => {
    let currentFullTextIndex = 0;
    let currentFullNameIndex = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, currentFullTextIndex + 1));
      setTypedName(fullName.slice(0, currentFullNameIndex + 1));
      currentFullTextIndex++;
      currentFullNameIndex++;
      if (
        currentFullTextIndex === fullText.length &&
        currentFullNameIndex === fullName.length
      )
        clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full lg:h-[700px] flex flex-col justify-center pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <LazyMotion features={domAnimation}>
        <m.div
          className="container flex items-center justify-center gap-40 flex-col lg:gap-40 lg:flex-row"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          viewport={{once:true}}
        >
          <m.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            whileHover={{
              scale: 1.1,
            }}
          >
            <Image
              className="w-[350px] h-[350px] lg:w-[350px] lg:h-[350px] mb-6 lg:mb-0 mt-12 rounded-full object-cover m-2 "
              width={350}
              height={350}
              priority
              src={homeInfo.profilePicture.url}
              alt="Minha Foto"
            />
          </m.div>
          <div className="w-full lg:max-w-[730px] flex flex-col ">
            <m.p
              className="font-mono text-[#1effff] sm:pt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {typedText}
            </m.p>
            {}
            <m.h2
              className="text-4xl font-medium mt-2 delay-[3000]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {typedName}
            </m.h2>
            <m.div
              className="text-gray-400 text-justify my-6 text-sm sm:text-base"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.8,
                delay: 1,
              }}
            >
              <RichText content={homeInfo.introduction.raw} />
            </m.div>
            <m.div
              className="flex flex-wrap justify-start gap-x-2 gap-y-3 lg:max-w-[530px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.8,
                delay: 1.5,
              }}
            >
              {homeInfo.technologies.map((tech, index) => (
                <TechBadge key={index} name={tech.name} />
              ))}
            </m.div>
            <m.div
              className="flex gap-3 mt-4 lg:mt-10 lg:items-start sm:gap-5 flex-col sm:flex-row"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.8,
                delay: 2,
              }}
            >
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
            </m.div>
          </div>
        </m.div>
      </LazyMotion>
    </section>
  );
};

export default HeroSection;