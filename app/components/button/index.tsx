import { cn } from "@/app/lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-[#179f91] py-3 px-4 rounded-lg text-neutral-900 flex items-center justify-center gap-2 hover:bg-[#1bc6c6] transition-all disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
