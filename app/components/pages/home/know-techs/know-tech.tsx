"use client";


import { getRelativeTimeString } from "@/app/utils/get-relative-time";
import { ReactNode, useEffect, useState } from "react";

type KnowTechProps = {
  tech: {
    icon: ReactNode;
    name: string;
    startDate: string;
  };
};

export const KnowTech = ({ tech }: KnowTechProps) => {
  const [relativeTime, setRelativeTime] = useState("");

  useEffect(() => {
    setRelativeTime(
      getRelativeTimeString(new Date(tech.startDate), "pt-BR")?.replace(
        "há ",
        ""
      )
    );
  }, [tech.startDate]);

  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-[#4894ff] hover:bg-gray-600/40 transition-all ">
      <div className="flex items-center justify-between ">
        <p className="font-medium">{tech.name}</p>
        {tech.icon}
      </div>
      <span>
        {relativeTime ? `${relativeTime} de experiência` : "Carregando..."}
      </span>
    </div>
  );
};
