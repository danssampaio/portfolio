"use client";

import { SectionTitle } from "@/app/components/section-title";
import { KnowTech } from "./know-tech";
import { HorizontalDivider } from "@/app/components/divider";
import { KnownTech as IKnownTech } from "@/app/types/projects";
import { motion } from "motion/react";

type KnownTechsProps = {
  techs: IKnownTech[];
};

export const KnowTechs = ({ techs }: KnownTechsProps) => {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="text-gray-400 text-justify my-6 text-sm sm:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
      >
        <SectionTitle title="Conhecimentos" />
      </motion.div>
      <HorizontalDivider className="mb-16" />

      <motion.div className="grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-4">
        {techs?.map((tech) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
          >
            <KnowTech tech={tech} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
