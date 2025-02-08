"use client";

import Image from "next/image";

const sections = [
  {
    title: "Login",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqN3wWXAui-0ecpu9l47AgL6YCb53cYIqp_Q&s",
  },
  {
    title: "Home",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqN3wWXAui-0ecpu9l47AgL6YCb53cYIqp_Q&s",
  },
];

export const ProjectSections = () => {
  return (
    <section className="container grid grid-cols-1 my-12 md:my-32 gap-4 md:gap-16 lg:grid-cols-2">
      {sections.map((section) => (
        <div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-neutral-300">
            {section.title}
          </h2>
          <Image
            src={section.image}
            alt={`Imagem da sessão ${section.title}`}
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover"
            unoptimized
          />
        </div>
      ))}
    </section>
  );
};
