import { IoMdHeart } from "react-icons/io";
import { GiCoffeeCup } from "react-icons/gi";


export const Footer = () => {
  return (
    <footer className="flex items-center justify-center h-14 w-full bg-neutral-800">
      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-neutral-400">
        Made with
        <IoMdHeart className="text-red-600" />
        and
        <GiCoffeeCup className="text-white"/>
        by
        <strong className="font-medium"> Dan Souza </strong>
      </span>
    </footer>
  );
};
