"use client";

import { Curriculum } from "@/app/types/pages-info";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";

type CurriculumProps = {
  curriculums: Curriculum[];
};

export const Dropdown = ({ curriculums }: CurriculumProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <MenuButton className="bg-[#179f91] py-3 px-4 rounded-lg text-neutral-900 flex items-center justify-center gap-2 hover:bg-[#1bc6c6] transition-all disabled:opacity-50">
              Baixar Currículo
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 size-5 text-neutral-900"
              />
            </MenuButton>

            <AnimatePresence>
              {open && (
                <m.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <MenuItems className="flex flex-col absolute outline-none mt-2 w-48 origin-top-right rounded-md text-neutral-900 bg-[#179f91]">
                    <div className="flex flex-col ">
                      {curriculums?.map((curriculum, index) => (
                        <MenuItem key={index}>
                          <a
                            className="transition-colors hover:bg-[#1bc6c6] p-3 rounded-md"
                            href={curriculum.url}
                            key={`contact-${index}`}
                            target="_blank"
                            aria-hidden="true"
                            aria-label={curriculum.ariaLabel}
                            rel="noopener noreferrer"
                            download={true}
                          >
                            {curriculum.name}
                          </a>
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </m.div>
              )}
            </AnimatePresence>
          </>
        )}
      </Menu>
    </LazyMotion>
  );
};
