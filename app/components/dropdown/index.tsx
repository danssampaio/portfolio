import { Curriculum } from "@/app/types/pages-info";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

type CurriculumProps = {
  curriculums: Curriculum[];
};

export const Dropdown = ({ curriculums }: CurriculumProps) => {
  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="bg-[#179f91] py-3 px-4 rounded-lg text-neutral-900 flex items-center justify-center gap-2 hover:bg-[#1bc6c6] transition-all disabled:opacity-50">
        Baixar Currículo
        <ChevronDownIcon
          aria-hidden="true"
          className="-mr-1 size-5 text-neutral-900"
        />
      </MenuButton>

      <MenuItems className="absolute outline-none mt-2 w-56 origin-top-right rounded-md text-neutral-900 bg-[#1bc6c6]">
        <div className="flex flex-col py-1 ">
          {curriculums?.map((curriculum, index) => (
            <MenuItem key={index}>
              <a
                className="transition-colors hover:bg-[#179f91] p-2"
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
    </Menu>
  );
};
