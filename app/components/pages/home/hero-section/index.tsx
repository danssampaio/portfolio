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

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover-bg-center bg-no-repeat flex flex-col justify-center pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse md:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-[#4894ff] sm:pt-5">
            Olá pessoas, meu nome é{" "}
          </p>
          <h2 className="text-4xl font-medium mt-2">Dan Souza</h2>
          <p className="text-gray-400 text-justify my-6 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            dolore. Autem quasi molestiae laudantium in! Voluptate facilis cum
            reprehenderit obcaecati molestias iste ipsa, quis voluptas, laborum,
            dicta quia ab eius! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ratione neque molestiae debitis explicabo odit
            asperiores temporibus perferendis eos, porro nisi ex dignissimos
            omnis alias officiis fugiat ut quis repudiandae excepturi.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[530px]">
            {Array.from({ length: 12 }).map((_, index) => (
              <TechBadge name="NextJs" />
            ))}
          </div>
          <div className="flex mt-4 lg:mt-10 sm:items-center sm:gap-5 flex-col sm:flex-row ">
            <Button className="w-max">
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
          className="w-[300px] h-[300px] lg:w-[320px] lg:h-[304px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover m-2 "
          width={320}
          height={304}
          src="/images/profile-pic.jpg"
          alt="Minha Foto"
        />
      </div>
    </section>
  );
};
